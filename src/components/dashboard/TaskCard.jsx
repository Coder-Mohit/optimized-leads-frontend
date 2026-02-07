import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Calendar, Flag, GripVertical } from "lucide-react";

export default function TaskCard({ task, isOverlay = false }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.8 : 1,
  };

  const priorityColors = {
    High: "bg-red-100 text-red-700 border-red-200",
    Medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
    Low: "bg-green-100 text-green-700 border-green-200",
  };

  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={`mb-3 transition-all duration-200 ${
        isDragging ? "rotate-2 scale-105 shadow-xl" : "hover:shadow-md"
      } ${isOverlay ? "rotate-3 scale-105" : ""}`}
      {...attributes}
      {...listeners}
    >
      <CardContent className="p-4">
        {/* Task Header with Priority */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-sm leading-tight">
              {task.title}
            </h3>
            {task.description && (
              <p className="text-xs text-gray-600 line-clamp-2 mt-1">
                {task.description}
              </p>
            )}
          </div>
          <Badge className={`text-xs ${priorityColors[task.priority]}`}>
            <Flag className="w-3 h-3 mr-1" />
            {task.priority}
          </Badge>
        </div>

        {/* Task Metadata */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          {task.dueDate && (
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{task.dueDate}</span>
            </div>
          )}

          {task.assignedTo && (
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-blue-600">
                  {task.assignedTo.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
