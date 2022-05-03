import AddTransactionForm from "../Form/addTransactionForm";
import "./transaction-modal.css";

const TransactionModal = ({ close, open }) => {
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
              <AddTransactionForm className="form" />
            </div>
            <div className="modalFooter">
              <button
                type="button"
                className="btn cancel"
                onClick={() => close(false)}
              >
                Cancel
              </button>
              <button type="button" className="btn save" onClick>
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
