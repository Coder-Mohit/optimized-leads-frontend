import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Search, Eye, Edit, MoreVertical } from "lucide-react";
import StatusBadge from "./StatusBadge";

// Mock data for leads
const mockLeads = [
  {
    id: 1,
    name: "Rahul Sharma",
    phone: "+91 98765 43210",
    source: "Study Abroad",
    status: "New",
    date: "2024-02-07",
    email: "rahul.sharma@email.com",
    value: "₹45,000",
  },
  {
    id: 2,
    name: "Priya Patel",
    phone: "+91 87654 32109",
    source: "Real Estate",
    status: "Contacted",
    date: "2024-02-06",
    email: "priya.patel@email.com",
    value: "₹32,000",
  },
  {
    id: 3,
    name: "Amit Kumar",
    phone: "+91 76543 21098",
    source: "Education",
    status: "Converted",
    date: "2024-02-05",
    email: "amit.kumar@email.com",
    value: "₹58,000",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    phone: "+91 65432 10987",
    source: "Forex Market",
    status: "New",
    date: "2024-02-07",
    email: "sneha.reddy@email.com",
    value: "₹28,000",
  },
  {
    id: 5,
    name: "Vikram Singh",
    phone: "+91 54321 09876",
    source: "Study Abroad",
    status: "Contacted",
    date: "2024-02-04",
    email: "vikram.singh@email.com",
    value: "₹41,000",
  },
  {
    id: 6,
    name: "Meera Joshi",
    phone: "+91 43210 98765",
    source: "Real Estate",
    status: "Converted",
    date: "2024-02-03",
    email: "meera.joshi@email.com",
    value: "₹67,000",
  },
];

export default function LeadsTable({ statusFilter = "All" }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter leads based on status and search term
  const filteredLeads = mockLeads.filter((lead) => {
    const matchesStatus =
      statusFilter === "All" || lead.status === statusFilter;
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm);
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className="flex items-center justify-between">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search leads..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
          />
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>{filteredLeads.length} results</span>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50 border-b border-gray-200">
            <TableRow>
              <TableHead className="font-semibold text-gray-900">
                Lead
              </TableHead>
              <TableHead className="font-semibold text-gray-900">
                Contact
              </TableHead>
              <TableHead className="font-semibold text-gray-900">
                Source
              </TableHead>
              <TableHead className="font-semibold text-gray-900">
                Value
              </TableHead>
              <TableHead className="font-semibold text-gray-900">
                Status
              </TableHead>
              <TableHead className="font-semibold text-gray-900">
                Date
              </TableHead>
              <TableHead className="font-semibold text-gray-900 text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLeads.map((lead) => (
              <TableRow
                key={lead.id}
                className="hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                <TableCell className="font-medium">
                  <div>
                    <div className="font-medium text-gray-900">{lead.name}</div>
                    <div className="text-sm text-gray-500">
                      ID: #{lead.id.toString().padStart(4, "0")}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="text-gray-700">{lead.phone}</div>
                    <div className="text-sm text-gray-500">{lead.email}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="border-gray-200 text-gray-700"
                  >
                    {lead.source}
                  </Badge>
                </TableCell>
                <TableCell className="font-semibold text-gray-900">
                  {lead.value}
                </TableCell>
                <TableCell>
                  <StatusBadge status={lead.status} />
                </TableCell>
                <TableCell className="text-gray-700">{lead.date}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-blue-50 hover:text-blue-600 p-2"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-green-50 hover:text-green-600 p-2"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-gray-50 hover:text-gray-600 p-2"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Empty State */}
      {filteredLeads.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-sm">No leads found</div>
        </div>
      )}
    </div>
  );
}
