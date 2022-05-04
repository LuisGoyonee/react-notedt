import { useForm } from "react-hook-form";
import "./transaction-modal.css";
import { store } from "../../scripts/local-storage";
import checkIcon from "../../assets/check.svg";
import Toast from "../Toast/toast";

const TransactionModal = ({ close }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    handleSubmit(data);
    reset();
    close();

    store(data);
  };
  return (
    <>
      <div className="modalContainer">
        <div className="modal">
          <div className="modalBackground">
            <div className="modalHeader">
              <p className="title">Add Transaction</p>
            </div>
            <div className="modalBody">
              <div className="categories">
                <div className="subTitle">
                  <p id="textCategories">Categories</p>
                </div>
                <div className="heading font-medium">
                  <p id="textExpenses" className="font-medium">
                    Essential Expenses
                  </p>
                </div>
                <div className="expenses">
                  <li>Electricity Bill</li>
                  <li>Water Bill</li>
                  <li>Phone Bill</li>
                  <li>Internet Bill</li>
                  <li>Rentals</li>
                </div>
              </div>
              <form className="form">
                <div className="formGroup">
                  <select
                    className="w-full rounded-md input"
                    {...register("transactionType")}
                  >
                    <option id="income">Income</option>
                    <option id="expense">Expense</option>
                  </select>
                </div>
                <div className="formGroup">
                  <label>Amount</label>
                  <input
                    className="w-full rounded-md input"
                    type="text"
                    placeholder="PHP 0.00"
                    id="amount"
                    {...register("amount")}
                  ></input>
                </div>
                <div className="formGroup">
                  <label>Date</label>
                  <input
                    className="w-full rounded-md input uppercase"
                    type="date"
                    placeholder="mm/dd/yyyy"
                    {...register("date")}
                    id="date"
                  ></input>
                </div>
                <div className="formGroup">
                  <label>Description (optional)</label>
                  <textarea
                    className="w-full rounded-md input"
                    placeholder="description"
                    {...register("description")}
                    id="description"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modalFooter">
              <button
                type="button"
                className="btn cancel modalButton"
                onClick={() => close(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn save modalButton"
                value="Submit"
                onClick={handleSubmit(onSubmit)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionModal;
