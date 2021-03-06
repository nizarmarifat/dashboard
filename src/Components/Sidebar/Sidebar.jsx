import React from 'react'
import './Sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyleIcon className="sidebarListIcon"/> Home
                        </li>
                        <li className="sidebarListItem ">
                            <TimelineIcon className="sidebarListIcon"/> Analytic
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebarListIcon"/> Sales    
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
