// src/pages/AtHome.jsx
import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "Bác sĩ Gia đình",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800",
    price: "500.000đ",
    tag: "Phổ biến",
    desc: "Khám bệnh tại nhà cho người già và trẻ nhỏ.",
  },
  {
    id: 2,
    title: "Xét nghiệm Máu",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800",
    price: "150.000đ",
    tag: "Nhanh chóng",
    desc: "Lấy mẫu tận nơi, trả kết quả online.",
  },
  {
    id: 3,
    title: "Vật lý trị liệu",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800",
    price: "350.000đ",
    tag: "Chuyên sâu",
    desc: "Phục hồi chức năng sau chấn thương, tai biến.",
  },
  {
    id: 4,
    title: "Chăm sóc mẹ bé",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800",
    price: "200.000đ",
    tag: "Yêu thích",
    desc: "Tắm bé, massage và chăm sóc mẹ sau sinh.",
  },
];

export default function AtHome() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = services.filter((s) =>
    s.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pb-20">
      {/* Banner */}
      <div className="relative isolate overflow-hidden bg-slate-950 py-16 sm:py-24 text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_120%_at_50%_-40%,rgba(34,211,238,0.18),transparent_60%)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/80 to-slate-950" />

        <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
          Dịch vụ Y tế Tại nhà
        </h2>
        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
          Chăm sóc sức khỏe chuyên nghiệp, tận tâm ngay tại tổ ấm của bạn
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 -mt-10 relative z-10">
        {/* Search */}
        <div className="bg-white p-2 rounded-2xl shadow-xl flex gap-2 mb-10 ring-1 ring-slate-100">
          <input
            className="flex-1 px-4 py-3 outline-none text-slate-700 placeholder:text-slate-400"
            placeholder="Tìm dịch vụ (xét nghiệm, bác sĩ, điều dưỡng...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="button"
            disabled
            className="bg-slate-200 text-slate-400 px-6 py-2 rounded-xl font-bold cursor-not-allowed"
          >
            Tìm kiếm
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((s) => (
            <div
              key={s.id}
              className="group bg-white rounded-3xl p-3 shadow-sm ring-1 ring-slate-200 hover:shadow-xl hover:ring-teal-500/30 transition-all"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-lg text-xs font-bold text-teal-700">
                  {s.tag}
                </span>
              </div>

              <div className="p-3">
                <div className="flex justify-between mb-2">
                  <h3 className="font-bold text-slate-800">{s.title}</h3>
                  <span className="text-sm font-semibold text-teal-600">
                    {s.price}
                  </span>
                </div>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                  {s.desc}
                </p>
                <button className="w-full py-2.5 rounded-xl bg-slate-50 font-bold text-sm hover:bg-teal-600 hover:text-white transition">
                  Đặt lịch ngay
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
