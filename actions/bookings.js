import axios from 'axios';
import { GET_BOOKINGS, DELETE_BOOKING, ADD_BOOKING } from './types';

// Get bookings
export const getBookings = () => dispatch => {
    axios.get('http://127.0.0.1:8000/meeting/api/')
        .then(res => {
            dispatch({
                type: GET_BOOKINGS,
                payload: res.data
            });
        }).catch(
            err=> console.log(err)
        )
}


// DELETE booking
export const deleteBooking = (id) => dispatch => {
    axios.delete(`http://127.0.0.1:8000/meeting/api/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_BOOKING,
                payload: id
            });
        }).catch(
            err=> console.log(err)
        )
}


// ADD BOOKING
export const addBooking = (booking) => dispatch => {
    axios
        .post('http://127.0.0.1:8000/meeting/api/', booking)
        .then(res => {
            dispatch({
                type: ADD_BOOKING,
                payload: res.data
            });
        })
        .catch(err => console.log(err.response.statusText))
}