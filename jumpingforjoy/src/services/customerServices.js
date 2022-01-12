import jumpingForJoyAPI from "../config/api";

export async function getCustomers() {
    const response = await jumpingForJoyAPI.get('/api/customers')
    return response.data
}

export async function getCustomer(id) {
    const response = await jumpingForJoyAPI.get(`/api/customers/${id}`)
    return response.data
}

export async function createCustomer(customer) {
    const response = await jumpingForJoyAPI.post(`/api/customers`, customer)
    return response.data
}