import { useDroppable } from "@dnd-kit/core";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import TaskCard from "./TaskCard";

export default function TaskColumn({
  title,
  tasks,
  status,
  columnColor = "bg-gray-50",
  accentColor = "border-blue-200",
  onTaskMove,
}) {
  const { setNodeRef, isOver } = useDroppable({
    id: status,
  });

  const taskCount = tasks.length;

  return (
    <div className="flex-1 min-w-0">
      <Card
        className={`h-full ${columnColor} border ${accentColor} ${
          isOver
            ? "ring-2 ring-blue-400 ring-opacity-50 shadow-lg"
            : "shadow-md"
        } transition-all duration-300`}
      >
        {/* Column Header */}
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-semibold text-gray-700">
              {title}
            </CardTitle>
            <Badge variant="secondary" className="text-xs bg-white shadow-sm">
              {taskCount}
            </Badge>
          </div>
        </CardHeader>

        {/* Task List */}
        <CardContent className="pt-2">
          <div
            ref={setNodeRef}
            className="min-h-[500px] space-y-3 p-2"
            style={{ minHeight: "500px" }}
          >
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}

            {/* Empty State */}
            {tasks.length === 0 && (
              <div className="text-center py-12 text-gray-400">
                <div className="text-sm font-medium">
                  No tasks in {title.toLowerCase()}
                </div>
                <div className="text-xs mt-2">
                  Drag tasks here to get started
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
