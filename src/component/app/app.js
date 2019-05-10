import React from "react"
import "./app.css"

import Store from "../store/store"
import Food from "../food/food"
import Snake from "../snake/snake"
export default class App extends React.Component{
    render(){
        return (
            <div id="map">
                <Food/>
                <Snake/>
            </div>
        )
    }
    componentDidMount(){
        document.onkeydown=function(){
            console.log(1)
        }
    }
} 