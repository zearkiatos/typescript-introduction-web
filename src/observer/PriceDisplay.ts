import Observer from "./Observer";

class PriceDisplay implements Observer {
  private element: HTMLElement;
  constructor() {
    this.element = document.querySelector("#price");
  }
  update(data: any) {
    this.element.innerText = data;
  }
}

export default PriceDisplay;
