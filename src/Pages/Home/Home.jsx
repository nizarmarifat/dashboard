import React from 'react'
import Chart from '../../Components/Chart/Chart'
import WidgetSm from '../../Components/WidgetSm/WidgetSm'
import WidgetLg from '../../Components/WidgetLg/WidgetLg'
import { userData } from '../../dummyData'
import './home.css'
export default function Home() {
    return (
        <div className="home">
            <Chart data={userData} title={"User Analitycs"} grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
