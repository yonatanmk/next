import { makeAutoObservable, makeObservable, action, observable } from "mobx";

class SampleStore {
  counter = 0;

  constructor(arg) {
    console.log("arg");
    console.log(arg);
    // makeAutoObservable(this);
    makeObservable(this, {
      counter: observable,
      increment: action.bound,
      decrement: action.bound,
    });
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

// const SampleStore = (counter) => {
//   return makeAutoObservable({
//     counter,
//     // get double() {
//     //     return this.value * 2
//     // },
//     increment() {
//       this.value++;
//     },
//     decrement() {
//       this.value++;
//     },
//   });
// };

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
