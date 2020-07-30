import { createMachine } from '@xstate/fsm';

export const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'step1',
  states: {
    step1: { on: { TOGGLE: 'step2' } },
    step2: { on: { TOGGLE: 'step3' } },
    step3: { on: { TOGGLE: 'step1' } },
  }
});

export {interpret} from '@xstate/fsm';