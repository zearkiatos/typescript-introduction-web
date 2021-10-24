import Observer from "./Observer";
import Subject from "./Subject";

class BitcoinPrice implements Subject {
  observers: Observer[] = [];

  constructor() {
    const element: HTMLInputElement = document.querySelector("#value");

    element.addEventListener("input", () => {
      this.notify(element.value);
    });
  }
  subscribe(observer: Observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer: Observer) {
    const index = this.observers.findIndex(
      (observerFound) => observerFound === observer
    );

    this.observers.splice(index, 1);
  }

  notify(data: any) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

export default BitcoinPrice;
