import React, { useState } from "react";
import ModalWrapper from "../modals/ModalWrapper";
import FormField from "../form/FormField";
import { Button } from "../../ui/button";

const CreateTicketModal = ({ isOpen, onClose, onSubmit, loading = false }) => {
  const [formData, setFormData] = useState({
    category: "",
    priority: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const categories = [
    { value: "technical", label: "Technical Support" },
    { value: "billing", label: "Billing Issue" },
    { value: "account", label: "Account Management" },
    { value: "feature", label: "Feature Request" },
    { value: "bug", label: "Bug Report" },
    { value: "other", label: "Other" },
  ];

  const priorities = [
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.category.trim()) {
      newErrors.category = "Category is required";
    }

    if (!formData.priority.trim()) {
      newErrors.priority = "Priority is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    onSubmit(formData);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleClose = () => {
    if (!loading) {
      setFormData({ category: "", priority: "", description: "" });
      setErrors({});
      onClose();
    }
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={handleClose}
      title="Create New Ticket"
      maxWidth="max-w-lg"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField
          label="Category"
          type="select"
          placeholder="Select category"
          value={formData.category}
          onChange={(e) => handleInputChange("category", e.target.value)}
          options={categories}
          error={errors.category}
          required
          disabled={loading}
        />

        <FormField
          label="Priority Level"
          type="select"
          placeholder="Select priority"
          value={formData.priority}
          onChange={(e) => handleInputChange("priority", e.target.value)}
          options={priorities}
          error={errors.priority}
          required
          disabled={loading}
        />

        <FormField
          label="Description"
          type="textarea"
          placeholder="Describe your issue in detail..."
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          error={errors.description}
          required
          disabled={loading}
          rows={5}
        />

        <div className="flex gap-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={handleClose}
            disabled={loading}
            className="flex-1 border-white/20 text-white hover:bg-white/10"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={loading}
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          >
            {loading ? "Submitting..." : "Submit Ticket"}
          </Button>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default CreateTicketModal;
