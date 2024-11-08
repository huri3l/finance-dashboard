import { useQuery } from "@tanstack/react-query"
import { fetchTransactions } from "../requests/transactions"

interface UseTransactionsProps {
  initialDate: Date,
  finalDate: Date,
}

export const useTransactions = ({
  initialDate,
  finalDate
}: UseTransactionsProps) => {
  return useQuery({
    queryKey: ['transactions'],
    queryFn: fetchTransactions
  })
}