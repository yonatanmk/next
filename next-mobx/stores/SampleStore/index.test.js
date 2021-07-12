import SampleStore from './index';

describe('SampleStore', () => {
  describe('increment', () => {
    it('increments the count', () => {
      const store = new SampleStore();
      expect(store.counter).toEqual(0);
      store.increment();
      expect(store.counter).toEqual(1);
    });
  });
  describe('decrement', () => {
    it('decrements the count', () => {
      const store = new SampleStore();
      expect(store.counter).toEqual(0);
      store.decrement();
      expect(store.counter).toEqual(-1);
    });
  });
});
