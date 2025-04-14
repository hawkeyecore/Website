import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle } from "lucide-react"
import { query } from "@/lib/db"
import DeleteServiceButton from "./delete-service-button"

// Get all services
async function getServices() {
  const sql = `
    SELECT 
      s.id, s.title, s.slug, s.description, 
      DATE_FORMAT(s.created_at, '%Y-%m-%d') as created_date,
      u.name as created_by_name
    FROM services s
    LEFT JOIN users u ON s.created_by = u.id
    ORDER BY s.created_at DESC
  `
  return query(sql) as Promise<any[]>
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Services</h1>
        <Link href="/admin/services/create">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Service
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="pb-2 text-left font-medium">Title</th>
                  <th className="pb-2 text-left font-medium">Slug</th>
                  <th className="pb-2 text-left font-medium">Created</th>
                  <th className="pb-2 text-left font-medium">Created By</th>
                  <th className="pb-2 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.length > 0 ? (
                  services.map((service) => (
                    <tr key={service.id} className="border-b">
                      <td className="py-3">{service.title}</td>
                      <td className="py-3">{service.slug}</td>
                      <td className="py-3">{service.created_date}</td>
                      <td className="py-3">{service.created_by_name || "Unknown"}</td>
                      <td className="py-3 text-right">
                        <div className="flex justify-end gap-2">
                          <Link href={`/admin/services/${service.id}`}>
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                          </Link>
                          <DeleteServiceButton id={service.id} title={service.title} />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-3 text-center text-muted-foreground">
                      No services found. Create your first service.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
