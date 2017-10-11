const React = require('react');
const Link = require('react-router-dom').Link;

function PlayerPreview(props) {
    return (
        <div>
            <div className='column'>
                <img src={props.avatar}
                     className='avatar'
                     alt={'Avatar for ' + props.username}
            />
                <h2 className='username'>{props.username}</h2>
            </div>
            <button className='reset' onClick={props.onReset.bind(null, props.id)}>
                Reset
            </button>
        </div>
    )
}

class PlayerInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState(function () {
            return {
                username: value
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(
            this.props.id,
            this.state.username
        )
    }

    render() {
        return (
            <form className='column' onSubmit={this.handleSubmit}>
                <label className='header' htmlFor="username">
                    {this.props.label}
                </label>
                <input type="text"
                       id='username'
                       placeholder='GitHub User'
                       value={this.state.username}
                       autoComplete='off'
                       onChange={this.handleChange}
                />
                <button className='button'
                        type='submit'
                        disabled={!this.state.username}>
                    Submit
                </button>
            </form>
        )
    }


}

class Battle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null,
            playerTwoImage: null,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(id, username) {
        this.setState(function () {
            const newState = {};
            newState[id + 'Name'] = username;
            newState[id + 'Image'] = username;
            return newState;
        })
    }

    handleReset(id) {
        this.setState(function () {
            const newState = {};
            newState[id + 'Name'] = '';
            newState[id + 'Image'] = null;
            return newState;
        })
    }

    render() {
        const match = this.props.match;
        const playerOneName = this.state.playerOneName;
        const playerTwoName = this.state.playerTwoName;
        const playerOneImage = this.state.playerOneImage;
        const playerTwoImage = this.state.playerTwoImage;
        return (
            <div className='row'>
                {!playerOneName &&
                    <PlayerInput
                        id='playerOne'
                        label='Player One'
                        onSubmit={this.handleSubmit} />
                }
                {playerOneImage &&
                    <PlayerPreview
                        id='playerOne'
                        avatar={playerOneImage}
                        username={playerOneName}
                        onReset={this.handleReset}
                    />
                }
                {!playerTwoName &&
                    <PlayerInput
                        id='playerTwo'
                        label='Player Two'
                        onSubmit={this.handleSubmit} />
                }
                {playerTwoImage &&
                <PlayerPreview
                    id='playerTwo'
                    avatar={playerTwoImage}
                    username={playerTwoName}
                    onReset={this.handleReset}
                />
                }
                {playerOneImage &&
                 playerTwoImage &&
                    <Link className='button'
                          to={{
                              pathname: match.url + '/results',
                              search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
                          }}>Battle</Link>
                }
            </div>
        )
    }
}

module.exports = Battle;