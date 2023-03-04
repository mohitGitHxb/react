
import { cartActions } from "./CartSlice";
import { uiActions } from "./UIslice";

export const fetchCartData = (cartData) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://reacttutorials-ae7db-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.JSON();
      return data;
    };
    try {
      await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching data failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {                      
    dispatch(
      uiActions.showNotification({
        status: "Pending",
        title: "sending..",
message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
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
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "Success",
          title: "Success!",
          message: "Cart data sent",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    }
  };
};
