export function TrustBadges() {
  return (
    <div className="mt-section-gap grid grid-cols-1 md:grid-cols-2 gap-gutter border-t border-outline-variant pt-stack-lg">
      <div className="flex items-center gap-stack-md">
        <span className="material-symbols-outlined text-primary text-[32px]">verified_user</span>
        <div>
          <p className="font-label-caps text-label-caps text-primary">THANH TOÁN AN TOÀN</p>
          <p className="font-body-sm text-body-sm text-secondary">Xử lý thanh toán mã hóa SSL</p>
        </div>
      </div>
      <div className="flex items-center gap-stack-md">
        <span className="material-symbols-outlined text-primary text-[32px]">local_shipping</span>
        <div>
          <p className="font-label-caps text-label-caps text-primary">GIAO HÀNG NHANH</p>
          <p className="font-body-sm text-body-sm text-secondary">Nhận hàng trong 2-4 ngày làm việc</p>
        </div>
      </div>
    </div>
  )
}
