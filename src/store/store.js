import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



function ran(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
    
}


const initialState = {
        user: {
         name: "Kat Dennings",
         username: "through_my_quirky_lens",
         followers: 283,
         following: 274,
        posts: [
            {
                id: 1,
                likes: ran(10, 1000),
                comments: ran(10, 1000),
            },
            {
                id: 2,
                likes: ran(10, 1000),
                comments: ran(10, 1000),
            },
            {
                id: 3,
                likes: ran(10, 1000),
                comments: ran(10, 1000),
            },
            {
                id: 4,
                likes: ran(10, 1000),
                comments: ran(10, 1000),
            },
            {
                id: 5,
                likes: ran(10, 1000),
                comments: ran(10, 1000),
            },
            {
                id: 6,
                likes: ran(10, 1000),
                comments: ran(10, 1000),
            },
         ],
        bio: "World through my lens",
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const reduxDevToolEnabler =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(thunk), reduxDevToolEnabler)
);

export default store;
