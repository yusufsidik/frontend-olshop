export const getBrands = async () => {  
  const res = await fetch('http://localhost:8000/brand', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};