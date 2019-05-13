import React from "react"
import "./app.css"
import {observer} from "mobx-react"

import Store from "../store/store"
import Food from "../food/food"
import Snake from "../snake/snake"

@observer
 class App extends React.Component{
    render(){
        return (
            <div id="map">
               {Store.direct}
                <Food/>
                <Snake/>
            </div>
        )
    }
} 
export default App