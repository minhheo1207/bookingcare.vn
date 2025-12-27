import React, { useMemo, useState } from "react";
import { homeData } from "../../services/mockData";

export default function HomeTopSearch() {
  const [q, setQ] = useState("");

  const suggestions = useMemo(() => {
    const all = [
      ...homeData.specialties.map((x) => ({ type: "Chuyên khoa", ...x })),
      ...homeData.facilities.map((x) => ({ type: "Cơ sở", ...x })),
      ...homeData.doctors.map((x) => ({ type: "Bác sĩ", ...x })),
    ];
    const kw = q.trim().toLowerCase();
    if (!kw) return [];
    return all.filter((x) => x.title.toLowerCase().includes(kw)).slice(0, 8);
  }, [q]);

  return (
    <div className="hc-topsearch">
      <div className="hc-container">
        <div className="hc-topsearch__box">
          <span className="hc-topsearch__icon">🔎</span>
          <input
            className="hc-topsearch__input"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Tìm chuyên khoa, bác sĩ, cơ sở y tế..."
          />
          <button className="hc-topsearch__btn">Tìm</button>

          {suggestions.length > 0 && (
            <div className="hc-topsearch__dropdown">
              {suggestions.map((s) => (
                <button key={s.id} className="hc-topsearch__item">
                  <span className="hc-topsearch__itemTitle">{s.title}</span>
                  <span className="hc-topsearch__itemMeta">{s.type}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
