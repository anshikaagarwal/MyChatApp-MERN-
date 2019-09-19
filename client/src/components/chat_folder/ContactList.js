import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../header_folder/Header_list'
import { connect } from 'react-redux';
var lists = ['group1', 'group2', 'group3', 'group4', 'group5', 'group6', 'group7', 'group8', 'group9', 'group10', 'group11', 'group12', 'group13', 'group14', 'group15'];
const ContactList = ({ group_list }) => {
    console.log('group_lists=', group_list);
    const render_list = () => {
        return lists.map(group => {
            const path = '/chatbox/' + group;
            return (
                <Link to={path} className="collection-item avatar">
                    <img src="\images\react.jpg" alt="" className='circle' />
                    <div className="black-text" style={{ marginTop: '10px' }}>{group}</div>
                </Link>
            )
        })

    }

    return (
        <div style={{ marginRight: '-12px', marginLeft: '-12px', fontFamily: 'cursive', fontWeight: '300', fontSize: '25px' }}>
            <Header />
            <div>
                <input type='text' placeholder='Search' style={{ width: '83%', fontFamily: 'cursive', fontWeight: '300' }}></input>
                <button className='btn grey darken-2' style={{ width: '17%', height: '100%' }} > <i className='material-icons'>search</i></button>
            </div>
            <div className="collection blue-text" style={{ overflowY: 'scroll', marginTop: '-16px', height: '570px' }}>
                {render_list()}
            </div>
        </div>
    )
}

const mapStateToProp = ({ group_list }) => {
    return { group_list };
}

export default connect(mapStateToProp)(ContactList);
