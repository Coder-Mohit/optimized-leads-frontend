import { Crown, Star, Zap } from "lucide-react";

// Transform API product data to UI format
export const transformProductToPlan = (product, index) => {
  // Parse features from comma-separated string or use defaults
  let features = [];
  if (product.features) {
    features = product.features.split(',').map(f => f.trim()).filter(f => f.length > 0);
  }
  
  // Default features if none provided
  if (features.length === 0) {
    features = [
      "Dedicated Dashboard",
      "Account Manager", 
      "24×7 Leads Support",
      "Quality Verification"
    ];
  }

  return {
    id: product.id,
    name: product.heading || product.name || `Plan ${index + 1}`,
    price: product.price || "15,000",
    description: product.short_description || product.long_description || "Premium Leads Subscription",
    icon: index === 1 ? Crown : index === 2 ? Star : Zap,
    iconBg: index === 1 ? "bg-gradient-to-br from-indigo-500 to-purple-600" : 
              index === 2 ? "bg-blue-700" : "bg-blue-600",
    popular: product.plan_type === 'premium' || index === 1,
    features: features,
    button: `Get Started with ${product.heading || product.name || `Plan ${index + 1}`}`,
    link: `/product_details/?id=${product.id}`,
    // Additional API fields for potential future use
    unit: product.unit,
    plan_type: product.plan_type,
    country: product.country,
    product_image: product.product_image
  };
};

// Transform multiple products to plans
export const transformProductsToPlans = (products) => {
  if (!products || !Array.isArray(products)) {
    return [];
  }
  
  return products.map((product, index) => transformProductToPlan(product, index));
};
