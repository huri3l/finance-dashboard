import { useQuery } from "@tanstack/react-query"
import { fetchTransactions } from "../requests/transactions"

export const useTransactions = () => {
  return useQuery({
    queryKey: ['transactions'],
    queryFn: fetchTransactions
  })
}