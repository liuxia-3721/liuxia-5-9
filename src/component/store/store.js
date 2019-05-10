const mobx = require("mobx") 
const {observable,action} = mobx 
mobx.configure({enforceActions:true})
class Store{
    @observable arr = [{x:3,y:4,c:"red"},{x:3,y:5,c:"black"},{x:3,y:6,c:"pink"}] ;
    @observable direct ="right";

    // @action create = ()=>{
    //     for(var i=0;i<this.arr.length;i++){

    //         if(!this.arr[i].ele){

    //             this.arr[i].ele=div=document.createElement("div");
    //             this.arr[i].ele.style.width=this.w+"px";
    //             this.arr[i].ele.style.height=this.h+"px";
    //             this.arr[i].ele.style.position="absolute"; 
    //         }
    //             this.arr[i].ele.style.left=this.arr[i].x*this.w+"px";
    //             this.arr[i].ele.style.top=this.arr[i].y*this.h+"px";
    //             this.arr[i].ele.style.background=this.arr[i].c;
    //             maP.map.appendChild(this.arr[i].ele);
            
    //     }
    // }
}

let s= new Store();
export default s ;