import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function HomeCategoryNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { key: "all", label: "Tất cả", path: "/" },
    { key: "home", label: "Tại nhà", path: "/tai-nha" },
  ];

  return (
    <div className="sticky top-0 z-50">
      <div className="absolute inset-0 -z-10 bg-[#020617]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_120%_at_50%_-40%,rgba(34,211,238,0.18),transparent_60%)]" />

      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 backdrop-blur-xl">
        {/* Logo */}
        <div
          className="flex items-center gap-3 text-slate-100 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10">
            ☰
          </button>
          <span className="text-lg font-black tracking-wide">BookingCare</span>
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          {tabs.map((t) => {
            const isActive = location.pathname === t.path;
            return (
              <button
                key={t.key}
                onClick={() => navigate(t.path)}
                className={`h-9 rounded-full px-4 text-sm font-semibold transition-all duration-300
                  ${
                    isActive
                      ? "bg-slate-100/90 text-slate-900 shadow-[0_8px_24px_rgba(255,255,255,0.25)] scale-105"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-2">
          <button className="rounded-xl bg-white/5 px-3 py-2 text-sm font-semibold text-slate-200 ring-1 ring-white/10 hover:bg-white/10">
            🤝 Hợp tác
          </button>
          <button className="rounded-xl bg-white/5 px-3 py-2 text-sm font-semibold text-slate-200 ring-1 ring-white/10 hover:bg-white/10">
            🕘 Lịch hẹn
          </button>
        </div>
      </div>
    </div>
  );
}
