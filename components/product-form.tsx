"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import type { Product } from "@/data/products"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Tên sản phẩm phải có ít nhất 2 ký tự.",
  }),
  description: z.string().min(10, {
    message: "Mô tả sản phẩm phải có ít nhất 10 ký tự.",
  }),
  price: z.coerce.number().min(1000, {
    message: "Giá sản phẩm phải lớn hơn 1.000đ.",
  }),
  category: z.string({
    required_error: "Vui lòng chọn danh mục sản phẩm.",
  }),
  inventory: z.coerce.number().min(0, {
    message: "Số lượng tồn kho không được âm.",
  }),
  status: z.string({
    required_error: "Vui lòng chọn trạng thái sản phẩm.",
  }),
})

interface ProductFormProps {
  product?: Product
}

export function ProductForm({ product }: ProductFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: product?.name || "",
      description: product?.description || "",
      price: product?.price || 0,
      category: product?.category || "",
      inventory: product?.inventory || 0,
      status: product?.status || "active",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: product ? "Sản phẩm đã được cập nhật" : "Sản phẩm đã được tạo",
        description: product
          ? "Thông tin sản phẩm đã được cập nhật thành công."
          : "Sản phẩm mới đã được tạo thành công.",
      })
      router.push("/dashboard/products")
    }, 1000)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2 col-span-2">
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên sản phẩm</FormLabel>
                    <FormControl>
                      <Input placeholder="Áo thun Mikenco Classic" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mô tả sản phẩm</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Mô tả chi tiết về sản phẩm..." className="resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Giá (VNĐ)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="inventory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tồn kho</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Danh mục</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Chọn danh mục" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ao-thun">Áo thun</SelectItem>
                          <SelectItem value="ao-so-mi">Áo sơ mi</SelectItem>
                          <SelectItem value="ao-khoac">Áo khoác</SelectItem>
                          <SelectItem value="quan-jean">Quần jean</SelectItem>
                          <SelectItem value="quan-short">Quần short</SelectItem>
                          <SelectItem value="phu-kien">Phụ kiện</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Trạng thái</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Chọn trạng thái" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="active">Đang bán</SelectItem>
                          <SelectItem value="inactive">Ngừng bán</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <h3 className="font-medium mb-2">Hình ảnh sản phẩm</h3>
              <div className="aspect-square bg-muted rounded-md flex items-center justify-center mb-4">
                <div className="text-sm text-muted-foreground">Chưa có hình ảnh</div>
              </div>
              <Button type="button" variant="outline" className="w-full">
                Tải lên hình ảnh
              </Button>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <>Đang lưu...</> : <>{product ? "Cập nhật sản phẩm" : "Tạo sản phẩm"}</>}
          </Button>
          <Button type="button" variant="outline" onClick={() => router.push("/dashboard/products")}>
            Hủy
          </Button>
        </div>
      </form>
    </Form>
  )
}
