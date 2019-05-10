import React from "react"
import boolean from "../store/store"
import {observer} from "mobx-react"
import Loading from "./loading/loading"

// @observe
class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:""
        }
    }
    render(){
        let {history} = this.props
        return(
            <div>

                <i onClick={
                    ()=>{
                        history.go(-1)
                    }
                } style={{color:"red"}}>点击返回到主页</i>
                <p onClick={this.fun.bind(this)}>点击获得详情页的信息</p>
                <h3>
                    {this.state.msg}
                </h3>
            </div>
        )
    }
    fun(){
        boolean.changeA()
        console.log(boolean.load)
        setTimeout(
            ()=>{
                this.setState({
                    msg:"哈哈哈哈，上当了把"
                })
            boolean.changeA()
            console.log(boolean.load)
            },1000
        )
    }
}
export default  Detail 