const React = require('react');

const styles = {
    content: {
        textAlign: 'center',
        fontSize: '35px'
    }
};

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        }
    }
    render() {
        return (
            <p style={styles.content}>
                {this.state.text}
            </p>
        )
    }
}

Loading.defaultProps = {
    text: 'Loading',
    speed: 300
};

module.exports = Loading;