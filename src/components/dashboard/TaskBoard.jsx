import {
  DndContext,
  DragOverlay,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
} from "@dnd-kit/core";
import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import TaskColumn from "./TaskColumn";
import { verticalListSortingStrategy } from "@dnd-kit/sortable";

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
  const [isMobile, setIsMobile] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [moveFeedback, setMoveFeedback] = useState(null);

  const statuses = ["To Do", "In Progress", "Completed"];

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

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

  const moveTaskToStatus = (taskId, destinationStatus) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId ? { ...t, status: destinationStatus } : t,
      ),
    );
  };

  const handleMoveFromSheet = (destinationLabel) => {
    if (!selectedTask) return;

    const destinationStatus =
      destinationLabel === "Done" ? "Completed" : destinationLabel;

    if (!statuses.includes(destinationStatus)) return;

    if (selectedTask.status !== destinationStatus) {
      moveTaskToStatus(selectedTask.id, destinationStatus);
      setMoveFeedback(`Moved to ${destinationLabel}`);
      window.setTimeout(() => setMoveFeedback(null), 1200);
    }

    setSelectedTask(null);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    // Defensive: Cancel if no valid drop target
    if (!over) {
      setActiveTask(null);
      return;
    }

    const taskId = active.id;

    // Defensive: Find source task
    const sourceTask = tasks.find((task) => task.id === taskId);

    // Defensive: Cancel if no source task or invalid operation
    if (!sourceTask) {
      console.warn("No source task found for drag operation");
      setActiveTask(null);
      return;
    }

    // Resolve destination status:
    // - If dropping on a column, `over.id` is the column status.
    // - If dropping on a task card, `over.id` is a task id, so we infer status from that task.
    const destinationStatus = statuses.includes(over.id)
      ? over.id
      : tasks.find((t) => t.id === over.id)?.status;

    if (!destinationStatus || !statuses.includes(destinationStatus)) {
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
    <div className="w-full min-w-0">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="w-full overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory">
          <div className="flex gap-4 sm:gap-6 pb-4 pr-4 min-w-max lg:min-w-0 lg:w-full lg:pr-0 lg:pb-2">
            <TaskColumn
              title="To Do"
              status="To Do"
              tasks={todoTasks}
              columnColor="bg-white/10 backdrop-blur-xl"
              accentColor="border-white/20"
              disableDrag={isMobile}
              onTaskClick={
                isMobile ? (task) => setSelectedTask(task) : undefined
              }
            />
            <TaskColumn
              title="In Progress"
              status="In Progress"
              tasks={inProgressTasks}
              columnColor="bg-white/10 backdrop-blur-xl"
              accentColor="border-white/20"
              disableDrag={isMobile}
              onTaskClick={
                isMobile ? (task) => setSelectedTask(task) : undefined
              }
            />
            <TaskColumn
              title="Completed"
              status="Completed"
              tasks={completedTasks}
              columnColor="bg-white/10 backdrop-blur-xl"
              accentColor="border-white/20"
              disableDrag={isMobile}
              onTaskClick={
                isMobile ? (task) => setSelectedTask(task) : undefined
              }
            />
          </div>
        </div>

        <DragOverlay>
          {activeTask && (
            <div className="shadow-2xl rotate-2">
              <TaskCard task={activeTask} />
            </div>
          )}
        </DragOverlay>
      </DndContext>

      {moveFeedback && (
        <div className="fixed left-1/2 top-4 z-[60] -translate-x-1/2 rounded-xl bg-black/50 backdrop-blur-md border border-white/20 px-4 py-2 text-sm text-white shadow-2xl">
          {moveFeedback}
        </div>
      )}

      {isMobile && selectedTask && (
        <div className="fixed inset-0 z-[70]">
          <button
            type="button"
            aria-label="Close"
            className="absolute inset-0 bg-black/50"
            onClick={() => setSelectedTask(null)}
          />

          <div className="absolute inset-x-0 bottom-0 rounded-t-3xl bg-slate-900/80 backdrop-blur-xl border-t border-white/20 p-4">
            <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-white/20" />
            <div className="text-white font-semibold text-base mb-1 truncate">
              {selectedTask.title}
            </div>
            <div className="text-white/70 text-sm mb-4 line-clamp-2">
              {selectedTask.description}
            </div>

            <div className="grid grid-cols-1 gap-3">
              <button
                type="button"
                className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-left text-white"
                onClick={() => handleMoveFromSheet("To Do")}
              >
                Move to To Do
              </button>
              <button
                type="button"
                className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-left text-white"
                onClick={() => handleMoveFromSheet("In Progress")}
              >
                Move to In Progress
              </button>
              <button
                type="button"
                className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-left text-white"
                onClick={() => handleMoveFromSheet("Done")}
              >
                Move to Done
              </button>
            </div>

            <button
              type="button"
              className="mt-4 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white/80"
              onClick={() => setSelectedTask(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
