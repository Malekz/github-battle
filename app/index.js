import React from "react";
import ReactDOM from "react-dom"; // This package to render the app to the DOM
import "./index.css";
import { ThemeProvider } from './contexts/theme'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from './components/Loading'

const Popular = React.lazy(() => import('./components/Popular'))
const Battle = React.lazy(() => import('./components/Battle'))
const Results = React.lazy(() => import('./components/Results'))



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

 /*
class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light'
      }))
    }
  }
  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              <React.Suspense fallback={<Loading />}>
                <Switch>
                  <Route exact path="/" component={Popular} />
                  <Route exact path="/battle" component={Battle} />
                  <Route path='/battle/results' component={Results} />
                  <Route render={() => <h1>404</h1>} />
                </Switch>
              </React.Suspense>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

*/

function App () {
  const [theme, setTheme] = React.useState('light')
  const toggleTheme = () => setTheme((theme) => theme === 'light' ? 'dark' : 'light')

  return (
    <Router>
      <ThemeProvider value={theme}>
        <div className={theme}>
          <div className='container'>
            <Nav toggleTheme={toggleTheme} />

            <React.Suspense fallback={<Loading />} >
              <Switch>
                <Route exact path='/' component={Popular} />
                <Route exact path='/battle' component={Battle} />
                <Route path='/battle/results' component={Results} />
                <Route render={() => <h1>404</h1>} />
              </Switch>
            </React.Suspense>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  )
}


// React is pure JSX format that browser cannot understand, so what is happening is before it's ever shipped to to a browser, Babel's going to go ahead and take care of that and convert it to just normal JavaScript invocations. So now we have our react component and the next thing is to render it to the DOM

ReactDOM.render(
  // ReactDom has a render method, and this render method is going to take two different arguments:
  // 1) React.Element,
  // 2) Where to render the element to.
  <App />,
  document.getElementById("app")
);
