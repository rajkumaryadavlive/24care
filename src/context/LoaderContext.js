import React, { createContext, useReducer } from "react";

export const LoaderContext = createContext();

const initialState = {
    loading: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SHOWLOADER":
            return {
                loading: true,
            };
        case "HIDELOADER":
            return {
                loading: false,
            };
        default:
            return state;
    }
};

export const LoaderContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <LoaderContext.Provider value={[state, dispatch]}>
            {props.children}
        </LoaderContext.Provider>
    );
};
