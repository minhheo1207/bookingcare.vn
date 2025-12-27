// src/components/home/HomeDetailModal.jsx
import React, { useEffect, useMemo } from "react";

const VARIANT_THEMES = {
  specialty: {
    label: "Chuyên khoa",
    color: "from-emerald-500 to-teal-600",
    light: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-100",
    shadow: "shadow-emerald-500/20",
  },
  facility: {
    label: "Cơ sở y tế",
    color: "from-blue-500 to-sky-600",
    light: "bg-sky-50",
    text: "text-sky-700",
    border: "border-sky-100",
    shadow: "shadow-sky-500/20",
  },
  doctor: {
    label: "Bác sĩ",
    color: "from-violet-500 to-purple-600",
    light: "bg-violet-50",
    text: "text-violet-700",
    border: "border-violet-100",
    shadow: "shadow-violet-500/20",
  },
  handbook: {
    label: "Cẩm nang",
    color: "from-orange-400 to-amber-500",
    light: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-100",
    shadow: "shadow-amber-500/20",
  },
};

function actionsByVariant(variant) {
  const actions = {
    specialty: [
      { key: "book", label: "Đặt lịch khám", primary: true },
      { key: "doctors", label: "Xem bác sĩ", primary: false },
    ],
    facility: [
      { key: "view", label: "Xem cơ sở", primary: true },
      { key: "call", label: "Gọi tư vấn", primary: false },
    ],
    doctor: [
      { key: "book", label: "Đặt lịch hẹn", primary: true },
      { key: "schedule", label: "Xem lịch làm", primary: false },
    ],
    handbook: [
      { key: "read", label: "Đọc tiếp", primary: true },
      { key: "save", label: "Lưu bài", primary: false },
    ],
  };
  return actions[variant] || [{ key: "close", label: "Đóng", primary: true }];
}

export default function HomeDetailModal({ open, onClose, item, variant }) {
  const theme = VARIANT_THEMES[variant] || VARIANT_THEMES.specialty;
  const actions = useMemo(() => actionsByVariant(variant), [variant]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6">
      {/* Overlay backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-500"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-[2.5rem] bg-slate-50 shadow-[0_32px_120px_-20px_rgba(0,0,0,0.4)] flex flex-col animate-in fade-in zoom-in duration-300">
        {/* Sticky Header */}
        <div className="relative z-20 flex items-center justify-between px-8 py-5 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
          <div className="flex items-center gap-4 min-w-0">
            <div
              className={`shrink-0 px-4 py-1 rounded-full bg-gradient-to-r ${theme.color} text-white text-[10px] font-black uppercase tracking-widest shadow-lg ${theme.shadow}`}
            >
              {theme.label}
            </div>
            <h2 className="truncate text-xl font-black text-slate-800 tracking-tight">
              {item?.title || "Chi tiết"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all hover:bg-red-50 hover:text-red-500 active:scale-90"
          >
            <span className="text-xl">✕</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* LEFT COLUMN (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Image Card */}
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-200 shadow-lg ring-1 ring-slate-200">
                <img
                  src={item?.image || "https://via.placeholder.com/400x500"}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={item?.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Quick Info Box */}
              <div className="rounded-[2rem] bg-white p-6 shadow-sm border border-slate-100">
                <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-4 text-sm">
                  <span
                    className={`h-1.5 w-4 rounded-full bg-gradient-to-r ${theme.color}`}
                  />
                  Thông tin nhanh
                </h4>
                <div className="space-y-4">
                  {[
                    {
                      label: "Vị trí",
                      val: item?.location || item?.address,
                      show: true,
                    },
                    {
                      label: "Chi phí",
                      val: item?.priceFrom,
                      show: !!item?.priceFrom,
                    },
                    {
                      label: "Thời gian",
                      val: item?.openHours || item?.readTime,
                      show: true,
                    },
                  ].map(
                    (info, i) =>
                      info.show && (
                        <div
                          key={i}
                          className="flex flex-col border-b border-slate-50 pb-2 last:border-0 last:pb-0 group/info"
                        >
                          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider group-hover/info:text-teal-500 transition-colors">
                            {info.label}
                          </span>
                          <span className="text-sm font-semibold text-slate-700">
                            {info.val || "Liên hệ để biết thêm"}
                          </span>
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              {/* Highlight Intro Card */}
              <div
                className={`rounded-[2rem] ${theme.light} p-7 border ${theme.border} relative overflow-hidden group`}
              >
                <div className="relative z-10">
                  <h3
                    className={`text-base font-black ${theme.text} mb-3 uppercase tracking-wider`}
                  >
                    Giới thiệu chi tiết
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {item?.desc ||
                      item?.excerpt ||
                      "Thông tin đang được cập nhật..."}
                  </p>
                </div>
                <div
                  className={`absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br ${theme.color} opacity-[0.03] blur-2xl group-hover:opacity-10 transition-opacity`}
                />
              </div>

              {/* Bento Grid Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Features Card */}
                <div className="rounded-[2rem] bg-white p-6 border border-slate-100 hover:border-teal-100 transition-all hover:shadow-md">
                  <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <span className="text-lg">✨</span> Đặc điểm nổi bật
                  </h4>
                  <ul className="space-y-3">
                    {(
                      item?.highlights || [
                        "Dịch vụ chất lượng cao",
                        "Hỗ trợ 24/7",
                        "Quy trình hiện đại",
                      ]
                    ).map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm font-medium text-slate-600"
                      >
                        <div
                          className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${theme.color}`}
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Medical Note Card (Dark Mode Look) */}
                <div className="rounded-[2rem] bg-slate-900 p-6 text-white shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform">
                  <div className="relative z-10">
                    <h4 className="font-bold mb-3 text-teal-400 flex items-center gap-2">
                      <span className="text-lg">📋</span> Ghi chú y tế
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-300 font-light">
                      {variant === "handbook"
                        ? "Thông tin chỉ mang tính chất tham khảo, không thay thế cho việc chẩn đoán hoặc điều trị y khoa chuyên nghiệp."
                        : "Vui lòng đặt lịch trước 24h để nhận được sự phục vụ chu đáo nhất từ đội ngũ chuyên gia của chúng tôi."}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-teal-500/80 group-hover:text-teal-400 transition-colors cursor-pointer">
                      XEM QUY ĐỊNH <span className="text-sm">→</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-teal-500/10 rounded-full blur-3xl group-hover:bg-teal-500/20 transition-all" />
                </div>
              </div>

              {/* BOTTOM BENTO ROW (Tags & Trust Stats) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
                {/* Tags Section */}
                <div className="md:col-span-7 flex flex-wrap gap-2 content-start">
                  {(
                    item?.services || ["Khám tổng quát", "Tư vấn", "Xét nghiệm"]
                  ).map((s) => (
                    <span
                      key={s}
                      className="px-4 py-2 rounded-xl bg-white text-[11px] font-bold text-slate-400 border border-slate-100 hover:border-teal-200 hover:text-teal-600 hover:bg-teal-50/30 transition-all cursor-pointer"
                    >
                      #{s.replace(/\s/g, "")}
                    </span>
                  ))}
                </div>

                {/* LẤP ĐẦY GÓC PHẢI: Trust Stats Card */}
                {/* GÓC PHẢI MỚI: Thẻ Ưu Đãi / Voucher Card */}
                <div className="md:col-span-5 h-full">
                  <div className="group relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-2xl">
                    {/* Background Pattern trang trí */}
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
                    <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-20 w-20 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-500 opacity-20 blur-xl" />

                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="inline-block rounded-lg bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-teal-300 backdrop-blur-md">
                            Ưu đãi mới
                          </span>
                          <span className="text-2xl">🎁</span>
                        </div>

                        <div className="mt-4">
                          <p className="text-3xl font-black tracking-tight text-white">
                            -20%{" "}
                            <span className="text-lg font-medium text-slate-400">
                              phí khám
                            </span>
                          </p>
                          <p className="text-xs font-medium text-slate-400 mt-1">
                            Dành cho khách hàng đặt lịch trực tuyến lần đầu.
                          </p>
                        </div>
                      </div>

                      {/* Phần Mã Code & Nút Copy */}
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="flex items-center justify-between gap-2 rounded-xl bg-white/5 p-1 pr-2 ring-1 ring-white/10 transition-colors group-hover:bg-white/10">
                          <div className="flex-1 px-3 py-2 text-sm font-mono font-bold tracking-wider text-teal-400">
                            HELLO_MAY
                          </div>
                          <button className="rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-slate-900 shadow-sm hover:bg-teal-50 transition-colors">
                            Lưu
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-6 bg-white border-t border-slate-100/80 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            {actions.map((a) => (
              <button
                key={a.key}
                className={`
                  group relative px-10 py-4 rounded-[1.25rem] text-sm font-black transition-all duration-300 active:scale-95
                  ${
                    a.primary
                      ? `bg-gradient-to-r ${theme.color} text-white shadow-xl ${theme.shadow} hover:brightness-110 hover:-translate-y-1`
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200"
                  }
                `}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {a.label}
                  {a.primary && (
                    <span className="text-lg transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  )}
                </span>
                {/* Shimmer Effect */}
                {a.primary && (
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </div>
  );
}
