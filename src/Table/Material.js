import React from "react";
class Material extends React.Component {
    
    render() {
        console.log(this.props.data)
        const keys = [...new Set([].concat.apply([], this.props.data.map(obj => Object.keys(obj))))]
        console.log(keys)
        let f = ''
        for (let i = 0, j = 0; i < this.props.data.length && j < 10; i++, j++) {

            const kee = Object.keys(this.props.data[i])
            console.log(kee)
            f = kee
        }
        return (
            <div id="hie" class="datagrid">
                <table
                    cellspacing="0"
                    cellpadding="0"
                    style={{
                    margin: "0 20px",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    borderRadius: '5px',
                    fontSize: "25px",
                    color: "black",
                    tableLayout: 'fixed',
                    whiteSpace: 'normal'
                }}>
                    <thead>
                        <tr
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginTop: "15px",
                                marginBottom: "15px",
                                backgroundColor: '#95A5A6',
                                boxShadow: '0px 0px 9px 0px rgba(0,0,0,0.1)',
                                borderRadius: "7px"



                        }}
                        >
                            {keys.map((k) => {
                                console.log(keys.length)
                                
                                return (
                                    <th
                                        style={{
                                            width:`${100/keys.length}%`,
                                            padding: "15px",
                                        }}>{k}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.data.map((d) => {
                                const values = []
                                f.forEach(key => {
                                    if (d[key].length < 1) {
                                        d[key] = '----------'
                                    } else if (typeof d[key] === 'object' || typeof d[key] === 'undefined') {

                                        d[key] = '----------'

                                    } else if (d[key] === true) {
                                        d[key] = "true"
                                    } else if (d[key] === false) {
                                        d[key] = 'false'
                                    }
                                    
                                    
                                    values.push(d[key])

                                })
                                console.log(values)
                                // values.map(str => {
                                //     if (typeof str === "object") {
                                //         let st = JSON.stringify(str)
                                //         values[1] = st;
                                //     } else if (typeof str === Boolean) {
                                //         return str.toString()

                                //     }
                                //})
                                return (
                                    <tr style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-around",
                                        alignItems:"center",
                                        marginBottom: "15px",
                                        boxShadow: '0px 0px 9px 0px rgba(0,0,0,0.1)',
                                        borderRadius: "7px",
                                        backgroundColor:"white"




                                    }}>
                                        
                                        {values.map((di) => {
                                            return (
                                                
                                                <td
                                                    style={{
                                                    width: `${100 / keys.length}%`,
                                                        wordWrap: 'break-word',
                                                        padding: '10px 0',
                                                        
                                                }}
                                            
                                                >
                                                    
                                                    {di}
                                                    </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })
                        }
                        
                
                    </tbody>
                </table>
            </div>
        );

    }
}



export default Material
