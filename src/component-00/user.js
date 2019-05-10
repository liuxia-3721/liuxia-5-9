import React from "react"
import "./user.css"
export default class Ueer extends React.Component{

    render(){
        let {history} = this.props
        return(
            <div>
                <span className="iconfont"> &#xe633;</span>
                <b>这里用户页面</b>
                <i onClick={
                    ()=>{
                        history.go(-1)
                    }
                }>点击返回到主页</i>
            </div>
        )
    }
}