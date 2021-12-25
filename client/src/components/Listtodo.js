import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransaction } from "../store/actionCreator/transactionAction";
import bird from "../assets/bird-dance.gif";

export default function Home() {
  const dispatch = useDispatch();
  const { transactions, isLoading } = useSelector((state) => state.transaction);

  useEffect(() => {
    dispatch(fetchTransaction());
  }, []);

  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  }

  if (isLoading) {
    return (
      <>
        <img
          style={{ marginLeft: 500, marginTop: 250 }}
          src={bird}
          alt="loading..."
        />
      </>
    );
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <div
                style={{
                  backgroundColor: "#112D4A",
                  width: 85,
                  paddingLeft: 10,
                  borderRadius: 20,
                  color: "white",
                }}
              >
                Number
              </div>
            </th>
            <th scope="col">
              <div
                style={{
                  backgroundColor: "#FBAC17",
                  width: 110,
                  paddingLeft: 10,
                  borderRadius: 20,
                  color: "whitesmoke",
                }}
              >
                Description
              </div>
            </th>
            <th scope="col">
              <div
                style={{
                  backgroundColor: "#112D4A",
                  width: 65,
                  paddingLeft: 10,
                  borderRadius: 20,
                  color: "whitesmoke",
                }}
              >
                Type
              </div>
            </th>
            <th scope="col">
              <div
                style={{
                  backgroundColor: "#FBAC17",
                  width: 85,
                  paddingLeft: 10,
                  borderRadius: 20,
                  color: "whitesmoke",
                }}
              >
                Amount
              </div>
            </th>

            <th scope="col">
              {" "}
              <div
                style={{
                  backgroundColor: "#112D4A",
                  width: 85,
                  paddingLeft: 10,
                  borderRadius: 20,
                  color: "white",
                }}
              >
                Balance
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((e, i) => {
            return (
              <tr key={e.id}>
                <td
                  style={{
                    textDecorationLine: e.isDone ? "line-through" : "none",
                  }}
                >
                  {i + 1}
                </td>
                <td>{e?.name}</td>
                <td
                  style={{
                    color: e.type === "income" ? "#4DED30" : "#FE0000",
                  }}
                >
                  {e?.type}
                </td>
                <td>{numberWithCommas(e?.amount)}</td>
                <td>{numberWithCommas(e?.balance)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
