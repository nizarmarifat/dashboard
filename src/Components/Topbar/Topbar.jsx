import React from 'react'
import './Topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <div className="logo">Admin</div>
                </div>
                <div className="topbarRight">
                    <div className="topbarIcons">
                        <div className="topbarContainer">
                            <NotificationsNoneIcon />
                        </div>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIcons">
                        <div className="topbarContainer">
                            <LanguageIcon />
                        </div>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIcons">
                        <div className="topbarContainer">
                            <SettingsIcon />
                        </div>
                        <span className="topIconBadge">2</span>
                    </div>
                    <img className='topAvatar' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                </div>
            </div>
        </div>
    )
}
