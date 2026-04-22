import { useState } from "react";

const slides = [
  {
    id: 0,
    label: "Огляд",
    component: SlideOverview,
  },
  {
    id: 1,
    label: "Харків",
    component: SlideKharkiv,
  },
  {
    id: 2,
    label: "AUK — Стипендії",
    component: SlideAUK,
  },
  {
    id: 3,
    label: "Онлайн-школа",
    component: SlideOnline,
  },
];

function SlideOverview() {
  return (
    <div style={{
      background: "linear-gradient(145deg, #0a0f1e 0%, #0d1f3c 50%, #0f2d5e 100%)",
      minHeight: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "60px 48px",
      position: "relative",
      overflow: "hidden",
      textAlign: "center",
    }}>
      {/* Ukrainian flag stripe */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "6px",
        background: "linear-gradient(90deg, #005BBB 50%, #FFD700 50%)",
      }} />
      {/* Decorative circles */}
      <div style={{
        position: "absolute", right: "-120px", top: "-80px",
        width: "400px", height: "400px", borderRadius: "50%",
        border: "1px solid rgba(255,215,0,0.08)",
      }} />
      <div style={{
        position: "absolute", right: "-80px", top: "-40px",
        width: "280px", height: "280px", borderRadius: "50%",
        border: "1px solid rgba(255,215,0,0.12)",
      }} />
      <div style={{
        position: "absolute", left: "-100px", bottom: "-60px",
        width: "320px", height: "320px", borderRadius: "50%",
        border: "1px solid rgba(72,158,247,0.1)",
      }} />

      <div style={{
        display: "inline-block",
        background: "rgba(255,215,0,0.12)",
        border: "1px solid rgba(255,215,0,0.3)",
        color: "#FFD700",
        padding: "6px 20px",
        borderRadius: "30px",
        fontSize: "12px",
        fontWeight: 700,
        letterSpacing: "2px",
        textTransform: "uppercase",
        marginBottom: "28px",
      }}>
        Hope Children of Ukraine · 2025–2026
      </div>

      <h1 style={{
        fontSize: "52px",
        fontWeight: 900,
        color: "white",
        lineHeight: 1.1,
        marginBottom: "16px",
        letterSpacing: "-1.5px",
        fontFamily: "'Georgia', serif",
      }}>
        Інвестиція в майбутнє<br />
        <span style={{ color: "#FFD700" }}>дітей України</span>
      </h1>

      <p style={{
        fontSize: "18px",
        color: "rgba(255,255,255,0.6)",
        maxWidth: "600px",
        lineHeight: 1.7,
        marginBottom: "52px",
      }}>
        Три проєкти. Три рівні підтримки.<br />
        Від прифронтових сіл — до університетського диплому.
      </p>

      {/* Stats row */}
      <div style={{
        display: "flex",
        gap: "0",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        overflow: "hidden",
        marginBottom: "40px",
        width: "100%",
        maxWidth: "700px",
      }}>
        {[
          { num: "250+", label: "дітей у програмі", color: "#FFD700" },
          { num: "161", label: "опитаних у Харківщині", color: "#489ef7" },
          { num: "5", label: "стипендій в університет", color: "#4ade80" },
          { num: "4", label: "роки вищої освіти", color: "#f97316" },
        ].map((s, i) => (
          <div key={i} style={{
            flex: 1,
            padding: "24px 12px",
            borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "36px", fontWeight: 900, color: s.color, lineHeight: 1 }}>
              {s.num}
            </div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", marginTop: "6px", fontWeight: 500 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* 3 project cards */}
      <div style={{ display: "flex", gap: "16px", width: "100%", maxWidth: "820px" }}>
        {[
          {
            num: "01",
            title: "Прифронтові хаби",
            sub: "Близнюківська громада, Харків",
            amount: "$34,190",
            period: "на рік",
            color: "#f97316",
          },
          {
            num: "02",
            title: "AUK Офлайн-курси + Стипендії",
            sub: "30 дітей → 5 дипломів",
            amount: "$108,832",
            period: "повний цикл",
            color: "#FFD700",
            highlight: true,
          },
          {
            num: "03",
            title: "Онлайн-школа розширення",
            sub: "250 дітей + арт-терапія",
            amount: "від $6,000",
            period: "на місяць",
            color: "#489ef7",
          },
        ].map((p, i) => (
          <div key={i} style={{
            flex: 1,
            background: p.highlight
              ? "linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,215,0,0.05))"
              : "rgba(255,255,255,0.04)",
            border: `1px solid ${p.highlight ? "rgba(255,215,0,0.3)" : "rgba(255,255,255,0.08)"}`,
            borderRadius: "12px",
            padding: "20px 16px",
            textAlign: "left",
            position: "relative",
          }}>
            {p.highlight && (
              <div style={{
                position: "absolute", top: "-10px", left: "50%", transform: "translateX(-50%)",
                background: "#FFD700", color: "#111",
                fontSize: "10px", fontWeight: 900, padding: "3px 12px", borderRadius: "20px",
                letterSpacing: "1px", whiteSpace: "nowrap",
              }}>★ ПРІОРИТЕТ</div>
            )}
            <div style={{ fontSize: "11px", color: p.color, fontWeight: 800, letterSpacing: "1.5px", marginBottom: "6px" }}>
              ПРОЄКТ {p.num}
            </div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "white", marginBottom: "4px", lineHeight: 1.3 }}>
              {p.title}
            </div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", marginBottom: "14px" }}>{p.sub}</div>
            <div style={{ fontSize: "22px", fontWeight: 900, color: p.color }}>{p.amount}</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>{p.period}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideKharkiv() {
  const hubs = [
    { name: "Близнюки (місто)", groups: 14, children: "~98" },
    { name: "Бурбулатівський", groups: 1, children: "~7" },
    { name: "Олексіївський", groups: 1, children: "~7" },
    { name: "Добровільський", groups: 2, children: "~14" },
    { name: "Самійлівський", groups: 1, children: "~7" },
    { name: "Верхньосамарський", groups: 1, children: "~7" },
  ];

  return (
    <div style={{
      background: "#0f0f13",
      minHeight: "100%",
      display: "flex",
      flexDirection: "column",
      padding: "0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Top accent */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "4px",
        background: "linear-gradient(90deg, #f97316, #fbbf24)",
      }} />

      {/* Left panel — image + emotional */}
      <div style={{ display: "flex", flex: 1, minHeight: "600px" }}>
        <div style={{
          width: "42%",
          background: "linear-gradient(180deg, rgba(249,115,22,0.15) 0%, rgba(0,0,0,0.95) 100%), #1a0a00",
          padding: "52px 36px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          position: "relative",
        }}>
          {/* Placeholder for destroyed building photo */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(180deg, rgba(249,115,22,0.1) 0%, rgba(0,0,0,0.8) 70%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}>
            <div style={{
              width: "80px", height: "80px",
              background: "rgba(249,115,22,0.15)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px dashed rgba(249,115,22,0.4)",
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
            <div style={{
              fontSize: "11px", color: "rgba(249,115,22,0.6)",
              textAlign: "center", fontWeight: 500, padding: "0 20px",
            }}>
              Місце для фото зруйнованих<br />приміщень Близнюківської громади
            </div>
          </div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              background: "#f97316", color: "white",
              fontSize: "11px", fontWeight: 800, padding: "4px 12px",
              borderRadius: "4px", letterSpacing: "1px", display: "inline-block",
              marginBottom: "14px",
            }}>
              ПРИФРОНТОВА ЗОНА · ХАРКІВЩИНА
            </div>
            <h2 style={{
              fontSize: "32px", fontWeight: 900, color: "white",
              lineHeight: 1.1, marginBottom: "12px", letterSpacing: "-0.5px",
              fontFamily: "'Georgia', serif",
            }}>
              161 дитина<br />
              <span style={{ color: "#fbbf24" }}>чекає на шанс</span>
            </h2>
            <p style={{
              fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6,
            }}>
              Близнюківська громада. 40 км від лінії фронту.
              Школи — зруйновані або закриті. Діти — без якісної освіти.
            </p>
          </div>
        </div>

        {/* Right panel — data + budget */}
        <div style={{
          flex: 1,
          padding: "48px 40px",
          background: "#13131a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "28px",
        }}>
          <div>
            <div style={{ fontSize: "12px", color: "#f97316", fontWeight: 700, letterSpacing: "1.5px", marginBottom: "8px" }}>
              ПРОЄКТ 01 · ОФЛАЙН-ХАБИ БЛИЗНЮКІВСЬКОЇ ГРОМАДИ
            </div>
            <h3 style={{ fontSize: "26px", fontWeight: 800, color: "white", marginBottom: "0", letterSpacing: "-0.5px" }}>
              6 освітніх осередків у прифронтових селах
            </h3>
          </div>

          {/* Categories from survey */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {[
              { label: "Діти військових", n: "16+", c: "#f97316" },
              { label: "Діти війни", n: "7+", c: "#fbbf24" },
              { label: "Сироти / без піклування", n: "5+", c: "#f87171" },
              { label: "Багатодітні родини", n: "21+", c: "#a78bfa" },
              { label: "ВПО", n: "3+", c: "#489ef7" },
            ].map((c, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${c.c}33`,
                borderLeft: `3px solid ${c.c}`,
                padding: "8px 14px",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}>
                <span style={{ fontSize: "18px", fontWeight: 900, color: c.c }}>{c.n}</span>
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)" }}>{c.label}</span>
              </div>
            ))}
          </div>

          {/* Hub distribution */}
          <div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", fontWeight: 600, letterSpacing: "1px", marginBottom: "12px" }}>
              РОЗПОДІЛ ХАБІВ
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
              {hubs.map((h, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "8px",
                  padding: "10px 12px",
                }}>
                  <div style={{ fontSize: "12px", color: "white", fontWeight: 600, marginBottom: "2px" }}>{h.name}</div>
                  <div style={{ fontSize: "11px", color: "#f97316" }}>{h.groups} гр. · {h.children} дітей</div>
                </div>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div style={{
            background: "linear-gradient(135deg, rgba(249,115,22,0.12), rgba(251,191,36,0.06))",
            border: "1px solid rgba(249,115,22,0.25)",
            borderRadius: "14px",
            padding: "20px 24px",
          }}>
            <div style={{ fontSize: "11px", color: "#f97316", fontWeight: 700, letterSpacing: "1px", marginBottom: "12px" }}>
              БЮДЖЕТ ПРОЄКТУ · 12 МІСЯЦІВ
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "16px" }}>
              {[
                { label: "Зарплати педагогів", val: "$22,120" },
                { label: "Підручники (146 комплектів)", val: "$4,104" },
                { label: "Координація", val: "$5,530" },
                { label: "Адмін + резерв", val: "$2,437" },
              ].map((b, i) => (
                <div key={i}>
                  <div style={{ fontSize: "16px", fontWeight: 800, color: "#fbbf24" }}>{b.val}</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "3px", lineHeight: 1.3 }}>{b.label}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Загальна сума на рік</div>
                <div style={{ fontSize: "36px", fontWeight: 900, color: "#f97316" }}>$34,190</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Вартість на дитину</div>
                <div style={{ fontSize: "28px", fontWeight: 800, color: "#fbbf24" }}>$234 <span style={{ fontSize: "14px" }}>/рік</span></div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>= $19.50/місяць</div>
              </div>
            </div>
          </div>

          {/* KPIs */}
          <div style={{ display: "flex", gap: "12px" }}>
            {[
              { kpi: "146", desc: "дітей у програмі", icon: "👧" },
              { kpi: "20", desc: "навчальних груп", icon: "📚" },
              { kpi: "80%", desc: "задоволеність (ціль)", icon: "⭐" },
              { kpi: "6", desc: "освітніх хабів", icon: "🏫" },
            ].map((k, i) => (
              <div key={i} style={{
                flex: 1,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "10px",
                padding: "14px 10px",
                textAlign: "center",
              }}>
                <div style={{ fontSize: "20px", marginBottom: "4px" }}>{k.icon}</div>
                <div style={{ fontSize: "22px", fontWeight: 900, color: "white" }}>{k.kpi}</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "3px", lineHeight: 1.3 }}>{k.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideAUK() {
  const [activeTab, setActiveTab] = useState(1); // 0=3mo, 1=6mo, 2=12mo

  const options = [
    { label: "3 місяці", months: 3, courseCost: 1320, total2groups: 2640, tag: "Пілот" },
    { label: "6 місяців", months: 6, courseCost: 2352, total2groups: 4704, tag: "Рекомендовано" },
    { label: "12 місяців", months: 12, courseCost: 4416, total2groups: 8832, tag: "Повна програма" },
  ];

  const opt = options[activeTab];
  const scholarships = 100000;
  const totalWithScholarships = opt.total2groups + scholarships;

  return (
    <div style={{
      background: "#0a0f1e",
      minHeight: "100%",
      display: "flex",
      flexDirection: "column",
      padding: "0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Top accent */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "4px",
        background: "linear-gradient(90deg, #FFD700, #f59e0b, #FFD700)",
      }} />
      {/* Star badge */}
      <div style={{
        position: "absolute", top: "20px", right: "24px",
        background: "linear-gradient(135deg, #FFD700, #f59e0b)",
        color: "#111",
        fontSize: "11px", fontWeight: 900, padding: "6px 16px",
        borderRadius: "30px", letterSpacing: "1px",
      }}>
        ★ ПРІОРИТЕТНИЙ ПРОЄКТ
      </div>

      <div style={{ display: "flex", flex: 1, minHeight: "600px" }}>
        {/* Left: hero message */}
        <div style={{
          width: "38%",
          background: "linear-gradient(145deg, #0d2347, #1a3d7c)",
          padding: "52px 32px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "24px",
          position: "relative",
        }}>
          <div>
            <div style={{
              fontSize: "11px", color: "#FFD700", fontWeight: 800,
              letterSpacing: "1.5px", marginBottom: "10px",
            }}>
              ПРОЄКТ 02 · AMERICAN UNIVERSITY KYIV
            </div>
            <h2 style={{
              fontSize: "30px", fontWeight: 900, color: "white",
              lineHeight: 1.1, letterSpacing: "-0.5px",
              fontFamily: "'Georgia', serif",
            }}>
              English Bridge:<br />
              <span style={{ color: "#FFD700" }}>від курсів<br />до диплому</span>
            </h2>
          </div>

          <p style={{
            fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: 1.7,
          }}>
            Офлайн-курси англійської на кампусі AUK для 30 дітей, що постраждали від війни.
            Найсильніші 5 — отримують стипендію на 4 роки навчання в університеті.
          </p>

          {/* The funnel visual */}
          <div style={{
            background: "rgba(0,0,0,0.3)",
            border: "1px solid rgba(255,215,0,0.15)",
            borderRadius: "14px",
            padding: "18px 20px",
          }}>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", fontWeight: 700, letterSpacing: "1px", marginBottom: "14px" }}>
              ВОРОНКА РЕЗУЛЬТАТУ
            </div>
            {[
              { n: "30", label: "дітей починають курс", color: "#489ef7", width: "100%" },
              { n: "30", label: "покращують рівень B1→B2", color: "#a78bfa", width: "85%" },
              { n: "10–15", label: "кандидатів на стипендію", color: "#34d399", width: "55%" },
              { n: "5 🏆", label: "отримують стипендію AUK", color: "#FFD700", width: "30%" },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>{f.label}</span>
                  <span style={{ fontSize: "13px", fontWeight: 800, color: f.color }}>{f.n}</span>
                </div>
                <div style={{ height: "4px", background: "rgba(255,255,255,0.07)", borderRadius: "2px" }}>
                  <div style={{ height: "100%", width: f.width, background: f.color, borderRadius: "2px", opacity: 0.8 }} />
                </div>
              </div>
            ))}
          </div>

          {/* AUK brand */}
          <div style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "10px",
            padding: "14px 16px",
            display: "flex",
            gap: "12px",
            alignItems: "center",
          }}>
            <div style={{
              width: "44px", height: "44px", background: "#CC0000",
              borderRadius: "8px", display: "flex", alignItems: "center",
              justifyContent: "center", flexShrink: 0,
              fontSize: "10px", fontWeight: 900, color: "white", textAlign: "center",
            }}>AUK</div>
            <div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "white" }}>American University Kyiv</div>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)" }}>Powered by Arizona State University</div>
              <div style={{ fontSize: "11px", color: "#4ade80", marginTop: "2px" }}>✓ Офіційне партнерство підтверджено</div>
            </div>
          </div>
        </div>

        {/* Right: numbers + tabs */}
        <div style={{
          flex: 1,
          padding: "44px 36px",
          background: "#13131a",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}>
          <div>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginBottom: "8px" }}>
              Оберіть тривалість курсу (2 групи × 15 учнів):
            </div>
            {/* Tab selector */}
            <div style={{
              display: "flex", gap: "8px",
            }}>
              {options.map((o, i) => (
                <button key={i} onClick={() => setActiveTab(i)} style={{
                  flex: 1,
                  padding: "10px 8px",
                  background: activeTab === i ? "rgba(255,215,0,0.15)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${activeTab === i ? "rgba(255,215,0,0.4)" : "rgba(255,255,255,0.08)"}`,
                  borderRadius: "8px",
                  cursor: "pointer",
                  position: "relative",
                }}>
                  {i === 1 && (
                    <div style={{
                      position: "absolute", top: "-9px", left: "50%", transform: "translateX(-50%)",
                      background: "#FFD700", color: "#111",
                      fontSize: "9px", fontWeight: 900, padding: "2px 8px",
                      borderRadius: "20px", whiteSpace: "nowrap",
                    }}>РЕКОМЕНДОВАНО</div>
                  )}
                  <div style={{ fontSize: "16px", fontWeight: 800, color: activeTab === i ? "#FFD700" : "white" }}>
                    {o.label}
                  </div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>
                    ${o.total2groups.toLocaleString()}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Budget breakdown */}
          <div style={{
            background: "linear-gradient(135deg, rgba(255,215,0,0.08), rgba(255,215,0,0.02))",
            border: "1px solid rgba(255,215,0,0.2)",
            borderRadius: "14px",
            padding: "20px 22px",
          }}>
            <div style={{ fontSize: "11px", color: "#FFD700", fontWeight: 700, letterSpacing: "1px", marginBottom: "14px" }}>
              КОШТОРИС · {opt.label.toUpperCase()}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Курс англійської — Група 1 (15 дітей)", val: `$${opt.courseCost.toLocaleString()}` },
                { label: "Курс англійської — Група 2 (15 дітей)", val: `$${opt.courseCost.toLocaleString()}` },
              ].map((r, i) => (
                <div key={i} style={{
                  display: "flex", justifyContent: "space-between",
                  paddingBottom: "10px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}>
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>{r.label}</span>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "white" }}>{r.val}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "6px" }}>
                <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                  Курси для 30 дітей ({opt.label})
                </span>
                <span style={{ fontSize: "22px", fontWeight: 900, color: "#FFD700" }}>
                  ${opt.total2groups.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Scholarship block — THE HERO */}
          <div style={{
            background: "linear-gradient(135deg, rgba(74,222,128,0.1), rgba(16,185,129,0.05))",
            border: "1px solid rgba(74,222,128,0.25)",
            borderRadius: "14px",
            padding: "20px 22px",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: "11px", color: "#4ade80", fontWeight: 700, letterSpacing: "1px", marginBottom: "6px" }}>
                  🎓 УНІВЕРСИТЕТСЬКІ СТИПЕНДІЇ
                </div>
                <div style={{ fontSize: "16px", fontWeight: 800, color: "white", marginBottom: "8px", lineHeight: 1.2 }}>
                  5 дітей × 4 роки навчання в AUK
                </div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>
                  Конкурсний відбір після курсів.<br />
                  Пріоритет: діти загиблих Героїв, сироти, ВПО.
                </div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "16px" }}>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>5 дітей × 4 роки × $5,000</div>
                <div style={{ fontSize: "32px", fontWeight: 900, color: "#4ade80" }}>$100,000</div>
              </div>
            </div>
            <div style={{
              marginTop: "14px", paddingTop: "14px",
              borderTop: "1px solid rgba(74,222,128,0.12)",
              display: "flex", gap: "12px",
            }}>
              {[
                { label: "Ціна диплому на 1 дитину", val: "$20,000", sub: "4 роки × $5,000" },
                { label: "Рівень вступу", val: "B2", sub: "після курсів AUK" },
                { label: "Потенційне партнерство", val: "Tsvichena Natsiia", sub: "грантова програма UA" },
              ].map((s, i) => (
                <div key={i} style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: "8px",
                  padding: "10px 12px",
                }}>
                  <div style={{ fontSize: "14px", fontWeight: 800, color: "#4ade80" }}>{s.val}</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "3px", lineHeight: 1.3 }}>{s.label}</div>
                  <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.25)", marginTop: "2px" }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* TOTAL */}
          <div style={{
            background: "linear-gradient(135deg, rgba(255,215,0,0.2), rgba(245,158,11,0.1))",
            border: "2px solid rgba(255,215,0,0.4)",
            borderRadius: "14px",
            padding: "18px 22px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <div>
              <div style={{ fontSize: "12px", color: "#FFD700", fontWeight: 700, letterSpacing: "1px" }}>
                ЗАГАЛЬНА ІНВЕСТИЦІЯ (КУРСИ {opt.label.toUpperCase()} + 5 СТИПЕНДІЙ)
              </div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "4px" }}>
                ${opt.total2groups.toLocaleString()} + $100,000 = результат на десятиліття
              </div>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div style={{ fontSize: "40px", fontWeight: 900, color: "#FFD700", letterSpacing: "-1px" }}>
                ${totalWithScholarships.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideOnline() {
  return (
    <div style={{
      background: "#0e0e18",
      minHeight: "100%",
      display: "flex",
      flexDirection: "column",
      padding: "0",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "4px",
        background: "linear-gradient(90deg, #489ef7, #a78bfa)",
      }} />

      <div style={{ display: "flex", flex: 1, minHeight: "600px" }}>
        {/* Left */}
        <div style={{
          width: "40%",
          background: "linear-gradient(145deg, #0d1f3c, #0f1a32)",
          padding: "52px 32px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "24px",
        }}>
          <div>
            <div style={{
              fontSize: "11px", color: "#489ef7", fontWeight: 800,
              letterSpacing: "1.5px", marginBottom: "10px",
            }}>
              ПРОЄКТ 03 · ОНЛАЙН-ШКОЛА + РОЗШИРЕННЯ
            </div>
            <h2 style={{
              fontSize: "28px", fontWeight: 900, color: "white",
              lineHeight: 1.1, letterSpacing: "-0.5px",
              fontFamily: "'Georgia', serif",
            }}>
              250 дітей.<br />
              <span style={{ color: "#489ef7" }}>Ростемо разом</span>
            </h2>
          </div>

          <p style={{
            fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7,
          }}>
            Чинна онлайн-школа Hope Children Ukraine вже навчає 250 підлітків 11–17 років безкоштовно.
            Ваша підтримка дозволить розширити програму та додати нові напрямки.
          </p>

          {/* Current state */}
          <div style={{
            background: "rgba(72,158,247,0.08)",
            border: "1px solid rgba(72,158,247,0.2)",
            borderRadius: "12px",
            padding: "18px",
          }}>
            <div style={{ fontSize: "11px", color: "#489ef7", fontWeight: 700, letterSpacing: "1px", marginBottom: "12px" }}>
              ПОТОЧНИЙ СТАН
            </div>
            {[
              { label: "Учнів в онлайн-школі", val: "250", color: "#489ef7" },
              { label: "Вікова група", val: "11–17 р.", color: "#a78bfa" },
              { label: "Щомісячні витрати", val: "~$6,000", color: "#34d399" },
              { label: "Вартість на дитину/міс.", val: "$24", color: "#fbbf24" },
            ].map((s, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between",
                padding: "7px 0",
                borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
              }}>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>{s.label}</span>
                <span style={{ fontSize: "14px", fontWeight: 800, color: s.color }}>{s.val}</span>
              </div>
            ))}
          </div>

          {/* Partnership note */}
          <div style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "10px",
            padding: "14px 16px",
          }}>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "white", marginBottom: "6px" }}>
              🌍 Міжнародна екосистема партнерів
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {["🇺🇸 США (PURE)", "🇪🇸 Іспанія", "🇮🇹 Італія", "🇧🇪 Бельгія", "🇵🇱 Польща", "🇸🇮 Словенія"].map((p, i) => (
                <span key={i} style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "3px 10px", borderRadius: "20px",
                  fontSize: "11px", color: "rgba(255,255,255,0.6)",
                }}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: expansion options */}
        <div style={{
          flex: 1,
          padding: "44px 36px",
          background: "#13131a",
          display: "flex",
          flexDirection: "column",
          gap: "22px",
        }}>
          <h3 style={{
            fontSize: "20px", fontWeight: 800, color: "white",
            letterSpacing: "-0.3px", marginBottom: "0",
          }}>
            Варіанти розширення програми
          </h3>

          {/* Expansion cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            {[
              {
                icon: "📚",
                title: "Англійська мова",
                sub: "Розширення з 250 до 400 дітей",
                cost: "+$3,000/міс.",
                total: "+$36,000/рік",
                color: "#489ef7",
                impact: "150 нових учнів",
              },
              {
                icon: "🎨",
                title: "Арт-терапія",
                sub: "Груповий курс для дітей травми",
                cost: "$800/міс.",
                total: "$9,600/рік",
                color: "#a78bfa",
                impact: "60 дітей",
              },
              {
                icon: "🧭",
                title: "Профорієнтація",
                sub: "«Хто я через 5 років?»",
                cost: "$600/міс.",
                total: "$7,200/рік",
                color: "#34d399",
                impact: "50 підлітків",
              },
              {
                icon: "🧠",
                title: "Психологічна підтримка",
                sub: "Групові сесії для дітей військових",
                cost: "$1,000/міс.",
                total: "$12,000/рік",
                color: "#f97316",
                impact: "80 дітей",
              },
            ].map((e, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${e.color}22`,
                borderLeft: `3px solid ${e.color}`,
                borderRadius: "10px",
                padding: "16px 18px",
              }}>
                <div style={{ fontSize: "22px", marginBottom: "8px" }}>{e.icon}</div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: "white", marginBottom: "4px" }}>{e.title}</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", marginBottom: "12px", lineHeight: 1.4 }}>{e.sub}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: 900, color: e.color }}>{e.cost}</div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>{e.total}</div>
                  </div>
                  <div style={{
                    background: `${e.color}15`,
                    border: `1px solid ${e.color}30`,
                    padding: "3px 10px", borderRadius: "20px",
                    fontSize: "11px", color: e.color, fontWeight: 700,
                  }}>
                    {e.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* KPI table */}
          <div style={{
            background: "rgba(72,158,247,0.06)",
            border: "1px solid rgba(72,158,247,0.15)",
            borderRadius: "12px",
            padding: "18px 20px",
          }}>
            <div style={{ fontSize: "11px", color: "#489ef7", fontWeight: 700, letterSpacing: "1px", marginBottom: "14px" }}>
              KPI · ВИМІРЮВАНИЙ ВПЛИВ
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
              {[
                { label: "Задоволеність учнів", target: "≥80%", color: "#4ade80" },
                { label: "Покращення рівня", target: "A1→B1", color: "#FFD700" },
                { label: "Відвідуваність", target: "≥85%", color: "#489ef7" },
                { label: "Звіт донору", target: "Щомісячно", color: "#a78bfa" },
              ].map((k, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "16px", fontWeight: 800, color: k.color }}>{k.target}</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "4px", lineHeight: 1.3 }}>{k.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary comparison */}
          <div style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "12px",
            padding: "16px 20px",
          }}>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", fontWeight: 700, letterSpacing: "1px", marginBottom: "12px" }}>
              ПОРІВНЯННЯ ВСІХ ПРОЄКТІВ ДЛЯ ДОНОРА
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { name: "01 · Прифронтові хаби (Харків)", cost: "$34,190/рік", per: "$234/дитину", children: "146 дітей", color: "#f97316" },
                { name: "02 · AUK курси + 5 стипендій", cost: "$108,832", per: "$3,628/дитину", children: "→ 5 дипломів", color: "#FFD700" },
                { name: "03 · Онлайн-школа розширення", cost: "від $6,000/міс.", per: "$24/дитину", children: "250–400 дітей", color: "#489ef7" },
              ].map((p, i) => (
                <div key={i} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px 0",
                  borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "3px", height: "32px", background: p.color, borderRadius: "2px", flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "white" }}>{p.name}</div>
                      <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>{p.children}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div style={{ fontSize: "15px", fontWeight: 800, color: p.color }}>{p.cost}</div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>{p.per}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [current, setCurrent] = useState(0);
  const Slide = slides[current].component;

  return (
    <div style={{
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      background: "#060610",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      color: "white",
    }}>
      {/* Header navigation */}
      <div style={{
        background: "rgba(6,6,16,0.95)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "0 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "56px",
        flexShrink: 0,
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: "32px", height: "32px",
            background: "linear-gradient(180deg, #005BBB 50%, #FFD700 50%)",
            borderRadius: "6px",
          }} />
          <div>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "white", lineHeight: 1 }}>
              Hope Children of Ukraine
            </div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>
              Пропозиції для донорів · 2025–2026
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "4px" }}>
          {slides.map((s, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{
              padding: "6px 16px",
              background: current === i ? "rgba(255,255,255,0.1)" : "transparent",
              border: `1px solid ${current === i ? "rgba(255,255,255,0.2)" : "transparent"}`,
              borderRadius: "6px",
              color: current === i ? "white" : "rgba(255,255,255,0.45)",
              fontSize: "12px",
              fontWeight: current === i ? 700 : 400,
              cursor: "pointer",
              transition: "all 0.15s",
            }}>
              {s.label}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={() => setCurrent(Math.max(0, current - 1))}
            disabled={current === 0}
            style={{
              width: "32px", height: "32px",
              background: current === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "6px", cursor: current === 0 ? "default" : "pointer",
              color: current === 0 ? "rgba(255,255,255,0.2)" : "white",
              fontSize: "14px",
            }}>
            ←
          </button>
          <div style={{
            padding: "0 12px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "6px",
            fontSize: "12px", fontWeight: 700,
            color: "rgba(255,255,255,0.6)",
            display: "flex", alignItems: "center",
          }}>
            {current + 1} / {slides.length}
          </div>
          <button
            onClick={() => setCurrent(Math.min(slides.length - 1, current + 1))}
            disabled={current === slides.length - 1}
            style={{
              width: "32px", height: "32px",
              background: current === slides.length - 1 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "6px", cursor: current === slides.length - 1 ? "default" : "pointer",
              color: current === slides.length - 1 ? "rgba(255,255,255,0.2)" : "white",
              fontSize: "14px",
            }}>
            →
          </button>
        </div>
      </div>

      {/* Slide content */}
      <div style={{ flex: 1, overflow: "auto" }}>
        <Slide />
      </div>

      {/* Footer */}
      <div style={{
        background: "rgba(6,6,16,0.95)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "10px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexShrink: 0,
      }}>
        <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)" }}>
          hopechildrenua.org · Контакт: Ірина Луценко · irenlutsen@gmail.com
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          {[
            { label: "Проєкт 01 · Харків", cost: "$34,190", c: "#f97316" },
            { label: "Проєкт 02 · AUK", cost: "$108,832 ★", c: "#FFD700" },
            { label: "Проєкт 03 · Онлайн", cost: "від $6,000/міс.", c: "#489ef7" },
          ].map((p, i) => (
            <div key={i} style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>
              {p.label}: <span style={{ color: p.c, fontWeight: 700 }}>{p.cost}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
