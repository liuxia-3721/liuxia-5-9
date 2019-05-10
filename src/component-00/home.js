import React from "react"
import {Link} from "react-router-dom";
export default class Home extends React.Component{

    render(){
        return(
            <div>
                主页部分
                <ul>
                    <li><Link to="/detail">详情页</Link></li>
                    <li><Link to="/user">用户页面s</Link></li>
                </ul>
            </div>
        )
    }
}