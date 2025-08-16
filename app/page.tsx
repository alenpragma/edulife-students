"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
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
  Upload,
  Menu,
  X,
  Home,
  Play,
  Send,
} from "lucide-react"
import Image from "next/image"

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedAssignment, setSelectedAssignment] = useState(null)
  const [submissionUrl, setSubmissionUrl] = useState("")

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
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      submittedDate: null,
      submittedVideoUrl: null,
      mark: null,
    },
    {
      id: 2,
      title: "Introduction to Programming",
      subject: "Programming Basics",
      dueDate: "Sep 1, 2025",
      status: "submitted",
      description: "Write a simple program using basic programming concepts learned in class.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      submittedDate: "Aug 20, 2025",
      submittedVideoUrl: "https://www.youtube.com/embed/student-submission-1",
      mark: 85,
    },
    {
      id: 3,
      title: "Digital Literacy Project",
      subject: "Digital Skills",
      dueDate: "Sep 10, 2025",
      status: "overdue",
      description: "Create a presentation about digital literacy and its importance in modern education.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      submittedDate: null,
      submittedVideoUrl: null,
      mark: null,
    },
    {
      id: 4,
      title: "Web Development Basics",
      subject: "Web Development",
      dueDate: "Sep 15, 2025",
      status: "pending",
      description: "Create a simple HTML webpage with CSS styling and basic JavaScript functionality.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      submittedDate: null,
      submittedVideoUrl: null,
      mark: null,
    },
    {
      id: 5,
      title: "Database Fundamentals",
      subject: "Database Management",
      dueDate: "Aug 10, 2025",
      status: "not_submitted",
      description: "Design a simple database schema and write basic SQL queries.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      submittedDate: null,
      submittedVideoUrl: null,
      mark: null,
    },
  ]

  const assignmentStats = {
    total: assignmentsData.length,
    pending: assignmentsData.filter((a) => a.status === "pending").length,
    submitted: assignmentsData.filter((a) => a.status === "submitted").length,
    notSubmitted: assignmentsData.filter((a) => a.status === "overdue" || a.status === "not_submitted").length,
  }

  const upcomingEvents = {
    nextExam: {
      subject: "Computer Fundamentals",
      date: "Sep 5, 2025",
      time: "10:00 AM",
      type: "Mid-term Exam",
    },
    nextClass: {
      subject: "Programming Basics",
      date: "Tomorrow",
      time: "9:00 AM",
    },
  }

  const navigationItems = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "attendance", label: "Attendance", icon: Calendar },
    { id: "assignments", label: "Assignments", icon: BookOpen },
    { id: "leaderboard", label: "Rankings", icon: Trophy },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "profile", label: "Profile", icon: User },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground shadow-xl border-b border-primary/20">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-primary-foreground hover:bg-primary-foreground/20 rounded-xl"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
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

      {/* ... existing student profile section ... */}
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

      <div className="flex">
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        <aside
          className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-72 bg-gradient-to-b from-card via-card to-muted/30 border-r border-border/50 shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          <div className="p-6 border-b border-border/50">
            <div className="flex items-center justify-between">
              <div className="lg:hidden">
                <Image
                  src="/edulife-logo.png"
                  alt="Edulife IT Institute"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                />
              </div>
              <h3 className="text-xl font-black text-card-foreground hidden lg:block">Navigation</h3>
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <nav className="p-4 space-y-2 flex-1">
              {navigationItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id)
                      setSidebarOpen(false)
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                      activeTab === item.id
                        ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg font-bold"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-card-foreground font-semibold"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </button>
                )
              })}
            </nav>

            <div className="p-4 border-t border-border/50 mt-auto">
              <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-3">Quick Stats</h4>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg gap-2 sm:gap-0">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-semibold">Attendance</span>
                  </div>
                  <span className="text-lg sm:text-sm font-black text-primary">{attendanceData.attendanceRate}%</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-lg gap-2 sm:gap-0">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-sm font-semibold">Rank</span>
                  </div>
                  <span className="text-lg sm:text-sm font-black text-secondary">#6</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-gradient-to-r from-red-50 to-rose-50 rounded-lg border border-red-200 gap-2 sm:gap-0">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-red-600 flex-shrink-0" />
                    <span className="text-sm font-semibold text-red-600">Due</span>
                  </div>
                  <span className="text-lg sm:text-sm font-black text-red-600">
                    ৳{billingData.totalDue.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-6 lg:ml-0">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <h1 className="text-3xl font-black text-card-foreground">Dashboard Overview</h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/20 rounded-xl">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">Pending Assignments</p>
                        <p className="text-3xl font-black text-primary">{assignmentStats.pending}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent border-secondary/20 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-secondary/20 rounded-xl">
                        <Calendar className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">Next Exam</p>
                        <p className="text-lg font-black text-secondary">{upcomingEvents.nextExam.date}</p>
                        <p className="text-xs text-muted-foreground">{upcomingEvents.nextExam.subject}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-red-50 via-red-25 to-transparent border-red-200 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-red-100 rounded-xl">
                        <CreditCard className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">Due Payment</p>
                        <p className="text-3xl font-black text-red-600">৳{billingData.totalDue.toLocaleString()}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 via-green-25 to-transparent border-green-200 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-green-100 rounded-xl">
                        <Trophy className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">Current Rank</p>
                        <p className="text-3xl font-black text-green-600">#6</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="shadow-lg border-border/50">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-black flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Upcoming Events
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                      <div className="p-2 bg-blue-500 rounded-lg">
                        <FileText className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-blue-800">{upcomingEvents.nextExam.type}</p>
                        <p className="text-sm text-blue-600">{upcomingEvents.nextExam.subject}</p>
                        <p className="text-sm text-blue-600">
                          {upcomingEvents.nextExam.date} at {upcomingEvents.nextExam.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                      <div className="p-2 bg-green-500 rounded-lg">
                        <BookOpen className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-green-800">Next Class</p>
                        <p className="text-sm text-green-600">{upcomingEvents.nextClass.subject}</p>
                        <p className="text-sm text-green-600">
                          {upcomingEvents.nextClass.date} at {upcomingEvents.nextClass.time}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

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
              </div>
            </div>
          )}

          {/* ... existing attendance tab code ... */}
          {activeTab === "attendance" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h1 className="text-3xl font-black text-card-foreground">Attendance</h1>
              </div>

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
            </div>
          )}

          {activeTab === "assignments" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h1 className="text-3xl font-black text-card-foreground">Assignments</h1>
              </div>

              {/* Assignment Summary Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg">
                  <CardContent className="p-4 text-center">
                    <div className="p-2 bg-blue-500 rounded-lg w-fit mx-auto mb-2">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-black text-blue-600">{assignmentStats.total}</div>
                    <div className="text-sm font-semibold text-blue-600">Total Assignments</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200 shadow-lg">
                  <CardContent className="p-4 text-center">
                    <div className="p-2 bg-yellow-500 rounded-lg w-fit mx-auto mb-2">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-black text-yellow-600">{assignmentStats.pending}</div>
                    <div className="text-sm font-semibold text-yellow-600">Pending</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg">
                  <CardContent className="p-4 text-center">
                    <div className="p-2 bg-green-500 rounded-lg w-fit mx-auto mb-2">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-black text-green-600">{assignmentStats.submitted}</div>
                    <div className="text-sm font-semibold text-green-600">Submitted</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-red-50 to-rose-50 border-red-200 shadow-lg">
                  <CardContent className="p-4 text-center">
                    <div className="p-2 bg-red-500 rounded-lg w-fit mx-auto mb-2">
                      <XCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-black text-red-600">{assignmentStats.notSubmitted}</div>
                    <div className="text-sm font-semibold text-red-600">Not Submitted</div>
                  </CardContent>
                </Card>
              </div>

              {/* Assignment Submission Modal */}
              {selectedAssignment && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                  <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl font-black">
                          Submit Assignment: {selectedAssignment.title}
                        </CardTitle>
                        <Button variant="ghost" size="icon" onClick={() => setSelectedAssignment(null)}>
                          <X className="h-5 w-5" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Assignment Video */}
                      <div>
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <Play className="h-5 w-5 text-primary" />
                          Assignment Instructions Video
                        </h3>
                        <div className="aspect-video bg-black rounded-lg overflow-hidden">
                          <iframe
                            src={selectedAssignment.videoUrl}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>

                      {/* Assignment Description */}
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-bold mb-2">Assignment Description:</h4>
                        <p className="text-muted-foreground">{selectedAssignment.description}</p>
                      </div>

                      {/* Submission Form */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-bold flex items-center gap-2">
                          <Upload className="h-5 w-5 text-secondary" />
                          Submit Your Video
                        </h3>
                        <div className="space-y-3">
                          <label className="text-sm font-semibold">Video URL (YouTube, Vimeo, etc.)</label>
                          <input
                            type="url"
                            value={submissionUrl}
                            onChange={(e) => setSubmissionUrl(e.target.value)}
                            placeholder="https://www.youtube.com/watch?v=..."
                            className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </div>

                        {/* Preview submitted video */}
                        {submissionUrl && (
                          <div>
                            <h4 className="font-semibold mb-2">Preview:</h4>
                            <div className="aspect-video bg-black rounded-lg overflow-hidden">
                              <iframe
                                src={submissionUrl.replace("watch?v=", "embed/")}
                                className="w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                            </div>
                          </div>
                        )}

                        <div className="flex gap-3 pt-4">
                          <Button
                            onClick={() => {
                              // Handle submission logic here
                              alert(`Assignment submitted with video: ${submissionUrl}`)
                              setSelectedAssignment(null)
                              setSubmissionUrl("")
                            }}
                            disabled={!submissionUrl}
                            className="bg-primary hover:bg-primary/90"
                          >
                            <Send className="h-4 w-4 mr-2" />
                            Submit Assignment
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => {
                              setSelectedAssignment(null)
                              setSubmissionUrl("")
                            }}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Assignment List */}
              <Card className="shadow-lg border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl font-black">
                    <BookOpen className="h-6 w-6 text-primary" />
                    Assignment List
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
                              : assignment.status === "overdue" || assignment.status === "not_submitted"
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
                                  : assignment.status === "overdue" || assignment.status === "not_submitted"
                                    ? "destructive"
                                    : "default"
                              }
                              className="ml-4 font-semibold"
                            >
                              {assignment.status === "submitted"
                                ? "Submitted"
                                : assignment.status === "overdue"
                                  ? "Overdue"
                                  : assignment.status === "not_submitted"
                                    ? "Not Submitted"
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
                                <Button
                                  size="sm"
                                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                                  onClick={() => setSelectedAssignment(assignment)}
                                >
                                  <Upload className="h-4 w-4 mr-1" />
                                  Submit
                                </Button>
                              )}
                              <Button variant="outline" size="sm" onClick={() => setSelectedAssignment(assignment)}>
                                <Play className="h-4 w-4 mr-1" />
                                View
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
            </div>
          )}

          {/* ... existing other tabs ... */}
        </main>
      </div>

      {/* ... existing footer ... */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white mt-12 border-t-4 border-primary">
        <div className="p-8 space-y-8">
          <div className="text-center border-b border-slate-700 pb-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Edulife IT Institute
                </h3>
                <p className="text-slate-400 text-sm font-medium">Student Portal v1.0</p>
              </div>
            </div>
            <p className="text-slate-300 font-medium max-w-2xl mx-auto">
              Nurturing young minds through innovative learning experiences since 2015. Empowering students with
              cutting-edge technology education and practical skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <h4 className="font-black text-xl mb-4 text-primary flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Contact Information
              </h4>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center gap-3 p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="font-medium">+8801519575226</span>
                </div>
                <div className="flex items-center gap-3 p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="font-medium">edulifetraining@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
                  <ExternalLink className="h-4 w-4 text-primary" />
                  <span className="font-medium">www.edulifeuniversity.com</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <h4 className="font-black text-xl mb-4 text-secondary flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Our Location
              </h4>
              <div className="text-slate-300 space-y-2">
                <p className="font-medium">Shantinagar</p>
                <p className="text-sm text-slate-400">(Adjacent to BRAC Office)</p>
                <p className="font-medium">Khagrachari, Chittagong</p>
                <p className="font-medium">Bangladesh</p>
                <div className="mt-3 p-2 bg-slate-700/50 rounded-lg">
                  <p className="text-sm font-bold text-primary">Postal Code: 4400</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <h4 className="font-black text-xl mb-4 text-accent flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Office Hours
              </h4>
              <div className="text-slate-300 space-y-3">
                <div className="p-3 bg-slate-700/50 rounded-lg">
                  <p className="font-bold text-green-400">Saturday - Thursday</p>
                  <p className="text-sm">9:00 AM - 5:00 PM</p>
                </div>
                <div className="p-3 bg-slate-700/50 rounded-lg">
                  <p className="font-bold text-blue-400">Friday</p>
                  <p className="text-sm">9:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-700 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-slate-400 font-medium">© 2025 Edulife IT Institute. All rights reserved.</p>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span>Privacy Policy</span>
                <span>•</span>
                <span>Terms of Service</span>
                <span>•</span>
                <span>Support</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
