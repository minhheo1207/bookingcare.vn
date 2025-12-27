import React from "react";
import heroBanner from "../../assets/banner/health-illustration.jpg";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      {/* ===== Banner ảnh ===== */}
      {/* nền blur (cover) */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-xl scale-110"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />

      {/* lớp ảnh rõ (contain) */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />

      {/* overlay nhẹ */}
      <div className="absolute inset-0 bg-white/50" />

      <div className="relative mx-auto max-w-[1280px] px-6 py-16">
        {/* ===== TEXT ===== */}
        <div className="text-center">
          <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-emerald-900 sm:text-5xl">
            Nền tảng y tế <br />
            <span className="font-extrabold text-emerald-950">
              chăm sóc sức khỏe toàn diện
            </span>
          </h1>

          {/* ===== QUICK ACTIONS ===== */}
          <div className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-4 gap-4 max-md:grid-cols-2">
            {[
              { icon: "🏥", label: "Khám chuyên khoa" },
              { icon: "👨‍⚕️", label: "Bác sĩ nổi bật" },
              { icon: "🧪", label: "Xét nghiệm" },
              { icon: "💬", label: "Tư vấn từ xa" },
            ].map((x) => (
              <button
                key={x.label}
                className="
                  group flex h-14 items-center justify-center gap-3
                  rounded-2xl bg-white/80 px-4
                  text-sm font-semibold text-emerald-900
                  shadow-md backdrop-blur
                  transition-all duration-300
                  hover:-translate-y-0.5 hover:bg-white
                  hover:shadow-lg
                "
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-100 text-lg">
                  {x.icon}
                </span>
                <span className="whitespace-nowrap">{x.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
