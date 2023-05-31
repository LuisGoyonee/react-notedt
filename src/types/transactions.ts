export type TransactionItems = {
  date: string,
  amount: string,
  description: string,
  category: string,
  transactionType: TransactionType,
}

export enum TransactionType {
  INCOME = "Income",
  EXPENSE = "Expense"
}
