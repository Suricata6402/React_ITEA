const React = require('react');
const PropTypes = require('prop-types');

function SelectedLanguage(props) {
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
        <ul className='languages'>
            {languages.map(function(lang) {
                return (
                    <li onClick={props.onSelect.bind(null, lang)}
                        style={lang === props.selectedLanguage ? {color: '#d0021b'}: null}
                        key={lang}>{lang}</li>
                )
            }, this)}
        </ul>
    )
}

live:newme1989.5

SelectedLanguage.PropTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};

class Popular extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedLanguage: 'All'
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang) {
        this.setState(function () {
            return {
                selectedLanguage: lang
            }
        })
    }

    render() {
        return (
            <div>
                <SelectedLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage}
                />
            </div>
        )
    }
}

module.exports = Popular;