import { Transaction } from "@/api/requests/transactions"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface TransactionsTableProps {
  transactions?: Transaction[]
}

export const TransactionsTable = ({ transactions }: TransactionsTableProps) => {
  return transactions ? (
    <Table>
      <TableCaption>A list of transactions.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions?.map(({ amount, date, description, id }) => (
          <TableRow key={id}>
            <TableCell className="font-medium">{id}</TableCell>
            <TableCell>{description}</TableCell>
            <TableCell>{date}</TableCell>
            <TableCell className="text-right">{amount.toLocaleString("en-US", {
              style: "currency",
              currency: "USD"
            })}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ) : (
    <div className="size-full min-h-64 flex justify-center items-center">
      <p className="text-muted-foreground">No transactions to be shown</p>
    </div>
  )
}