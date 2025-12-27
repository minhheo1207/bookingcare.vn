import React, { useMemo, useState } from "react";
import { homeData } from "../../services/mockData";

export default function HomeHero() {
  const [q, setQ] = useState("");

  const suggestions = useMemo(() => {
    const all = [
      ...homeData.specialties.map((x) => ({ type: "Chuyên khoa", ...x })),
      ...homeData.facilities.map((x) => ({ type: "Cơ sở", ...x })),
      ...homeData.doctors.map((x) => ({ type: "Bác sĩ", ...x })),
    ];
    const keyword = q.trim().toLowerCase();
    if (!keyword) return [];
    return all
      .filter((x) => x.title.toLowerCase().includes(keyword))
      .slice(0, 8);
  }, [q]);

  return (
    <section className="hc-hero">
      <div className="hc-hero__overlay" />

      <div className="hc-container hc-hero__inner hc-hero__center">
        <h1 className="hc-hero__title">
          Nền tảng y tế <br />
          <b>chăm sóc sức khỏe toàn diện</b>
        </h1>

        <div className="hc-search hc-search--center">
          <span className="hc-search__icon">🔎</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="hc-search__input"
            placeholder="Tìm chuyên khoa, bác sĩ, cơ sở y tế..."
          />
          <button className="hc-search__btn">Tìm</button>

          {suggestions.length > 0 && (
            <div className="hc-search__dropdown">
              {suggestions.map((s) => (
                <button key={s.id} className="hc-search__item">
                  <span className="hc-search__itemTitle">{s.title}</span>
                  <span className="hc-search__itemMeta">{s.type}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="hc-hero__quick hc-hero__quick--center">
          <div className="hc-quickItem">
            <div className="hc-quickIcon">🏥</div>
            <div className="hc-quickText">Khám chuyên khoa</div>
          </div>
          <div className="hc-quickItem">
            <div className="hc-quickIcon">👨‍⚕️</div>
            <div className="hc-quickText">Bác sĩ nổi bật</div>
          </div>
          <div className="hc-quickItem">
            <div className="hc-quickIcon">🧪</div>
            <div className="hc-quickText">Xét nghiệm</div>
          </div>
          <div className="hc-quickItem">
            <div className="hc-quickIcon">💬</div>
            <div className="hc-quickText">Tư vấn từ xa</div>
          </div>
        </div>
      </div>
    </section>
  );
}
