// app/page.tsx or any client component
"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <Card>
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>This is a card component built for Next.js</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Here is the content of the card.</p>
        </CardContent>
        <CardFooter>
          <button className="text-blue-500">Action</button>
        </CardFooter>
      </Card>
    </div>
  )
}
