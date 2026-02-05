import { motion } from "framer-motion";

const cards = [
  { title: "Lead Performance", color: "bg-white", z: 30 },
  { title: "Conversion Insights", color: "bg-indigo-50", z: 20 },
  { title: "Revenue Growth", color: "bg-purple-50", z: 10 },
];

export default function AnimatedDashboard() {
  return (
    <div className="relative w-full max-w-xl h-[360px]">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{
            y: index * 14,
            scale: 1 - index * 0.04,
            rotate: -2 + index * 2,
          }}
          whileHover={{
            y: -index * 40,
            rotate: index === 0 ? 0 : index === 1 ? -4 : 4,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 18,
          }}
          className={`
            absolute inset-0
            ${card.color}
            rounded-2xl
            shadow-xl
            p-6
            cursor-pointer
          `}
          style={{ zIndex: card.z }}
        >
          <DashboardCard title={card.title} />
        </motion.div>
      ))}
    </div>
  );
}

function DashboardCard({ title }) {
  return (
    <>
      {/* Top bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <span className="w-3 h-3 bg-red-400 rounded-full" />
          <span className="w-3 h-3 bg-yellow-400 rounded-full" />
          <span className="w-3 h-3 bg-green-400 rounded-full" />
        </div>
        <p className="text-sm text-gray-500">OptimizedLeads</p>
      </div>

      <h3 className="font-semibold text-lg mb-4 text-gray-800">
        {title}
      </h3>

      <div className="grid grid-cols-3 gap-3">
        <Metric value="2.8K" label="Leads" />
        <Metric value="68%" label="Conv." />
        <Metric value="$94K" label="Revenue" />
      </div>
    </>
  );
}

const Metric = ({ value, label }) => (
  <div className="bg-gray-100 rounded-xl p-3 text-center">
    <p className="font-bold text-gray-800">{value}</p>
    <p className="text-xs text-gray-500">{label}</p>
  </div>
);
