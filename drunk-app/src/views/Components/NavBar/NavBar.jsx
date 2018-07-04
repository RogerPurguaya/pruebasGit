import React, { Component } from 'react';
import ToolBar from "../ToolBar/ToolBar.jsx"
import TabsMenu from "../TabsMenu/TabsMenu.jsx"

export default class NavBar  extends Component{
   state = {
    //tus estados
   }

    render(){
        return(<div>
            <ToolBar />
            <TabsMenu />
        </div>)
    }


}

