import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addBooking } from '../../actions/bookings'

class Form extends Component {
    state = {
        
        mystart: '',
        myend: '',
        company: ''
    }

    static propTypes = {
        addBooking: PropTypes.func.isRequired
    }

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    })

    onSubmit = e => {
        e.preventDefault();
        console.log("submit")  
        const { mystart, myend, company } = this.state;
        const start = mystart.replace('T', ' ') + ':00'
        const end = myend.replace('T', ' ') + ':00'
        console.log("NEW START  = " + start)
        const booking = { start, end, company }
        // console.log("START = " + start)
        // console.log("newEND = " + newEnd)
        console.log("COMPANY = " + company)
        this.props.addBooking(booking)  
    }


    render() {
 //without the following line {lat}, {lon} and {user} give an error as undefined
        // const {lat, lon, user}=this.state;
        const { mystart, myend, company }=this.state;
        return(
            <div className="card card-body mt-4 mb-4"> 
                <h2>Add Bookmarks Form </h2>
                <form onSubmit={this.onSubmit}>
                    {/* <div className="form-group">
                        <label>Start </label>
                        <input 
                            className="form-control"
                            type="text"
                            name="start"
                            onChange={this.onChange}
                            value={start}
                        />
                    </div>
                    <div className="form-group">
                        <label>Longitutde </label>
                        <input 
                            className="form-control"
                            type="text"
                            name="end"
                            onChange={this.onChange}
                            value={end}
                        />
                    </div> */}
                    <div className="form-group">
                        <label>Start </label>
                        <input
                            className="form-control" 
                            type="datetime-local"  
                            name="mystart" 
                            onChange={this.onChange}
                            value={mystart}
                        />
                    </div>
                    <div className="form-group">
                        <label>End </label>
                        <input
                            className="form-control" 
                            type="datetime-local"  
                            name="myend" 
                            onChange={this.onChange}
                            value={myend}
                        />
                    </div>
                    <div className="form-group">
                        <label>company </label>
                        <input
                            className="form-control" 
                            type="text"  
                            name="company" 
                            onChange={this.onChange}
                            value={company}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addBooking })(Form);
