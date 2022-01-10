import jumpingForJoyAPI from "../config/api";

export async function getCastles() {
    const response = await jumpingForJoyAPI.get('/api/castles')
    console.log(response)
    return response.data
}

export async function getCastle(id) {
    const response = await jumpingForJoyAPI.get(`/api/castles/${id}`)
    return response.data
}

export async function createCastle(castle) {
    const response = await jumpingForJoyAPI.post(`/api/castles`, castle)
    return response.data
}

export async function updateCastle(castle) {
    // .put(url[, data[, config]])
    const response = await jumpingForJoyAPI.put(`/api/castles/${castle.id}`, castle)
    return response.data
}

export async function deleteCastle(id) {
    //  await jumpingForJoyAPI.delete()
    const response = await jumpingForJoyAPI.delete(`/api/castles/${id}`)
    return response.data
}   