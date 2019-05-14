import React from "react"
import Store from "../store/store"
import { observer } from "mobx-react"

@observer
class Score extends React.Component{
    render(){
        return (
            <div>
                <b>得分：</b>
                <i>{Store.score}</i>
            </div>
        )
    }
} 

export default Score