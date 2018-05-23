# monorepo-with-flow

An example monorepo that uses babel and flow.

To install: 
```bash
yarn install
yarn bootstrap
```
This will create all linkages between modules for development.

To ensure that transpiled modules are updated when changed, also run
```bash
yarn build:watch
```
while developing.
