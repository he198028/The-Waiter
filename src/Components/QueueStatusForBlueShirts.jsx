import React, { Component } from 'react'

export default class QueueStatusForBlueShirts extends Component {
    state = {
        customerData: [
            // {
            //     "name": "Test1",
            //     "phone": "+16041231234",
            //     "dept": "Consumer Electronics",
            //     "time": "2.00PM"
            // },
            // {
            //     "name": "Test2",
            //     "phone": "+16041231235",
            //     "dept": "Smart phones",
            //     "time": "4.00PM"
            // },
            // {
            //     "name": "Test3",
            //     "phone": "+16041235236",
            //     "dept": "Consumer Electronics",
            //     "time": "2.00PM"
            // },
            // {
            //     "name": "Test4",
            //     "phone": "+160412356",
            //     "dept": "Smart phones",
            //     "time": "4.00PM"
            // }
        ]
    }

    // componentDidMount() {
    //     fetch('http://localhost:8080/customers')
    //     .then(res => res.json())
    //     .then((data) => {
    //       this.setState({ customerData: data })
    //     })
    //     .catch(console.log)
    // }

    componentDidMount() {
        setInterval(this.getData, 2000);
    }

    getData = () =>
        fetch('http://localhost:8080/customers')
        .then(res => res.json())
        .then((data) => {
            this.setState({ customerData: data })
        })
        .catch(console.log)

    onCheckBoxClicked(){
        fetch('http://localhost:8080/customers', { method: 'delete' })
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
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.customerData.map((key, ind) => {
                                    return <tr>
                                        <th scope="row">{ind + 1}</th>
                                        <td>{key.name}</td>
                                        <td>{key.dept}</td>
                                        <td>{key.phone}</td>
                                        <td>
                                            <label className='text-small'>Accept</label>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" class="custom-control-input" id={`customSwitch${ind + 1}`}  onChange={this.onCheckBoxClicked}/>
                                                <label class="custom-control-label" for={`customSwitch${ind + 1}`}></label>

                                            </div>
                                        </td>
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

