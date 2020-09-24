// import observable from mobx
import { observable, action, decorate, autorun } from "mobx";

//create a store with count observable
class Store {
  // observables
  UserLoginDetails = { name: "" };

  // Actions
  userloginUpdate = (data) => {
    this.UserLoginDetails.name = data;
  };
}

decorate(Store, {
  // actions
  userloginUpdate: action,

  // observables
  UserLoginDetails: observable,
});

//export Store
export default new Store();
