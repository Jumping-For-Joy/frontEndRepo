import jumpingForJoyAPI from "../config/api";

export async function getBookings() {
    const response = await jumpingForJoyAPI.get('/api/bookings')
    console.log('from booking services', response.data)
    return response.data
}

export async function getBooking(id) {
    const response = await jumpingForJoyAPI.get(`/api/bookings/${id}`)
    return response.data
}

export async function createBooking(booking) {
    const response = await jumpingForJoyAPI.post(`/api/bookings`, booking)
    return response.data
}

export async function updateBooking(booking) {
    const response = await jumpingForJoyAPI.put(`/api/bookings/${booking.id}`, booking)
    return response.data
}