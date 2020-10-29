import React, { Component } from 'react'
import ReactHTMLTableToExcel from  'react-html-table-to-excel'
// https://www.youtube.com/watch?v=WX05wYyE2VU&t=1s

class ExportToExcel extends Component {

    render() {
        let tempDate = new Date();
        return (
            <div style = {{marginRight: '25px'}}>
                <ReactHTMLTableToExcel
                    id ="test-table-xls-button"
                    className="buttonExport"
                    table="table-to-xls"
                    filename={tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() + ' Fudarecord'}
                    sheet="tablexls"
                    buttonText="Download Excel version!"
                />
                <table hidden ="true" id= "table-to-xls">
                    <thead>
                    <tr>
                        <th>ID Number</th>
                        <th>Full Name</th>
                        {/* <th>Last Name</th>
                        <th>First Name</th> */}
                        <th>Scan Date</th>
                        <th>Scan Time</th>
                        <th>Scan Status</th>
                        <th>Scan Reason</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.posts.map(post => {
                            return(
                                <tr key={post.id}>
                                    <td> {post.idNum}</td>
                                    {/* <td> {post.lastName}</td>
                                    <td> {post.firstName}</td> */}
                                    <td> {post.fullName}</td>
                                    <td> {post.recentScan}</td>
                                    <td> {post.recentScanDouble}</td>
                                    <td> {post.scanStatus}</td>
                                    <td> {post.goingToOrFro}</td>
                                    <td> </td>
                                    {/* <td> =IF(F2 ="Start shift", TEXT(D1-D2, "h:mm"),"")</td>
                                    <td> </td>
                                    <td> =IF(F2 ="Lunch break", TEXT(D1-D2, "h:mm"),"")</td> */}

                                </tr>
                            )
                        })
                            
                    }
                    </tbody>
                </table>
            
            </div>
        )
    }
}

export default ExportToExcel