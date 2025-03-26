"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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



import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useMutation, useQuery } from "@tanstack/react-query"
import { getCategories } from "@/server/category";
import axios from "axios"
import { useRouter } from 'next/navigation'



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

export default function CreateCategory() {

  const { data } = useQuery<AllCategories[]>({
    queryKey: ['categories'],
    queryFn: getCategories
  })

  const categories = data?.filter((category) => !category.parentCategory);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      parentCategory: "",
    },
  })

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (formData: z.infer<typeof formSchema>) => {
      return axios.post("http://localhost:8000/category", formData);
    },
    onError: (error) => {
      toast.error(`Error creating category : ${error}`);
    },
    onSuccess: () => {
      toast.success("Category created successfully");
      router.push("/admin/category");
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
  }
  

  return (
    <Card className="lg:col-span-4">
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <CardTitle>Add a Category</CardTitle>
            <CardDescription>You have Description</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" id="categoryForm">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name Category</FormLabel>
                  <FormControl>
                    <Input placeholder="Input Category" {...field} />
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
                  <Select 
                    onValueChange={field.onChange} 
                    value={field.value || undefined} 
                    defaultValue=""
                  >
                    <FormControl>
                      <SelectTrigger className="max-w-[580px] w-full">
                        <SelectValue placeholder="Select Parent Category" ref={field.ref}/>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent >
                      {categories?.map((category, index) => (
                        <SelectItem key={index} value={category._id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}