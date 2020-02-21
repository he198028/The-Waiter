import React, { Component } from 'react'

export default class QueueStatusForCustomers extends Component {
    state = {
        customerData: [
            // {
            //     "name": "Test1",
            //     "phone": "+******1234",
            //     "dept": "Consumer Electronics",
            //     "time": "2.00PM"
            // },
            // {
            //     "name": "Test2",
            //     "phone": "+******1235",
            //     "dept": "Smart phones",
            //     "time": "4.00PM"
            // },
            // {
            //     "name": "Test3",
            //     "phone": "+******5236",
            //     "dept": "Consumer Electronics",
            //     "time": "2.00PM"
            // },
            // {
            //     "name": "Test4",
            //     "phone": "+******2356",
            //     "dept": "Smart phones",
            //     "time": "4.00PM"
            // }
        ]
    }

    componentDidMount() {
        fetch('http://localhost:8080/customers')
        .then(res => res.json())
        .then((data) => {
          this.setState({ customerData: data })
        })
        .catch(console.log)
    }
    
    render() {
        return (
            <div className='container-fluid'>
                <div className='row d-flex justify-content-center mt-5'>
                    <div className='col-6 text-left pt-4 pl-0'><h4>Customer to queue status</h4></div>

                    <div className='col-6 m-5 rounded'>

                        <table class="table table-bordered f-18">
                            <thead className='table-primary'>
                                <tr>
                                    <th scope="col">Queue</th>
                                    <th scope="col">Customer Name</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.customerData.map((key, ind) => {
                                    return <tr>
                                        <th scope="row">{ind + 1}</th>
                                        <td>{key.name}</td>
                                        <td>{key.dept}</td>
                                        <td>{key.phone}</td>
                                    </tr>
                                })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}
