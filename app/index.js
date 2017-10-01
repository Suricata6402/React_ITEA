const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                Hello World, {this.props.name}
            </div>
        )
    }
}

ReactDOM.render(
  <App name='Vitalii'/>,
  document.getElementById('app')
);