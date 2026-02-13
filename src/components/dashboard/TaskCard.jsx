import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Calendar, Flag } from "lucide-react";

export default function TaskCard({
  task,
  isOverlay = false,
  disableDrag = false,
  onClick,
}) {
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
    High: "bg-red-500/20 text-red-200 border border-white/10",
    Medium: "bg-yellow-500/20 text-yellow-200 border border-white/10",
    Low: "bg-green-500/20 text-green-200 border border-white/10",
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
      className={`mb-3 bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg transition-shadow duration-200 ${
        isDragging ? "shadow-2xl" : "hover:shadow-xl"
      } ${isOverlay ? "shadow-2xl" : ""}`}
      {...(disableDrag ? {} : attributes)}
      {...(disableDrag ? {} : listeners)}
      onClick={onClick}
    >
      <CardContent className="p-4">
        {/* Task Header with Priority */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-semibold text-white text-sm leading-tight">
              {task.title}
            </h3>
            {task.description && (
              <p className="text-xs text-white/70 line-clamp-2 mt-1">
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
        <div className="flex items-center justify-between text-xs text-white/60">
          {task.dueDate && (
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{formatDate(task.dueDate)}</span>
            </div>
          )}

          {task.assignedTo && (
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-white/10 border border-white/20 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-white/80">
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
