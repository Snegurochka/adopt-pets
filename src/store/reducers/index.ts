import { combineReducers } from "redux";
import accessToken from "./accessToken";
import auth from "./auth";
import location from "./location";
import theme from "./theme";
import animal from "./animal";
import animals from "./animals";
import favorites from "./favorites";
import breed from "./breed";

const reducer = combineReducers({
    accessToken,
    auth,
    location,
    theme,
    animal,
    animals,
    favorites,
    breed,
});

type RootReducerType = typeof reducer;
export type AppStateType = ReturnType<RootReducerType>;

export default reducer;