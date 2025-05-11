import AdminLayout from "@/components/admin-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Pencil, Trash2, UserX } from "lucide-react"

// Sample admin data
const admins = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex@vectoros.com",
    role: "Super Admin",
    lastActive: "2 hours ago",
    permissions: ["Content", "Users", "Admins", "Analytics", "Settings"],
    status: "active",
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah@vectoros.com",
    role: "Content Editor",
    lastActive: "1 day ago",
    permissions: ["Content", "Analytics"],
    status: "active",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael@vectoros.com",
    role: "Analyst",
    lastActive: "3 days ago",
    permissions: ["Analytics", "Reports"],
    status: "active",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    email: "emily@vectoros.com",
    role: "Content Editor",
    lastActive: "Just now",
    permissions: ["Content", "Media"],
    status: "active",
  },
  {
    id: 5,
    name: "David Kim",
    email: "david@vectoros.com",
    role: "Super Admin",
    lastActive: "5 days ago",
    permissions: ["Content", "Users", "Admins", "Analytics", "Settings"],
    status: "inactive",
  },
]

export default function AdminPermissionsPage() {
  return (
    <AdminLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Admin Permissions</h2>
            <p className="text-muted-foreground">Manage admin accounts and their access levels</p>
          </div>
          <Button className="gap-2" asChild>
            <a href="/dashboard/add-admin">+ Add New Admin</a>
          </Button>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Admin Users</CardTitle>
            <CardDescription>
              {admins.filter((a) => a.status === "active").length} active admins,{" "}
              {admins.filter((a) => a.status === "inactive").length} inactive
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Admin</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Permissions</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {admins.map((admin) => (
                  <TableRow key={admin.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={`/placeholder.svg?height=32&width=32&text=${admin.name.charAt(0)}`}
                            alt={admin.name}
                          />
                          <AvatarFallback>{admin.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{admin.name}</p>
                          <p className="text-xs text-muted-foreground">{admin.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={admin.role === "Super Admin" ? "default" : "outline"}>{admin.role}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {admin.permissions.slice(0, 2).map((permission) => (
                          <Badge key={permission} variant="secondary" className="text-xs">
                            {permission}
                          </Badge>
                        ))}
                        {admin.permissions.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{admin.permissions.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{admin.lastActive}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-2 w-2 rounded-full ${admin.status === "active" ? "bg-green-500" : "bg-gray-300"}`}
                        ></div>
                        <span className="capitalize text-sm">{admin.status}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem className="flex items-center gap-2">
                            <Pencil className="h-4 w-4" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2">
                            {admin.status === "active" ? (
                              <>
                                <UserX className="h-4 w-4" /> Deactivate
                              </>
                            ) : (
                              <>
                                <UserX className="h-4 w-4" /> Activate
                              </>
                            )}
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="flex items-center gap-2 text-destructive">
                            <Trash2 className="h-4 w-4" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Role Permissions</CardTitle>
            <CardDescription>Configure default permissions for each admin role</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Super Admin</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    "Content Management",
                    "User Management",
                    "Admin Management",
                    "Analytics Access",
                    "Settings",
                    "Media Library",
                  ].map((perm) => (
                    <div key={perm} className="flex items-center justify-between space-x-2 rounded-md border p-3">
                      <span>{perm}</span>
                      <Switch defaultChecked disabled />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Content Editor</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    "Content Management",
                    "User Management",
                    "Admin Management",
                    "Analytics Access",
                    "Settings",
                    "Media Library",
                  ].map((perm) => (
                    <div key={perm} className="flex items-center justify-between space-x-2 rounded-md border p-3">
                      <span>{perm}</span>
                      <Switch
                        defaultChecked={["Content Management", "Media Library", "Analytics Access"].includes(perm)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Analyst</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    "Content Management",
                    "User Management",
                    "Admin Management",
                    "Analytics Access",
                    "Settings",
                    "Media Library",
                  ].map((perm) => (
                    <div key={perm} className="flex items-center justify-between space-x-2 rounded-md border p-3">
                      <span>{perm}</span>
                      <Switch defaultChecked={["Analytics Access"].includes(perm)} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Role Settings</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
