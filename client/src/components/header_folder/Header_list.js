import React from 'react';
import { connect } from 'react-redux';
import { add_group_list } from '../../actions/auth_actions'
import axios from 'axios';

const Header_list = ({ auth, add_group_list }) => {

    const handleAdd = async () => {
        console.log('add btn clicked');
        const res = await axios.get('/api/add_rooms');
        console.log('message from server in headerList=', res.data);
    }

    const render_list = () => {
        switch (auth) {
            case null:
                return (<li> </li>);
            default:
                return (
                    <div>

                        <div className='white-text' style={{ marginLeft: '5%', fontSize: '28px' }}>
                            {auth.username}
                            <i class="material-icons right" style={{ marginRight: '10%' }} onClick={add_group_list}>add</i>
                        </div>

                    </div>
                )
        }
    }

    return (
        <nav>
            <div class="nav-wrapper black">
                <div>{render_list()}</div>
            </div>
        </nav>
    )
}


const mapStateToProps = ({ auth }) => {
    return ({
        auth
    })
};

export default connect(mapStateToProps, { add_group_list })(Header_list);
