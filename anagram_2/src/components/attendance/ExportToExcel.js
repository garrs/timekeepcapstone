import React, { Component } from 'react'
import ReactHTMLTableToExcel from  'react-html-table-to-excel'
import Moment from 'moment'
// https://www.youtube.com/watch?v=WX05wYyE2VU&t=1s

class ExportToExcel extends Component {

    render() {
        return (
            <div style = {{marginRight: '25px'}}>
                <ReactHTMLTableToExcel
                    id ="test-table-xls-button"
                    className="export"
                    table="table-to-xls"
                    filename="filtredData"
                    sheet="tablexls"
                    buttonText="Download Me!"
                />
                <table hidden ="true" id= "table-to-xls">
                    <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Recent Scan</th>
                        <th>Type of Recent Scan</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.posts.map(post => {
                            return(
                                <tr key={post.id}>
                                    <td> {post.lastName}</td>
                                    <td> {post.firstName}</td>
                                    <td> {post.recentScan}</td>
                                    <td> {post.scanStatus}</td>
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