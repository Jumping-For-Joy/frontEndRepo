export default function reducer (state, action) {
    switch(action.type) {
        case 'setCastles': {
            return {
                ...state,
                castles: action.data
            }
        }
        default: return state
    }
}