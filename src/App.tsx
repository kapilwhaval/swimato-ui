import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import Home from "./screens/home";
import RestaurantDetails from "./screens/restaurant-details";
import Reviews from "./screens/restaurant-details/reviews";
import Header from "./components/shared/header";
import { persistor, store } from "./redux/store";
import Unauthorized from "./screens/authenticate/unauthorized";
import ManageRestaurants from "./screens/admin/manage-restaurants";
import AddRestaurant from "./screens/admin/add-restaurant";
import { Toaster } from "react-hot-toast";
import { useWindowWidth } from "./helpers/useWindowDimentions";
import EditRestaurant from "./screens/admin/edit-restaurant";
import Cart from "./screens/cart";
import Orders from "./screens/orders";
import Profile from "./screens/profile";

const App = () => {

  const { isMobile } = useWindowWidth();

  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <Toaster
          position={isMobile ? "top-center" : "top-right"}
          reverseOrder={false}
        />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route path="" element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="orders" element={<Orders />} />
              <Route path="profile" element={<Profile />} />
              <Route path="restaurant/:restaurantId" element={<RestaurantDetails />} >
                <Route path="reviews" element={<Reviews />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
            <Route path="/admin">
              <Route path="restaurants" element={<ManageRestaurants />} />
              <Route path="restaurant/:restaurantId" element={<EditRestaurant />} />
              <Route path="restaurants/add" element={<AddRestaurant />} />
              <Route path="*" element={<Navigate to="restaurants" />} />
            </Route>
            <Route path="/unauthorized" element={<Unauthorized />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </ReduxProvider>
  )
}

export default App;