'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple validation
    if (email && password) {
      // In a real app, you would authenticate here
      // For demo purposes, we'll just set a cookie and redirect
      document.cookie = "auth-token=demo-token; path=/; max-age=3600"
      router.push('/dashboard')
    }
  }

  return (
    <div className="min-h-full flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center">
            <div className="bg-[#c51642] rounded-r-full pr-8 pl-6 py-3">
              <span className="text-white text-3xl font-bold">1177</span>
            </div>
          </div>
          <CardTitle className="text-2xl text-center">Logga in</CardTitle>
          <CardDescription className="text-center">
            Ange dina uppgifter för att komma till din personliga sida
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-post</Label>
              <Input
                id="email"
                type="email"
                placeholder="namn@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Lösenord</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button className="w-full bg-[#c51642] hover:bg-[#a51235]" type="submit">
              Logga in
            </Button>
            <div className="text-center text-sm">
              <a href="#" className="text-[#c51642] hover:underline">
                Glömt lösenord?
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

