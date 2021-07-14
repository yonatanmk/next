import { makeAutoObservable, makeObservable, action, observable } from "mobx";

class SampleStore {
  counter = 0;

  constructor(arg) {
    console.log("arg");
    console.log(arg);
    makeAutoObservable(this);
    // makeObservable(this, {
    //   counter: observable,
    //   increment: action.bound,
    //   decrement: action.bound,
    // });
  }

  increment = () => {
    this.counter++;
    console.log(this.counter);
    return this.counter;
  };

  decrement = () => {
    this.counter--;
    return this.counter;
  };
}

export default SampleStore;
