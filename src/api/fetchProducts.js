const fetchProducts = async (query) => {
   const response = await fetch(`https://api.escuelajs.co/api/v1/products/?title=${query}`);
   const data = await response.json();
   return data;
};
export default fetchProducts;
