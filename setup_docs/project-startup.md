* ```npm init```

* .gitignor

  ```
  .DS_STORE
  node_modules
  build
  ```
* dependencies

  ```
  npm install react@15.5.4 react-dom@15.5.4 --save  
  npm install webpack@2.6.0 --save-dev
  npm install babel-core@6.24.1 --save-dev
  npm install babel-loader@7.0.0 --save-dev
  npm install babel-preset-es2015@6.24.1 --save-dev
  npm install babel-preset-react@6.24.1 --save-dev
  npm install prop-types@15.5.10 --save
  npm install webpack-dev-server@2.5.0 --save-dev
  npm install react-hot-loader@3.0.0-beta.7 --save-dev
  npm install html-webpack-plugin@2.29.0 --save-dev
  npm install eslint-loader --save-dev
  npm install css-loader@0.28.4 --save-dev
  npm install style-loader@0.18.2 --save-dev
  ```

* package.json scripts

  ```
  "scripts": {
    "start": "webpack && webpack-dev-server",
    "lint": "eslint src/** src/**/**; exit 0"
  },
  ```

* template.ejs
  ```
  <!DOCTYPE html>
  <head>
    <meta charset="utf-8">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
    <body>
      <% if (htmlWebpackPlugin.options.appMountId) { %>
        <div id="<%= htmlWebpackPlugin.options.appMountId%>"></div>
      <% } %>
    </body>
  </html>
  ```

* src/index.jsx
  ```
  import React from "react";
  import ReactDOM from "react-dom";
  import App from "./components/App";
  import styles from "./styles/styles.css";

  ReactDOM.render(
    <App />,
    document.getElementById("react-app-root")
  );
  ```

* src/components/App.jsx
  ```
  import React from "react";
  import styles from "./../styles/App.css";

  function App(){
    return (
      <div className = {styles.app}>
        <div className = {styles.container}>
          <h1>hello world!</h1>
        </div>
      </div>
    );
  }

  export default App;
  ```

* webpack.config.js
  ```
  const webpack = require('webpack');
  const { resolve } = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {

    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      resolve(__dirname, "src", "index.jsx")
    ],

    output: {
      filename: 'app.bundle.js',
      path: resolve(__dirname, 'build'),
      publicPath: '/'
    },

    resolve: {
      extensions: ['.js', '.jsx']
    },

    devtool: '#source-map',

    devServer: {
      hot: true,
      contentBase: resolve(__dirname, 'build'),
      publicPath: '/'
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          enforce: "pre",
          loader: "eslint-loader",
          exclude: /node_modules/,
          options: {
            emitWarning: true,
            configFile: "./.eslintrc.json"
            }
          },
          {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: [
              ["es2015", {"modules": false}],
              "react",
            ],
            plugins: [
              "react-hot-loader/babel"
            ]
          }
        },
        {
          test: /\.css$/,
          loader: 'style-loader'
        },
        {
          test: /\.css$/,
          loader: 'css-loader',
          exclude: resolve(__dirname, "src/styles/styles.css"),
          options: {
           modules: true,
           localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        },
        {
          test: resolve(__dirname, "src/styles/styles.css"),
          loader: 'css-loader'
        }
      ]
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin({
        template:'template.ejs',
        appMountId: 'react-app-root',
        title: 'React Help Queue',
        filename: resolve(__dirname, "build", "index.html"),
      }),
    ]
  };
  ```

* eslint - ignoring css and not checking jsx indent because of errors (rule: "react/jsx-indent": 2,)


  ```
  eslint --init

  ? How would you like to configure ESLint?
    Answer questions about your style
    Use a popular style guide
    Inspect your JavaScript file(s)

  ? Are you using ECMAScript 6 features? Yes
  ? Are you using ES6 modules? Yes
  ? Where will your code run? Browser
  ? Do you use CommonJS? No
  ? Do you use JSX? Yes
  ? Do you use React? Yes
  ? What style of indentation do you use? Spaces
  ? What quotes do you use for strings? Double
  ? What line endings do you use? Unix
  ? Do you require semicolons? Yes
  ? What format do you want your config file to be in? JSON
  ```

  .eslintrc
  ```
  {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "no-unused-vars": ["error", { "varsIgnorePattern": "styles"}],
      "react/jsx-uses-vars": 2,
      "react/jsx-uses-react": 2,
      "react/jsx-no-duplicate-props": 2,
      "react/jsx-no-undef": 2,
      "react/no-direct-mutation-state": 2,
      "react/no-multi-comp": 2,
      "react/prefer-stateless-function": 2,
      "react/jsx-indent-props": 2,
      "react/jsx-pascal-case": 2,
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "double"
      ],
      "semi": [
          "error",
          "always"
      ]
    }
  }
  ```
  .eslintignore
  ```
  *.css
  ```

* src/styles/styles.css

  ```
  * {
    margin:0;
    padding:0;
    height: 100vh;
    min-height: 100%;
    box-sizing:border-box;
    font-family: sans-serif;
    color: #150019;
  }

  ```

* src/styles/App.css

  ```
  .app {
    height: 100vh;
    min-height: 100%;
  }

  .app .container {
    margin: auto;
    width: 80%;
  }
  ```
