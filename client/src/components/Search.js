import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPayment } from "../store/actionCreator/transactionAction";

export default function Home() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState({
    transactionName: "",
    transactionAmount: 0,
    transactionType: "",
  });

  const changeListInput = (e) => {
    const newInput = {
      ...search,
    };
    const field = e.target.name;
    newInput[field] = e.target.value;
    setSearch(newInput);
  };

  const addTransButton = (e) => {
    e.preventDefault();
    let payload = JSON.stringify({
      transactionName: search.transactionName,
      transactionAmount: search.transactionAmount,
      transactionType: search.transactionType,
    });
    dispatch(addPayment(payload));
  };

  return (
    <form>
      <div className="row">
        <h5>Add Transaction</h5>
      </div>
      <div className="row">
        <div className="col-2">
          <input
            type="text"
            className="form-control"
            name="transactionName"
            onChange={changeListInput}
            placeholder="Name"
            aria-label="Name"
          />
        </div>
        <div className="col-2">
          <input
            type="text"
            className="form-control"
            name="transactionAmount"
            onChange={changeListInput}
            placeholder="Amount"
            aria-label="Amount"
          />
        </div>
        <div className="col-2">
          <select
            name="transactionType"
            className="form-select"
            autoComplete="department"
            onChange={changeListInput}
          >
            <option default selected disabled>
              Select type
            </option>
            <option value="income">Income</option>
            <option value="expense">expense</option>
          </select>
        </div>
        <div className="col-2">
          <button
            type="submit"
            style={{ backgroundColor: "#112D4A" }}
            className="btn btn-primary"
            onClick={addTransButton}
          >
            Add Transaction
          </button>
        </div>
      </div>
    </form>
  );
}
