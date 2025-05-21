export interface Customer {
  id: string
  name: string
  email: string
  phone: string
  orders: number
  spent: number
}

export const customers: Customer[] = [
  {
    id: "1",
    name: "Nguyễn Văn An",
    email: "an.nguyen@example.com",
    phone: "0987654321",
    orders: 5,
    spent: 4250000,
  },
  {
    id: "2",
    name: "Trần Thị Bình",
    email: "binh.tran@example.com",
    phone: "0987654322",
    orders: 3,
    spent: 2850000,
  },
  {
    id: "3",
    name: "Lê Văn Cường",
    email: "cuong.le@example.com",
    phone: "0987654323",
    orders: 7,
    spent: 6350000,
  },
  {
    id: "4",
    name: "Phạm Thị Dung",
    email: "dung.pham@example.com",
    phone: "0987654324",
    orders: 2,
    spent: 1950000,
  },
  {
    id: "5",
    name: "Hoàng Văn Eo",
    email: "eo.hoang@example.com",
    phone: "0987654325",
    orders: 4,
    spent: 3450000,
  },
  {
    id: "6",
    name: "Ngô Thị Phương",
    email: "phuong.ngo@example.com",
    phone: "0987654326",
    orders: 6,
    spent: 5250000,
  },
  {
    id: "7",
    name: "Đặng Văn Quang",
    email: "quang.dang@example.com",
    phone: "0987654327",
    orders: 1,
    spent: 850000,
  },
  {
    id: "8",
    name: "Vũ Thị Hương",
    email: "huong.vu@example.com",
    phone: "0987654328",
    orders: 3,
    spent: 2650000,
  },
  {
    id: "9",
    name: "Bùi Văn Tùng",
    email: "tung.bui@example.com",
    phone: "0987654329",
    orders: 5,
    spent: 4150000,
  },
  {
    id: "10",
    name: "Lý Thị Uyên",
    email: "uyen.ly@example.com",
    phone: "0987654330",
    orders: 2,
    spent: 1750000,
  },
]
