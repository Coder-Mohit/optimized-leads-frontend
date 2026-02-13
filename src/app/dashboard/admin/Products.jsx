import { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import {
  ArrowUp,
  ArrowDown,
  BarChart3,
  DollarSign,
  Edit,
  Eye,
  Filter,
  Grid3X3,
  Layers,
  Package,
  Plus,
  Search,
  Star,
  Tag,
  Trash2,
  TrendingUp,
  X,
} from "lucide-react";
import { createPortal } from "react-dom";

const mockProducts = Array.from({ length: 12 }).map((_, i) => {
  const n = i + 1;
  const baseName =
    n % 3 === 0
      ? "Premium Package"
      : n % 2 === 0
        ? "Starter Plan"
        : "Pro Suite";
  return {
    id: `PROD-${1000 + n}`,
    name: `${baseName} ${n}`,
    category:
      n % 4 === 0
        ? "Software"
        : n % 3 === 0
          ? "Service"
          : n % 2 === 0
            ? "Consulting"
            : "Subscription",
    price: n % 3 === 0 ? 299.99 : n % 2 === 0 ? 99.99 : 199.99,
    status: n % 5 === 0 ? "Inactive" : "Active",
    stock: n % 4 === 0 ? 0 : n * 12,
    rating: (3.5 + (n % 3) * 0.5).toFixed(1),
    sold: n * 23,
    trend: n % 3 === 0 ? "up" : n % 2 === 0 ? "down" : "stable",
    description: `High-quality ${baseName.toLowerCase()} with advanced features and premium support.`,
    image: `https://ui-avatars.com/api/?name=${encodeURIComponent(baseName)}&background=6366f1&color=fff&size=128`,
  };
});

const categories = [
  { name: "Software", count: 4, color: "from-blue-500/20 to-cyan-600/20" },
  { name: "Service", count: 3, color: "from-purple-500/20 to-pink-600/20" },
  { name: "Consulting", count: 3, color: "from-emerald-500/20 to-teal-600/20" },
  { name: "Subscription", count: 2, color: "from-orange-500/20 to-red-600/20" },
];

function GradientButton({ children, className = "", ...props }) {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function SoftButton({ children, className = "", ...props }) {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function Pill({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${className}`}
    >
      {children}
    </span>
  );
}

function StatusPill({ status }) {
  const cls =
    status === "Active"
      ? "bg-emerald-500/15 text-emerald-200 border-white/10"
      : "bg-rose-500/15 text-rose-200 border-white/10";

  return <Pill className={cls}>{status}</Pill>;
}

function TrendIcon({ trend }) {
  if (trend === "up") return <ArrowUp className="w-4 h-4 text-emerald-400" />;
  if (trend === "down") return <ArrowDown className="w-4 h-4 text-rose-400" />;
  return <div className="w-4 h-4 rounded-full bg-white/20" />;
}

export default function Products() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [createForm, setCreateForm] = useState({
    productName: "",
    category: "Software",
    price: "",
    description: "",
    sku: "",
    stock: "",
    weight: "",
    dimensions: "",
    tags: "",
    taxRate: "",
    shippingCost: "",
    status: "Active",
    discountPrice: "",
    brand: "",
    color: "",
    size: "",
    material: "",
    warranty: "",
    images: [],
  });
  const [formErrors, setFormErrors] = useState({});

  const filteredProducts = useMemo(() => {
    let prods = mockProducts;
    if (search.trim()) {
      const q = search.toLowerCase();
      prods = prods.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.id.toLowerCase().includes(q),
      );
    }
    if (selectedCategory !== "All") {
      prods = prods.filter((p) => p.category === selectedCategory);
    }
    return prods;
  }, [search, selectedCategory]);

  const stats = useMemo(() => {
    const total = mockProducts.length;
    const active = mockProducts.filter((p) => p.status === "Active").length;
    const totalValue = mockProducts.reduce(
      (sum, p) => sum + p.price * p.sold,
      0,
    );
    const totalSold = mockProducts.reduce((sum, p) => sum + p.sold, 0);
    return { total, active, totalValue, totalSold };
  }, []);

  const validateCreateForm = () => {
    const errors = {};
    if (!createForm.productName.trim())
      errors.productName = "Product name is required";
    if (
      !createForm.price ||
      isNaN(createForm.price) ||
      parseFloat(createForm.price) <= 0
    ) {
      errors.price = "Valid price is required";
    }
    if (
      !createForm.stock ||
      isNaN(createForm.stock) ||
      parseInt(createForm.stock) < 0
    ) {
      errors.stock = "Valid stock quantity is required";
    }
    if (!createForm.sku.trim()) errors.sku = "SKU is required";
    if (!createForm.description.trim())
      errors.description = "Description is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCreateProduct = () => {
    if (validateCreateForm()) {
      // TODO: API call to create product
      console.log("Creating product:", createForm);
      setShowCreateModal(false);
      setCreateForm({
        productName: "",
        category: "Software",
        price: "",
        description: "",
        sku: "",
        stock: "",
        weight: "",
        dimensions: "",
        tags: "",
        taxRate: "",
        shippingCost: "",
        status: "Active",
        discountPrice: "",
        brand: "",
        color: "",
        size: "",
        material: "",
        warranty: "",
        images: [],
      });
      setFormErrors({});
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
    }));
    setCreateForm((prev) => ({
      ...prev,
      images: [...prev.images, ...newImages],
    }));
  };

  const removeImage = (index) => {
    setCreateForm((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="p-4 sm:p-6 min-h-full">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="p-3 bg-gradient-to-br from-blue-400/20 to-purple-600/20 backdrop-blur-sm rounded-xl border border-white/20">
              <Package className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Products
              </h1>
              <p className="text-white/70 text-sm sm:text-base">
                Manage your product catalog and track performance
              </p>
            </div>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <SoftButton
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
              className="flex-1 sm:flex-none"
            >
              {viewMode === "grid" ? (
                <Grid3X3 className="w-4 h-4" />
              ) : (
                <Layers className="w-4 h-4" />
              )}
            </SoftButton>
            <GradientButton
              onClick={() => setShowCreateModal(true)}
              className="flex-1 sm:flex-none"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Add Product</span>
              <span className="sm:hidden">Add</span>
            </GradientButton>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-xs sm:text-sm">
                  Total Products
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {stats.total}
                </p>
              </div>
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <Package className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-xs sm:text-sm">Active</p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {stats.active}
                </p>
              </div>
              <div className="p-3 bg-emerald-500/20 rounded-xl">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-xs sm:text-sm">Total Sold</p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {stats.totalSold}
                </p>
              </div>
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-xs sm:text-sm">Revenue</p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  ${stats.totalValue.toFixed(0)}
                </p>
              </div>
              <div className="p-3 bg-orange-500/20 rounded-xl">
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-orange-300" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
        {/* Main Content */}
        <div className="lg:col-span-8 xl:col-span-9">
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <CardTitle className="text-white text-lg">
                      Product Catalog
                    </CardTitle>
                    <p className="text-white/70 text-sm">
                      {filteredProducts.length} of {mockProducts.length}{" "}
                      products
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <SoftButton className="sm:w-auto">
                      <Filter className="w-4 h-4" />
                      Filters
                    </SoftButton>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
                    <Input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search products by name, category, or ID..."
                      className="pl-9 bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20"
                    />
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
                    <Pill
                      onClick={() => setSelectedCategory("All")}
                      className={`cursor-pointer transition-all ${
                        selectedCategory === "All"
                          ? "bg-white/20 text-white border-white/30"
                          : "bg-white/10 text-white/70 border-white/20 hover:bg-white/15"
                      }`}
                    >
                      All
                    </Pill>
                    {categories.map((cat) => (
                      <Pill
                        key={cat.name}
                        onClick={() => setSelectedCategory(cat.name)}
                        className={`cursor-pointer transition-all whitespace-nowrap ${
                          selectedCategory === cat.name
                            ? "bg-white/20 text-white border-white/30"
                            : "bg-white/10 text-white/70 border-white/20 hover:bg-white/15"
                        }`}
                      >
                        {cat.name} ({cat.count})
                      </Pill>
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <div className="p-4 sm:p-6">
                {viewMode === "grid" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="group rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden"
                      >
                        <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-purple-600/10 flex items-center justify-center relative">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-16 h-16 rounded-xl object-cover shadow-lg"
                          />
                          <div className="absolute top-2 right-2">
                            <StatusPill status={product.status} />
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div className="min-w-0 flex-1">
                              <h3 className="text-white font-semibold text-sm truncate">
                                {product.name}
                              </h3>
                              <p className="text-white/60 text-xs mt-1">
                                ID: {product.id}
                              </p>
                            </div>
                            <div className="flex items-center gap-1 ml-2">
                              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                              <span className="text-white/80 text-xs">
                                {product.rating}
                              </span>
                            </div>
                          </div>
                          <p className="text-white/70 text-xs mb-3 line-clamp-2">
                            {product.description}
                          </p>
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <p className="text-white font-bold">
                                ${product.price}
                              </p>
                              <p className="text-white/60 text-xs">
                                Stock: {product.stock}
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1 justify-end">
                                <TrendIcon trend={product.trend} />
                                <span className="text-white/80 text-xs">
                                  {product.sold} sold
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <SoftButton className="flex-1 text-xs py-2">
                              <Eye className="w-3 h-3" />
                              View
                            </SoftButton>
                            <SoftButton className="flex-1 text-xs py-2">
                              <Edit className="w-3 h-3" />
                              Edit
                            </SoftButton>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 p-4"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 rounded-xl object-cover shadow-lg"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="text-white font-semibold truncate">
                                {product.name}
                              </h3>
                              <StatusPill status={product.status} />
                              <Pill className="bg-white/10 text-white/70 border-white/10">
                                {product.category}
                              </Pill>
                            </div>
                            <p className="text-white/60 text-xs mt-1">
                              ID: {product.id}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-bold">
                              ${product.price}
                            </p>
                            <p className="text-white/60 text-xs">
                              Stock: {product.stock}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1">
                              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                              <span className="text-white/80 text-xs">
                                {product.rating}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 justify-end mt-1">
                              <TrendIcon trend={product.trend} />
                              <span className="text-white/80 text-xs">
                                {product.sold} sold
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <SoftButton className="p-2">
                              <Eye className="w-4 h-4" />
                            </SoftButton>
                            <SoftButton className="p-2">
                              <Edit className="w-4 h-4" />
                            </SoftButton>
                            <SoftButton className="p-2 text-rose-300 hover:text-rose-200">
                              <Trash2 className="w-4 h-4" />
                            </SoftButton>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {filteredProducts.length === 0 && (
                  <div className="p-8 text-center text-white/70 text-sm">
                    No products found matching your criteria.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 xl:col-span-3 space-y-4 sm:space-y-6">
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-3">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`w-full rounded-xl border p-3 text-left transition-all ${
                    selectedCategory === cat.name
                      ? "bg-white/15 border-white/30"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                >
                  <div
                    className={`rounded-lg bg-gradient-to-r ${cat.color} p-2 mb-2`}
                  >
                    <Tag className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-white font-semibold text-sm">
                    {cat.name}
                  </div>
                  <div className="text-white/60 text-xs">
                    {cat.count} products
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white text-lg">
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-3">
              <GradientButton
                className="w-full"
                onClick={() => setShowCreateModal(true)}
              >
                <Plus className="w-4 h-4" />
                Add New Product
              </GradientButton>
              <SoftButton className="w-full">
                <BarChart3 className="w-4 h-4" />
                Sales Report
              </SoftButton>
              <SoftButton className="w-full">
                <Package className="w-4 h-4" />
                Inventory
              </SoftButton>
              <SoftButton className="w-full">
                <Tag className="w-4 h-4" />
                Manage Categories
              </SoftButton>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white text-lg">Tips</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-3 text-white/70 text-sm">
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="text-white font-semibold text-xs mb-1">
                    Bulk Upload
                  </div>
                  <div className="text-xs">
                    Import multiple products at once using CSV files for faster
                    setup.
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="text-white font-semibold text-xs mb-1">
                    Optimize Images
                  </div>
                  <div className="text-xs">
                    Use high-quality images with consistent dimensions for
                    better presentation.
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="text-white font-semibold text-xs mb-1">
                    Pricing Strategy
                  </div>
                  <div className="text-xs">
                    Regularly review and adjust prices based on market trends
                    and demand.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Create Product Modal */}
      {showCreateModal &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowCreateModal(false)}
          >
            <div
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Create New Product
                    </h2>
                    <p className="text-white/70 text-sm mt-1">
                      Add a new product to your catalog
                    </p>
                  </div>
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                  >
                    <X className="w-5 h-5 text-white/70" />
                  </button>
                </div>
              </div>

              {/* Form */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
                {/* Product Name */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Product Name *
                  </label>
                  <Input
                    value={createForm.productName}
                    onChange={(e) =>
                      setCreateForm({
                        ...createForm,
                        productName: e.target.value,
                      })
                    }
                    placeholder="Enter product name"
                    className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20"
                  />
                  {formErrors.productName && (
                    <p className="text-rose-400 text-xs mt-1">
                      {formErrors.productName}
                    </p>
                  )}
                </div>

                {/* Category & SKU */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Category
                    </label>
                    <select
                      value={createForm.category}
                      onChange={(e) =>
                        setCreateForm({
                          ...createForm,
                          category: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-xl focus:border-white/40 focus:ring-white/20"
                    >
                      <option value="Software" className="bg-gray-800">
                        Software
                      </option>
                      <option value="Service" className="bg-gray-800">
                        Service
                      </option>
                      <option value="Consulting" className="bg-gray-800">
                        Consulting
                      </option>
                      <option value="Subscription" className="bg-gray-800">
                        Subscription
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      SKU *
                    </label>
                    <Input
                      value={createForm.sku}
                      onChange={(e) =>
                        setCreateForm({ ...createForm, sku: e.target.value })
                      }
                      placeholder="PROD-001"
                      className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20"
                    />
                    {formErrors.sku && (
                      <p className="text-rose-400 text-xs mt-1">
                        {formErrors.sku}
                      </p>
                    )}
                  </div>
                </div>

                {/* Price & Discount Price */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Price *
                    </label>
                    <Input
                      type="number"
                      step="0.01"
                      value={createForm.price}
                      onChange={(e) =>
                        setCreateForm({ ...createForm, price: e.target.value })
                      }
                      placeholder="0.00"
                      className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20"
                    />
                    {formErrors.price && (
                      <p className="text-rose-400 text-xs mt-1">
                        {formErrors.price}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Discount Price
                    </label>
                    <Input
                      type="number"
                      step="0.01"
                      value={createForm.discountPrice}
                      onChange={(e) =>
                        setCreateForm({
                          ...createForm,
                          discountPrice: e.target.value,
                        })
                      }
                      placeholder="0.00"
                      className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20"
                    />
                  </div>
                </div>

                {/* Brand & Status */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Brand
                    </label>
                    <Input
                      value={createForm.brand}
                      onChange={(e) =>
                        setCreateForm({ ...createForm, brand: e.target.value })
                      }
                      placeholder="Enter brand name"
                      className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Status
                    </label>
                    <select
                      value={createForm.status}
                      onChange={(e) =>
                        setCreateForm({ ...createForm, status: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-xl focus:border-white/40 focus:ring-white/20"
                    >
                      <option value="Active" className="bg-gray-800">
                        Active
                      </option>
                      <option value="Inactive" className="bg-gray-800">
                        Inactive
                      </option>
                      <option value="Draft" className="bg-gray-800">
                        Draft
                      </option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Description *
                  </label>
                  <textarea
                    value={createForm.description}
                    onChange={(e) =>
                      setCreateForm({
                        ...createForm,
                        description: e.target.value,
                      })
                    }
                    placeholder="Enter product description"
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-xl focus:border-white/40 focus:ring-white/20 resize-none"
                  />
                  {formErrors.description && (
                    <p className="text-rose-400 text-xs mt-1">
                      {formErrors.description}
                    </p>
                  )}
                </div>

                {/* Stock & Weight */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Stock Quantity *
                    </label>
                    <Input
                      type="number"
                      value={createForm.stock}
                      onChange={(e) =>
                        setCreateForm({ ...createForm, stock: e.target.value })
                      }
                      placeholder="0"
                      className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20"
                    />
                    {formErrors.stock && (
                      <p className="text-rose-400 text-xs mt-1">
                        {formErrors.stock}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Weight (kg)
                    </label>
                    <Input
                      type="number"
                      step="0.01"
                      value={createForm.weight}
                      onChange={(e) =>
                        setCreateForm({ ...createForm, weight: e.target.value })
                      }
                      placeholder="0.00"
                      className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20"
                    />
                  </div>
                </div>

                {/* Dimensions & Material */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Dimensions (L×W×H)
                    </label>
                    <Input
                      value={createForm.dimensions}
                      onChange={(e) =>
                        setCreateForm({
                          ...createForm,
                          dimensions: e.target.value,
                        })
                      }
                      placeholder="10×5×2"
                      className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Material
                    </label>
                    <Input
                      value={createForm.material}
                      onChange={(e) =>
                        setCreateForm({
                          ...createForm,
                          material: e.target.value,
                        })
                      }
                      placeholder="Enter material"
                      className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20"
                    />
                  </div>
                </div>

                {/* Color & Size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Color
                    </label>
                    <Input
                      value={createForm.color}
                      onChange={(e) =>
                        setCreateForm({ ...createForm, color: e.target.value })
                      }
                      placeholder="Enter color"
                      className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Size
                    </label>
                    <Input
                      value={createForm.size}
                      onChange={(e) =>
                        setCreateForm({ ...createForm, size: e.target.value })
                      }
                      placeholder="Enter size"
                      className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20"
                    />
                  </div>
                </div>

                {/* Warranty & Tax Rate */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Warranty
                    </label>
                    <Input
                      value={createForm.warranty}
                      onChange={(e) =>
                        setCreateForm({
                          ...createForm,
                          warranty: e.target.value,
                        })
                      }
                      placeholder="e.g., 1 year"
                      className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Tax Rate (%)
                    </label>
                    <Input
                      type="number"
                      step="0.01"
                      value={createForm.taxRate}
                      onChange={(e) =>
                        setCreateForm({
                          ...createForm,
                          taxRate: e.target.value,
                        })
                      }
                      placeholder="10.00"
                      className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20"
                    />
                  </div>
                </div>

                {/* Shipping Cost & Tags */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Shipping Cost
                    </label>
                    <Input
                      type="number"
                      step="0.01"
                      value={createForm.shippingCost}
                      onChange={(e) =>
                        setCreateForm({
                          ...createForm,
                          shippingCost: e.target.value,
                        })
                      }
                      placeholder="0.00"
                      className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Tags
                    </label>
                    <Input
                      value={createForm.tags}
                      onChange={(e) =>
                        setCreateForm({ ...createForm, tags: e.target.value })
                      }
                      placeholder="premium, featured, new"
                      className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20"
                    />
                  </div>
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Product Images
                  </label>
                  <div className="space-y-4">
                    {/* Upload Area */}
                    <div className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center hover:border-white/40 transition-colors">
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="cursor-pointer flex flex-col items-center gap-2"
                      >
                        <div className="p-3 bg-white/10 rounded-xl">
                          <Package className="w-6 h-6 text-white/70" />
                        </div>
                        <span className="text-white/70 text-sm">
                          Click to upload images or drag and drop
                        </span>
                        <span className="text-white/50 text-xs">
                          PNG, JPG, GIF up to 10MB each
                        </span>
                      </label>
                    </div>

                    {/* Image Previews */}
                    {createForm.images.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {createForm.images.map((image, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={image.preview}
                              alt={image.name}
                              className="w-full h-24 object-cover rounded-xl border border-white/20"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute top-1 right-1 p-1 bg-rose-500/80 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="w-3 h-3 text-white" />
                            </button>
                            <div className="absolute bottom-1 left-1 right-1 p-1 bg-black/60 backdrop-blur-sm rounded text-xs text-white truncate">
                              {image.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-white/20">
                <div className="flex flex-col sm:flex-row gap-3">
                  <GradientButton
                    onClick={handleCreateProduct}
                    className="w-full sm:w-auto"
                  >
                    <Plus className="w-4 h-4" />
                    Create Product
                  </GradientButton>
                  <SoftButton
                    onClick={() => setShowCreateModal(false)}
                    className="w-full sm:w-auto"
                  >
                    Cancel
                  </SoftButton>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
