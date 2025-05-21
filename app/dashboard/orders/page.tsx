import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard-header"
import DashboardShell from "@/components/dashboard-shell"
import { OrdersTable } from "@/components/orders-table"

export const metadata: Metadata = {
  title: "Đơn hàng | Mikenco Admin",
  description: "Quản lý đơn hàng Mikenco",
}

export default function OrdersPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Đơn hàng" text="Quản lý tất cả đơn hàng của Mikenco." />
      <OrdersTable />
    </DashboardShell>
  )
}
