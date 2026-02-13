import React, { useState } from "react";
import FormField from "../form/FormField";
import { Button } from "../../ui/button";
import { Calendar as CalendarIcon, Clock, User, FileText } from "lucide-react";

const ScheduleEventForm = ({ 
  onSubmit, 
  onCancel, 
  initialData = null, 
  loading = false,
  leads = [],
  className = ""
}) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    date: initialData?.date || "",
    time: initialData?.time || "",
    duration: initialData?.duration || "30",
    description: initialData?.description || "",
    relatedLead: initialData?.relatedLead || "",
    type: initialData?.type || "call",
  });

  const [errors, setErrors] = useState({});

  const eventTypes = [
    { value: "call", label: "Phone Call" },
    { value: "meeting", label: "Meeting" },
    { value: "video", label: "Video Call" },
    { value: "task", label: "Task" },
  ];

  const durations = [
    { value: "15", label: "15 minutes" },
    { value: "30", label: "30 minutes" },
    { value: "45", label: "45 minutes" },
    { value: "60", label: "1 hour" },
    { value: "90", label: "1.5 hours" },
    { value: "120", label: "2 hours" },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Event title is required";
    }

    if (!formData.date) {
      newErrors.date = "Date is required";
    }

    if (!formData.time) {
      newErrors.time = "Time is required";
    }

    if (!formData.duration) {
      newErrors.duration = "Duration is required";
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

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <FormField
        label="Event Title"
        type="text"
        placeholder="Enter event title"
        value={formData.title}
        onChange={(e) => handleInputChange("title", e.target.value)}
        error={errors.title}
        required
        disabled={loading}
        icon={<FileText className="w-4 h-4" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Date"
          type="date"
          value={formData.date}
          onChange={(e) => handleInputChange("date", e.target.value)}
          error={errors.date}
          required
          disabled={loading}
          icon={<CalendarIcon className="w-4 h-4" />}
        />

        <FormField
          label="Time"
          type="time"
          value={formData.time}
          onChange={(e) => handleInputChange("time", e.target.value)}
          error={errors.time}
          required
          disabled={loading}
          icon={<Clock className="w-4 h-4" />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Duration"
          type="select"
          value={formData.duration}
          onChange={(e) => handleInputChange("duration", e.target.value)}
          options={durations}
          error={errors.duration}
          required
          disabled={loading}
          icon={<Clock className="w-4 h-4" />}
        />

        <FormField
          label="Event Type"
          type="select"
          value={formData.type}
          onChange={(e) => handleInputChange("type", e.target.value)}
          options={eventTypes}
          disabled={loading}
          icon={<CalendarIcon className="w-4 h-4" />}
        />
      </div>

      <FormField
        label="Related Lead"
        type="select"
        placeholder="Select lead (optional)"
        value={formData.relatedLead}
        onChange={(e) => handleInputChange("relatedLead", e.target.value)}
        options={[
          { value: "", label: "No lead selected" },
          ...leads.map(lead => ({ value: lead.id, label: lead.name }))
        ]}
        disabled={loading}
        icon={<User className="w-4 h-4" />}
      />

      <FormField
        label="Description"
        type="textarea"
        placeholder="Add event description (optional)"
        value={formData.description}
        onChange={(e) => handleInputChange("description", e.target.value)}
        disabled={loading}
        rows={4}
      />

      <div className="flex gap-3 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={loading}
          className="flex-1 border-white/20 text-white hover:bg-white/10"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={loading}
          className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
        >
          {loading ? "Saving..." : initialData ? "Update Event" : "Add to Calendar"}
        </Button>
      </div>
    </form>
  );
};

export default ScheduleEventForm;
