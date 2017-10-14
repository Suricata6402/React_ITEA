const React = require('react');

function PlayerPreview(props) {
    console.log(props.avatar);
        return (
            <div>
                <div className='column'>
                    <img src={props.avatar}
                         className='avatar'
                         alt={'Avatar for ' + props.username}
                    />
                    <h2 className='username'>{props.username}</h2>
                </div>
                {props.children}
            </div>
        )
}

module.exports = PlayerPreview;