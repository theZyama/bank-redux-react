import {createStore} from "../redux/createStore.js";
import {accountReduser} from "../reducer/accountReduser.js";

const initialState = {
    balance: 0,

};

export const store = createStore(accountReduser, initialState);