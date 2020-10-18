import { Action, Reducer } from 'redux';
import { KnownAction } from './counter';

export interface ILoginState {
    token: string;
    userName: string;
    isAuthenticated:boolean;
    redirectTo?:string;
}
let OPEN_LOGIN: string = "OPEN_LOGIN";
let OPEN_LOGOUT: string = "OPEN_LOGOUT";
export interface IOpenLoginAction { type: "OPEN_LOGIN" }
export interface IOpenLogoutAction { type: "OPEN_LOGOUT" }
export type OpenAuthAction = IOpenLoginAction | IOpenLogoutAction;

export const actionCreators = {
    login: () => ({ type: "OPEN_LOGIN" } as IOpenLoginAction),
    logout: () => ({ type: "OPEN_LOGOUT" } as IOpenLogoutAction)
};

export const reducer:
    Reducer<ILoginState> = (state: ILoginState | undefined, incomingAction: Action): ILoginState => {

        if (state == undefined) {
            return { token: null, userName: null,isAuthenticated:false };
        }

        const action = incomingAction as OpenAuthAction;
        
        switch (action.type) {
            case "OPEN_LOGIN":
                return { redirectTo:"/dashboard", token: 'sample Token', userName: 'admin',isAuthenticated:true };
            case "OPEN_LOGOUT":
                return { token: null, userName: null,isAuthenticated:null };
            default:
                return state;
        }

    };