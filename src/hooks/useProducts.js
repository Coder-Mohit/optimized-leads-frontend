import { useQuery } from "@tanstack/react-query";
import productService from "../services/productService";

// Hook for fetching all products
export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: productService.getAllProducts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};

// Hook for fetching products by category
export const useProductsByCategory = (category) => {
  console.log("useProductsByCategory called with category:", category);

  const result = useQuery({
    queryKey: ["products", category],
    queryFn: () => {
      console.log("Query function called for category:", category);
      return productService.getProductsByCategory(category);
    },
    enabled: !!category, // Only run query if category is provided
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });

  console.log("useProductsByCategory result:", {
    isLoading: result.isLoading,
    error: result.error,
    data: result.data,
    dataLength: result.data?.length,
  });

  return result;
};

// Hook for fetching single product by ID
export const useProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => productService.getProductById(id),
    enabled: !!id, // Only run query if ID is provided
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 2,
  });
};

export default useProducts;
