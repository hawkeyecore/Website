import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { query } from "@/lib/db"
import { FileText, Package, Briefcase, Users } from "lucide-react"

async function getDashboardStats() {
  const blogCountResult = (await query("SELECT COUNT(*) as count FROM blog_posts")) as any[]
  const productCountResult = (await query("SELECT COUNT(*) as count FROM products")) as any[]
  const serviceCountResult = (await query("SELECT COUNT(*) as count FROM services")) as any[]
  const userCountResult = (await query("SELECT COUNT(*) as count FROM users")) as any[]

  const recentPostsResult = (await query(`
    SELECT id, title, slug, created_at 
    FROM blog_posts 
    ORDER BY created_at DESC 
    LIMIT 5
  `)) as any[]

  return {
    blogCount: blogCountResult[0].count,
    productCount: productCountResult[0].count,
    serviceCount: serviceCountResult[0].count,
    userCount: userCountResult[0].count,
    recentPosts: recentPostsResult,
  }
}

export default async function AdminDashboard() {
  const stats = await getDashboardStats()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to the TechCorp admin dashboard.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.blogCount}</div>
            <p className="text-xs text-muted-foreground">Total blog posts</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.productCount}</div>
            <p className="text-xs text-muted-foreground">Total products</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Services</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.serviceCount}</div>
            <p className="text-xs text-muted-foreground">Total services</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.userCount}</div>
            <p className="text-xs text-muted-foreground">Total users</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Blog Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stats.recentPosts.length > 0 ? (
              stats.recentPosts.map((post) => (
                <div key={post.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{post.title}</p>
                    <p className="text-sm text-muted-foreground">{new Date(post.created_at).toLocaleDateString()}</p>
                  </div>
                  <a href={`/admin/blog-posts/${post.id}`} className="text-sm text-primary hover:underline">
                    Edit
                  </a>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground">No blog posts yet.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
