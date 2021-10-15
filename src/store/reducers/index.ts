import { combineReducers } from "redux";
import location from "./location";
import theme from "./theme";
import animal from "./animal";
import animals from "./animals";
import breed from "./breed";

const reducer = combineReducers({
    location,
    theme,
    animal,
    animals,
    breed,
});

type RootReducerType = typeof reducer;
export type AppStateType = ReturnType<RootReducerType>;

export default reducer;