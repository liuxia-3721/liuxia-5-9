import { random } from "node-forge";

const mobx = require("mobx") 
const {observable,action,configure,computed} = mobx 
mobx.configure({enforceActions:"observed"})
class Store{
    @observable arr = [{x:0,y:4,c:"red"},{x:0,y:5,c:"black"},{x:0,y:6,c:"pink"}] ;
    @observable direct ="right";
    @observable obj = {x:0,y:0}
    @observable a = true

    @action change(code){
        
        switch(code){
            case 37:this.direct = "left" ; break ;
            case 38:this.direct = "top" ; break ;
            case 39:this.direct = "right" ; break ;
            case 40:this.direct = "bottom" ; break ;
        }
    }
    
    @action go(){
        
        switch(this.direct){
            case "left":this.arr[0].x-=1;break;
            case "top":this.arr[0].y-=1;break;
            case "right":this.arr[0].x+=1;break;
            case "bottom":this.arr[0].y+=1;break;
        }
    }
    
    @action move(){
        for(var i=this.arr.length-1;i>0;i--){
            this.arr[i].x=this.arr[i-1].x;
            this.arr[i].y=this.arr[i-1].y;
        }
        this.go()
    }

    @action random(){
        this.obj.x = Math.round(Math.random()*19) ;
        this.obj.y = Math.round(Math.random()*9)
    }

    @action add2(){
        this.a = false
    }

    @computed get testing(){
        if(this.arr[0].x >19 || this.arr[0].x < 0){
            return true
        }
        if(this.arr[0].y < 0 || this.arr[0].y > 9){
            return true
        }
    }

    @computed get add(){
        if(this.arr[0].x == this.obj.x && this.arr[0].y == this.obj.y){
            return this.a
        }
    }
}

let s= new Store();
export default s ;