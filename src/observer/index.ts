import BitcoinPrice from "./BitcoinPrice";
import PriceDisplay from "./PriceDisplay";
const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);
setTimeout(() => value.unsubscribe(display), 5000);
