import React from "react";

const mapCfg = {
  specialty: { id: "specialties", cta: "Xem chi tiết" },
  facility: { id: "facilities", cta: "Xem cơ sở" },
  doctor: { id: "doctors", cta: "Đặt lịch" },
  handbook: { id: "handbooks", cta: "Đọc tiếp" },
};

export default function HomeSection({
  title,
  subtitle,
  items,
  variant,
  onOpen,
}) {
  const cfg = mapCfg[variant] || { id: "section", cta: "Xem" };
  const view = (items || []).slice(0, 5);

  return (
    <section className="hc-section" id={cfg.id}>
      <div className="hc-container">
        {/* ... phần head giữ nguyên */}
        <div className="hc-section__head">
          <div>
            <h2 className="hc-section__title">{title}</h2>
            <p className="hc-section__subtitle">{subtitle}</p>
          </div>

          <button type="button" className="hc-section__more">
            Xem thêm
          </button>
        </div>
        <div className="hc-row hc-row--grid5">
          {view.map((it) => (
            <article key={it.id} className={`hc-card hc-card--${variant}`}>
              <div className="hc-card__thumb">
                {it.image ? (
                  <img src={it.image} alt={it.title} />
                ) : (
                  <div className="hc-card__thumbFallback" />
                )}
              </div>

              <div className="hc-card__body">
                <h3 className="hc-card__title">{it.title}</h3>
                {it.meta && <p className="hc-card__meta">{it.meta}</p>}
                {variant === "handbook" && it.excerpt && (
                  <p className="hc-card__excerpt">{it.excerpt}</p>
                )}

                <button
                  type="button"
                  className={`hc-card__cta hc-card__cta--${variant}`}
                  onClick={() => onOpen?.(it, variant)}
                >
                  {cfg.cta}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
