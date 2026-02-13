import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { Plus, Search, X } from "lucide-react";

const mockLeads = Array.from({ length: 28 }).map((_, idx) => {
  const n = idx + 1;
  return {
    id: `L-${1000 + n}`,
    name: `Lead ${n}`,
    phone: `9${String(100000000 + n).slice(0, 9)}`,
    email: `lead${n}@gmail.com`,
    propertyType: n % 2 === 0 ? "Plot" : "Flat",
    budget: n % 2 === 0 ? "20L" : "35L",
    location: n % 3 === 0 ? "Delhi" : n % 3 === 1 ? "Mumbai" : "Pune",
    visitDay: n % 2 === 0 ? "Weekend" : "Weekday",
    sqft: n % 2 === 0 ? "1200" : "900",
  };
});

function formatCategoryTitle(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function CreateLeadModal({ open, onClose, title }) {
  const [isMounted, setIsMounted] = useState(false);
  const [values, setValues] = useState({
    fullName: "",
    phone: "",
    email: "",
    propertyType: "",
    subIndustry: "",
    budget: "",
    preferredLocation: "",
    visitDay: "",
    requiredSqft: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!open) {
      setIsMounted(false);
      setErrors({});
      setValues({
        fullName: "",
        phone: "",
        email: "",
        propertyType: "",
        subIndustry: "",
        budget: "",
        preferredLocation: "",
        visitDay: "",
        requiredSqft: "",
      });
      return;
    }

    const t = setTimeout(() => setIsMounted(true), 10);
    return () => clearTimeout(t);
  }, [open]);

  const setField = (key) => (e) => {
    const nextValue = e?.target?.value ?? "";
    setValues((prev) => ({ ...prev, [key]: nextValue }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const { [key]: _, ...rest } = prev;
      return rest;
    });
  };

  const validate = () => {
    const nextErrors = {};
    const name = values.fullName.trim();
    const phone = values.phone.trim();
    const email = values.email.trim();

    if (!name) nextErrors.fullName = "Full name is required";
    if (!phone) nextErrors.phone = "Phone number is required";
    if (phone && !/^[0-9+\-\s()]{8,}$/.test(phone)) {
      nextErrors.phone = "Enter a valid phone number";
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setValues({
      fullName: "",
      phone: "",
      email: "",
      propertyType: "",
      subIndustry: "",
      budget: "",
      preferredLocation: "",
      visitDay: "",
      requiredSqft: "",
    });
    onClose();
  };

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${
          isMounted ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className="relative w-full max-w-lg md:max-w-xl max-h-[calc(100vh-3rem)] mx-auto"
        style={{
          transform: isMounted
            ? "translate3d(0, 0, 0)"
            : "translate3d(0, 12px, 0)",
          opacity: isMounted ? 1 : 0,
          transition: "opacity 200ms ease, transform 200ms ease",
        }}
      >
        <div className="bg-white/95 rounded-2xl shadow-2xl border border-white/40 overflow-hidden">
          <div className="flex items-start justify-between gap-4 px-5 sm:px-6 py-4 border-b border-black/10 bg-gradient-to-r from-white/80 to-white/60">
            <div>
              <div className="text-lg font-semibold text-gray-900">{title}</div>
              <div className="text-sm text-gray-500">Create new lead</div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col max-h-[calc(100vh-3rem-64px)] min-h-0"
          >
            <div className="px-5 sm:px-6 py-6 overflow-y-auto min-h-0 no-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    value={values.fullName}
                    onChange={setField("fullName")}
                    placeholder="Enter full name"
                    className="bg-white"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-600">{errors.fullName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    value={values.phone}
                    onChange={setField("phone")}
                    placeholder="Enter phone number"
                    className="bg-white"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input
                    value={values.email}
                    onChange={setField("email")}
                    placeholder="Enter email address"
                    className="bg-white"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Property Type
                  </label>
                  <select
                    value={values.propertyType}
                    onChange={setField("propertyType")}
                    className="h-10 w-full rounded-md border border-gray-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Property Type</option>
                    <option value="Flat">Flat</option>
                    <option value="Plot">Plot</option>
                    <option value="Villa">Villa</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Sub Industry
                  </label>
                  <select
                    value={values.subIndustry}
                    onChange={setField("subIndustry")}
                    className="h-10 w-full rounded-md border border-gray-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Sub Industry</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Budget
                  </label>
                  <Input
                    value={values.budget}
                    onChange={setField("budget")}
                    placeholder="Enter budget"
                    className="bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Preferred Location
                  </label>
                  <Input
                    value={values.preferredLocation}
                    onChange={setField("preferredLocation")}
                    placeholder="Enter preferred location"
                    className="bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Visit Day
                  </label>
                  <select
                    value={values.visitDay}
                    onChange={setField("visitDay")}
                    className="h-10 w-full rounded-md border border-gray-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Option</option>
                    <option value="Weekday">Weekday</option>
                    <option value="Weekend">Weekend</option>
                  </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-gray-700">
                    Required Sq. Ft.
                  </label>
                  <Input
                    value={values.requiredSqft}
                    onChange={setField("requiredSqft")}
                    placeholder="Enter required square feet"
                    className="bg-white"
                  />
                </div>
              </div>
            </div>

            <div className="px-5 sm:px-6 py-4 border-t border-black/10 bg-white/80">
              <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-white/60 backdrop-blur-sm border border-black/10 text-gray-800 rounded-xl hover:bg-white/80 transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Create Lead
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default function CategoryLeads() {
  const { categorySlug = "real-estate" } = useParams();
  const categoryTitle = useMemo(
    () => formatCategoryTitle(categorySlug),
    [categorySlug],
  );

  const [search, setSearch] = useState("");
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const filtered = useMemo(() => {
    if (!search.trim()) return mockLeads;
    const q = search.toLowerCase();
    return mockLeads.filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.email.toLowerCase().includes(q) ||
        l.phone.includes(q),
    );
  }, [search]);

  return (
    <div className="p-4 sm:p-6 min-h-full">
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-white">
              {categoryTitle} Leads
            </h1>
            <p className="text-white/70 text-sm">Manage your leads</p>
          </div>

          <div className="flex flex-col xs:flex-row gap-3 sm:justify-end">
            <button
              type="button"
              onClick={() => setIsCreateOpen(true)}
              className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Plus className="w-4 h-4" />
              Add New Lead
            </button>
          </div>
        </div>
      </div>

      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
        <CardHeader className="pb-4 border-b border-white/20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle className="text-white text-lg">Select Leads</CardTitle>
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search leads by name, phone, email"
                className="pl-9 bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="w-full overflow-x-auto">
            <Table className="min-w-[980px]">
              <TableHeader>
                <TableRow className="border-white/10">
                  <TableHead className="text-white/70">ID</TableHead>
                  <TableHead className="text-white/70">Name</TableHead>
                  <TableHead className="text-white/70">Phone</TableHead>
                  <TableHead className="text-white/70">Email</TableHead>
                  <TableHead className="text-white/70">Property Type</TableHead>
                  <TableHead className="text-white/70">Budget</TableHead>
                  <TableHead className="text-white/70">Location</TableHead>
                  <TableHead className="text-white/70">Visit Day</TableHead>
                  <TableHead className="text-white/70">Sq. Ft</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((l) => (
                  <TableRow
                    key={l.id}
                    className="border-white/10 hover:bg-white/5"
                  >
                    <TableCell className="text-white/80">{l.id}</TableCell>
                    <TableCell className="text-white">{l.name}</TableCell>
                    <TableCell className="text-white/80">{l.phone}</TableCell>
                    <TableCell className="text-white/80">{l.email}</TableCell>
                    <TableCell className="text-white/80">
                      {l.propertyType}
                    </TableCell>
                    <TableCell className="text-white/80">{l.budget}</TableCell>
                    <TableCell className="text-white/80">
                      {l.location}
                    </TableCell>
                    <TableCell className="text-white/80">
                      {l.visitDay}
                    </TableCell>
                    <TableCell className="text-white/80">{l.sqft}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <CreateLeadModal
        open={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        title={`Add ${categoryTitle} Lead`}
      />
    </div>
  );
}
