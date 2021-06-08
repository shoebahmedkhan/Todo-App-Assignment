import { createStore, combineReducers } from "redux";
import todos from "./reducers/TodosReducer"

export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        todos,
    }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}