* dependencies

  ```
  npm install redux@3.7.2 --save
  npm install react-redux@5.0.6 --save
  npm install jest@20.0.4 --save-dev
  npm install babel-jest@20.0.3 --save-dev

  ```

* package.json scripts

  ```
  "scripts": {
    "tests": "jest --watchAll",
    "start": "webpack && webpack-dev-server",
    "lint": "eslint src/** src/**/**; exit 0"
  },
  ```

* src/index.jsx

  ```
  import React from "react";
  import ReactDOM from "react-dom";
  import App from "./components/App";
  import styles from "./styles/styles.css";
  import { createStore } from "redux";
  import { Provider } from "react-redux";
  import reducer from "./reducers/ticket-list-reducer";

  const store = createStore(reducer);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("react-app-root")
  );
  ```

* .babelrc
  ```
  {
    "env": {
      "development": {
          "plugins": ["transform-es2015-modules-commonjs"]
      },
      "test": {
          "plugins": ["transform-es2015-modules-commonjs"]
      }
    }
  }
  ```
* src/constants/index.js

  ```
  export const ACTIONS_SHOULD_BE = 'WRITTEN_LIKE_THIS';
  // export const ACTIONS_SHOULD_BE = 'WRITTEN_LIKE_THIS';
  // export const ACTIONS_SHOULD_BE = 'WRITTEN_LIKE_THIS';
  ```

* \_\_tests\_\_/reducers/index.js

  ```
  import * as constants from "./../../src/constants";
  import reducer from "./../../src/reducers"

  describe("reducers", () => {

    test('temporary dummy test: two plus two is four', () => {
      expect(2 + 2).toBe(4);
    });

    test('should return default state', () => {
      expect(reducer({}, { type: null })).toEqual({});
    });

  });

  ```

* src/reducers/index.js

  ```
  const reducer = (state = {}, action) => {
    return state;
  }

  export default reducer;
  ```

* .eslintrc.json

```
...
"rules" : {
  "no-case-declarations": 0,
...
```
