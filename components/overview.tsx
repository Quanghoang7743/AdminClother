"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Tháng 1",
    total: 32400000,
  },
  {
    name: "Tháng 2",
    total: 37800000,
  },
  {
    name: "Tháng 3",
    total: 28900000,
  },
  {
    name: "Tháng 4",
    total: 35600000,
  },
  {
    name: "Tháng 5",
    total: 39700000,
  },
  {
    name: "Tháng 6",
    total: 45200000,
  },
]

export function Overview() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value / 1000000}tr`}
        />
        <Tooltip
          formatter={(value: number) => [formatCurrency(value), "Doanh thu"]}
          labelFormatter={(label) => `${label}`}
        />
        <Bar dataKey="total" fill="#16a34a" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
