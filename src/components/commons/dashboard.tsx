import { useTransactions } from "@/api/hooks/use-transactions"
import { useMemo, useState } from "react"
import { toast } from "sonner"
import { z } from "zod"
import { FilterSection, FormSchema } from "./filter-section"
import { Loading } from "./loading"
import { TransactionsTable } from "./transactions-table"

export function Dashboard() {
  const [initialDate, setInitialDate] = useState<Date>()
  const [finalDate, setFinalDate] = useState<Date>()
  const { data: transactions, isLoading, isError } = useTransactions()

  const filteredTransactions = useMemo(() => transactions?.filter((transaction) => {
    if (!initialDate || !finalDate) return true;
    const transactionDate = new Date(transaction.date);
    return (
      transactionDate >= new Date(initialDate) && transactionDate <= new Date(finalDate)
    );
  }), [transactions, initialDate, finalDate]);

  const onFilter = ({ initial_date, final_date }: z.infer<typeof FormSchema>) => {
    if (!initial_date || !final_date) {
      toast.error("In order to filter, it is necessary to provide both initial and final dates")
    }

    setInitialDate(initial_date)
    setFinalDate(final_date)
  }

  const onCleanFilter = () => {
    setInitialDate(undefined)
    setFinalDate(undefined)
  }

  if (isLoading) return <Loading />

  return (
    <div className="size-full p-10 xl:px-64 space-y-10">
      <h1 className="font-bold text-2xl">Dashboard</h1>

      <FilterSection onSubmit={onFilter} onClean={onCleanFilter} />
      <TransactionsTable transactions={filteredTransactions} />
    </div>
  )
}