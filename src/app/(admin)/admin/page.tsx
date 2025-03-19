"use client"

import {
  DollarSign,
  Package,
  ShoppingCart,
  BarChart3,
  Box,
  Users,
  Settings
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminDashboard() {

  // Mock data for dashboard
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      icon: DollarSign,
    },
    {
      title: "Orders",
      value: "356",
      change: "+12.2%",
      icon: ShoppingCart,
    },
    {
      title: "Customers",
      value: "2,543",
      change: "+18.5%",
      icon: Users,
    },
    {
      title: "Products",
      value: "124",
      change: "+4.3%",
      icon: Package,
    },
  ]

  // Mock recent orders
  const recentOrders = [
    {
      id: "ORD-001",
      customer: "John Doe",
      status: "Completed",
      date: "2023-04-23",
      total: "$129.99",
    },
    {
      id: "ORD-002",
      customer: "Jane Smith",
      status: "Processing",
      date: "2023-04-22",
      total: "$79.95",
    },
    {
      id: "ORD-003",
      customer: "Robert Johnson",
      status: "Shipped",
      date: "2023-04-21",
      total: "$249.50",
    },
    {
      id: "ORD-004",
      customer: "Emily Davis",
      status: "Pending",
      date: "2023-04-20",
      total: "$349.99",
    },
    {
      id: "ORD-005",
      customer: "Michael Wilson",
      status: "Completed",
      date: "2023-04-19",
      total: "$59.99",
    },
  ]

  // Mock top products
  const topProducts = [
    {
      id: 1,
      name: "Premium T-Shirt",
      sales: 245,
      revenue: "$12,250",
    },
    {
      id: 2,
      name: "Designer Jeans",
      sales: 187,
      revenue: "$9,350",
    },
    {
      id: 3,
      name: "Leather Jacket",
      sales: 124,
      revenue: "$18,600",
    },
    {
      id: 4,
      name: "Running Shoes",
      sales: 98,
      revenue: "$7,840",
    },
    {
      id: 5,
      name: "Casual Hoodie",
      sales: 76,
      revenue: "$3,800",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, Admin! Here's what's happening with your store today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}>
                  {stat.change}
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            {/* Recent Orders */}
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>You have {recentOrders.length} orders this month.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              order.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : order.status === "Processing"
                                  ? "bg-blue-100 text-blue-800"
                                  : order.status === "Shipped"
                                    ? "bg-purple-100 text-purple-800"
                                    : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell className="text-right">{order.total}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Previous</Button>
                <Button variant="outline">Next</Button>
              </CardFooter>
            </Card>

            {/* Top Products */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Top Products</CardTitle>
                <CardDescription>Your best selling products this month.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Sales</TableHead>
                      <TableHead className="text-right">Revenue</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {topProducts.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell>{product.sales}</TableCell>
                        <TableCell className="text-right">{product.revenue}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Products
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="h-[400px] flex items-center justify-center border rounded-md">
          <div className="text-center">
            <BarChart3 className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-medium">Analytics Dashboard</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Detailed analytics and reporting features coming soon.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="reports" className="h-[400px] flex items-center justify-center border rounded-md">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto h-12 w-12 text-muted-foreground"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
              <path d="M10 9H8" />
            </svg>
            <h3 className="mt-4 text-lg font-medium">Reports Dashboard</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Generate and download custom reports for your business.
            </p>
          </div>
        </TabsContent>
        <TabsContent
          value="notifications"
          className="h-[400px] flex items-center justify-center border rounded-md"
        >
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto h-12 w-12 text-muted-foreground"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <h3 className="mt-4 text-lg font-medium">Notifications Dashboard</h3>
            <p className="mt-2 text-sm text-muted-foreground">Manage your notifications and alert preferences.</p>
          </div>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2">
            <Box className="h-6 w-6" />
            <span>Add Product</span>
          </Button>
          <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2">
            <ShoppingCart className="h-6 w-6" />
            <span>View Orders</span>
          </Button>
          <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2">
            <Users className="h-6 w-6" />
            <span>Customers</span>
          </Button>
          <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2">
            <Settings className="h-6 w-6" />
            <span>Settings</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

