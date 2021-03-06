const React = require('react');
const NavLink = require('react-router-dom').NavLink;

class Nav extends React.Component {
    render() {
        return (
            <div>
                <ul className='nav'>
                    <li>
                        <NavLink exact activeClassName='active' to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/battle'>Battle</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/popular'>Popular</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

module.exports = Nav;