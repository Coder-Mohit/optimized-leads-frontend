import {
  DndContext,
  DragOverlay,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
} from "@dnd-kit/core";
import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

// Mock task data
const initialTasks = [
  {
    id: "1",
    title: "Follow up with Rahul Sharma",
    description: "Discuss study abroad options and answer questions",
    status: "To Do",
    priority: "High",
    assignedTo: "John Doe",
    dueDate: "2024-02-08",
  },
  {
    id: "2",
    title: "Prepare Q1 performance report",
    description: "Compile lead generation metrics and conversion rates",
    status: "To Do",
    priority: "High",
    assignedTo: "Jane Smith",
    dueDate: "2024-02-10",
  },
  {
    id: "3",
    title: "Update lead source documentation",
    description: "Add new social media platforms to lead sources",
    status: "In Progress",
    priority: "Medium",
    assignedTo: "Mike Johnson",
    dueDate: "2024-02-07",
  },
  {
    id: "4",
    title: "Review and respond to support tickets",
    description: "Address pending customer support requests",
    status: "In Progress",
    priority: "Medium",
    assignedTo: "Sarah Wilson",
    dueDate: "2024-02-09",
  },
  {
    id: "5",
    title: "Schedule team training session",
    description: "Organize CRM features training for sales team",
    status: "To Do",
    priority: "Low",
    assignedTo: "John Doe",
    dueDate: "2024-02-15",
  },
  {
    id: "6",
    title: "Update website content",
    description: "Refresh homepage with new testimonials",
    status: "Completed",
    priority: "Low",
    assignedTo: "Priya Patel",
    dueDate: "2024-02-05",
  },
  {
    id: "7",
    title: "Client presentation preparation",
    description: "Prepare slides for monthly review meeting",
    status: "In Progress",
    priority: "High",
    assignedTo: "Amit Kumar",
    dueDate: "2024-02-12",
  },
  {
    id: "8",
    title: "Database cleanup",
    description: "Remove duplicate leads and update contact info",
    status: "Completed",
    priority: "Medium",
    assignedTo: "Tech Team",
    dueDate: "2024-02-03",
  },
];

export default function TaskBoard() {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeTask, setActiveTask] = useState(null);

  // Setup sensors for responsive drag interaction
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 3 },
    }),
    useSensor(KeyboardSensor),
  );

  // Group tasks by status
  const todoTasks = tasks.filter((task) => task.status === "To Do");
  const inProgressTasks = tasks.filter((task) => task.status === "In Progress");
  const completedTasks = tasks.filter((task) => task.status === "Completed");

  // Handle drag start - set active task
  const handleDragStart = (event) => {
    const { active } = event;
    const task = tasks.find((t) => t.id === active.id);
    setActiveTask(task);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    // Defensive: Cancel if no valid drop target
    if (!over) {
      setActiveTask(null);
      return;
    }

    const taskId = active.id;
    const newStatus = over.id;

    // Defensive: Find source task
    const sourceTask = tasks.find((task) => task.id === taskId);

    // Defensive: Cancel if no source task or invalid operation
    if (!sourceTask) {
      console.warn("No source task found for drag operation");
      setActiveTask(null);
      return;
    }

    // Defensive: Get destination column
    const destinationStatus = over.id;
    const validStatuses = ["To Do", "In Progress", "Completed"];

    // Defensive: Validate destination
    if (!validStatuses.includes(destinationStatus)) {
      console.warn("Invalid drop target:", destinationStatus);
      setActiveTask(null);
      return;
    }

    // Defensive: Prevent same-status drops (no-op)
    if (sourceTask.status === destinationStatus) {
      setActiveTask(null);
      return;
    }

    // Update task status with explicit validation
    setTasks((prevTasks) => {
      const taskExists = prevTasks.some((task) => task.id === taskId);

      if (!taskExists) {
        console.warn("Task not found in previous state");
        return prevTasks;
      }

      return prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: destinationStatus };
        }
        return task;
      });
    });

    setActiveTask(null);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-full">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-8 h-full">
          {/* To Do Column */}
          <TaskColumn
            title="To Do"
            status="To Do"
            tasks={todoTasks}
            color="bg-red-50"
          />

          {/* In Progress Column */}
          <TaskColumn
            title="In Progress"
            status="In Progress"
            tasks={inProgressTasks}
            color="bg-yellow-50"
          />

          {/* Completed Column */}
          <TaskColumn
            title="Completed"
            status="Completed"
            tasks={completedTasks}
            color="bg-green-50"
          />
        </div>

        <DragOverlay>
          {activeTask && (
            <div className="shadow-2xl rotate-2">
              <TaskCard task={activeTask} />
            </div>
          )}
        </DragOverlay>
      </DndContext>
    </div>
  );
}

export function TaskColumn({ title, status, color, tasks }) {
  const { setNodeRef, isOver } = useDroppable({ id: status });
  const columnTasks = tasks.filter((t) => t.status === status);

  return (
    <div
      ref={setNodeRef}
      className={`${color} rounded-xl p-4 w-1/3 min-h-[500px] border-2 ${
        isOver ? "border-blue-400" : "border-transparent"
      } transition`}
    >
      <h3 className="font-semibold mb-4 flex justify-between">
        {title}
        <span className="text-sm text-gray-500">{columnTasks.length}</span>
      </h3>

      <SortableContext
        items={columnTasks.map((t) => t.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-4">
          {columnTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}

          {/* Empty State */}
          {columnTasks.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <div className="text-sm font-medium">No tasks in {title}</div>
              <div className="text-xs mt-2">Drag tasks here to get started</div>
            </div>
          )}
        </div>
      </SortableContext>
    </div>
  );
}
