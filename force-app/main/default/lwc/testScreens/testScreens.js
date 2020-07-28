import { LightningElement } from "lwc";
import { toggleMachine, interpret } from "c/stateMachine";
const toggleService = interpret(toggleMachine).start();
const { initialState } = toggleMachine;

export default class TestScreens extends LightningElement {
  currentState = initialState;
  connectedCallback() {
    toggleService.subscribe((state) => {
      this.currentState = state.value;
    });
  }

  disconnectedCallback() {
    toggleService.stop();
  }

  toggle() {
    toggleService.send("TOGGLE");
  }
}
