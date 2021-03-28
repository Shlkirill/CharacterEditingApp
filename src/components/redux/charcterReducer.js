import { appApi } from "../../api/api"

const GET_CHARCTER_INFO = 'GET_CHARCTER_INFO'
const EDIT_PARAMETERS = 'EDIT_PARAMETERS'
const EDIT_NAME = 'EDIT_NAME'
const INITIAL_LIFE = 'INITIAL_LIFE'
const DAMAGE_USER = 'DAMAGE_USER'

export const getInfoCharcterAC = (info) => ({ type: GET_CHARCTER_INFO, info });
export const editParmetersAC = (parameter, symbol) => ({ type: EDIT_PARAMETERS, parameter, symbol })
export const editNameAC = newName => ({ type: EDIT_NAME, newName })
export const initalLifeParametersAC = () => ({ type: INITIAL_LIFE })
export const damageUserAC = () => ({ type: DAMAGE_USER })

let initialState = {

}

const charcterReducer = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {
        case GET_CHARCTER_INFO:
            stateCopy = {
                ...action.info
            }
            return stateCopy;
        case INITIAL_LIFE:
            let strongParametr = state.basicParameters.find(item => item.name == 'Сила')
            let agility = state.basicParameters.find(item => item.name == 'Ловкость')
            let intellect = state.basicParameters.find(item => item.name == 'Интелект')
            let charisma = state.basicParameters.find(item => item.name == 'Харизма')

            stateCopy = {
                ...state,
                lifeParameter: 3 + strongParametr.points,
                energy: 10 + agility.points,
                evasion: agility.points + intellect.points,
                skills: {
                    attack: strongParametr.points,
                    archery: agility.points,
                    stealth: agility.points,
                    learnability: intellect.points,
                    survival: intellect.points,
                    medicine: intellect.points,
                    intimidation: charisma.points,
                    insight: charisma.points,
                    appearance: charisma.points,
                    manipulation: charisma.points,
                }
            }
            return stateCopy
        case EDIT_PARAMETERS:
            let pointParmCopy = state.pointParm;
            let basicParametersCopy = state.basicParameters.map(item => {
                if (item.name == action.parameter) {
                    if (action.symbol == 'PLUS') {
                        if (item.points < 5 && pointParmCopy > 0) {
                            item.points++
                            pointParmCopy--
                        }
                    }
                    if (action.symbol == 'MINUS') {
                        if (item.points > 0) {
                            item.points--
                            pointParmCopy++
                        }
                    }
                }
                return item
            })
            stateCopy = {
                ...state,
                pointParm: pointParmCopy,
                basicParameters: basicParametersCopy
            }

            return stateCopy;
        case EDIT_NAME:
            stateCopy = {
                ...state,
                name: action.newName
            }
            return stateCopy
        case DAMAGE_USER: {
            let dmgLife = 0;
            if (state.lifeParameter > 0) dmgLife = state.lifeParameter - 1
            stateCopy = {
                ...state,
                lifeParameter: dmgLife
            }
            return stateCopy
        }
        default:
            return state;
    }
}


export const getCharTC = (char) => {
    return (
        async (dispatch) => {
            let response = await appApi.apiGetInfoCharcter()
            dispatch(getInfoCharcterAC(response))
        }
    )
}

export const getSaveCharTC = (id, objChar) => {
    return (
        async (dispatch) => {
            await appApi.apiSaveCharcter(id, objChar)
        }
    )
}



export default charcterReducer