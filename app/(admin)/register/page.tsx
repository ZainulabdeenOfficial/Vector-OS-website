import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AdminRegisterPage() {
  return (
    <ThemeProvider>
      <main className="min-h-screen flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md border-border shadow-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Registration Restricted</CardTitle>
            <CardDescription>Only existing admins can create new admin accounts</CardDescription>
          </CardHeader>
          <CardContent>
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Access Denied</AlertTitle>
              <AlertDescription>
                New admin accounts can only be created by existing administrators through the admin dashboard.
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                If you need an admin account, please contact an existing administrator to create one for you.
              </p>

              <div className="text-center">
                <Link href="/login">
                  <Button variant="outline" className="w-full">
                    Return to Login
                  </Button>
                </Link>
              </div>

              <div className="text-center text-sm">
                <span className="text-muted-foreground">Need help? </span>
                <Link href="/" className="text-primary hover:underline">
                  Contact Support
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </ThemeProvider>
  )
}
