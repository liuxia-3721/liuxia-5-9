
yimport React from "react"
import {Route,Redirect,Switch} from 'react-router-dom'
import Home from "./home"
import Detail from "./detail"
import User from "./user"
import Loading from "./loading/loading"
import boolean from "../store/store"
import {observer} from "mobx-react" ;

// class App extends React.Component{
    
//     render(){
//         return(
//             <div>
//                 {boolean.load&&<Loading/>}
                
//                 <Switch>
//                     <Route path="/home" component={Home}/>
//                     <Redirect exact from="/" to="/home" />

//                     <Route path="/user" component={User}/>
//                     <Route path="/detail" component={Detail}/>
//                 </Switch>
//             </div>
//         )
//     }
// }
class App extends React.Component{
    
    render(){
        return(
            <div>
                123
            </div>
        )
    }
}
export default observer(App);