# LWC State Machine

Shows off how to bundle external dependancies for use in LWC service components. Specifically using @davidkpiano's XState library.

## Notable files

- `js/stateMachine.js` - Unbundled JavaScript file.
- `force-app/main/default/lwc/stateMachine/stateMachine.js` - Bundled JavaScript file.
- `force-app/main/default/lwc/testScreens` - Example LWC component to show off use of state machine service component.
- `rollup.config.js` - Rollup.js configuration file.

## Running

- `npm run build` to run Rollup. Automatically bundles external dependencies. Builds all files in the `js` directory. The filename maps to the LWC name so make sure to keep spelling the same.
- `npm run build:rollup:watch` to execute the same as above but watch for file changes.
