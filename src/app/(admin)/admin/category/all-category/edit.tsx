"use client"

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useMutation, useQuery } from "@tanstack/react-query"
import { getCategories } from "@/server/category";
import axios from "axios"
import { redirect } from 'next/navigation'

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
  _id: z.string(),
  name: z.string().min(2).max(50),
  parentCategory: z.string().nullable(),
})

export default function EditCategory(props:any) {

  const dataCategory = props.category

  
  const { data } = useQuery<AllCategories[]>({
    queryKey: ['categories'],
    queryFn: getCategories
  })

  const categories = data?.filter((category) => !category.parentCategory);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      _id: dataCategory._id,
      name: dataCategory.name,
      parentCategory: dataCategory.parentCategory?._id || null,
    },
  })

  const mutation = useMutation({
    // mutationFn: (formData: z.infer<typeof formSchema>) => {
    //   return axios.post("http://localhost:8000/category", formData);  
    // },
    // onError: (error) => {
    //   console.log("Error mutation",error)
    //   toast.error("Error creating category");
    // },
    // onSuccess: (data) => {
    //   toast.success("Category created successfully");
    //   redirect("/admin/category/all-category")
    // },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // mutation.mutate(values);
    console.log(values)
  }


  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="default" asChild><span>Edit</span></Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" id="categoryForm">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name Category</FormLabel>
                  <FormControl>
                    <Input type="text" {...field}  />
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
                  <Select onValueChange={field.onChange} defaultValue={dataCategory.parentCategory?._id.toString()}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a Parent Category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {
                        categories?.map((category) => {
                          return (
                            <SelectItem key={category._id} value={category._id}>{category.name}</SelectItem>
                          )
                        })
                      }
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="_id"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input type="hidden" className="border border-gray-300 rounded-md p-2" {...field}  />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
    
  )
}