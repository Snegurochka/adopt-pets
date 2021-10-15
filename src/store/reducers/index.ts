import { combineReducers } from "redux";
import location from "./location";
import theme from "./theme";
import animal from "./animal";
import breed from "./breed";

const reducer = combineReducers({
    location,
    theme,
    animal,
    breed,
});

type RootReducerType = typeof reducer;
export type AppStateType = ReturnType<RootReducerType>;

export default reducer;