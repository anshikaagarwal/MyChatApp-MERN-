import React from 'react';

const Header_chatbox = () => {

    const path = window.location.pathname.split('/').pop();
    return (
        <nav>
            <div class="nav-wrapper black">
                <img src="/images/react.jpg" style={{ transform: 'scale(0.25)', borderRadius: '100%', marginTop: '-8%', marginLeft: '-7%' }} />
                <span className="title white-text" style={{ fontSize: '30px', fontWeight: '500' }}>
                    <div style={{ marginTop: '-17%', marginLeft: '7%', marginRight: '1%' }}>
                        {path}
                        <a class='right' href='/api/logout'>Logout</a>
                    </div>
                </span>
            </div>
        </nav>
    )
}

export default Header_chatbox;
