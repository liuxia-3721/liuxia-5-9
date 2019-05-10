import React from "react"

export default class Food extends React.Component{
    constructor(){
        super()
        this.state={
            x:3,
            y:5
        }
    }
    render(){
        return(
            <div style={{
                width:"40px",height:"40px",background:"red",position:"absolute",
                left:`${this.state.x * 40}px `,
                top:`${this.state.y * 40}px `,
            }} ref="food">
            </div>
        )
    }
    componentDidMount(){

        setInterval(()=>{
            this.setState({
                x:Math.round(Math.random()*19),
                y:Math.round(Math.random()*9)
            })
        },1000)
        // this.refs.food.style.left=this.state.x  *  this.refs.food.offsetWidth + "px"
        // this.refs.food.style.top=this.state.y  *  this.refs.food.offsetWidth + "px"
    }
}