import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBookings, deleteBooking } from '../../actions/bookings';

class Booking extends Component {

    static propTypes = {
        bookings: PropTypes.array.isRequired,
        getBookings: PropTypes.func.isRequired,
        deleteBooking: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getBookings();
    }

    render() {
        return (
            <Fragment>
                <h1>Bookings list</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.bookings.map(booking => (
                            <tr key={booking.id}>
                                <td>{booking.id}</td>
                                <td>{booking.company}</td>
                                <td>{booking.start.split("T")[1].split("+")[0]}</td>
                                <td>{booking.end.split("T")[1].split("+")[0]}</td>
                                <td><button className="btn btn-danger btn-sm" onClick={this.props.deleteBooking.bind(this, booking.id)}>Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
                
        )
    }
}

const mapStateToProps = state => ({
    bookings: state.bookings.bookings
            // state.reducerName.bookings
})

export default connect(mapStateToProps, { getBookings, deleteBooking })(Booking);
