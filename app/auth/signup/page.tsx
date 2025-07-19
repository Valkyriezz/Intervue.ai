"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import { Brain, Eye, EyeOff, Github, Mail, AlertCircle, ArrowLeft, Check } from "lucide-react"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (error) setError("")
  }

  const validateForm = () => {
    if (!formData.email || !formData.username || !formData.password || !formData.confirmPassword) {
      return "Please fill in all fields"
    }

    if (!formData.email.includes("@")) {
      return "Please enter a valid email address"
    }

    if (formData.username.length < 3) {
      return "Username must be at least 3 characters long"
    }

    if (formData.password.length < 6) {
      return "Password must be at least 6 characters long"
    }

    if (formData.password !== formData.confirmPassword) {
      return "Passwords do not match"
    }

    if (!agreedToTerms) {
      return "Please agree to the Terms of Service and Privacy Policy"
    }

    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      setIsLoading(false)
      return
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock successful registration
      alert("Account created successfully! Please check your email to verify your account.")
      // Redirect to login
      window.location.href = "/auth/login"
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const getPasswordStrength = () => {
    const password = formData.password
    if (password.length === 0) return { strength: 0, text: "", color: "" }
    if (password.length < 6) return { strength: 25, text: "Weak", color: "bg-red-500" }
    if (password.length < 8) return { strength: 50, text: "Fair", color: "bg-yellow-500" }
    if (password.length < 12) return { strength: 75, text: "Good", color: "bg-blue-500" }
    return { strength: 100, text: "Strong", color: "bg-green-500" }
  }

  const passwordStrength = getPasswordStrength()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-slate-600 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                <Brain className="w-7 h-7 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-slate-900">Create your account</CardTitle>
            <CardDescription className="text-slate-600">Start your interview preparation journey</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Social Signup */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full bg-transparent" disabled={isLoading}>
                <Github className="w-4 h-4 mr-2" />
                Continue with GitHub
              </Button>
              <Button variant="outline" className="w-full bg-transparent" disabled={isLoading}>
                <Mail className="w-4 h-4 mr-2" />
                Continue with Google
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-slate-500">Or continue with</span>
              </div>
            </div>

            {/* Error Alert */}
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Choose a username"
                  value={formData.username}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="h-11 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-11 w-11 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4 text-slate-500" />
                    ) : (
                      <Eye className="w-4 h-4 text-slate-500" />
                    )}
                  </Button>
                </div>

                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">Password strength</span>
                      <span
                        className={`font-medium ${
                          passwordStrength.strength < 50
                            ? "text-red-600"
                            : passwordStrength.strength < 75
                              ? "text-yellow-600"
                              : passwordStrength.strength < 100
                                ? "text-blue-600"
                                : "text-green-600"
                        }`}
                      >
                        {passwordStrength.text}
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-1.5">
                      <div
                        className={`h-1.5 rounded-full transition-all duration-300 ${passwordStrength.color}`}
                        style={{ width: `${passwordStrength.strength}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="h-11 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-11 w-11 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    disabled={isLoading}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4 text-slate-500" />
                    ) : (
                      <Eye className="w-4 h-4 text-slate-500" />
                    )}
                  </Button>
                </div>
                {formData.confirmPassword && formData.password === formData.confirmPassword && (
                  <div className="flex items-center text-xs text-green-600">
                    <Check className="w-3 h-3 mr-1" />
                    Passwords match
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" checked={agreedToTerms} onCheckedChange={setAgreedToTerms} disabled={isLoading} />
                <Label htmlFor="terms" className="text-sm text-slate-600 leading-relaxed">
                  I agree to the{" "}
                  <Link href="#" className="text-indigo-600 hover:text-indigo-500">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-indigo-600 hover:text-indigo-500">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <Button type="submit" className="w-full h-11 bg-indigo-600 hover:bg-indigo-700" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
            </form>

            <div className="text-center text-sm text-slate-600">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-indigo-600 hover:text-indigo-500 font-medium transition-colors">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-xs text-slate-500">
          By creating an account, you agree to our{" "}
          <Link href="#" className="text-indigo-600 hover:text-indigo-500">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-indigo-600 hover:text-indigo-500">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
