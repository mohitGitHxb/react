import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
// !import { uiActions } from "./store/UIslice";
import Notification from "./components/UI/Notification"
import { fetchCartData, sendCartData } from "./store/CartActions";



let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

useEffect(()=>{
  dispatch(fetchCartData());
},[dispatch])

  useEffect(() => {
   /*  const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "Pending",
          title: "sending..",
          message: "Sending cart data",
        })
      );
      const response = await fetch(
        "https://reacttutorials-ae7db-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        uiActions.showNotification({
          status: "Error",
          title: "Error",
          message: "Something went wrong",
        });
      }
      dispatch(
        uiActions.showNotification({
          status: "Success",
          title: "Success!",
          message: "Cart data sent",
        })
      );

      const responseData = await response.json();
    }; */

    if(isInitial){
      isInitial = false;
      return ;
    }
    /* sendCartData().catch((e) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: e.message,
        })
      );
    }); */

    if(!cart.changed){
      return;
    }
    dispatch(
      sendCartData(cart)
    );
  }, [cart,dispatch]);


  return (
    <React.Fragment>
    {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </React.Fragment>
  );
}

export default App;
