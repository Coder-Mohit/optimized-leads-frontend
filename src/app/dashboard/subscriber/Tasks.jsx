import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { Input } from "../../../components/ui/input";
import { Plus, Search, Filter, Calendar, User, BarChart3 } from "lucide-react";
import TaskBoard from "../../../components/dashboard/TaskBoard";

// Mock data for stats
const taskStats = {
  total: 8,
  todo: 3,
  inProgress: 3,
  completed: 2,
};

export default function Tasks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("board"); // 'board' or 'list'

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-full">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-orange-100 rounded-xl">
              <BarChart3 className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
              <p className="text-gray-600">
                Manage your tasks and track progress
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700">
              <Plus className="w-4 h-4" />
              New Task
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="shadow-md border-0 bg-white">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-gray-900">
                {taskStats.total}
              </div>
              <div className="text-sm text-gray-600">Total Tasks</div>
            </CardContent>
          </Card>
          <Card className="shadow-md border-0 bg-white">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-red-600">
                {taskStats.todo}
              </div>
              <div className="text-sm text-gray-600">To Do</div>
            </CardContent>
          </Card>
          <Card className="shadow-md border-0 bg-white">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-yellow-600">
                {taskStats.inProgress}
              </div>
              <div className="text-sm text-gray-600">In Progress</div>
            </CardContent>
          </Card>
          <Card className="shadow-md border-0 bg-white">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-600">
                {taskStats.completed}
              </div>
              <div className="text-sm text-gray-600">Completed</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* View Toggle and Filters */}
      <Card className="shadow-lg border-0 bg-white mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "board" ? "default" : "outline"}
                onClick={() => setViewMode("board")}
                className="flex items-center gap-2"
              >
                <div className="w-4 h-4 grid grid-cols-3 gap-0.5">
                  <div className="w-1 h-1 bg-current rounded-sm"></div>
                  <div className="w-1 h-1 bg-current rounded-sm"></div>
                  <div className="w-1 h-1 bg-current rounded-sm"></div>
                  <div className="w-1 h-1 bg-current rounded-sm"></div>
                  <div className="w-1 h-1 bg-current rounded-sm"></div>
                  <div className="w-1 h-1 bg-current rounded-sm"></div>
                </div>
                Board View
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                onClick={() => setViewMode("list")}
                className="flex items-center gap-2"
              >
                <div className="w-4 h-4 space-y-0.5">
                  <div className="w-full h-0.5 bg-current rounded-sm"></div>
                  <div className="w-full h-0.5 bg-current rounded-sm"></div>
                  <div className="w-full h-0.5 bg-current rounded-sm"></div>
                </div>
                List View
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search tasks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Task Board */}
      {viewMode === "board" ? (
        <TaskBoard />
      ) : (
        <Card className="shadow-lg border-0 bg-white">
          <CardContent className="p-6">
            <div className="text-center py-12">
              <div className="text-gray-400 text-sm">List view coming soon</div>
              <div className="text-gray-500 text-xs mt-2">
                Switch to board view to manage tasks
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
