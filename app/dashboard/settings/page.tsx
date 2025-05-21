import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard-header"
import DashboardShell from "@/components/dashboard-shell"
import { SettingsForm } from "@/components/settings-form"

export const metadata: Metadata = {
  title: "Cài đặt | Mikenco Admin",
  description: "Quản lý cài đặt Mikenco",
}

export default function SettingsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Cài đặt" text="Quản lý cài đặt hệ thống của Mikenco." />
      <div className="grid gap-8">
        <SettingsForm />
      </div>
    </DashboardShell>
  )
}
