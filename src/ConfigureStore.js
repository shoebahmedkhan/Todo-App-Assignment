import { createStore, combineReducers } from "redux";
import todos from "./reducers/TodosReducer"
import {searchReducer} from "./reducers/searchReducer";

export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        todos,searchReducer
    }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}