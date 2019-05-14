const mobx = require("mobx") 
const {observable,action,configure,computed,autorun} = mobx 
mobx.configure({enforceActions:"observed"})
class Store{
    @observable arr = [{x:0,y:4,c:"green"},{x:0,y:5,c:"black"},{x:0,y:6,c:"pink"}] ;
    @observable direct ="right" ;
    @observable obj = {x:0,y:0} ;
    @observable a = true ;
    @observable score = 0 ;

    @action change(code){               //根据code 改变蛇移动的方向
        
        switch(code){
            case 37:this.direct = "left" ; break ;
            case 38:this.direct = "top" ; break ;
            case 39:this.direct = "right" ; break ;
            case 40:this.direct = "bottom" ; break ;
        }
    }
    
    @action go(){                       //根据方向进行位移
        
        switch(this.direct){
            case "left":this.arr[0].x-=1;break;
            case "top":this.arr[0].y-=1;break;
            case "right":this.arr[0].x+=1;break;
            case "bottom":this.arr[0].y+=1;break;
        }
    }
    
    @action move(){                     //蛇的移动
        for(var i=this.arr.length-1;i>0;i--){
            this.arr[i].x=this.arr[i-1].x;
            this.arr[i].y=this.arr[i-1].y;
        }
        this.go()
    }

    @action random(){                   //食物随机
        this.obj.x = Math.round(Math.random()*19) ;
        this.obj.y = Math.round(Math.random()*9)
    }

    @action add2(){                     //食物与蛇头接触时改变 真假值
        this.a = !this.a
    }

    @action add3(){                     //蛇节++
        this.arr.push({
            x:this.arr[this.arr.length-1].x,
            y:this.arr[this.arr.length-1].y,
            c:"#006"
        })
    }

    @action add4(){                     //得分++
        this.score++
    }

    @computed get testing(){            //判断蛇头与食物接触    
        if(this.arr[0].x >19 || this.arr[0].x < 0){
            return true
        }
        if(this.arr[0].y < 0 || this.arr[0].y > 9){
            return true
        }
    }
}

let s= new Store();
autorun(()=>{                           //蛇头与食物接触时

    if(s.arr[0].x == s.obj.x && s.arr[0].y == s.obj.y){
        s.add2()
        s.add4()
    }
}) 

export default s ;