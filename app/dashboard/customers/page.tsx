import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard-header"
import DashboardShell from "@/components/dashboard-shell"
import { CustomersTable } from "@/components/customers-table"

export const metadata: Metadata = {
  title: "Khách hàng | Mikenco Admin",
  description: "Quản lý khách hàng Mikenco",
}

export default function CustomersPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Khách hàng" text="Quản lý tất cả khách hàng của Mikenco." />
      <CustomersTable />
    </DashboardShell>
  )
}
