import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import BookingReducer from "./reducers/BookingReducer";
import userReducer from "./reducers/userReducer";
import LoadingReducer from "./reducers/LoadingReducer";
import ModalReducer from "./reducers/ModalReducer";
import TicketReducer from "./reducers/TicketReducer";
import AdminReducer from "./reducers/AdminReducer";
import TripReducer from "./reducers/TripReducer";
import DrawerReducer from "./reducers/DrawerReducer";
import PassengerReducer from "./reducers/PassengerReducer";
import vehicleReducer from "./reducers/vehicleReducer";
import CommentReducer from "./reducers/CommentReducer";
import timePointReducer from "./reducers/timePointReducer";
import StationReducer from "./reducers/StationReducer";
import PointReducer from "./reducers/PointReducer";
import priceHeaderReducer from "./reducers/PriceHeaderReducer";
import priceLineReducer from "./reducers/PriceLineReducer";
import promotionHeader from "./reducers/PromotionHeader";

const rootReducer = combineReducers({
	BookingReducer,
	userReducer,
	LoadingReducer,
	ModalReducer,
	TicketReducer,
	AdminReducer,
	TripReducer,
	DrawerReducer,
	PassengerReducer,
	vehicleReducer,
	CommentReducer,
	timePointReducer,
	StationReducer,
	PointReducer,
	priceHeaderReducer,
	priceLineReducer,
	promotionHeader
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
