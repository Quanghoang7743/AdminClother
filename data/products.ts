export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  inventory: number
  status: "active" | "inactive"
}

export const products: Product[] = [
  {
    id: "1",
    name: "Áo thun Mikenco Classic",
    description: "Áo thun nam cổ tròn tay ngắn chất liệu cotton cao cấp, thiết kế đơn giản, tinh tế.",
    price: 299000,
    category: "ao-thun",
    inventory: 120,
    status: "active",
  },
  {
    id: "2",
    name: "Áo sơ mi Mikenco Oxford",
    description: "Áo sơ mi nam dài tay chất liệu Oxford cao cấp, thiết kế hiện đại, lịch lãm.",
    price: 450000,
    category: "ao-so-mi",
    inventory: 85,
    status: "active",
  },
  {
    id: "3",
    name: "Quần jean Mikenco Slim Fit",
    description: "Quần jean nam dáng slim fit, chất liệu denim co giãn, thoải mái khi vận động.",
    price: 650000,
    category: "quan-jean",
    inventory: 65,
    status: "active",
  },
  {
    id: "4",
    name: "Áo khoác Mikenco Bomber",
    description: "Áo khoác bomber nam thiết kế hiện đại, chất liệu cao cấp, giữ ấm tốt.",
    price: 850000,
    category: "ao-khoac",
    inventory: 42,
    status: "active",
  },
  {
    id: "5",
    name: "Quần short Mikenco Summer",
    description: "Quần short nam chất liệu kaki cao cấp, thiết kế trẻ trung, năng động.",
    price: 350000,
    category: "quan-short",
    inventory: 78,
    status: "active",
  },
  {
    id: "6",
    name: "Áo polo Mikenco Sport",
    description: "Áo polo nam chất liệu cotton cao cấp, thiết kế thể thao, năng động.",
    price: 380000,
    category: "ao-thun",
    inventory: 95,
    status: "active",
  },
  {
    id: "7",
    name: "Áo sơ mi Mikenco Linen",
    description: "Áo sơ mi nam chất liệu linen cao cấp, thoáng mát, phù hợp mùa hè.",
    price: 520000,
    category: "ao-so-mi",
    inventory: 0,
    status: "inactive",
  },
  {
    id: "8",
    name: "Quần kaki Mikenco Slim",
    description: "Quần kaki nam dáng slim fit, chất liệu cao cấp, thiết kế hiện đại.",
    price: 480000,
    category: "quan-jean",
    inventory: 56,
    status: "active",
  },
  {
    id: "9",
    name: "Áo khoác Mikenco Winter",
    description: "Áo khoác nam chất liệu dày dặn, giữ ấm tốt trong mùa đông.",
    price: 950000,
    category: "ao-khoac",
    inventory: 32,
    status: "active",
  },
  {
    id: "10",
    name: "Thắt lưng Mikenco Leather",
    description: "Thắt lưng nam da bò thật 100%, thiết kế đơn giản, sang trọng.",
    price: 450000,
    category: "phu-kien",
    inventory: 45,
    status: "active",
  },
]
