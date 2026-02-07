const statusOptions = ["All", "New", "Contacted", "Converted"];

export default function StatusFilterTabs({ value, onValueChange }) {
  return (
    <div className="flex gap-1 p-1 bg-gray-100 rounded-lg w-full max-w-md">
      {statusOptions.map((status) => (
        <button
          key={status}
          onClick={() => onValueChange(status)}
          className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
            value === status
              ? "bg-white text-blue-600 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          {status}
        </button>
      ))}
    </div>
  );
}
