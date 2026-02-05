export default function ServiceCard({
  icon,
  title,
  description,
  features,
  iconBg,
}) {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Icon */}
      <div
        className={`w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center mb-6 text-2xl`}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      {/* Features */}
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-gray-600">
            <span className="mt-1 mr-3 w-4 h-4 rounded-full bg-indigo-600 flex items-center justify-center">
              <svg
                className="w-2.5 h-2.5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 12l2 2 4-4" />
              </svg>
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
