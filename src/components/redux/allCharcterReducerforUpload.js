import { appApi } from "../../api/api"

const GET_CHARCTERS = 'GET_CHARCTERS'


export const getCharctersAC = (charcters) => ({ type: GET_CHARCTERS, charcters });

let initialState = {
    charcters: []
}

const allCharcterReducerforUpload = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case GET_CHARCTERS:
            stateCopy = {
                ...state,
                charcters: action.charcters
            }
            return stateCopy;
        default:
            return state;
    }
}


export const getCharctersTC = () => {
    return (
        async (dispatch) => {
            let response = await appApi.apiGetCharcters()
            dispatch(getCharctersAC(response))
        }
    )
}

export default allCharcterReducerforUpload