"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Brain,
  Code,
  Users,
  Settings,
  Play,
  Video,
  MessageSquare,
  BarChart3,
  Target,
  Clock,
  Trophy,
  Github,
  Twitter,
  Linkedin,
  Menu,
  X,
  ChevronRight,
  Zap,
  Shield,
  Star,
} from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"

export default function InterviewProPlatform() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Mock data for charts
  const skillsData = [
    { skill: "Technical", score: 85 },
    { skill: "Communication", score: 78 },
    { skill: "Problem Solving", score: 92 },
    { skill: "System Design", score: 70 },
    { skill: "Behavioral", score: 88 },
    { skill: "Leadership", score: 75 },
  ]

  const performanceData = [
    { session: "Session 1", score: 65 },
    { session: "Session 2", score: 72 },
    { session: "Session 3", score: 78 },
    { session: "Session 4", score: 85 },
    { session: "Session 5", score: 88 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">InterviewPro</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-700 hover:text-indigo-600 transition-colors">
                Home
              </a>
              <a href="#" className="text-slate-700 hover:text-indigo-600 transition-colors">
                Practice
              </a>
              <a href="#" className="text-slate-700 hover:text-indigo-600 transition-colors">
                Interview
              </a>
              <a href="#" className="text-slate-700 hover:text-indigo-600 transition-colors">
                Dashboard
              </a>
              <a href="#" className="text-slate-700 hover:text-indigo-600 transition-colors">
                Profile
              </a>
            </div>

            {/* Auth Section */}
            <div className="hidden md:flex items-center space-x-4">
              {isLoggedIn ? (
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
              ) : (
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" onClick={() => (window.location.href = "/auth/login")}>
                    Login
                  </Button>
                  <Button
                    className="bg-indigo-600 hover:bg-indigo-700"
                    onClick={() => (window.location.href = "/auth/signup")}
                  >
                    Sign Up
                  </Button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <div className="flex flex-col space-y-2">
                <a href="#" className="px-3 py-2 text-slate-700 hover:text-indigo-600 transition-colors">
                  Home
                </a>
                <a href="#" className="px-3 py-2 text-slate-700 hover:text-indigo-600 transition-colors">
                  Practice
                </a>
                <a href="#" className="px-3 py-2 text-slate-700 hover:text-indigo-600 transition-colors">
                  Interview
                </a>
                <a href="#" className="px-3 py-2 text-slate-700 hover:text-indigo-600 transition-colors">
                  Dashboard
                </a>
                <a href="#" className="px-3 py-2 text-slate-700 hover:text-indigo-600 transition-colors">
                  Profile
                </a>
                <div className="flex space-x-2 px-3 pt-2">
                  <Button variant="ghost" size="sm" onClick={() => (window.location.href = "/auth/login")}>
                    Login
                  </Button>
                  <Button
                    size="sm"
                    className="bg-indigo-600 hover:bg-indigo-700"
                    onClick={() => (window.location.href = "/auth/signup")}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-100">
                  <Zap className="w-3 h-3 mr-1" />
                  AI-Powered Interview Prep
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Master Interviews with <span className="text-indigo-600">AI</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Simulated mock interviews with real-time AI feedback on voice, coding, and body language. Practice
                  with confidence and land your dream job.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-3"
                  onClick={() => (window.location.href = "/auth/signup")}
                >
                  Start Free Mock Interview
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 bg-transparent"
                  onClick={() => alert("Demo video coming soon!")}
                >
                  Watch Demo
                  <Play className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Free to start</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>4.9/5 rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="AI Interview Simulation"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Interview Progress</span>
                    <span className="text-sm text-slate-500">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Modes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Choose Your Interview Mode</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Practice different types of interviews with our AI-powered simulation platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600 transition-colors">
                  <Code className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Technical Round</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-slate-600">
                  Practice coding problems, algorithms, and system design questions with real-time code execution
                </CardDescription>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Live coding environment</li>
                  <li>• Multiple programming languages</li>
                  <li>• AI code review</li>
                </ul>
                <Button
                  className="w-full bg-indigo-600 hover:bg-indigo-700"
                  onClick={() => alert("Technical Round coming soon! Please sign up to get notified.")}
                >
                  Try Now
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                  <Users className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">HR Round</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-slate-600">
                  Master behavioral questions and soft skills with AI-powered conversation analysis
                </CardDescription>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Voice & video analysis</li>
                  <li>• Body language feedback</li>
                  <li>• Communication scoring</li>
                </ul>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => alert("HR Round coming soon! Please sign up to get notified.")}
                >
                  Try Now
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors">
                  <Settings className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">System Design</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-slate-600">
                  Design scalable systems with interactive diagramming and architecture feedback
                </CardDescription>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Interactive whiteboard</li>
                  <li>• Architecture patterns</li>
                  <li>• Scalability analysis</li>
                </ul>
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={() => alert("System Design coming soon! Please sign up to get notified.")}
                >
                  Try Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coding IDE Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Built-in Code Editor</h2>
            <p className="text-xl text-slate-600">Practice coding with our Monaco-powered editor</p>
          </div>

          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-slate-800 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">main.py</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Select defaultValue="python">
                    <SelectTrigger className="w-32 bg-slate-700 border-slate-600">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="python">Python</SelectItem>
                      <SelectItem value="javascript">JavaScript</SelectItem>
                      <SelectItem value="java">Java</SelectItem>
                      <SelectItem value="cpp">C++</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <Play className="w-4 h-4 mr-2" />
                    Run
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 h-96">
                <div className="bg-slate-900 text-green-400 font-mono text-sm p-4 overflow-auto">
                  <pre>{`def two_sum(nums, target):
    """
    Given an array of integers nums and an integer target,
    return indices of the two numbers such that they add up to target.
    """
    hash_map = {}
    
    for i, num in enumerate(nums):
        complement = target - num
        if complement in hash_map:
            return [hash_map[complement], i]
        hash_map[num] = i
    
    return []

# Test case
nums = [2, 7, 11, 15]
target = 9
result = two_sum(nums, target)
print(f"Indices: {result}")  # Output: [0, 1]`}</pre>
                </div>
                <div className="bg-slate-100 p-4 border-l border-slate-300">
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Output Console</h4>
                    <div className="bg-white rounded border p-3 font-mono text-sm">
                      <div className="text-green-600">Indices: [0, 1]</div>
                      <div className="text-slate-500 mt-2">
                        ✓ All test cases passed
                        <br />
                        Time complexity: O(n)
                        <br />
                        Space complexity: O(n)
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">AI Feedback</h4>
                    <div className="bg-indigo-50 rounded border border-indigo-200 p-3 text-sm">
                      <div className="text-indigo-800">
                        Great solution! Your hash map approach is optimal. Consider adding edge case handling for empty
                        arrays.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* AI Interview Feedback Panel */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Real-time AI Feedback</h2>
            <p className="text-xl text-slate-600">Get instant insights on your interview performance</p>
          </div>

          <Card className="shadow-2xl border-0">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">Interview Session Analysis</CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-100 text-green-700">Live Session</Badge>
                  <div className="flex items-center space-x-1 text-sm text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span>15:32</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="transcript" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="transcript" className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Transcript</span>
                  </TabsTrigger>
                  <TabsTrigger value="confidence" className="flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4" />
                    <span>Confidence Score</span>
                  </TabsTrigger>
                  <TabsTrigger value="body-language" className="flex items-center space-x-2">
                    <Video className="w-4 h-4" />
                    <span>Body Language</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="transcript" className="mt-6">
                  <div className="space-y-4 max-h-64 overflow-y-auto">
                    <div className="flex space-x-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <Brain className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-slate-100 rounded-lg p-3">
                          <p className="text-sm text-slate-700">
                            "Tell me about a challenging project you worked on and how you overcame the obstacles."
                          </p>
                        </div>
                        <span className="text-xs text-slate-500 mt-1">AI Interviewer • 2 min ago</span>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>You</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="bg-indigo-100 rounded-lg p-3">
                          <p className="text-sm text-slate-700">
                            "I worked on a microservices migration project where we had to decompose a monolithic
                            application. The main challenge was maintaining data consistency across services..."
                          </p>
                        </div>
                        <span className="text-xs text-slate-500 mt-1">You • 1 min ago</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="confidence" className="mt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-4">Overall Confidence: 78%</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Voice Clarity</span>
                            <span>85%</span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Speech Pace</span>
                            <span>72%</span>
                          </div>
                          <Progress value={72} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Filler Words</span>
                            <span>68%</span>
                          </div>
                          <Progress value={68} className="h-2" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <h5 className="font-medium text-slate-900 mb-2">AI Recommendations</h5>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Reduce "um" and "uh" usage by 15%</li>
                        <li>• Speak 10% slower for better clarity</li>
                        <li>• Use more specific technical terms</li>
                        <li>• Maintain consistent volume level</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="body-language" className="mt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-4">Body Language Analysis</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <span className="text-sm font-medium">Eye Contact</span>
                          <Badge className="bg-green-100 text-green-700">Excellent</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                          <span className="text-sm font-medium">Posture</span>
                          <Badge className="bg-yellow-100 text-yellow-700">Good</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                          <span className="text-sm font-medium">Hand Gestures</span>
                          <Badge className="bg-red-100 text-red-700">Needs Work</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <h5 className="font-medium text-slate-900 mb-2">Improvement Tips</h5>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Use more purposeful hand gestures</li>
                        <li>• Maintain upright posture throughout</li>
                        <li>• Smile more naturally when appropriate</li>
                        <li>• Avoid fidgeting with objects</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Performance Dashboard */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Track Your Progress</h2>
            <p className="text-xl text-slate-600">Monitor your improvement with detailed analytics</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span>Performance Over Time</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    score: {
                      label: "Score",
                      color: "#4F46E5",
                    },
                  }}
                  className="h-64"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="session" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="score"
                        stroke="#4F46E5"
                        strokeWidth={3}
                        dot={{ fill: "#4F46E5", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-indigo-500" />
                  <span>Skills Radar</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    score: {
                      label: "Score",
                      color: "#8B5CF6",
                    },
                  }}
                  className="h-64"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={skillsData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="skill" />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} />
                      <Radar
                        name="Skills"
                        dataKey="score"
                        stroke="#8B5CF6"
                        fill="#8B5CF6"
                        fillOpacity={0.3}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 shadow-xl border-0">
            <CardHeader>
              <CardTitle>Recent Interview History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { type: "Technical", date: "2 hours ago", score: 88, duration: "45 min" },
                  { type: "HR Round", date: "1 day ago", score: 92, duration: "30 min" },
                  { type: "System Design", date: "3 days ago", score: 75, duration: "60 min" },
                  { type: "Technical", date: "1 week ago", score: 82, duration: "40 min" },
                ].map((session, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                        {session.type === "Technical" && <Code className="w-5 h-5 text-indigo-600" />}
                        {session.type === "HR Round" && <Users className="w-5 h-5 text-indigo-600" />}
                        {session.type === "System Design" && <Settings className="w-5 h-5 text-indigo-600" />}
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900">{session.type}</h4>
                        <p className="text-sm text-slate-500">
                          {session.date} • {session.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="font-semibold text-slate-900">{session.score}%</div>
                        <div className="text-sm text-slate-500">Score</div>
                      </div>
                      <Button variant="outline" size="sm">
                        Review
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">InterviewPro</span>
              </div>
              <p className="text-slate-400">
                Master interviews with AI-powered practice sessions and real-time feedback.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                  <Github className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 InterviewPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
