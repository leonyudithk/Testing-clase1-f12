import authReducer from "../../auth/authReducer"
import { types } from "../../types/types"

describe('Pruebas a authReducers', () => {
        test('Retornar por defecto', () => {
            const state= authReducer({logged: false}, {})
            expect(state).toEqual({logged: false})
        })

        test('Debo login con nombre de usuario', () => {
            //arrglear

            const action ={
                type: types.login,
                payload:{ name: "Yudith"}
            }
            const state= authReducer({logged: false}, action)

            expect(state).toEqual({logged: true, name: "Yudith"})

        })

        test('Debo hacer logout logget este en false', () => {
            //arrglear

            const action ={
                type: types.logout,
              
            }
            const state= authReducer({logged: false}, action)

            expect(state).toEqual({logged: false})

        })

})