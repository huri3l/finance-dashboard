import { Loader2 } from "lucide-react"

export const Loading = () => {
  return (
    <div className="size-full min-h-56 flex justify-center items-center">
      <Loader2 className="size-10 animate-spin" />
    </div>
  )
}