import { useForm } from "react-hook-form";
import "./transaction-modal.css";
import { store } from "../../scripts/local-storage";
import moment from "moment";
import { useEffect, useState } from "react";
import { Expense, Income } from "../../constants/catagories";

const TransactionModal = ({ close }) => {
  const { register, handleSubmit, reset } = useForm();

  const [formState, setFormState] = useState({
    transactionType: null,
    category: "",
    amount: "",
    date: moment().format("YYYY-MM-DD"),
    description: "",
  });
  console.log(formState);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  console.log(formState);
  const onSubmit = (data) => {
    handleSubmit(data);
    store(data);
    console.log(data);
    reset();
    close();
  };

  useEffect(() => {}, [formState]);
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
                      onClick={handleInputChange}
                      placeholder={formState.transactionType}
                    >
                      <option value="Income" id="income">
                        {" "}
                        Income
                      </option>
                      <option value="Expense" id="expense">
                        Expense
                      </option>
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
                        onClick={handleInputChange}
                        disabled={formState.transactionType === null}
                      >
                        {formState.transactionType === "Income"
                          ? Income.map((item) => {
                              return <option value={item}>{item}</option>;
                            })
                          : Expense.map((item) => {
                              const { category, subCategory } = item;
                              return (
                                <>
                                  <optgroup label={category}>
                                    {subCategory.map((item) => {
                                      return (
                                        <option value={item}>{item}</option>
                                      );
                                    })}
                                  </optgroup>
                                </>
                              );
                            })}
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
                    value={formState.date}
                    {...register("date")}
                    onChange={handleInputChange}
                    required
                  ></input>
                </div>

                <div className="formGroup">
                  <label>Amount</label>
                  <input
                    className="w-full rounded-md input focus:outline-none"
                    type="number"
                    placeholder="PHP 0.00"
                    id="amount"
                    {...register("amount")}
                    onChange={handleInputChange}
                    required
                  ></input>
                </div>
                <div className="formGroup">
                  <label>Description (optional)</label>
                  <textarea
                    className="w-full rounded-md input focus:outline-none"
                    placeholder="description"
                    {...register("description")}
                    onChange={handleInputChange}
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
