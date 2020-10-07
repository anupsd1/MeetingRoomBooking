import { combineReducers } from 'redux';
import bookings from './bookings'
import errors from './errors'

export default combineReducers({
    bookings,
    errors
});