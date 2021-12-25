import {
  GET_DATA,
  ITEMS_LOADING,
  NEW_PAYMENT,
} from "../actionType/transactionTypes";

export function getData(payload) {
  return {
    type: GET_DATA,
    payload,
  };
}

function itemsLoading(payload) {
  return {
    type: ITEMS_LOADING,
    payload,
  };
}

export function newPayment(payload) {
  return {
    type: NEW_PAYMENT,
    payload,
  };
}

export function fetchTransaction() {
  return function (dispatch, getState) {
    dispatch(itemsLoading(true));
    fetch("http://localhost:3000/paymentlist", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (!resp.ok) throw new Error(resp.statusText);
        return resp.json();
      })
      .then((resp1) => {
        dispatch(getData(resp1));
        dispatch(itemsLoading(false));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function addPayment(payload) {
  return function (dispatch, getState) {
    dispatch(itemsLoading(true));
    fetch(`http://localhost:3000/addpayment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    })
      .then((resp) => {
        if (!resp.ok) throw new Error(resp.statusText);
        return resp.json();
      })
      .then((resp1) => {
        return fetch("http://localhost:3000/paymentlist", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
      })
      .then((resp2) => {
        if (!resp2.ok) throw new Error(resp2.statusText);
        return resp2.json();
      })
      .then((resp3) => {
        dispatch(newPayment(resp3));
        dispatch(itemsLoading(false));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
