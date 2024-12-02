import {DEPOSIT, WITHDRAW} from "../actions/accountAction.js";

/*
type State ={
    balance : number,
    owner: string,
    accNumber: number
    }
 */

export const accountReduser = (state, action) => {
    switch (action.type) {
        case DEPOSIT:
            return {...state, balance: state.balance + action.payload};
        case WITHDRAW:
            return {...state, balance: state.balance < action.payload ? state.balance
                    :state.balance - action.payload};

        default:
            return state;
    }

}