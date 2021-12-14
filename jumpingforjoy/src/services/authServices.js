import jumpingForJoyAPI from '../config/api'

export async function signIn() {
    const response = await jumpingForJoyAPI.get('/api/auth/signin')
    console.log(response)
    // .then
    // .catch
}