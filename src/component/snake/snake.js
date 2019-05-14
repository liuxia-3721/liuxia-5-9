import React from "react"
import Store from "../store/store"
import {observer} from "mobx-react"
@observer 
class Snake extends React.Component{
    render(){
        return (
            <>
                <div className="snake" ref="map" style={{background:"red"}}>
                    {Store.testing&&document.write("gg")}
                </div>
            </>
        )
    }
    fun(){                                  //创建蛇
        for(var i=0;i<Store.arr.length;i++){
            if(!Store.arr[i].ele){
                Store.arr[i].ele=document.createElement("div");
                Store.arr[i].ele.style.width=40+"px";
                Store.arr[i].ele.style.height=40+"px";
                Store.arr[i].ele.style.position="absolute"; 
            }
                Store.arr[i].ele.style.left=Store.arr[i].x*40+"px";
                Store.arr[i].ele.style.top=Store.arr[i].y*40+"px";
                Store.arr[i].ele.style.background=Store.arr[i].c;
                this.refs.map.appendChild(Store.arr[i].ele);
        }
        setTimeout(function(){
        Store.move() ;  
        this.fun()  ;
        if(!Store.a){
            // console.log("缓缓")
            Store.random()
            Store.add2()
            Store.add3()
        } 
        }.bind(this),200)
    }
    componentDidMount(){
        this.fun() ;
        document.onkeydown=function(eve){
            var e = eve || window.event ;
            var c = e.keyCode || e.which
            Store.change(c)
        }

    }
}
export default  Snake