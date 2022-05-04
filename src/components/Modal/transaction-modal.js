import { useForm } from "react-hook-form";
import "./transaction-modal.css";
import { store } from "../../scripts/local-storage";
import { DateToday } from "../../constants/date";
import moment from "moment";

const TransactionModal = ({ close }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    handleSubmit(data);
    reset();
    close();
    store(data);
  };
  console.log(DateToday);
  return (
    <>
      <div className="modalContainer">
        <div className="modal">
          <div className="modalBackground">
            <div className="modalHeader">
              <p className="title">Add Transaction</p>
            </div>
            <div className="modalBody">
              <form className="form">
                <div className="formGroup">
                  <div class="w-full">
                    <select
                      class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded-md  transition ease-in-out m-0 focus:outline-none input"
                      {...register("transactionType")}
                    >
                      <option id="income"> Income</option>
                      <option id="expense">Expense</option>
                    </select>
                  </div>
                </div>
                <div className="formGroup">
                  <label>Category</label>
                  <div class="flex justify-center">
                    <div class="w-full">
                      <select
                        class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded-md  transition ease-in-out m-0 focus:outline-none input"
                        {...register("category")}
                      >
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="formGroup">
                  <label>Date</label>
                  <input
                    className="w-full rounded-md input uppercase focus:outline-none"
                    type="date"
                    id="date"
                    value={moment().startOf("day").format("YYYY-MM-DD")}
                    {...register("date")}
                    {...register("date")}
                  ></input>
                </div>

                <div className="formGroup">
                  <label>Amount</label>
                  <input
                    className="w-full rounded-md input focus:outline-none"
                    type="text"
                    placeholder="PHP 0.00"
                    id="amount"
                    {...register("amount")}
                  ></input>
                </div>
                <div className="formGroup">
                  <label>Description (optional)</label>
                  <textarea
                    className="w-full rounded-md input focus:outline-none"
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
