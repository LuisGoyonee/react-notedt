export function store(data) {
  if (localStorage.length === 0) {
    localStorage.setItem("lastKey", "0");
    localStorage.setItem("0", JSON.stringify(data));
  } else {
    var lastKey = localStorage.getItem("lastKey");
    var newKey = parseInt(lastKey) + 1;
    localStorage.setItem("lastKey", newKey);
    localStorage.setItem(newKey, JSON.stringify(data));
  }
}

export function retrieveTransactions() {
  var transactions = [];
  var lastKey = localStorage.getItem("lastKey");
  for (var i = 0; i <= lastKey; i++) {
    if (localStorage.getItem(i)) {
      transactions.push(JSON.parse(localStorage.getItem(i)));
    } else {
      break;
    }
  }
  return transactions;
}

export function checker() {
  var lastKey = localStorage.getItem("lastKey");
  var transactions = null;
  var hasValidItems = localStorage.length > 1; // last key excluded
  if (hasValidItems) {
    transactions = [];
    for (let i = 1; i <= lastKey; i++) {
      if (localStorage[i] !== null) {
        transactions.push(JSON.parse(localStorage[i]));
      }
    }
  }
  return transactions;
}

export function populateData() {}

export function getTotalSavings() {
  var total = 0;
  var transactions = retrieveTransactions();
  if (transactions !== null) {
    transactions.forEach((item) => {
      if (item.amount > 0) {
        if (item.transactionType === "Income") {
          total += parseFloat(item.amount);
        } else if (item.transactionType === "Expense") {
          total -= parseFloat(item.amount);
        }
      }
      return total;
    });
  }
  return total;
}
