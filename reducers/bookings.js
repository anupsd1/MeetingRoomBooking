import { GET_BOOKINGS, DELETE_BOOKING, ADD_BOOKING } from '../actions/types.js';

const initialState = {
    bookings: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_BOOKINGS: 
            return {
                ...state,
                bookings: action.payload
            };
        case DELETE_BOOKING:
            return {
                ...state,
                bookings: state.bookings.filter(booking => booking.id !== action.payload)
            }
        case ADD_BOOKING:
            return {
                ...state,
                bookings: [...state.bookings, action.payload]
            }
        default:
            return state;
    }
}