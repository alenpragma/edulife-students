"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  User,
  Calendar,
  Trophy,
  CreditCard,
  FileText,
  Bell,
  Settings,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Phone,
  MapPin,
  Mail,
  ExternalLink,
  GraduationCap,
  Sparkles,
  BookOpen,
  Download,
  Upload,
} from "lucide-react"
import Image from "next/image"

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Sample data based on the original UI
  const studentData = {
    name: "Afsan Habib",
    course: "Smart Kids",
    schedule: "Morning",
    status: "Active",
    avatar: "/student-avatar.png",
    phone: "01553119449",
    address: "Collagegate",
    dateOfBirth: "April 26, 2017 (8 years)",
    gender: "Male",
    admissionDate: "February 22, 2024",
    billingStart: "June 2025",
    monthlyFee: "৳1,000",
    feeDiscount: "%0",
    lastUpdated: "June 12, 2025",
    parentGuardian: "Ahasan Habib",
  }

  const attendanceData = {
    classesTaken: 5,
    present: 2,
    absent: 0,
    late: 0,
    excused: 3,
    attendanceRate: 40,
  }

  const leaderboardData = [
    { rank: 1, name: "Joyita Barua", points: 90, schedule: "Afternoon", avatar: "/student-studying.png" },
    { rank: 2, name: "Alokojjal Chakma", points: 89, schedule: "Morning", avatar: "/diverse-student-studying.png" },
    {
      rank: 3,
      name: "Owahida Shamim Ohee",
      points: 85,
      schedule: "Afternoon",
      avatar: "/diverse-students-studying.png",
    },
    { rank: 4, name: "Prashurjo Chakma", points: 84, schedule: "Morning", avatar: "/diverse-student-group.png" },
    { rank: 5, name: "Tahasin Bhuiya", points: 83, schedule: "Afternoon", avatar: "/diverse-student-group.png" },
  ]

  const billingData = {
    unpaidInvoices: 1,
    subtotal: 3000,
    totalPaid: 2000,
    totalDue: 1000,
    invoices: [
      { id: "#6E9E92", month: "Jun 2025", amount: 1000, due: 0, dueDate: "Jun 5, 2025", status: "Paid" },
      { id: "#AA9A31", month: "Jul 2025", amount: 1000, due: 0, dueDate: "Jul 5, 2025", status: "Paid" },
      { id: "#8D8D1B", month: "Aug 2025", amount: 1000, due: 1000, dueDate: "Aug 5, 2025", status: "Unpaid" },
    ],
  }

  const assignmentsData = [
    {
      id: 1,
      title: "Basic Computer Skills Assessment",
      subject: "Computer Fundamentals",
      dueDate: "Aug 25, 2025",
      status: "pending",
      description:
        "Complete the basic computer skills assessment covering keyboard shortcuts, file management, and basic software usage.",
      submittedDate: null,
      mark: null,
    },
    {
      id: 2,
      title: "Introduction to Programming",
      subject: "Programming Basics",
      dueDate: "Sep 1, 2025",
      status: "submitted",
      description: "Write a simple program using basic programming concepts learned in class.",
      submittedDate: "Aug 20, 2025",
      mark: 85,
    },
    {
      id: 3,
      title: "Digital Literacy Project",
      subject: "Digital Skills",
      dueDate: "Sep 10, 2025",
      status: "overdue",
      description: "Create a presentation about digital literacy and its importance in modern education.",
      submittedDate: null,
      mark: null,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <header className="sticky top-0 z-50 bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground shadow-xl border-b border-primary/20">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Image
                src="/edulife-logo.png"
                alt="Edulife IT Institute"
                width={180}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/20 rounded-xl transition-all duration-200"
            >
              <Bell className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/20 rounded-xl transition-all duration-200"
            >
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="bg-gradient-to-r from-card via-card to-muted/50 p-6 border-b border-border/50 backdrop-blur-sm">
        <div className="flex items-center gap-6">
          <div className="relative">
            <Avatar className="h-20 w-20 ring-4 ring-primary/20 ring-offset-2 ring-offset-background">
              <AvatarImage src={studentData.avatar || "/placeholder.svg"} alt={studentData.name} />
              <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground text-xl font-black">
                {studentData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
              <CheckCircle className="h-3 w-3 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-black text-card-foreground mb-1">{studentData.name}</h2>
            <p className="text-muted-foreground font-medium text-lg">
              {studentData.course} • {studentData.schedule}
            </p>
            <Badge
              variant="secondary"
              className="mt-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200 font-semibold px-3 py-1"
            >
              <CheckCircle className="h-3 w-3 mr-1" />
              {studentData.status}
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full mb-8 bg-muted/50 p-1 rounded-xl border border-border/50 flex overflow-x-auto">
            <TabsTrigger
              value="overview"
              className="text-sm font-semibold rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200 whitespace-nowrap px-4"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="attendance"
              className="text-sm font-semibold rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200 whitespace-nowrap px-4"
            >
              Attendance
            </TabsTrigger>
            <TabsTrigger
              value="assignments"
              className="text-sm font-semibold rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200 whitespace-nowrap px-4"
            >
              Assignments
            </TabsTrigger>
            <TabsTrigger
              value="leaderboard"
              className="text-sm font-semibold rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200 whitespace-nowrap px-4"
            >
              Rankings
            </TabsTrigger>
            <TabsTrigger
              value="billing"
              className="text-sm font-semibold rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200 whitespace-nowrap px-4"
            >
              Billing
            </TabsTrigger>
            <TabsTrigger
              value="profile"
              className="text-sm font-semibold rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200 whitespace-nowrap px-4"
            >
              Profile
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/20 rounded-xl">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">Attendance</p>
                      <p className="text-3xl font-black text-primary">{attendanceData.attendanceRate}%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent border-secondary/20 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-secondary/20 rounded-xl">
                      <Trophy className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">Rank</p>
                      <p className="text-3xl font-black text-secondary">#6</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-lg border-border/50">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-black flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="p-2 bg-green-500 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-800">Attended Morning Class</p>
                    <p className="text-sm text-green-600">Today, 9:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <div className="p-2 bg-primary rounded-lg">
                    <CreditCard className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Payment Due</p>
                    <p className="text-sm text-muted-foreground">Aug 5, 2025 - ৳1,000</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-secondary/5 rounded-xl border border-secondary/20">
                  <div className="p-2 bg-secondary rounded-lg">
                    <Trophy className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">Moved to Rank #6</p>
                    <p className="text-sm text-muted-foreground">Yesterday</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Attendance Tab */}
          <TabsContent value="attendance" className="space-y-6">
            <Card className="shadow-lg border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-black">
                  <Calendar className="h-6 w-6 text-primary" />
                  Attendance Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
                  <div className="text-4xl font-black text-primary mb-2">{attendanceData.attendanceRate}%</div>
                  <p className="text-muted-foreground font-medium">Overall Attendance</p>
                </div>

                <Progress value={attendanceData.attendanceRate} className="h-4 bg-muted rounded-full" />

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-3xl font-black text-green-600">{attendanceData.present}</div>
                    <div className="text-sm font-semibold text-green-600">Present</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl border border-gray-200">
                    <AlertCircle className="h-8 w-8 text-gray-600 mx-auto mb-2" />
                    <div className="text-3xl font-black text-gray-600">{attendanceData.excused}</div>
                    <div className="text-sm font-semibold text-gray-600">Excused</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-red-50 to-rose-50 rounded-xl border border-red-200">
                    <XCircle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <div className="text-3xl font-black text-red-600">{attendanceData.absent}</div>
                    <div className="text-sm font-semibold text-red-600">Absent</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl border border-yellow-200">
                    <Clock className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                    <div className="text-3xl font-black text-yellow-600">{attendanceData.late}</div>
                    <div className="text-sm font-semibold text-yellow-600">Late</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Assignments Tab */}
          <TabsContent value="assignments" className="space-y-6">
            <Card className="shadow-lg border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-black">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Assignment Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                {assignmentsData.length > 0 ? (
                  <div className="space-y-4">
                    {assignmentsData.map((assignment) => (
                      <div
                        key={assignment.id}
                        className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                          assignment.status === "submitted"
                            ? "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200"
                            : assignment.status === "overdue"
                              ? "bg-gradient-to-r from-red-50 to-rose-50 border-red-200"
                              : "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200"
                        }`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-card-foreground mb-1">{assignment.title}</h3>
                            <p className="text-sm text-muted-foreground font-medium mb-2">{assignment.subject}</p>
                            <p className="text-sm text-muted-foreground">{assignment.description}</p>
                          </div>
                          <Badge
                            variant={
                              assignment.status === "submitted"
                                ? "secondary"
                                : assignment.status === "overdue"
                                  ? "destructive"
                                  : "default"
                            }
                            className="ml-4 font-semibold"
                          >
                            {assignment.status === "submitted"
                              ? "Submitted"
                              : assignment.status === "overdue"
                                ? "Overdue"
                                : "Pending"}
                          </Badge>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">Due: {assignment.dueDate}</span>
                            </div>
                            {assignment.submittedDate && (
                              <div className="flex items-center gap-1">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span className="font-medium text-green-600">
                                  Submitted: {assignment.submittedDate}
                                </span>
                              </div>
                            )}
                            {assignment.mark && (
                              <div className="flex items-center gap-1">
                                <Trophy className="h-4 w-4 text-secondary" />
                                <span className="font-bold text-secondary">{assignment.mark}/100</span>
                              </div>
                            )}
                          </div>

                          <div className="flex gap-2">
                            {assignment.status === "pending" && (
                              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                <Upload className="h-4 w-4 mr-1" />
                                Submit
                              </Button>
                            )}
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-muted-foreground mb-2">No assignments found</h3>
                    <p className="text-sm text-muted-foreground">
                      Student hasn't received or submitted any assignments yet
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Leaderboard Tab */}
          <TabsContent value="leaderboard" className="space-y-6">
            <Card className="shadow-lg border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-black">
                  <Trophy className="h-6 w-6 text-secondary" />
                  Top Performers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {leaderboardData.map((student, index) => (
                  <div
                    key={student.rank}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${
                      index < 3
                        ? "bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/5 border-2 border-primary/20 shadow-md"
                        : "bg-muted/30 border border-border/50 hover:bg-muted/50"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shadow-lg ${
                        index === 0
                          ? "bg-gradient-to-br from-yellow-400 to-yellow-600 text-white"
                          : index === 1
                            ? "bg-gradient-to-br from-gray-300 to-gray-500 text-white"
                            : index === 2
                              ? "bg-gradient-to-br from-amber-500 to-amber-700 text-white"
                              : "bg-gradient-to-br from-muted to-muted-foreground/20 text-muted-foreground"
                      }`}
                    >
                      {student.rank}
                    </div>
                    <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                      <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground font-bold">
                        {student.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-bold text-card-foreground">{student.name}</p>
                      <p className="text-sm text-muted-foreground font-medium">{student.schedule}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-2xl text-primary">{student.points}</div>
                      <div className="text-xs text-muted-foreground font-medium">points</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="space-y-6">
            <div className="grid grid-cols-3 gap-3">
              <Card className="bg-gradient-to-br from-red-50 to-rose-50 border-red-200 shadow-lg">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-black text-red-600">{billingData.unpaidInvoices}</div>
                  <div className="text-xs text-red-600 font-semibold">Unpaid</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-black text-green-600">৳{billingData.totalPaid.toLocaleString()}</div>
                  <div className="text-xs text-green-600 font-semibold">Paid</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 shadow-lg">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-black text-primary">৳{billingData.totalDue.toLocaleString()}</div>
                  <div className="text-xs text-primary font-semibold">Due</div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-lg border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-black">
                  <CreditCard className="h-6 w-6 text-primary" />
                  Payment History
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {billingData.invoices.map((invoice) => (
                  <div
                    key={invoice.id}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-muted/30 to-muted/10 rounded-xl border border-border/50"
                  >
                    <div>
                      <p className="font-bold text-card-foreground">{invoice.id}</p>
                      <p className="text-sm text-muted-foreground font-medium">{invoice.month}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-lg">৳{invoice.amount.toLocaleString()}</p>
                      <Badge
                        variant={invoice.status === "Paid" ? "secondary" : "destructive"}
                        className="text-xs font-semibold"
                      >
                        {invoice.status}
                      </Badge>
                    </div>
                  </div>
                ))}
                <Button className="w-full mt-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-bold py-3 rounded-xl shadow-lg transition-all duration-200">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Pay Now
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="shadow-lg border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-black">
                  <User className="h-6 w-6 text-primary" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="p-4 bg-gradient-to-r from-muted/30 to-muted/10 rounded-xl">
                    <label className="text-sm font-bold text-muted-foreground uppercase tracking-wide">
                      Date of Birth
                    </label>
                    <p className="font-semibold text-lg text-card-foreground">{studentData.dateOfBirth}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-muted/30 to-muted/10 rounded-xl">
                    <label className="text-sm font-bold text-muted-foreground uppercase tracking-wide">Gender</label>
                    <p className="font-semibold text-lg text-card-foreground">{studentData.gender}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-muted/30 to-muted/10 rounded-xl">
                    <label className="text-sm font-bold text-muted-foreground uppercase tracking-wide">Phone</label>
                    <p className="font-semibold text-lg text-card-foreground flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      {studentData.phone}
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-muted/30 to-muted/10 rounded-xl">
                    <label className="text-sm font-bold text-muted-foreground uppercase tracking-wide">Address</label>
                    <p className="font-semibold text-lg text-card-foreground flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      {studentData.address}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-black">
                  <FileText className="h-6 w-6 text-secondary" />
                  Academic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="p-4 bg-gradient-to-r from-muted/30 to-muted/10 rounded-xl">
                    <label className="text-sm font-bold text-muted-foreground uppercase tracking-wide">
                      Admission Date
                    </label>
                    <p className="font-semibold text-lg text-card-foreground">{studentData.admissionDate}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-muted/30 to-muted/10 rounded-xl">
                    <label className="text-sm font-bold text-muted-foreground uppercase tracking-wide">
                      Monthly Fee
                    </label>
                    <p className="font-semibold text-lg text-card-foreground">{studentData.monthlyFee}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-muted/30 to-muted/10 rounded-xl">
                    <label className="text-sm font-bold text-muted-foreground uppercase tracking-wide">
                      Parent/Guardian
                    </label>
                    <p className="font-semibold text-lg text-card-foreground">{studentData.parentGuardian}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-muted/30 to-muted/10 rounded-xl">
                    <label className="text-sm font-bold text-muted-foreground uppercase tracking-wide">
                      Last Updated
                    </label>
                    <p className="font-semibold text-lg text-card-foreground">{studentData.lastUpdated}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <footer className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white p-8 mt-12 border-t border-slate-600">
        <div className="space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-black">Edulife IT Institute</h3>
            </div>
            <p className="text-slate-300 font-medium">
              Nurturing young minds through innovative learning experiences since 2015
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-black text-lg mb-4 text-primary">Contact Information</h4>
              <div className="space-y-3 text-slate-300">
                <p className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="font-medium">+8801519575226</span>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="font-medium">edulifetraining@gmail.com</span>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <ExternalLink className="h-4 w-4 text-primary" />
                  <span className="font-medium">www.edulifeuniversity.com</span>
                </p>
              </div>
            </div>

            <div className="text-center">
              <h4 className="font-black text-lg mb-4 text-secondary">Address</h4>
              <div className="text-slate-300 space-y-2">
                <p className="font-medium">Shantinagar (Adjacent to BRAC Office)</p>
                <p className="font-medium">Khagrachari, Chittagong</p>
                <p className="font-medium">Bangladesh</p>
                <p className="font-medium">Postal Code: 4400</p>
              </div>
            </div>

            <div className="text-center">
              <h4 className="font-black text-lg mb-4 text-accent">Office Hours</h4>
              <div className="text-slate-300 space-y-2">
                <p className="font-medium">Saturday - Thursday</p>
                <p className="font-medium">9:00 AM - 5:00 PM</p>
                <p className="font-medium">Friday</p>
                <p className="font-medium">9:00 AM - 12:00 PM</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-600 text-center">
            <p className="text-slate-400 font-medium">© 2025 Edulife IT Institute. All rights reserved.</p>
            <p className="text-slate-500 text-sm mt-2">Student Portal v1.0</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
