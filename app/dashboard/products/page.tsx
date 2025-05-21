import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard-header"
import DashboardShell from "@/components/dashboard-shell"
import { ProductsTable } from "@/components/products-table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PlusCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Sản phẩm | Mikenco Admin",
  description: "Quản lý sản phẩm Mikenco",
}

export default function ProductsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Sản phẩm" text="Quản lý tất cả sản phẩm của Mikenco.">
        <Button asChild>
          <Link href="/dashboard/products/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Thêm sản phẩm
          </Link>
        </Button>
      </DashboardHeader>
      <ProductsTable />
    </DashboardShell>
  )
}
