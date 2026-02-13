import React from "react";
import { Search, Filter } from "lucide-react";

const FormField = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  options = [],
  className = "",
  icon = null,
  error = "",
  disabled = false,
  ...props
}) => {
  const baseInputClasses = `
    w-full p-2 bg-white/10 border border-white/20 rounded-lg 
    text-white placeholder-white/60 focus:outline-none focus:border-white/40 
    transition-colors disabled:opacity-50 disabled:cursor-not-allowed
    ${error ? "border-red-500/50" : ""}
    ${className}
  `;

  const renderInput = () => {
    switch (type) {
      case "select":
        return (
          <div className="relative">
            {icon && (
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 pointer-events-none">
                {icon}
              </div>
            )}
            <select
              value={value}
              onChange={onChange}
              disabled={disabled}
              className={`${baseInputClasses} ${icon ? "pl-10" : "pl-4"} appearance-none`}
              required={required}
              {...props}
            >
              <option value="" className="bg-gray-800">
                {placeholder}
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value} className="bg-gray-800">
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );

      case "textarea":
        return (
          <textarea
            value={value}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
            className={`${baseInputClasses} resize-none`}
            required={required}
            {...props}
          />
        );

      case "search":
        return (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
            <input
              type="text"
              value={value}
              onChange={onChange}
              disabled={disabled}
              placeholder={placeholder}
              className={`${baseInputClasses} pl-10`}
              {...props}
            />
          </div>
        );

      default:
        return (
          <input
            type={type}
            value={value}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
            className={baseInputClasses}
            required={required}
            {...props}
          />
        );
    }
  };

  return (
    <div className="space-y-2">
      {label && (
        <label className="text-white/60 text-sm block">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      {renderInput()}
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  );
};

export default FormField;
