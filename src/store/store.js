const mobx = require("mobx")
const { observable, autorun, computed, extendObservable, action,configure } = mobx
mobx.configure({enforceActions: true}) // 开启mobx的严格模式

class Store {
  @observable load = false;

  @action changeA = ()=>{
    this.load = !this.load;
  }
}
let s = new Store();
export default s;
