import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const products = [
  {
    sku: "SP-001",
    name: "Nước giặt 3.8L",
    price: 185000,
    stock: 12,
    status: "Còn hàng",
  },
  {
    sku: "SP-002",
    name: "Giấy vệ sinh 10 cuộn",
    price: 79000,
    stock: 4,
    status: "Sắp hết",
  },
  {
    sku: "SP-003",
    name: "Sữa tươi 1L",
    price: 35000,
    stock: 0,
    status: "Hết hàng",
  },
];

function formatVnd(v: number) {
  return v.toLocaleString("vi-VN") + " ₫";
}

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Sản phẩm</h1>
          <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
            Quản lý danh sách sản phẩm (demo)
          </p>
        </div>
        <Button onClick={() => alert("Demo UI: sẽ mở modal thêm sản phẩm")}>Thêm sản phẩm</Button>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          className="h-10 w-full sm:w-80 rounded-md border bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
          placeholder="Tìm theo tên/SKU (demo)"
        />
        <div className="flex gap-2">
          <Button variant="secondary" onClick={() => alert("Demo: lọc còn hàng")}>Còn hàng</Button>
          <Button variant="secondary" onClick={() => alert("Demo: lọc sắp hết")}>Sắp hết</Button>
          <Button variant="secondary" onClick={() => alert("Demo: lọc hết hàng")}>Hết hàng</Button>
        </div>
      </div>

      <section className="rounded-xl border bg-[hsl(var(--card))] overflow-hidden">
        <div className="p-5 border-b">
          <h2 className="font-medium">Danh sách</h2>
        </div>
        <div className="p-5 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-[hsl(var(--muted-foreground))]">
              <tr>
                <th className="py-2">SKU</th>
                <th>Tên</th>
                <th>Giá</th>
                <th>Tồn</th>
                <th>Trạng thái</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.sku} className="border-t">
                  <td className="py-3 font-medium">{p.sku}</td>
                  <td>{p.name}</td>
                  <td>{formatVnd(p.price)}</td>
                  <td>{p.stock}</td>
                  <td>
                    <Badge variant={p.status === "Còn hàng" ? "success" : p.status === "Sắp hết" ? "warning" : "destructive"}>
                      {p.status}
                    </Badge>
                  </td>
                  <td className="text-right">
                    <Button variant="ghost" onClick={() => alert("Demo: sửa sản phẩm")}>Sửa</Button>
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
