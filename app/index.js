import React from "react";
import ReactDOM from "react-dom"; // This package to render the app to the DOM
import "./index.css";
import Popular from "./components/Popular";
import Battle from "./components/Battle";
/**
 * every react Component have three things:
 *
 * 1) state that manages (each component manage its own state)
 *
 * 2) Lifecycle ( to deal with APIs)
 *
 * 3) UI (the method that we use in order to describe what the UI odf the component is goint to look like is called -- render () )
 *
 */

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Battle />
      </div>
    );
  }
}

// React is pure JSX format that browser cannot understand, so what is happening is before it's ever shipped to to a browser, Babel's going to go ahead and take care of that and convert it to just normal JavaScript invocations. So now we have our react component and the next thing is to render it to the DOM

ReactDOM.render(
  // ReactDom has a render method, and this render method is going to take two different arguments:
  // 1) React.Element,
  // 2) Where to render the element to.
  <App />,
  document.getElementById("app")
);
