from weasyprint import HTML
import base64

# Define the HTML content based on the React code provided by the user
# I will use a simple Vue.js implementation to handle the slide logic in a single file
html_content = """
<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hope Children of Ukraine · Donor Proposals</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            background: #060610;
            color: white;
            overflow: hidden;
        }
        #app {
            display: flex;
            flex-direction: column;
            height: 100vh;
        }
        header {
            background: rgba(6,6,16,0.95);
            border-bottom: 1px solid rgba(255,255,255,0.07);
            padding: 0 32px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 56px;
            flex-shrink: 0;
            z-index: 100;
        }
        .nav-btn {
            padding: 6px 16px;
            background: transparent;
            border: 1px solid transparent;
            border-radius: 6px;
            color: rgba(255,255,255,0.45);
            font-size: 12px;
            cursor: pointer;
            transition: all 0.15s;
        }
        .nav-btn.active {
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            color: white;
            font-weight: 700;
        }
        main {
            flex: 1;
            overflow-y: auto;
            position: relative;
        }
        footer {
            background: rgba(6,6,16,0.95);
            border-top: 1px solid rgba(255,255,255,0.06);
            padding: 10px 32px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-shrink: 0;
            font-size: 11px;
            color: rgba(255,255,255,0.25);
        }
        .slide-container {
            min-height: 100%;
            display: flex;
            flex-direction: column;
        }
        .btn-arrow {
            width: 32px;
            height: 32px;
            background: rgba(255,255,255,0.08);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 6px;
            cursor: pointer;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .btn-arrow:disabled {
            opacity: 0.3;
            cursor: default;
        }
        /* Grid and cards */
        .stats-grid {
            display: flex;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 16px;
            overflow: hidden;
            width: 100%;
            max-width: 700px;
        }
        .stat-item {
            flex: 1;
            padding: 24px 12px;
            border-right: 1px solid rgba(255,255,255,0.08);
            text-align: center;
        }
        .stat-item:last-child { border-right: none; }
    </style>
</head>
<body>
<div id="app">
    <header>
        <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 32px; height: 32px; background: linear-gradient(180deg, #005BBB 50%, #FFD700 50%); border-radius: 6px;"></div>
            <div>
                <div style="font-size: 13px; font-weight: 700; line-height: 1;">Hope Children of Ukraine</div>
                <div style="font-size: 11px; color: rgba(255,255,255,0.4);">Пропозиції для донорів · 2025–2026</div>
            </div>
        </div>
        <div style="display: flex; gap: 4px;">
            <button v-for="(s, i) in slides" @click="current = i" :class="['nav-btn', {active: current === i}]">
                {{ s.label }}
            </button>
        </div>
        <div style="display: flex; gap: 8px;">
            <button class="btn-arrow" @click="current--" :disabled="current === 0">←</button>
            <div style="padding: 0 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.6); display: flex; align-items: center;">
                {{ current + 1 }} / {{ slides.length }}
            </div>
            <button class="btn-arrow" @click="current++" :disabled="current === slides.length - 1">→</button>
        </div>
    </header>

    <main>
        <div v-if="current === 0" class="slide-container" style="background: linear-gradient(145deg, #0a0f1e 0%, #0d1f3c 50%, #0f2d5e 100%); justify-content: center; align-items: center; padding: 60px 48px; text-align: center;">
            <div style="position: absolute; top: 0; left: 0; right: 0; height: 6px; background: linear-gradient(90deg, #005BBB 50%, #FFD700 50%);"></div>
            <div style="background: rgba(255,215,0,0.12); border: 1px solid rgba(255,215,0,0.3); color: #FFD700; padding: 6px 20px; border-radius: 30px; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 28px;">
                Hope Children of Ukraine · 2025–2026
            </div>
            <h1 style="font-size: 52px; font-weight: 900; color: white; line-height: 1.1; margin-bottom: 16px; font-family: Georgia, serif;">
                Інвестиція в майбутнє<br><span style="color: #FFD700;">дітей України</span>
            </h1>
            <p style="font-size: 18px; color: rgba(255,255,255,0.6); max-width: 600px; margin-bottom: 52px;">
                Три проєкти. Три рівні підтримки.<br>Від прифронтових сіл — до університетського диплому.
            </p>
            <div class="stats-grid">
                <div class="stat-item" v-for="s in stats">
                    <div style="font-size: 36px; font-weight: 900;" :style="{color: s.color}">{{ s.num }}</div>
                    <div style="font-size: 12px; color: rgba(255,255,255,0.45); margin-top: 6px;">{{ s.label }}</div>
                </div>
            </div>
        </div>

        <div v-if="current === 1" class="slide-container" style="background: #0f0f13; flex-direction: row;">
            <div style="width: 42%; background: linear-gradient(180deg, rgba(249,115,22,0.15) 0%, rgba(0,0,0,0.95) 100%), #1a0a00; padding: 52px 36px; display: flex; flex-direction: column; justify-content: flex-end; position: relative;">
                <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(249,115,22,0.1) 0%, rgba(0,0,0,0.8) 70%); display: flex; flex-direction: column; align-items: center; justify-content: center;">
                   <span style="color: #f97316; font-size: 12px; border: 1px dashed #f9731633; padding: 20px;">Фото Близнюківської громади</span>
                </div>
                <div style="position: relative; z-index: 1;">
                    <div style="background: #f97316; color: white; font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 4px; display: inline-block; margin-bottom: 14px;">ПРИФРОНТОВА ЗОНА · ХАРКІВЩИНА</div>
                    <h2 style="font-size: 32px; font-weight: 900; font-family: Georgia, serif;">161 дитина<br><span style="color: #fbbf24;">чекає на шанс</span></h2>
                </div>
            </div>
            <div style="flex: 1; padding: 48px 40px; background: #13131a; display: flex; flex-direction: column; gap: 28px;">
                <h3 style="font-size: 26px; margin: 0;">6 освітніх осередків у прифронтових селах</h3>
                <div style="background: linear-gradient(135deg, rgba(249,115,22,0.12), rgba(251,191,36,0.06)); border: 1px solid rgba(249,115,22,0.25); border-radius: 14px; padding: 24px;">
                    <div style="font-size: 11px; color: #f97316; font-weight: 700; margin-bottom: 12px;">БЮДЖЕТ ПРОЄКТУ · 12 МІСЯЦІВ</div>
                    <div style="font-size: 36px; font-weight: 900; color: #f97316;">$34,190</div>
                    <div style="font-size: 13px; color: rgba(255,255,255,0.5);">Вартість на дитину: $234 / рік</div>
                </div>
            </div>
        </div>

        <div v-if="current === 2" class="slide-container" style="background: #0a0f1e; flex-direction: row;">
            <div style="width: 38%; background: #0d2347; padding: 52px 32px; display: flex; flex-direction: column; justify-content: center; gap: 24px;">
                <div style="background: #FFD700; color: #111; font-size: 11px; font-weight: 900; padding: 6px 16px; border-radius: 30px; width: fit-content;">★ ПРІОРИТЕТ</div>
                <h2 style="font-size: 30px; font-family: Georgia, serif;">English Bridge:<br><span style="color: #FFD700;">від курсів до диплому</span></h2>
                <p style="color: rgba(255,255,255,0.6);">30 дітей на кампусі AUK. 5 стипендій на 4 роки навчання.</p>
            </div>
            <div style="flex: 1; padding: 44px 36px; background: #13131a; display: flex; flex-direction: column; gap: 24px;">
                <div style="background: linear-gradient(135deg, rgba(255,215,0,0.2), rgba(245,158,11,0.1)); border: 2px solid #FFD700; border-radius: 14px; padding: 24px;">
                    <div style="font-size: 12px; color: #FFD700; font-weight: 700;">ЗАГАЛЬНА ІНВЕСТИЦІЯ</div>
                    <div style="font-size: 40px; font-weight: 900; color: #FFD700;">$108,832</div>
                </div>
                <div style="background: rgba(74,222,128,0.1); border: 1px solid #4ade8044; border-radius: 14px; padding: 20px;">
                    <div style="color: #4ade80; font-weight: 700; font-size: 11px; margin-bottom: 8px;">🎓 УНІВЕРСИТЕТСЬКІ СТИПЕНДІЇ</div>
                    <div style="font-size: 24px; font-weight: 800;">$100,000</div>
                    <div style="font-size: 12px; color: rgba(255,255,255,0.5);">5 дітей × 4 роки навчання</div>
                </div>
            </div>
        </div>

        <div v-if="current === 3" class="slide-container" style="background: #0e0e18; flex-direction: row;">
            <div style="width: 40%; background: #0d1f3c; padding: 52px 32px; display: flex; flex-direction: column; justify-content: center; gap: 24px;">
                <h2 style="font-size: 28px; font-family: Georgia, serif;">250 дітей.<br><span style="color: #489ef7;">Ростемо разом</span></h2>
                <div style="background: rgba(72,158,247,0.08); border: 1px solid #489ef733; padding: 18px; border-radius: 12px;">
                    <div style="font-size: 13px; color: rgba(255,255,255,0.5);">Щомісячні витрати</div>
                    <div style="font-size: 24px; font-weight: 800; color: #489ef7;">~$6,000</div>
                </div>
            </div>
            <div style="flex: 1; padding: 44px 36px; background: #13131a; display: flex; flex-direction: column; gap: 20px;">
                 <h3 style="margin: 0;">Розширення програми</h3>
                 <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                    <div v-for="e in expansion" style="background: rgba(255,255,255,0.03); border-left: 3px solid #489ef7; padding: 16px; border-radius: 10px;">
                        <div style="font-size: 20px;">{{ e.icon }}</div>
                        <div style="font-weight: 700; margin: 4px 0;">{{ e.title }}</div>
                        <div style="color: #489ef7; font-weight: 900;">{{ e.cost }}</div>
                    </div>
                 </div>
            </div>
        </div>
    </main>

    <footer>
        <div>hopechildrenua.org · Ірина Луценко · irenlutsen@gmail.com</div>
        <div style="display: flex; gap: 20px;">
            <span>Харків: <b style="color: #f97316;">$34,190</b></span>
            <span>AUK: <b style="color: #FFD700;">$108,832</b></span>
            <span>Онлайн: <b style="color: #489ef7;">від $6,000/міс.</b></span>
        </div>
    </footer>
</div>

<script>
    const { createApp } = Vue
    createApp({
        data() {
            return {
                current: 0,
                slides: [
                    { label: "Огляд" },
                    { label: "Харків" },
                    { label: "AUK — Стипендії" },
                    { label: "Онлайн-школа" }
                ],
                stats: [
                    { num: "250+", label: "дітей у програмі", color: "#FFD700" },
                    { num: "161", label: "опитаних у Харківщині", color: "#489ef7" },
                    { num: "5", label: "стипендій в університет", color: "#4ade80" },
                    { num: "4", label: "роки вищої освіти", color: "#f97316" }
                ],
                expansion: [
                    { icon: "📚", title: "Англійська мова", cost: "+$3,000/міс." },
                    { icon: "🎨", title: "Арт-терапія", cost: "$800/міс." },
                    { icon: "🧭", title: "Профорієнтація", cost: "$600/міс." },
                    { icon: "🧠", title: "Психологічна підтримка", cost: "$1,000/міс." }
                ]
            }
        }
    }).mount('#app')
</script>
</body>
</html>
"""

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html_content)
