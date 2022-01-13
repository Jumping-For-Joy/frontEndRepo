import jumpingForJoyAPI from "../config/api";

export async function getEnquiries() {
    const response = await jumpingForJoyAPI.get('/api/enquiries')
    console.log('from enq services', response.data)
    return response.data
}

export async function getEnquiry(id) {
    const response = await jumpingForJoyAPI.get(`/api/enquiries/${id}`)
    return response.data
}

export async function createEnquiry(enquiry) {
    const response = await jumpingForJoyAPI.post(`/api/enquiries`, enquiry)
    return response.data
}

