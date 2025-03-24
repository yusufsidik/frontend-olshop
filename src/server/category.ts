import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const getCategories = async () => {  
  const res = await axios.get('http://localhost:8000/category');
  return res.data;
};

export const getSubCategoriesWithCategories = async () => {  
  const res = await axios.get('http://localhost:8000/category/subcategory-with-category');
  return res.data;
};

export const postCategory = async (param: string) => {
  console.log(param)
  // const mutation = useMutation({
  //   mutationFn: (newTodo) => {
  //     return axios.post('/todos', newTodo)
  //   },
  // })
}