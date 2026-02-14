import { KpiCard } from "@/components/kpi-card";
import { Badge } from "@/components/ui/badge";

const recentOrders = [
  { id: "DH-10021", customer: "Nguyễn Văn A", total: 245000, status: "Đang giao" },
  { id: "DH-10020", customer: "Trần Thị B", total: 98000, status: "Chờ xử lý" },
  { id: "DH-10019", customer: "Lê Minh C", total: 520000, status: "Hoàn tất" },
];

function formatVnd(v: number) {
  return v.toLocaleString("vi-VN") + " ₫";
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Tổng quan</h1>
        <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
          Thống kê nhanh (dữ liệu demo)
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard label="Doanh thu hôm nay" value={formatVnd(1258000)} hint="+8% so với hôm qua" />
        <KpiCard label="Đơn mới" value="12" hint="3 đơn chờ xử lý" />
        <KpiCard label="Tỷ lệ hoàn thành" value="92%" hint="7 ngày gần nhất" />
        <KpiCard label="Tồn kho thấp" value="5" hint="Cần nhập thêm" />
      </div>

      <section className="rounded-xl border bg-[hsl(var(--card))]">
        <div className="p-5 border-b">
          <h2 className="font-medium">Đơn gần đây</h2>
        </div>
        <div className="p-5 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-[hsl(var(--muted-foreground))]">
              <tr>
                <th className="py-2">Mã đơn</th>
                <th>Khách hàng</th>
                <th>Tổng</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((o) => (
                <tr key={o.id} className="border-t">
                  <td className="py-3 font-medium">{o.id}</td>
                  <td>{o.customer}</td>
                  <td>{formatVnd(o.total)}</td>
                  <td>
                    <Badge variant={o.status === "Hoàn tất" ? "success" : o.status === "Đang giao" ? "info" : "warning"}>
                      {o.status}
                    </Badge>
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
