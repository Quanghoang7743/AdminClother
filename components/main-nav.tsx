"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { BarChart3, Package, ShoppingCart, Users, Settings } from "lucide-react"

interface MainNavProps {
  className?: string
}

export function MainNav({ className, ...props }: MainNavProps) {
  const pathname = usePathname()

  const routes = [
    {
      href: "/dashboard",
      label: "Tổng quan",
      icon: BarChart3,
      active: pathname === "/dashboard",
    },
    {
      href: "/dashboard/products",
      label: "Sản phẩm",
      icon: Package,
      active: pathname.includes("/dashboard/products"),
    },
    {
      href: "/dashboard/orders",
      label: "Đơn hàng",
      icon: ShoppingCart,
      active: pathname.includes("/dashboard/orders"),
    },
    {
      href: "/dashboard/customers",
      label: "Khách hàng",
      icon: Users,
      active: pathname.includes("/dashboard/customers"),
    },
    {
      href: "/dashboard/settings",
      label: "Cài đặt",
      icon: Settings,
      active: pathname.includes("/dashboard/settings"),
    },
  ]

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <span className="hidden font-bold sm:inline-block">MIKENCO ADMIN</span>
      </Link>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "flex items-center text-sm font-medium transition-colors hover:text-primary",
            route.active ? "text-black dark:text-white" : "text-muted-foreground",
          )}
        >
          <route.icon className="mr-2 h-4 w-4" />
          {route.label}
        </Link>
      ))}
    </nav>
  )
}
