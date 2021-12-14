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

}

export async function updateCastle(castle) {

}

export async function deleteCastle(castle) {
 
}