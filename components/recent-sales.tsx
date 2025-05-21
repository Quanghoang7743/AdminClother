import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Nguyễn Văn An</p>
          <p className="text-sm text-muted-foreground">an.nguyen@example.com</p>
        </div>
        <div className="ml-auto font-medium">+1.250.000đ</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Trần Thị Bình</p>
          <p className="text-sm text-muted-foreground">binh.tran@example.com</p>
        </div>
        <div className="ml-auto font-medium">+2.150.000đ</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Lê Văn Cường</p>
          <p className="text-sm text-muted-foreground">cuong.le@example.com</p>
        </div>
        <div className="ml-auto font-medium">+3.200.000đ</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Phạm Thị Dung</p>
          <p className="text-sm text-muted-foreground">dung.pham@example.com</p>
        </div>
        <div className="ml-auto font-medium">+1.750.000đ</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Hoàng Văn Eo</p>
          <p className="text-sm text-muted-foreground">eo.hoang@example.com</p>
        </div>
        <div className="ml-auto font-medium">+950.000đ</div>
      </div>
    </div>
  )
}
