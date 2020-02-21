import React, { Component } from 'react'
import { apiCall } from '../Service'
import { publicDecrypt } from 'crypto'
import { pathToFileURL } from 'url'

export default class CustomerBasicInfo extends Component {
    state = { name: '', number: '', department: '', isSuccess: false }

    nameChange = (e) => {
        // if (this.isAlphaRegex(e.target.value))
            this.setState({ name: e.target.value })
    }
    numberChange = (e) => {
        // if (this.isIntRegex(e.target.value))
            this.setState({ number: e.target.value })
    }
    deptChange = (e) => {
        this.setState({ department: e.target.value })
    }
    isIntRegex = (int) => {
        let regex = new RegExp("^[0-9]*$");
        return regex.test(int)
    }
    isAlphaRegex = (alpha) => {
        let regex = new RegExp("[^a-z,A-Z]")
        return regex.test(alpha)

    }

    submitCustomerData = async (e) => {
    //     let request = {};
    //     request.method = 'put';
    //     request.url = 'http://localhost:8080/customers';
    //     request.data = {
    //         "name": this.state.name,
    //         "phone": this.state.number,
    //         "dept": this.state.department
    //     };
    //         // params: req.queryParams,
    //     request.headers = {};

    //   return  apiCall(request);
   
        let data = {
            "name": this.state.name,
            "phone": this.state.number,
            "dept": this.state.department
        };
        
        const response = await fetch("http://localhost:8080/customers", {method: 'PUT', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        const result = await response.text();
        // this.setState({name: result});
        this.setState({ isSuccess: true });
        setTimeout(() => this.setState({ isSuccess: false }), 3000);
    }

    // submitCustomerData = (e) => this.setState({ isSuccess: true })

    checkEnabled = (e) => !(this.state.name && this.state.number && this.state.department)

    render() {
        return (
            <div className='container-fluid'>
                <div className=''>
                    <div className='row d-flex justify-content-center'>
                        <div className='outer-container col-6 m-5 rounded'>
                            <div className='row m-5'>
                                <div className='col-12'>
                                    <p className="title text-left"><h2>Add new customer to the queue</h2></p>
                                    {this.state.isSuccess && <div class="alert alert-success" role="alert">
                                        Successfully Submitted!
                                    </div>}
                                    <p className="title text-left pt-4">Customer Name</p>

                                    <input
                                        className="textBox-field form-control p-4"
                                        value={this.state.name}
                                        placeholder='John Doe'
                                        onChange={e => this.nameChange(e)}
                                        // onBlur={e => this.nameBlur()}
                                        type='text'
                                    />

                                    <p className="title text-left pt-4">Phone Number</p>

                                    <input
                                        className="textBox-field form-control p-4"
                                        value={this.state.number}
                                        placeholder='(XXX) XXX-XXXX'
                                        onChange={e => this.numberChange(e)}
                                        // onBlur={e => this.nameBlur()}
                                        type='tel'
                                    />
                                    <p className="title text-left pt-4">Department</p>
                                    <select
                                        value={this.state.department}
                                        className='rounded w-100 p-4'
                                        onChange={e => this.deptChange(e)}
                                        disabled={this.props.disabled}
                                    // onBlur={e => this.nameBlur()}

                                    >
                                        <option selected >Select an option</option>
                                        <option >Smart Appliances</option>
                                        <option >Consumer Electronics</option>
                                        <option >Virtual Reality</option>
                                    </select>

                                </div>


                            </div>
                            <div className='row ml-5 pb-5'>
                                <div className='col-5'>

                                    <button type="button" class="btn btn-primary w-100 p-3" onClick={e => this.submitCustomerData(e)}
                                    >Submit</button>

                                </div>
                            </div>


                        </div>

                    </div>

                </div>
            </div>

        )
    }
}
