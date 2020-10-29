import React, { Component } from 'react'
import ReactHTMLTableToExcel from  'react-html-table-to-excel'

class ExportToExcelSummary extends Component {

    render() {
        // counter = 44 for 11 days and 40 for 10 days
        let counter = 0;
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
                        <th>Scan Date</th>
                        <th>Scan Time</th>
                        <th>Scan Reason</th>
                        <th></th>
                        <th></th>
                        <th>Overtime Detector</th>
                        <th>Total time worked</th>
                        <th>Overbreak Detector</th>
                        <th>Lunch break duration</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.posts.map((post, index) => {
                            counter++;
                            return(
                                <tr key={post.id}>
                                    <td> {post.idNum}</td>
                                    <td> {post.fullName}</td>
                                    <td> {post.date}</td>
                                    <td> {post.time}</td>
                                    <td> {post.reason}</td>
                                    <td> </td>
                                    <td> </td>
                                    {/* <td> =IF(I{2 + index} &lt;&gt;"", IF(ABS(I{2 + index})>0.3333333334, "Overtime", ""), "")</td> */}
                                    <td> =IF(I{2 + index} &lt;&gt;"", IF(ABS(I{2 + index})>0.3333333334, TEXT( I{2 + index} - 0.33333333333, "[h]:mm"), TEXT(0, "[h]:mm")), "")</td>
                                    <td> =IF(AND(E{2 + index} ="Start shift", NOT( ISBLANK(D{5 + index}))), TEXT(MOD(D{5 + index}-D{2 + index}, 1) - K{2 + index}, "[h]:mm"),"")</td>
                                    {/* <td> =IF(K{2 + index} &lt;&gt;"", IF(ABS(K{2 + index})>0.04166666666, "Overbreak", ""), "")</td> */}
                                    <td> =IF(K{2 + index} &lt;&gt;"", IF(ABS(K{2 + index})>0.04166666666, TEXT( K{2 + index} -0.04166666666, "[h]:mm"), TEXT(0, "[h]:mm")), "")</td>
                                    <td> =IF(AND(E{3 + index} ="Lunch break", NOT( ISBLANK(D{4 + index}))), TEXT(MOD(D{4 + index}-D{3 + index}, 1), "[h]:mm"),"")</td>
                                </tr>
                            )
                        })
                    }
                        <tr>
                        <td> Normal lunch hours in month's 15 day period </td>
                        <td>
                            { counter === 4 ?  "=TEXT(0.04166666666,\"[h]:mm\")" : ""} 
                            { counter === 8 ?  "=TEXT(0.08333333333,\"[h]:mm\")" : ""}  
                            { counter === 12 ?  "=TEXT(0.125,\"[h]:mm\")" : ""} 
                            { counter === 16 ?  "=TEXT(0.16666666666,\"[h]:mm\")" : ""} 
                            { counter === 20 ?  "=TEXT(0.20833333333,\"[h]:mm\")" : ""}  
                            { counter === 24 ?  "=TEXT(0.25,\"[h]:mm\")" : ""} 
                            { counter === 28 ?  "=TEXT(0.29166666666,\"[h]:mm\")" : ""} 
                            { counter === 32 ?  "=TEXT(0.33333333333,\"[h]:mm\")" : ""}  
                            { counter === 36 ?  "=TEXT(0.375,\"[h]:mm\")" : ""} 
                            { counter === 40 ?  "=TEXT(0.41666666666,\"[h]:mm\")" : ""} 
                            { counter === 44 ?  "=TEXT(0.45833333333,\"[h]:mm\")" : ""}  
                        </td>
                        <td></td>
                        <td></td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> Sum of work hours / 15th period</td>
                        <td>
                        { counter === 4 ? "=TEXT(I2, \"[h]:mm\" )" : "" } 
                        { counter === 8 ? "=TEXT(SUM( I2 + I6), \"[h]:mm\" )" : "" }
                        { counter === 12 ? "=TEXT(SUM( I2 + I6 + I10), \"[h]:mm\" )" : "" }
                        { counter === 16 ? "=TEXT(SUM( I2 + I6 + I10 + I14), \"[h]:mm\" )" : "" } 
                        { counter === 20 ? "=TEXT(SUM( I2 + I6 + I10 + I14 + I18), \"[h]:mm\" )" : "" }
                        { counter === 24 ? "=TEXT(SUM( I2 + I6 + I10 + I14 + I18 + I22), \"[h]:mm\" )" : "" }
                        { counter === 28 ? "=TEXT(SUM( I2 + I6 + I10 + I14 + I18 + I22 + I26), \"[h]:mm\" )" : "" } 
                        { counter === 32 ? "=TEXT(SUM( I2 + I6 + I10 + I14 + I18 + I22 + I26 + I30), \"[h]:mm\" )" : "" }
                        { counter === 36 ? "=TEXT(SUM( I2 + I6 + I10 + I14 + I18 + I22 + I26 + I30 + I34), \"[h]:mm\" )" : "" }
                        { counter === 40 ? "=TEXT(SUM( I2 + I6 + I10 + I14 + I18 + I22 + I26 + I30 + I34 + I38), \"[h]:mm\" )" : "" } 
                        { counter === 44 ? "=TEXT(SUM( I2 + I6 + I10 + I14 + I18 + I22 + I26 + I30 + I34 + I38 + I42), \"[h]:mm\" )" : "" }
                        </td>
                        <td> Sum of lunch hours / 15th period</td>
                        <td>
                        { counter === 4 ? "=TEXT(K2, \"[h]:mm\" )" : "" }
                        { counter === 8 ? "=TEXT(SUM( K2 + K6), \"[h]:mm\" )" : ""}
                        { counter === 12 ? "=TEXT(SUM( K2 + K6 + K10), \"[h]:mm\" )" : "" } 
                        { counter === 16 ? "=TEXT(SUM( K2 + K6 + K10 + K14), \"[h]:mm\" )" : "" }
                        { counter === 20 ? "=TEXT(SUM( K2 + K6 + K10 + K14 + K18), \"[h]:mm\" )" : ""}
                        { counter === 24 ? "=TEXT(SUM( K2 + K6 + K10 + K14 + K18 + K22), \"[h]:mm\" )" : "" } 
                        { counter === 28 ? "=TEXT(SUM( K2 + K6 + K10 + K14 + K18 + K22 + K26), \"[h]:mm\" )" : "" }
                        { counter === 32 ? "=TEXT(SUM( K2 + K6 + K10 + K14 + K18 + K22 + K26 + K30), \"[h]:mm\" )" : ""}
                        { counter === 36 ? "=TEXT(SUM( K2 + K6 + K10 + K14 + K18 + K22 + K26 + K30 + K34), \"[h]:mm\" )" : "" } 
                        { counter === 40 ? "=TEXT(SUM( K2 + K6 + K10 + K14 + K18 + K22 + K26 + K30 + K34 + K38), \"[h]:mm\" )" : "" }
                        { counter === 44 ? "=TEXT(SUM( K2 + K6 + K10 + K14 + K18 + K22 + K26 + K30 + K34 + K38 + K42), \"[h]:mm\" )" : ""}
                        </td>
                        </tr>
                        <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> Overtime of work hours / 15th period</td>
                        <td> 
                        {/* { counter === 4 ? "=IF(B8 < I6, TEXT(SUM(I6 - B8), \"[h]:mm\"),\"\")" : ""}
                        { counter === 8 ? "=IF(B12 < I10, TEXT(SUM(I10 - B12), \"[h]:mm\"),\"\")" : ""}
                        { counter === 12 ? "=IF(B16 < I14, TEXT(SUM(I14 - B16), \"[h]:mm\"),\"\")" : ""} 
                        { counter === 16 ? "=IF(B20 < I18, TEXT(SUM(I18 - B20), \"[h]:mm\"),\"\")" : ""}
                        { counter === 20 ? "=IF(B24 < I22, TEXT(SUM(I22 - B24), \"[h]:mm\"),\"\")" : ""}
                        { counter === 24 ? "=IF(B28 < I26, TEXT(SUM(I26 - B28), \"[h]:mm\"),\"\")" : ""} 
                        { counter === 28 ? "=IF(B32 < I30, TEXT(SUM(I30 - B32), \"[h]:mm\"),\"\")" : ""}
                        { counter === 32 ? "=IF(B36 < I34, TEXT(SUM(I34 - B36), \"[h]:mm\"),\"\")" : ""}
                        { counter === 36 ? "=IF(B40 < I38, TEXT(SUM(I38 - B40), \"[h]:mm\"),\"\")" : ""} 
                        { counter === 40 ? "=IF(B44 < I42, TEXT(SUM(I42 - B44), \"[h]:mm\"),\"\")" : ""}
                        { counter === 44 ? "=IF(B48 < I46, TEXT(SUM(I46 - B48), \"[h]:mm\"),\"\")" : ""} */}
                        { counter === 4 ? "=TEXT(H2, \"[h]:mm\" )" : "" } 
                        { counter === 8 ? "=TEXT(SUM(H2 + H6), \"[h]:mm\" )" : "" }
                        { counter === 12 ? "=TEXT(SUM( H2 + H6 + H10), \"[h]:mm\" )" : "" }
                        { counter === 16 ? "=TEXT(SUM( H2 + H6 + H10 + H14), \"[h]:mm\" )" : "" } 
                        { counter === 20 ? "=TEXT(SUM( H2 + H6 + H10 + H14 + H18), \"[h]:mm\" )" : "" }
                        { counter === 24 ? "=TEXT(SUM( H2 + H6 + H10 + H14 + H18 + H22), \"[h]:mm\" )" : "" }
                        { counter === 28 ? "=TEXT(SUM( H2 + H6 + H10 + H14 + H18 + H22 + H26), \"[h]:mm\" )" : "" } 
                        { counter === 32 ? "=TEXT(SUM( H2 + H6 + H10 + H14 + H18 + H22 + H26 + H30), \"[h]:mm\" )" : "" }
                        { counter === 36 ? "=TEXT(SUM( H2 + H6 + H10 + H14 + H18 + H22 + H26 + H30 + H34), \"[h]:mm\" )" : "" }
                        { counter === 40 ? "=TEXT(SUM( H2 + H6 + H10 + H14 + H18 + H22 + H26 + H30 + H34 + H38), \"[h]:mm\" )" : "" } 
                        { counter === 44 ? "=TEXT(SUM( H2 + H6 + H10 + H14 + H18 + H22 + H26 + H30 + H34 + H38 + H42), \"[h]:mm\" )" : "" }
                        </td>
                         {/* reversed overbreak and underbreak symbols */}
                        <td> Overbreaks of lunch hours / 15th period</td>
                        <td>
                        { counter === 4 ? "=TEXT(J2, \"[h]:mm\" )" : "" } 
                        { counter === 8 ? "=TEXT(SUM(J2 + J6), \"[h]:mm\" )" : "" }
                        { counter === 12 ? "=TEXT(SUM( J2 + J6 + J10), \"[h]:mm\" )" : "" }
                        { counter === 16 ? "=TEXT(SUM( J2 + J6 + J10 + J14), \"[h]:mm\" )" : "" } 
                        { counter === 20 ? "=TEXT(SUM( J2 + J6 + J10 + J14 + J18), \"[h]:mm\" )" : "" }
                        { counter === 24 ? "=TEXT(SUM( J2 + J6 + J10 + J14 + J18 + J22), \"[h]:mm\" )" : "" }
                        { counter === 28 ? "=TEXT(SUM( J2 + J6 + J10 + J14 + J18 + J22 + J26), \"[h]:mm\" )" : "" } 
                        { counter === 32 ? "=TEXT(SUM( J2 + J6 + J10 + J14 + J18 + J22 + J26 + J30), \"[h]:mm\" )" : "" }
                        { counter === 36 ? "=TEXT(SUM( J2 + J6 + J10 + J14 + J18 + J22 + J26 + J30 + J34), \"[h]:mm\" )" : "" }
                        { counter === 40 ? "=TEXT(SUM( J2 + J6 + J10 + J14 + J18 + J22 + J26 + J30 + J34 + J38), \"[h]:mm\" )" : "" } 
                        { counter === 44 ? "=TEXT(SUM( J2 + J6 + J10 + J14 + J18 + J22 + J26 + J30 + J34 + J38 + J42), \"[h]:mm\" )" : "" }
                        {/* { counter === 4 ? "=IF(B6 > K6, TEXT(SUM(K6 - B6), \"[h]:mm\"),\"\")" : ""}
                        { counter === 8 ? "=IF(B10 > K10, TEXT(SUM(K10 - B10), \"[h]:mm\"),\"\")" : ""}
                        { counter === 12 ? "=IF(B14 > K14, TEXT(SUM(K14 - B14), \"[h]:mm\"),\"\")" : ""} 
                        { counter === 16 ? "=IF(B18 > K18, TEXT(SUM(K18 - B18), \"[h]:mm\"),\"\")" : ""}
                        { counter === 20 ? "=IF(B22 > K22, TEXT(SUM(K22 - B22), \"[h]:mm\"),\"\")" : ""}
                        { counter === 24 ? "=IF(B26 > K26, TEXT(SUM(K26 - B26), \"[h]:mm\"),\"\")" : ""} 
                        { counter === 28 ? "=IF(B30 > K30, TEXT(SUM(K30 - B30), \"[h]:mm\"),\"\")" : ""}
                        { counter === 32 ? "=IF(B34 > K34, TEXT(SUM(K34 - B34), \"[h]:mm\"),\"\")" : ""}
                        { counter === 36 ? "=IF(B38 > K38, TEXT(SUM(K38 - B38), \"[h]:mm\"),\"\")" : ""} 
                        { counter === 40 ? "=IF(B42 > K42, TEXT(SUM(K42 - B42), \"[h]:mm\"),\"\")" : ""}
                        { counter === 44 ? "=IF(B46 > K46, TEXT(SUM(K46 - B46), \"[h]:mm\"),\"\")" : ""} */}
                        </td>
                        </tr>
                        <tr>
                        <td> Normal work hours in month's 15 day period </td>
                        <td>
                        { counter === 4 ?  "=TEXT(0.33333333333,\"[h]:mm\")" : ""}               
                        { counter === 8 ?  "=TEXT(0.66666666666,\"[h]:mm\")" : ""}   
                        { counter === 12 ?  "=TEXT(1,\"[h]:mm\")" : ""}              
                        { counter === 16 ?  "=TEXT(1.33333333333,\"[h]:mm\")" : ""}  
                        { counter === 20 ?  "=TEXT(1.66666666667, \"[h]:mm\")" : ""} 
                        { counter === 24 ?  "=TEXT(2,\"[h]:mm\")" : ""}              
                        { counter === 28 ?  "=TEXT(2.33333333333,\"[h]:mm\")" : ""}  
                        { counter === 32 ?  "=TEXT(2.66666666667,\"[h]:mm\")" : ""}  
                        { counter === 36 ?  "=TEXT(3,\"[h]:mm\")" : ""}              
                        { counter === 40 ?  "=TEXT(3.33333333333,\"[h]:mm\")" : ""}  
                        { counter === 44 ?  "=TEXT(3.66666666667,\"[h]:mm\")" : ""}
                        </td>
                        <td></td>
                        <td></td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> Undertime of work hours / 15th period</td>
                        <td>  
                        { counter === 4 ? "=IF(B8 > I6, TEXT(SUM(B8 - I6), \"[h]:mm\"),\"\")" : ""}
                        { counter === 8 ? "=IF(B12 > I10, TEXT(SUM(B12 - I10), \"[h]:mm\"),\"\")" : ""}
                        { counter === 12 ? "=IF(B16 > I14, TEXT(SUM(B16 - I14), \"[h]:mm\"),\"\")" : ""} 
                        { counter === 16 ? "=IF(B20 > I18, TEXT(SUM(B20 - I18), \"[h]:mm\"),\"\")" : ""}
                        { counter === 20 ? "=IF(B24 > I22, TEXT(SUM(B24 - I22), \"[h]:mm\"),\"\")" : ""}
                        { counter === 24 ? "=IF(B28 > I26, TEXT(SUM(B28 - I26), \"[h]:mm\"),\"\")" : ""} 
                        { counter === 28 ? "=IF(B32 > I30, TEXT(SUM(B32 - I30), \"[h]:mm\"),\"\")" : ""}
                        { counter === 32 ? "=IF(B36 > I34, TEXT(SUM(B36 - I34), \"[h]:mm\"),\"\")" : ""}
                        { counter === 36 ? "=IF(B40 > I38, TEXT(SUM(B40 - I38), \"[h]:mm\"),\"\")" : ""} 
                        { counter === 40 ? "=IF(B44 > I42, TEXT(SUM(B44 - I42), \"[h]:mm\"),\"\")" : ""}
                        { counter === 44 ? "=IF(B48 > I46, TEXT(SUM(B48 - I46), \"[h]:mm\"),\"\")" : ""}
                        </td>
                        {/* reversed overbreak and underbreak symbols */}
                        <td> Underbreaks of lunch hours / 15th period</td>
                        <td>
                        { counter === 4 ? "=IF(B6 > K6, TEXT(SUM(B6 - K6), \"[h]:mm\"),\"\")" : ""}
                        { counter === 8 ? "=IF(B10 > K10, TEXT(SUM(B10 - K10), \"[h]:mm\"),\"\")" : ""}
                        { counter === 12 ? "=IF(B14 > K14, TEXT(SUM(B14 - K14), \"[h]:mm\"),\"\")" : ""} 
                        { counter === 16 ? "=IF(B18 > K18, TEXT(SUM(B18 - K18), \"[h]:mm\"),\"\")" : ""}
                        { counter === 20 ? "=IF(B22 > K22, TEXT(SUM(B22 - K22), \"[h]:mm\"),\"\")" : ""}
                        { counter === 24 ? "=IF(B26 > K26, TEXT(SUM(B26 - K26), \"[h]:mm\"),\"\")" : ""} 
                        { counter === 28 ? "=IF(B30 > K30, TEXT(SUM(B30 - K30), \"[h]:mm\"),\"\")" : ""}
                        { counter === 32 ? "=IF(B34 > K34, TEXT(SUM(B34 - K34), \"[h]:mm\"),\"\")" : ""}
                        { counter === 36 ? "=IF(B38 > K38, TEXT(SUM(B38 - K38), \"[h]:mm\"),\"\")" : ""} 
                        { counter === 40 ? "=IF(B42 > K42, TEXT(SUM(B42 - K42), \"[h]:mm\"),\"\")" : ""}
                        { counter === 44 ? "=IF(B46 > K46, TEXT(SUM(B46 - K46), \"[h]:mm\"),\"\")" : ""}
                        </td>
                        </tr>
                    </tbody>
                </table>
            
            </div>
        )
    }
}

export default ExportToExcelSummary
