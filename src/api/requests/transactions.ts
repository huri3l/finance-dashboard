import { transactionsMock } from "./mock"

export interface Transaction {
  id: string
  date: string
  description: string
  amount: number
}

export const fetchTransactions = async (): Promise<Transaction[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(transactionsMock)
    }, 1000)
  })
}