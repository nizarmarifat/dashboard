import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import './WidgetSm.css'
export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUsers">
                        <span className="widgetSmUsersName">Peter Parker</span>
                        <span className="widgetSmUsersTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUsers">
                        <span className="widgetSmUsersName">Peter Parker</span>
                        <span className="widgetSmUsersTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUsers">
                        <span className="widgetSmUsersName">Peter Parker</span>
                        <span className="widgetSmUsersTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
