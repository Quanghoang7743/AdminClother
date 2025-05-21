import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard-header"
import DashboardShell from "@/components/dashboard-shell"
import { ProductForm } from "@/components/product-form"

export const metadata: Metadata = {
  title: "Thêm sản phẩm | Mikenco Admin",
  description: "Thêm sản phẩm mới cho Mikenco",
}

export default function NewProductPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Thêm sản phẩm mới" text="Tạo sản phẩm mới cho Mikenco." />
      <div className="grid gap-8">
        <ProductForm />
      </div>
    </DashboardShell>
  )
}
