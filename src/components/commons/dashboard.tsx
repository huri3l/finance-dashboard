import { useTransactions } from "@/api/hooks/use-transactions"
import { useState } from "react"
import { z } from "zod"
import { FilterSection, FormSchema } from "./filter-section"
import { Loading } from "./loading"
import { TransactionsTable } from "./transactions-table"

export function Dashboard() {
  const [initialDate, setInitialDate] = useState<Date>()
  const [finalDate, setFinalDate] = useState<Date>()
  const { data: transactions, isLoading, isError } = useTransactions({
    initialDate,
    finalDate,
  })

  const onFilter = (data: z.infer<typeof FormSchema>) => {
    setInitialDate(data.initial_date)
    setFinalDate(data.final_date)
  }

  if (isLoading) return <Loading />

  return (
    <div className="size-full p-10 lg:px-64 space-y-10">
      <h1 className="font-bold text-2xl">Dashboard</h1>

      <FilterSection onSubmit={onFilter} />

      <TransactionsTable transactions={transactions} />
    </div>
  )
}