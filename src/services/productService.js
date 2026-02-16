import axiosInstance from "./axiosInstance";

const productService = {
  // Get all products
  getAllProducts: async () => {
    try {
      const response = await axiosInstance.get("api/products/");
      console.log("Products API Response:", response.data);

      // Handle the nested data structure
      if (response.data?.status && response.data?.data) {
        return response.data.data;
      }

      // Fallback for different response formats
      return response.data || [];
    } catch (error) {
      console.error("Error fetching all products:", error);
      throw error;
    }
  },

  // Get products by category
  getProductsByCategory: async (category) => {
    console.log("productService.getProductsByCategory called with:", category);

    try {
      const url = `api/products/?category=${encodeURIComponent(category)}`;
      console.log("Making API call to:", url);

      const response = await axiosInstance.get(url);
      console.log(
        `Products by category (${category}) API Response:`,
        response.data,
      );
      console.log(
        `Full API URL: ${response.config.baseURL}${response.config.url}`,
      );

      // Handle the nested data structure
      if (response.data?.status && response.data?.data) {
        console.log("Returning nested data array:", response.data.data);
        return response.data.data;
      }

      // Fallback for different response formats
      console.log("Returning fallback data:", response.data || []);
      return response.data || [];
    } catch (error) {
      console.error(`Error fetching products for category ${category}:`, error);
      console.error("Error details:", error.response?.data || error.message);
      throw error;
    }
  },

  // Get single product by ID
  getProductById: async (id) => {
    console.log("productService.getProductById called with:", id);

    try {
      const response = await axiosInstance.get(`api/products/${id}/`);
      console.log(`Product by ID (${id}) API Response:`, response.data);

      // Handle the nested data structure
      if (response.data?.status && response.data?.data) {
        return response.data.data[0]; // Single product
      }

      // Fallback for different response formats
      return response.data;
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      throw error;
    }
  },
};

export default productService;
