import {createStore,combineReducers, compose, applyMiddleware} from 'redux';
import  {productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';
import cartReducer from './reducers/cartReducers';
import Cookie from 'js-cookie';
import {userSigninRducer,userRegisterReducer} from './reducers/userReducers';
const cartItems=Cookie.getJSON("cartItems") || [];
const userInfo=Cookie.getJSON("userInfo") || null;

const initialState={cart:{cartItems,shipping:{},payment:{}},userSignin:{userInfo}};
const reducer=combineReducers({
    productList: productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userSignin:userSigninRducer,
    userRegister:userRegisterReducer,
    productSave:productSaveReducer,
    productDelete:productDeleteReducer,
})
const composeEnhancer=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(reducer, initialState,composeEnhancer(applyMiddleware(thunk)));
export default store;