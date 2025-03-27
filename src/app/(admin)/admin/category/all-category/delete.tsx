import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"


import { deleteCategory } from "@/server/category";
import { useRouter } from "next/navigation"
import { useState } from "react";

export default function DeleteCategory(props:any) {
  const { _id, name } = props.category

  const [loadingDelete, setLoadingDelete] = useState<boolean>(false)
  const router = useRouter()

  function onDelete(id: string) {
    deleteCategory(id)
    router.push('/admin/category')   
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" className="cursor-pointer">Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete Category</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete category <b>{name}</b>?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="outline" className="cursor-pointer">
              Close
            </Button>
          </DialogClose>
          <Button variant="destructive" className="cursor-pointer" onClick={() => {
            onDelete(_id) 
            setLoadingDelete(true)
          }}>
            {loadingDelete ? <Loader2 className="animate-spin" /> : null}
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
  
}