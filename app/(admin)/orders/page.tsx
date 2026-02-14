"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const orders = [
  { id: "DH-10021", customer: "Nguyễn Văn A", total: 245000, pay: "COD", status: "Đang giao", createdAt: "2026-02-14" },
  { id: "DH-10020", customer: "Trần Thị B", total: 98000, pay: "Momo", status: "Chờ xử lý", createdAt: "2026-02-14" },
  { id: "DH-10019", customer: "Lê Minh C", total: 520000, pay: "Chuyển khoản", status: "Hoàn tất", createdAt: "2026-02-13" },
  { id: "DH-10018", customer: "Phạm D", total: 153000, pay: "COD", status: "Huỷ", createdAt: "2026-02-13" },
];

function formatVnd(v: number) {
  return v.toLocaleString("vi-VN") + " ₫";
}

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Đơn hàng</h1>
          <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
            Theo dõi & cập nhật trạng thái đơn (demo)
          </p>
        </div>
        <Button onClick={() => alert("Demo UI: tạo đơn mới")}>Tạo đơn</Button>
      </div>

      <section className="rounded-xl border bg-[hsl(var(--card))] overflow-hidden">
        <div className="p-5 border-b">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-medium">Danh sách đơn</h2>
            <div className="flex gap-2 flex-wrap">
              <Button variant="secondary" onClick={() => alert("Demo: lọc tất cả")}>Tất cả</Button>
              <Button variant="secondary" onClick={() => alert("Demo: lọc chờ xử lý")}>Chờ xử lý</Button>
              <Button variant="secondary" onClick={() => alert("Demo: lọc đang giao")}>Đang giao</Button>
              <Button variant="secondary" onClick={() => alert("Demo: lọc hoàn tất")}>Hoàn tất</Button>
              <Button variant="secondary" onClick={() => alert("Demo: lọc huỷ")}>Huỷ</Button>
            </div>
          </div>
        </div>

        <div className="p-5 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-[hsl(var(--muted-foreground))]">
              <tr>
                <th className="py-2">Mã đơn</th>
                <th>Khách hàng</th>
                <th>Tổng</th>
                <th>Thanh toán</th>
                <th>Trạng thái</th>
                <th>Ngày</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-t">
                  <td className="py-3 font-medium">{o.id}</td>
                  <td>{o.customer}</td>
                  <td>{formatVnd(o.total)}</td>
                  <td>{o.pay}</td>
                  <td>
                    <Badge
                      variant={
                        o.status === "Hoàn tất"
                          ? "success"
                          : o.status === "Đang giao"
                            ? "info"
                            : o.status === "Chờ xử lý"
                              ? "warning"
                              : "destructive"
                      }
                    >
                      {o.status}
                    </Badge>
                  </td>
                  <td>{o.createdAt}</td>
                  <td className="text-right">
                    <Button variant="ghost" onClick={() => alert("Demo: xem chi tiết đơn")}>Chi tiết</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
