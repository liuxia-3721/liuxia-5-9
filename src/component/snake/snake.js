import React from "react"
import Store from "../store/store"
import { arrayExpression } from "@babel/types";

export default class Snake extends React.Component{
    render(){
        return (
            <>
                <div className="snake" ref="map"></div>
                
            </>
        )
    }

    componentDidMount(){
        // let snake = document.querySelectorAll(".snake")

        // for(let i=0;i<Store.arr.length;i++){
        //     snake[i].style.position= "absolute"
        //     snake[i].style.width= "40px"
        //     snake[i].style.height= "40px"
        //     snake[i].style.background= "#00f"
        //     snake[i].style.left = Store.arr[i].x * 40 +"px"
        //     snake[i].style.top = Store.arr[i].y * 40 +"px"
        // }
        // console.log(snake)  
            for(var i=0;i<Store.arr.length;i++){
                console.log(1)
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

    }

}
// export default class MyComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       Store.myRef = React.createRef(); //告诉react 要创建一个dom元素/类组件

//     }
//     render() {
//       return    (
//             <div>
//                 {/* <div ref={Store.myRef} /> */}
//                 <input type="text" ref={Store.myRef} />
//                 <button onClick={Store.fun.bind(Store)}></button>
//             </div>
//             )
//     }
//     fun(){
//         Store.myRef.current.focus();
//     }
//     componentDidMount(){
//         console.log(Store.myRef.current)
//     }
//   }