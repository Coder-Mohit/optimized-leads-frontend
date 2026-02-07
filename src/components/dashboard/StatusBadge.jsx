import { Badge } from "../ui/badge";

const statusConfig = {
  New: {
    variant: "default",
    className: "bg-blue-100 text-blue-800 hover:bg-blue-100 border-blue-200",
  },
  Contacted: {
    variant: "secondary",
    className:
      "bg-amber-100 text-amber-800 hover:bg-amber-100 border-amber-200",
  },
  Converted: {
    variant: "outline",
    className:
      "bg-green-100 text-green-800 hover:bg-green-100 border-green-200",
  },
};

export default function StatusBadge({ status }) {
  const config = statusConfig[status] || statusConfig.New;

  return (
    <Badge className={`${config.className} font-medium px-3 py-1`}>
      {status}
    </Badge>
  );
}
