import { combineReducers } from 'redux';
import { getAllFoodsReducer, addFoodReducer, getFoodByIdReducer, editFoodReducer } from './reducers/foodReducers';
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { cartReducer } from './reducers/cartReducers';
import { loginUserReducer, registerUserReducer, getAllUsersReducer } from './reducers/userReducers';
import { placeOrderReducer, getUserOrdersReducer, getAllOrdersReducer } from './reducers/orderReducers';

const finalReducer = combineReducers({
  getAllFoodsReducer,
  cartReducer,
  registerUserReducer,
  loginUserReducer,
  placeOrderReducer,
  getUserOrdersReducer,
  addFoodReducer,
  getFoodByIdReducer,
  editFoodReducer,
  getAllOrdersReducer,
  getAllUsersReducer,
});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;

const initialState = {
  cartReducer: {
    cartItems,
  },
  loginUserReducer: {
    currentUser,
  },
};

const composedEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composedEnhancers(applyMiddleware(thunk)),
);


export default store;
