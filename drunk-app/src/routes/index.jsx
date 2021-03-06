import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";

import Componentes from "views/Componentes/Components.jsx";
import Drunkapp from "views/Drunkapp/Drunkapp.jsx";
import Galeria from "views/Galeria/Galeria.jsx";
import Promociones from "views/Promociones/Promociones.jsx";
import Servicios from "views/Servicios/Servicios.jsx";
import Locales from "views/Locales/Locales.jsx";
import Contacto from "views/Contacto/Contacto.jsx";
import Detalles from "../views/Detalles/Detalles.jsx"
import Stepper from "../views/Stepper/Stepper.jsx"
import Principal from "../views/Detalles/Principal.jsx"

var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/components", name: "Components", component: Components },
  { path: "/detalles", name: "Detalles", component: Detalles},
  { path: "/stepper", name: "Stepper", component: Stepper},
  { path: "/principal", name: "Principal", component: Principal},
  { path: "/drunk-app", name: "Drunkapp", component: Drunkapp},
  { path: "/galeria", name: "Galeria", component: Galeria},
  { path: "/promociones", name: "Promociones", component: Promociones},
  { path: "/servicios", name: "Servicios", component: Servicios},
  { path: "/", name: "Locales", component: Locales},
  { path: "/contacto", name: "Contacto", component: Contacto},
  { path: "/Componentes", name: "Componentes", component: Componentes}
];

export default indexRoutes;
