# -*- encoding: utf-8 -*-
from odoo import models, fields, api , exceptions
from odoo.exceptions import UserError
import base64
from datetime import datetime
from functools import reduce

class MultipaymentInvoice(models.Model):
	_name='multipayment.invoice'

	name = fields.Char('Nro. Canje')
	partner_id = fields.Many2one('res.partner','Partner')
	payment_date = fields.Date('Fecha de pago')
	glosa = fields.Char('Glosa')
	nro_operation = fields.Char(u'Nro Operación Caja')
	journal_id = fields.Many2one('account.journal','Diario')
	invoice_ids = fields.One2many('multipayment.invoice.line','main_id','Facturas')
	#asiento = fields.Many2one('account.move','Asiento Contable')
	state = fields.Selection([('draft','Borrador'),('done','Finalizado')],'Estado',default='draft')
	type_invoices = fields.Selection([('customer','Cobranza Cliente'),('supplier','Pago Proveedor')],'Tipo',default="customer")
	ammount_total = fields.Float('MontoTotal',digits=(12,2))
	
	def _get_exchange_type(self):
		now = datetime.now().date()
		exchange = self.env['res.currency.rate'].search([('name','=',now)])
		try:
			return exchange[0].type_sale
		except IndexError as e:
			return 0
	
	exchange_type = fields.Float('Tipo de cambio',default=_get_exchange_type)
	unbalance_ammount = fields.Float(string='Monto Desbalance')
	custom_exchange = fields.Boolean(string='Tipo de cambio Personalizado?')

	@api.multi
	def calculate(self):
		if len(self.invoice_ids) > 0:
			self.ammount_total = reduce(lambda x,y: x+y,self.invoice_ids.mapped('amount_cc'))

	@api.multi
	def refresh_lines(self):
		self.invoice_ids.refresh()

class MultipaymentInvoiceLine(models.Model):
	_name = 'multipayment.invoice.line'

	main_id    = fields.Many2one('multipayment.invoice')
	invoice_id = fields.Many2one('account.invoice','Factura')
	doc_type   = fields.Many2one(related='invoice_id.it_type_document')
	currency_id = fields.Many2one(related='invoice_id.currency_id',string='Moneda')
	invoice_number = fields.Char(related='invoice_id.number')
	rest = fields.Float(string='Saldo MN',compute='_get_rest')
	rest_ext  = fields.Float('Saldo ME',digits=(12,2),compute="_get_rest_ext")
	amount_cc = fields.Float('Monto Moneda Caja',digits=(12,2))
	amount_ci = fields.Float('MM Fac.',digits=(12,2),compute="_get_amount_ci")
	account_id = fields.Many2one(related='invoice_id.account_id')
	account_code = fields.Char(related='invoice_id.account_id.code')


	@api.onchange('amount_cc')
	def _onchange_amount_cc(self):
		if self.currency_id.name == 'PEN':
			if self.amount_cc > self.rest:
				raise UserError('La cantidad ingresada debe ser inferior o igual al saldo: '+self.currency_id.symbol+str(self.rest))
		else:
			if self.amount_cc > self.rest_ext:
				raise UserError('La cantidad ingresada debe ser inferior o igual al saldo en Moneda Extranjera: '+self.currency_id.symbol+str(self.rest_ext))

	@api.depends('currency_id','invoice_id')
	def _get_rest_ext(self):
		for rec in self:
			if rec.currency_id.name == 'PEN':
				rec.rest_ext = 0
			else:
				rec.rest_ext = rec.invoice_id.residual_signed
	

	@api.depends('currency_id','invoice_id')
	def _get_rest(self):
		for rec in self:
			if rec.currency_id.name == 'PEN':
				rec.rest = rec.invoice_id.residual
			else:
				rec.rest = rec.invoice_id.residual_company_signed
	
	@api.depends('amount_cc','main_id','currency_id')
	def _get_amount_ci(self):
		for rec in self:
			if rec.currency_id.name == rec.main_id.journal_id.currency_id.name:
				rec.amount_ci = rec.amount_cc
			else:
				if rec.main_id.journal_id.currency_id.name == 'PEN':
					rec.amount_ci = rec.amount_cc
				else:
					try:
						rec.amount_ci = rec.amount_cc / rec.main_id.exchange_type
					except ZeroDivisionError as e:
						rec.amount_ci = 0
	 

	@api.constrains('amount_cc')
	def _verify_amount_cc(self):
		if self.currency_id.name == 'PEN':
			if self.amount_cc > self.rest or self.amount_cc <= 0:
				raise UserError('La cantidad ingresada en la factura "'+self.invoice_number+u'" es inválida')
		else:
			if self.amount_cc > self.rest_ext or self.amount_cc <= 0:
				raise UserError('La cantidad ingresada en la factura "'+self.invoice_number+u'" es inválida')
	
	#divisa = fields.Many2one('res.currency','Divisa')
	# monto_divisa = fields.Float('Monto Divisa',digits=(12,2))
	#tipo_cambio = fields.Float('Tipo de Cambio',digits=(12,3),compute="get_tipo_cambio")
	#letra_payment_id = fields.Many2one('account.letras.payment','Pago')
	# cuenta = fields.Many2one('account.account','Cuenta Contable')
