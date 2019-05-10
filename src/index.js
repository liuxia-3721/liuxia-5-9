// const mobx = require("mobx");
// const { observable, autorun, computed, extendObservable, action } = mobx;
import React from "react"
import ReactDOM from "react-dom"

import App from "./component/app/app"
import {BrowserRouter,Route} from 'react-router-dom' //引用路由
import "./base/base.css"

// ReactDOM.render(
//     <BrowserRouter>
//         <Route component={App}/>
//     </BrowserRouter>,
//     document.querySelector("#root")
// )
ReactDOM.render(
    <App/>,
    document.getElementById("root")
)


// Promise.resolve(
//     new Promise((resolve,reject) => {
//         console.log('inner Promise');
//         resolve('123');
//     }).then(data=>{
//         console.log(1,typeof(data), data);
//         return data+'4';
//     })
// ).then(data=>{
//     return Promise.resolve('Randy'+data);
// }).then(data=>{
//     console.log(2,typeof(data), data)
// });


// const { observable, autorun, computed } = Mobx;
// var numbers = observable([1, 2, 3]);
// autorun(() => console.log(numbers.length));
// // 输出 '3'
// numbers.push(4);           
// // 输出 '4'
// numbers[0] = 0;
// // 输出 '4'

// const Mobx = require("mobx");
// const { observable, autorun, computed } = Mobx;
// var numbers = observable([1, 2, 3]);
// var sum = computed(() => numbers.length);
// autorun(() => console.log(sum.get()));
// // 输出 '3'
// numbers.push(4);
// // 输出 '4'
// numbers[0] = 1;

// const { observable, autorun, computed, extendObservable, action } = Mobx;
// class Store {
//   @observable a = 123;

//   @action
//   changeA() {
//     this.a = 0;
//     setTimeout(this.changeB, 1000);
//   }
//   @action.bound
//   changeB() {
//     this.a = 1000;
//   }
// }
// var s = new Store();
// autorun(() => console.log(s.a));
// s.changeA();

// const Mobx = require("mobx");
// Mobx.configure({ enforceActions: true });
// const { observable, autorun, computed, extendObservable, action } = Mobx;
// class Store {
//   @observable a = 123;
//   @action
//   changeA() {
//     this.a = 0;
//     setTimeout(action('changeB',()=>{
//       this.a = 1000;
//     }), 1000);
//   }
// }
// var s = new Store();
// autorun(() => console.log(s.a));
// s.changeA();

// const Mobx = require("mobx");
// const { observable, autorun } = Mobx;
// let ob = observable({ a: 1, b: 1 });
// autorun(() => {
//   if(ob.c){
//     console.log("ob.c:", ob.c);
//   }
// });
// ob.c = 1
// ob.c = 2
// ob.c = ""

// const Mobx = require("mobx");
// const { observable, autorun ,computed } = Mobx;
// let ob = observable({ a: 1, b: 1 });
// let x = 0;
// autorun(() => {
//   if(x == 1){
//     console.log("ob.c:", ob.b);
//   }
// });
// x = 1;
// ob.b = 2;

// const number = observable(10);
// const plus = computed(() => number.get() > 0);

// autorun(() => {
//   console.log(plus.get());
// });

// number.set(-19);
// number.set(-1);
// number.set(1);
// useStrict(true); 
// import {observable, action,configure} from 'mobx';

// configure({enforceActions: 'observed'})
// class Store {
//   @observable number = 0;
//   @action add = () => {
//     this.number++;
//   }
// }

// const newStore = new Store();
// newStore.add();
// console.log(newStore.number)