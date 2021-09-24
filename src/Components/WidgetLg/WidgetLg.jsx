import React from 'react'
import './WidgetLg.css'
export default function WidgetLg() {
    const Button = ({type}) => {
        return (
            <button className={"widgetLgButton " + type}>{type}</button>
        )
    }
    return (
        <div className="widgetLg">
            <span className="widgetLgTitle">Lates transaction</span>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Costumer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgtr">
                    <td className="widgetLgUser">
                        <img
                            src="https://cdn.medcom.id/dynamic/content/2017/12/11/800396/ghuawqQ32D.jpg?w=480"
                            alt=""
                            className="widgetLgImg" />
                        <span className="widgetLgName">Gwen Stacy</span>
                    </td>
                    <td className="widgetLgDate">2 Juni 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending"/>
                    </td>
                </tr>
                <tr className="widgetLgtr">
                    <td className="widgetLgUser">
                        <img
                            src="https://cdn.medcom.id/dynamic/content/2017/12/11/800396/ghuawqQ32D.jpg?w=480"
                            alt=""
                            className="widgetLgImg" />
                        <span className="widgetLgName">Gwen Stacy</span>
                    </td>
                    <td className="widgetLgDate">2 Juni 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined"/>
                    </td>
                </tr>
                <tr className="widgetLgtr">
                    <td className="widgetLgUser">
                        <img
                            src="https://cdn.medcom.id/dynamic/content/2017/12/11/800396/ghuawqQ32D.jpg?w=480"
                            alt=""
                            className="widgetLgImg" />
                        <span className="widgetLgName">Gwen Stacy</span>
                    </td>
                    <td className="widgetLgDate">2 Juni 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}
