import React from "react"
import "./loading.css"

export default class Loading extends React.Component{

    render(){
        return(
            <div className="spinner">
                <div className="cube1"></div>
                <div className="cube2"></div>
            </div>
        )
    }
}