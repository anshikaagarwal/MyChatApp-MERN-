import React from 'react';
import Header from './header_folder/Header_main'

const Dashboard = () => {
    return (
        <div style={{ marginLeft: '-10px', marginRight: '-11px' }}>
            <Header />
            <div className="container">
                <div className='center' style={{ marginTop: '15px' }}>
                    <img src="\images\chat_logo.png" alt="" className='circle' />
                    <h3>Welcome to My Chat App!!!</h3>
                    <h5 >"Get more closer to your closed ones"</h5>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;