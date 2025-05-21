export interface Order {
  id: string
  customer: string
  date: string
  total: number
  status: "completed" | "processing" | "cancelled"
}

export const orders: Order[] = [
  {
    id: "3210",
    customer: "Nguyễn Văn An",
    date: "20/05/2023",
    total: 1250000,
    status: "completed",
  },
  {
    id: "3209",
    customer: "Trần Thị Bình",
    date: "19/05/2023",
    total: 2150000,
    status: "completed",
  },
  {
    id: "3208",
    customer: "Lê Văn Cường",
    date: "18/05/2023",
    total: 3200000,
    status: "processing",
  },
  {
    id: "3207",
    customer: "Phạm Thị Dung",
    date: "17/05/2023",
    total: 1750000,
    status: "completed",
  },
  {
    id: "3206",
    customer: "Hoàng Văn Eo",
    date: "16/05/2023",
    total: 950000,
    status: "cancelled",
  },
  {
    id: "3205",
    customer: "Ngô Thị Phương",
    date: "15/05/2023",
    total: 1850000,
    status: "completed",
  },
  {
    id: "3204",
    customer: "Đặng Văn Quang",
    date: "14/05/2023",
    total: 2450000,
    status: "processing",
  },
  {
    id: "3203",
    customer: "Vũ Thị Hương",
    date: "13/05/2023",
    total: 1350000,
    status: "completed",
  },
  {
    id: "3202",
    customer: "Bùi Văn Tùng",
    date: "12/05/2023",
    total: 850000,
    status: "cancelled",
  },
  {
    id: "3201",
    customer: "Lý Thị Uyên",
    date: "11/05/2023",
    total: 1650000,
    status: "completed",
  },
]
