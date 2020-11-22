export interface IState {
    state: {};
};

interface IUpdateData {
    type: "UPDATE_DATA";
};

export type Actions = IUpdateData;

export const initialState: IState = {
    state: {},
};

export const reducer = (state: IState, action: Actions) => {
    switch (action.type) {
        case "UPDATE_DATA":
        // Do a fetch and grab new data
        return { ...state, state: {} };
    }
};