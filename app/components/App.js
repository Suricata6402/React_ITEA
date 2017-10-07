const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Switch = ReactRouter.Switch;
const Route = ReactRouter.Route;
const Popular = require('./Popular');
const Home = require('./Home');
const Battle = require('./Battle');
const Nav = require('./Nav');

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div className='container'>
                        <Nav />
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/battle' component={Battle} />
                            <Route path='/popular' component={Popular} />
                            <Route render={function () {
                                return <p>Not Found</p>
                            }} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

module.exports = App;