import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
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
  disableDrag = false,
  onTaskClick,
}) {
  const { setNodeRef, isOver } = useDroppable({
    id: status,
  });

  const taskCount = tasks.length;

  return (
    <div className="snap-start w-[85vw] max-w-[360px] sm:w-[70vw] sm:max-w-[420px] lg:w-auto lg:max-w-none lg:min-w-0 lg:flex-1">
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
            <CardTitle className="text-sm font-semibold text-white">
              {title}
            </CardTitle>
            <Badge
              variant="secondary"
              className="text-xs bg-white/10 text-white border border-white/20 shadow-sm"
            >
              {taskCount}
            </Badge>
          </div>
        </CardHeader>

        {/* Task List */}
        <CardContent className="pt-2">
          <SortableContext
            items={tasks.map((t) => t.id)}
            strategy={verticalListSortingStrategy}
          >
            <div ref={setNodeRef} className="min-h-[420px] space-y-3 p-2">
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  disableDrag={disableDrag}
                  onClick={onTaskClick ? () => onTaskClick(task) : undefined}
                />
              ))}

              {/* Empty State */}
              {tasks.length === 0 && (
                <div className="text-center py-12 text-white/60">
                  <div className="text-sm font-medium">
                    No tasks in {title.toLowerCase()}
                  </div>
                  <div className="text-xs mt-2">
                    Drag tasks here to get started
                  </div>
                </div>
              )}
            </div>
          </SortableContext>
        </CardContent>
      </Card>
    </div>
  );
}
