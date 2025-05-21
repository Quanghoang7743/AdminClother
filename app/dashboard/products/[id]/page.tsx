import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard-header"
import DashboardShell from "@/components/dashboard-shell"
import { ProductForm } from "@/components/product-form"
import { products } from "@/data/products"

export const metadata: Metadata = {
  title: "Chỉnh sửa sản phẩm | Mikenco Admin",
  description: "Chỉnh sửa sản phẩm Mikenco",
}

interface EditProductPageProps {
  params: {
    id: string
  }
}

export default function EditProductPage({ params }: EditProductPageProps) {
  const product = products.find((p) => p.id === params.id) || products[0]

  return (
    <DashboardShell>
      <DashboardHeader heading="Chỉnh sửa sản phẩm" text={`Chỉnh sửa thông tin sản phẩm: ${product.name}`} />
      <div className="grid gap-8">
        <ProductForm product={product} />
      </div>
    </DashboardShell>
  )
}
