import { UPDATE_INFO } from '../actions';


const initialState =  {
    updated: false,
    user: {
        username: "Semcmill",
        business: "Seth's Bar",
        email: "semcmill@ncsu.edu",
        phone: "610-620-5389",
        address: "724 Shagbark Dr. West Chester",
        password: "testPassword"
    },
    value: "testVal"
};

export default function updateReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_INFO:
            console.log("State here:");
            //console.log(action.values);
            if(state.updated == false) {
                console.log("Set True");
                return Object.assign({}, state, {
                    updated: true,
                });
            }
            /*else {
                console.log("Set False");
                return Object.assign({}, state, {
                    updated: false
                });
            }*/
        default:
            return state;
    }
}

