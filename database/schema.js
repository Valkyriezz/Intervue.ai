// MongoDB Schema for InterviewPro Platform

// Users Collection
const usersSchema = {
  _id: "ObjectId",
  email: "string", // unique, required
  username: "string", // unique, required
  password: "string", // hashed, required
  profile: {
    firstName: "string",
    lastName: "string",
    avatar: "string", // URL to profile image
    bio: "string",
    phone: "string",
    location: "string",
    timezone: "string",
    linkedIn: "string",
    github: "string",
    portfolio: "string",
  },
  preferences: {
    interviewTypes: ["string"], // ["technical", "hr", "system-design"]
    programmingLanguages: ["string"], // ["javascript", "python", "java", etc.]
    experienceLevel: "string", // "junior", "mid", "senior"
    targetRoles: ["string"], // ["software-engineer", "data-scientist", etc.]
    notifications: {
      email: "boolean",
      push: "boolean",
      reminders: "boolean",
    },
  },
  subscription: {
    plan: "string", // "free", "premium", "enterprise"
    status: "string", // "active", "cancelled", "expired"
    startDate: "Date",
    endDate: "Date",
    billingCycle: "string", // "monthly", "yearly"
  },
  stats: {
    totalInterviews: "number",
    totalPracticeTime: "number", // in minutes
    averageScore: "number",
    streak: {
      current: "number",
      longest: "number",
      lastPracticeDate: "Date",
    },
  },
  emailVerified: "boolean",
  emailVerificationToken: "string",
  passwordResetToken: "string",
  passwordResetExpires: "Date",
  createdAt: "Date",
  updatedAt: "Date",
  lastLoginAt: "Date",
  isActive: "boolean",
}

// Interview Sessions Collection
const interviewSessionsSchema = {
  _id: "ObjectId",
  userId: "ObjectId", // reference to users collection
  type: "string", // "technical", "hr", "system-design"
  status: "string", // "scheduled", "in-progress", "completed", "cancelled"
  metadata: {
    title: "string",
    description: "string",
    difficulty: "string", // "easy", "medium", "hard"
    estimatedDuration: "number", // in minutes
    tags: ["string"],
  },
  scheduling: {
    scheduledAt: "Date",
    startedAt: "Date",
    completedAt: "Date",
    duration: "number", // actual duration in minutes
  },
  configuration: {
    language: "string", // for technical interviews
    framework: "string",
    allowHints: "boolean",
    recordVideo: "boolean",
    recordAudio: "boolean",
    aiAnalysis: "boolean",
  },
  questions: [
    {
      questionId: "ObjectId", // reference to questions collection
      order: "number",
      timeSpent: "number", // in seconds
      startedAt: "Date",
      completedAt: "Date",
    },
  ],
  results: {
    overallScore: "number", // 0-100
    breakdown: {
      technical: "number",
      communication: "number",
      problemSolving: "number",
      codeQuality: "number",
      systemDesign: "number",
      behavioral: "number",
    },
    aiAnalysis: {
      strengths: ["string"],
      weaknesses: ["string"],
      recommendations: ["string"],
      confidenceScore: "number",
      communicationScore: "number",
      technicalAccuracy: "number",
    },
  },
  recordings: {
    video: "string", // URL to video file
    audio: "string", // URL to audio file
    screen: "string", // URL to screen recording
  },
  feedback: {
    aiGenerated: {
      summary: "string",
      detailedAnalysis: "string",
      improvements: ["string"],
      nextSteps: ["string"],
    },
    userRating: "number", // 1-5 stars
    userComments: "string",
  },
  createdAt: "Date",
  updatedAt: "Date",
}

// Questions Collection
const questionsSchema = {
  _id: "ObjectId",
  title: "string",
  description: "string",
  type: "string", // "coding", "behavioral", "system-design", "technical-concept"
  category: "string", // "arrays", "dynamic-programming", "leadership", etc.
  difficulty: "string", // "easy", "medium", "hard"
  tags: ["string"],
  content: {
    problemStatement: "string",
    examples: [
      {
        input: "string",
        output: "string",
        explanation: "string",
      },
    ],
    constraints: ["string"],
    hints: ["string"],
    followUpQuestions: ["string"],
  },
  solutions: [
    {
      language: "string",
      code: "string",
      explanation: "string",
      timeComplexity: "string",
      spaceComplexity: "string",
      isOptimal: "boolean",
    },
  ],
  testCases: [
    {
      input: "string",
      expectedOutput: "string",
      isHidden: "boolean", // hidden test cases for evaluation
    },
  ],
  metadata: {
    companies: ["string"], // companies that ask this question
    frequency: "number", // how often this question appears
    successRate: "number", // percentage of users who solve it
    averageTime: "number", // average time taken to solve (minutes)
    upvotes: "number",
    downvotes: "number",
  },
  createdBy: "ObjectId", // reference to users (admin/content creator)
  isActive: "boolean",
  createdAt: "Date",
  updatedAt: "Date",
}

// Code Submissions Collection
const codeSubmissionsSchema = {
  _id: "ObjectId",
  sessionId: "ObjectId", // reference to interview sessions
  questionId: "ObjectId", // reference to questions
  userId: "ObjectId", // reference to users
  submission: {
    code: "string",
    language: "string",
    submittedAt: "Date",
    executionTime: "number", // in milliseconds
    memoryUsed: "number", // in KB
  },
  results: {
    status: "string", // "accepted", "wrong-answer", "time-limit-exceeded", etc.
    testCasesPassed: "number",
    totalTestCases: "number",
    score: "number", // 0-100
    errors: ["string"],
    output: "string",
  },
  aiAnalysis: {
    codeQuality: "number", // 0-100
    efficiency: "number", // 0-100
    readability: "number", // 0-100
    bestPractices: "number", // 0-100
    suggestions: ["string"],
    bugDetection: ["string"],
  },
  createdAt: "Date",
}

// User Progress Collection
const userProgressSchema = {
  _id: "ObjectId",
  userId: "ObjectId", // reference to users
  skillAssessment: {
    technical: {
      score: "number", // 0-100
      level: "string", // "beginner", "intermediate", "advanced"
      strengths: ["string"],
      weaknesses: ["string"],
      lastAssessed: "Date",
    },
    communication: {
      score: "number",
      level: "string",
      strengths: ["string"],
      weaknesses: ["string"],
      lastAssessed: "Date",
    },
    problemSolving: {
      score: "number",
      level: "string",
      strengths: ["string"],
      weaknesses: ["string"],
      lastAssessed: "Date",
    },
    systemDesign: {
      score: "number",
      level: "string",
      strengths: ["string"],
      weaknesses: ["string"],
      lastAssessed: "Date",
    },
    behavioral: {
      score: "number",
      level: "string",
      strengths: ["string"],
      weaknesses: ["string"],
      lastAssessed: "Date",
    },
  },
  learningPath: {
    currentLevel: "string",
    completedModules: ["string"],
    recommendedNext: ["string"],
    goals: [
      {
        title: "string",
        description: "string",
        deadline: "Date",
        completed: "boolean",
        progress: "number", // 0-100
      },
    ],
  },
  achievements: [
    {
      title: "string",
      description: "string",
      icon: "string",
      earnedAt: "Date",
      category: "string", // "streak", "score", "completion", etc.
    },
  ],
  statistics: {
    daily: [
      {
        date: "Date",
        practiceTime: "number", // minutes
        questionsAttempted: "number",
        questionsCompleted: "number",
        averageScore: "number",
      },
    ],
    weekly: [
      {
        weekStart: "Date",
        practiceTime: "number",
        questionsAttempted: "number",
        questionsCompleted: "number",
        averageScore: "number",
        improvement: "number", // percentage change from previous week
      },
    ],
    monthly: [
      {
        month: "number",
        year: "number",
        practiceTime: "number",
        questionsAttempted: "number",
        questionsCompleted: "number",
        averageScore: "number",
        improvement: "number",
      },
    ],
  },
  updatedAt: "Date",
}

// AI Analysis Collection
const aiAnalysisSchema = {
  _id: "ObjectId",
  sessionId: "ObjectId", // reference to interview sessions
  userId: "ObjectId", // reference to users
  analysisType: "string", // "voice", "video", "code", "behavioral"
  rawData: {
    transcript: "string", // for voice analysis
    emotions: [
      {
        timestamp: "number",
        emotion: "string",
        confidence: "number",
      },
    ],
    gestures: [
      {
        timestamp: "number",
        gesture: "string",
        confidence: "number",
      },
    ],
    eyeContact: [
      {
        timestamp: "number",
        percentage: "number",
      },
    ],
    speechMetrics: {
      pace: "number", // words per minute
      volume: "number",
      clarity: "number",
      fillerWords: "number",
      pauses: "number",
    },
  },
  insights: {
    confidence: "number", // 0-100
    communication: "number", // 0-100
    professionalism: "number", // 0-100
    engagement: "number", // 0-100
    recommendations: ["string"],
    highlights: ["string"],
    concerns: ["string"],
  },
  processedAt: "Date",
  createdAt: "Date",
}

// Feedback Collection
const feedbackSchema = {
  _id: "ObjectId",
  sessionId: "ObjectId", // reference to interview sessions
  userId: "ObjectId", // reference to users
  type: "string", // "ai-generated", "peer-review", "expert-review"
  content: {
    overall: {
      rating: "number", // 1-5
      summary: "string",
      strengths: ["string"],
      areasForImprovement: ["string"],
    },
    technical: {
      rating: "number",
      feedback: "string",
      codeQuality: "number",
      problemSolving: "number",
      efficiency: "number",
    },
    communication: {
      rating: "number",
      feedback: "string",
      clarity: "number",
      confidence: "number",
      listening: "number",
    },
    behavioral: {
      rating: "number",
      feedback: "string",
      leadership: "number",
      teamwork: "number",
      adaptability: "number",
    },
  },
  actionItems: [
    {
      category: "string",
      description: "string",
      priority: "string", // "high", "medium", "low"
      resources: ["string"], // links to learning materials
    },
  ],
  reviewerId: "ObjectId", // reference to users (for peer/expert reviews)
  isPublic: "boolean",
  helpfulVotes: "number",
  createdAt: "Date",
  updatedAt: "Date",
}

// Companies Collection
const companiesSchema = {
  _id: "ObjectId",
  name: "string",
  logo: "string", // URL to logo
  description: "string",
  website: "string",
  industry: "string",
  size: "string", // "startup", "small", "medium", "large", "enterprise"
  headquarters: "string",
  interviewProcess: {
    stages: ["string"], // ["phone-screen", "technical", "system-design", "behavioral", "final"]
    averageDuration: "number", // total process duration in days
    difficulty: "string", // "easy", "medium", "hard"
    tips: ["string"],
  },
  questions: ["ObjectId"], // references to questions collection
  salaryRanges: [
    {
      role: "string",
      level: "string",
      minSalary: "number",
      maxSalary: "number",
      currency: "string",
      location: "string",
    },
  ],
  reviews: [
    {
      userId: "ObjectId",
      rating: "number", // 1-5
      review: "string",
      pros: ["string"],
      cons: ["string"],
      interviewExperience: "string",
      submittedAt: "Date",
    },
  ],
  isActive: "boolean",
  createdAt: "Date",
  updatedAt: "Date",
}

// Learning Resources Collection
const learningResourcesSchema = {
  _id: "ObjectId",
  title: "string",
  description: "string",
  type: "string", // "article", "video", "course", "book", "practice-set"
  category: "string", // "algorithms", "system-design", "behavioral", etc.
  difficulty: "string", // "beginner", "intermediate", "advanced"
  content: {
    url: "string",
    duration: "number", // in minutes
    author: "string",
    publishedDate: "Date",
  },
  tags: ["string"],
  relatedQuestions: ["ObjectId"], // references to questions
  ratings: {
    average: "number", // 1-5
    count: "number",
  },
  userProgress: [
    {
      userId: "ObjectId",
      status: "string", // "not-started", "in-progress", "completed"
      progress: "number", // 0-100
      startedAt: "Date",
      completedAt: "Date",
    },
  ],
  isActive: "boolean",
  createdAt: "Date",
  updatedAt: "Date",
}

// Notifications Collection
const notificationsSchema = {
  _id: "ObjectId",
  userId: "ObjectId", // reference to users
  type: "string", // "interview-reminder", "feedback-ready", "achievement", "system"
  title: "string",
  message: "string",
  data: {}, // additional data specific to notification type
  priority: "string", // "low", "medium", "high"
  status: "string", // "unread", "read", "dismissed"
  channels: ["string"], // ["email", "push", "in-app"]
  scheduledFor: "Date",
  sentAt: "Date",
  readAt: "Date",
  createdAt: "Date",
}

// Export schema definitions for use in application
module.exports = {
  usersSchema,
  interviewSessionsSchema,
  questionsSchema,
  codeSubmissionsSchema,
  userProgressSchema,
  aiAnalysisSchema,
  feedbackSchema,
  companiesSchema,
  learningResourcesSchema,
  notificationsSchema,
}

// Index recommendations for optimal query performance
const indexRecommendations = {
  users: [
    { email: 1 }, // unique
    { username: 1 }, // unique
    { emailVerificationToken: 1 },
    { passwordResetToken: 1 },
    { createdAt: -1 },
  ],
  interviewSessions: [
    { userId: 1, createdAt: -1 },
    { type: 1 },
    { status: 1 },
    { "scheduling.scheduledAt": 1 },
    { "results.overallScore": -1 },
  ],
  questions: [{ type: 1, difficulty: 1 }, { category: 1 }, { tags: 1 }, { "metadata.companies": 1 }, { isActive: 1 }],
  codeSubmissions: [{ sessionId: 1 }, { userId: 1, "submission.submittedAt": -1 }, { questionId: 1 }],
  userProgress: [
    { userId: 1 }, // unique
  ],
  aiAnalysis: [{ sessionId: 1 }, { userId: 1, processedAt: -1 }],
  feedback: [{ sessionId: 1 }, { userId: 1, createdAt: -1 }],
  companies: [{ name: 1 }, { industry: 1 }, { isActive: 1 }],
  learningResources: [{ type: 1, category: 1 }, { tags: 1 }, { isActive: 1 }],
  notifications: [{ userId: 1, status: 1, createdAt: -1 }, { scheduledFor: 1 }],
}
