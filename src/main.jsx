import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// import productsReducer, { productFetch } from './datas/productSlice'
import { productsApi} from './datas/productApi'
import cartReducer, { getTotals } from './datas/cartSlice'
import authReducer from './datas/authSlice'
import { loadUser } from './datas/authSlice'
import adminReducer, { loadAdmin } from './datas/adminSlice'

//Note: the store is where that calls all the reducers function coming from the data folder for redux management, the <App/> component is been wrapped with the provider coming from react-redux then the "store" is been passed as props to the provider.

const store = configureStore({
  reducer: {
    // products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
    auth: authReducer,
    admin: adminReducer
    // [userApi.reducerPath]: userApi.reducer

  },
  middleware: (getDefaultMiddleware)=>{
   return getDefaultMiddleware().concat(productsApi.middleware)
  }
})



store.dispatch(getTotals())
store.dispatch(loadUser())
store.dispatch(loadAdmin())


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
