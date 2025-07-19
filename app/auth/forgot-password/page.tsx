"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Brain, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (!email) {
      setError("Please enter your email address")
      setIsLoading(false)
      return
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address")
      setIsLoading(false)
      return
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitted(true)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="shadow-2xl border-0">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">Check your email</CardTitle>
              <CardDescription className="text-slate-600">We've sent a password reset link to {email}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <p className="text-sm text-slate-600">Didn't receive the email? Check your spam folder or try again.</p>

                <Button
                  variant="outline"
                  onClick={() => {
                    setIsSubmitted(false)
                    setEmail("")
                  }}
                  className="w-full bg-transparent"
                >
                  Try again
                </Button>

                <div className="text-center text-sm text-slate-600">
                  Remember your password?{" "}
                  <Link
                    href="/auth/login"
                    className="text-indigo-600 hover:text-indigo-500 font-medium transition-colors"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Login */}
        <div className="mb-6">
          <Link
            href="/auth/login"
            className="inline-flex items-center text-sm text-slate-600 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Login
          </Link>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                <Brain className="w-7 h-7 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-slate-900">Forgot password?</CardTitle>
            <CardDescription className="text-slate-600">No worries, we'll send you reset instructions</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Error Alert */}
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Reset Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (error) setError("")
                  }}
                  disabled={isLoading}
                  className="h-11"
                />
              </div>

              <Button type="submit" className="w-full h-11 bg-indigo-600 hover:bg-indigo-700" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send reset instructions"}
              </Button>
            </form>

            <div className="text-center text-sm text-slate-600">
              Remember your password?{" "}
              <Link href="/auth/login" className="text-indigo-600 hover:text-indigo-500 font-medium transition-colors">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
