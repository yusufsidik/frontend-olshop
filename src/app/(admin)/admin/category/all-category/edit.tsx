'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useQuery } from "@tanstack/react-query"


import { getCategories } from "@/server/category";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { z } from "zod"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "sonner"
interface AllCategories {
  _id: string;
  name: string;
  parentCategory?: {
    _id: string;
    name: string;
    parentCategory: string;
  }
  createdAt: string;
  updatedAt: string;
}

const formSchema = z.object({
  name: z.string().min(2).max(50),
  parentCategory: z.string(),
})

export default function EditCategory(props: any) {

  const {dataCategory} = props

  const { data } = useQuery<AllCategories[]>({
    queryKey: ['categories'],
    queryFn: getCategories
  })

  const categories = data?.filter((category) => !category.parentCategory);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: dataCategory.name,
      parentCategory: dataCategory.parentCategory,
    },
  })


  const mutation = useMutation({
    mutationFn: (formData: z.infer<typeof formSchema>) => {
      return axios.put(`http://localhost:8000/category/${dataCategory._id}`, formData);
    },
    onError: (error) => {
      toast.error(`Error creating category : ${error}`);
    },
    onSuccess: () => {
      toast.success("Category created successfully");
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // mutation.mutate(values);
    console.log(values) 
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form  onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" id="categoryFormEdit">
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name Category</FormLabel>
                    <FormControl>
                      <Input placeholder="Input Category" {...field}  />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="parentCategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parent Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="max-w-[580px] w-full">
                          <SelectValue placeholder="Select Parent Category" defaultValue={dataCategory.name}/>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories?.map((category, index) => (
                          category._id === dataCategory.parentCategory 
                          ? 
                            <SelectItem key={index} value={dataCategory._id}>{dataCategory.name}</SelectItem> 
                          : 
                            <SelectItem key={index} value={category._id}>{category.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Save changes</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}