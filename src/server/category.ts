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

export const deleteCategory = async (param: string) => {
  await axios.delete(`http://localhost:8000/category/${param}`);
}