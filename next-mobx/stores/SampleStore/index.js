import { makeAutoObservable, makeObservable, action, observable } from "mobx";

class SampleStore {
  counter = 0;
  startTime = new Date();

  constructor() {
    // makeAutoObservable(this);
    makeObservable(this, {
      counter: observable,
      increment: action.bound,
      decrement: action.bound,
    });
  }

  get elapsedTime() {
    return new Date() - this.startTime + " milliseconds";
  }

  increment() {
    this.counter++;
    console.log(this.counter);
    return this.counter;
  }

  decrement() {
    this.counter--;
    return this.counter;
  }
}

export default SampleStore;

// export function createSampleStore() {
//   return {
//     counter: 0,
//     increment() {
//       this.counter++;
//       return this.counter;
//     },
//     decrement() {
//       this.counter++;
//       return this.counter;
//     },
//     elapsedTime() {
//       return this.current - this.start + 'milliseconds';
//     },
//   };
// }
