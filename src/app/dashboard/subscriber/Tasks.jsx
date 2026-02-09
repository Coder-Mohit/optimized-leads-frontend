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
    <div className="p-6 min-h-full relative">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-100 rounded-xl">
                <BarChart3 className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-orange-200 to-red-200 bg-clip-text text-transparent">
                  Tasks
                </h1>
                <p className="text-white/70">
                  Manage your tasks and track progress
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                <span className="hidden sm:inline">New Task</span>
                <span className="sm:hidden">Add</span>
              </button>
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
                <div className="text-gray-400 text-sm">
                  List view coming soon
                </div>
                <div className="text-gray-500 text-xs mt-2">
                  Switch to board view to manage tasks
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
