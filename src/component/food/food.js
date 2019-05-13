import React from "react"
import Store from "../store/store"
import {observer} from "mobx-react"

@observer
class Food extends React.Component{
    render(){
        return(
            <div style={{
                width:"40px",height:"40px",background:"red",position:"absolute",
                left:`${Store.obj.x*40}px`,
                right:`${Store.obj.y*40}px`
            }} ref="food">
            </div>
        )
    }
    componentDidMount(){
        Store.random()
        this.refs.food.style.left=Store.obj.x  *  this.refs.food.offsetWidth + "px"
        this.refs.food.style.top=Store.obj.y  *  this.refs.food.offsetWidth + "px"
    }
}
export default Food 