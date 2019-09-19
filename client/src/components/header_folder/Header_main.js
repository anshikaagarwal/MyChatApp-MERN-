import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header_main = ({ auth }) => {
    const render_list = () => {
        switch (auth) {
            case null:
                return (<li> </li>);
            case false:
                return ([
                    <li><Link to='/login' style={{ fontSize: '25px' }}>Login</Link></li>,
                    <li><Link to='/signup' style={{ fontSize: '25px' }}>SignUp</Link></li>
                ])
            default:
                return ([
                    <li><a href='/api/logout' style={{ fontSize: '25px' }}>Logout</a></li>,
                    <li><Link to='/#' style={{ fontSize: '25px' }}>{auth.username}</Link></li>
                ])
        }
    }
    return (
        <nav>
            <div class="nav-wrapper teal darken-2">
                <Link to="/dashboard" class="brand-logo" style={{ marginLeft: '20px' }}>My Chat App</Link>
                <ul class="right" style={{ marginRight: '30px' }}>
                    {render_list()}
                </ul>
            </div>
        </nav>
    )
}





const mapStateToProps = ({ auth }) => {
    return ({
        auth
    })
};

export default connect(mapStateToProps)(Header_main);
