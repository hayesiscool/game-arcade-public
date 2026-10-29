* {
  box-sizing: border-box;
}

:root {
  --bg: #090b14;
  --panel: #111827;
  --panel-2: #1f2937;
  --panel-3: #0f172a;
  --text: #f8fafc;
  --muted: #cbd5e1;
  --gold: #fbbf24;
  --green: #22c55e;
  --blue: #38bdf8;
  --shadow: rgba(15, 23, 42, 0.45);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background:
    radial-gradient(circle at top, rgba(56, 189, 248, 0.18), transparent 35%),
    radial-gradient(circle at bottom, rgba(251, 191, 36, 0.12), transparent 35%),
    var(--bg);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

.retro-shell {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 20px 60px;
}

.retro-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 0 24px;
}

.brand-lockup {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-icon {
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  border-radius: 14px;
  background: linear-gradient(135deg, #fbbf24, #f97316);
  color: #1f2937;
  font-weight: 900;
  font-size: 1.5rem;
  box-shadow: 0 10px 28px rgba(251, 191, 36, 0.35);
}

.eyebrow {
  margin: 0;
  font-size: 0.7rem;
  letter-spacing: 0.16rem;
  color: var(--gold);
  font-weight: 700;
}

.eyebrow.alt {
  color: var(--blue);
}

h1, h2, h3, h4, p {
  margin-top: 0;
}

h1 {
  margin-bottom: 0;
  font-size: clamp(1.4rem, 3vw, 2.2rem);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 18px;
  color: var(--muted);
}

.nav-links a {
  transition: 0.2s ease;
}

.nav-links a:hover {
  color: var(--text);
}

.hero-panel {
  display: grid;
  grid-template-columns: 1.5fr 0.95fr;
  gap: 24px;
  margin-bottom: 30px;
}

.hero-copy,
.featured-console,
.catalog,
.play-panel,
.game-card,
.modal-card {
  background: rgba(17, 24, 39, 0.92);
  border: 1px solid rgba(148, 163, 184, 0.16);
  border-radius: 24px;
  box-shadow: 0 20px 40px var(--shadow);
}

.hero-copy {
  padding: 30px;
}

.badge,
.mini-label {
  display: inline-block;
  margin-bottom: 14px;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(251, 191, 36, 0.18);
  border: 1px solid rgba(251, 191, 36, 0.35);
  color: var(--gold);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06rem;
  text-transform: uppercase;
}

.hero-copy h2 {
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  line-height: 1.05;
  margin-bottom: 14px;
}

.hero-copy p {
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 22px 0 26px;
}

.primary-btn,
.secondary-btn,
.mini-btn,
.filter,
.close-btn {
  border: none;
  border-radius: 12px;
  transition: 0.2s ease;
}

.primary-btn,
.secondary-btn,
.mini-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  font-weight: 700;
}

.primary-btn {
  background: linear-gradient(135deg, #fbbf24, #f97316);
  color: #1f2937;
}

.secondary-btn {
  background: rgba(148, 163, 184, 0.12);
  color: var(--text);
  border: 1px solid rgba(148, 163, 184, 0.2);
}

.primary-btn:hover,
.secondary-btn:hover,
.mini-btn:hover,
.filter:hover {
  transform: translateY(-1px);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.stat-box {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 14px;
  padding: 18px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat-box strong {
  font-size: 1.3rem;
}

.stat-box span {
  color: var(--muted);
  font-size: 0.79rem;
}

.featured-console {
  padding: 24px;
  background: linear-gradient(135deg, rgba(59,130,246,0.15), rgba(251,191,36,0.08));
}

.console-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
}

.console-body h3 {
  font-size: clamp(1.8rem, 2vw, 2.6rem);
  margin-bottom: 12px;
}

.console-body p {
  color: var(--muted);
  line-height: 1.6;
}

.console-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.console-tags span,
.tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(148, 163, 184, 0.18);
  color: var(--muted);
  border-radius: 999px;
  padding: 7px 10px;
  font-size: 0.76rem;
}

.catalog {
  padding: 22px 22px 12px;
}

.catalog-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
  margin-bottom: 18px;
}

.catalog-head h3,
.play-header h3 {
  margin-bottom: 0;
  font-size: 2rem;
}

.search-wrap {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: min(100%, 320px);
  color: var(--muted);
  font-size: 0.86rem;
}

.search-wrap input {
  background: rgba(15, 23, 42, 0.94);
  border: 1px solid rgba(148, 163, 184, 0.14);
  color: var(--text);
  border-radius: 12px;
  padding: 12px 14px;
  outline: none;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0 18px;
}

.filter {
  padding: 10px 14px;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.18);
  color: var(--muted);
}

.filter.active {
  background: linear-gradient(135deg, rgba(59,130,246,0.38), rgba(251,191,36,0.16));
  color: var(--text);
  border-color: rgba(56, 189, 248, 0.55);
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  padding-bottom: 18px;
}

.game-card {
  overflow: hidden;
}

.card-cover {
  height: 120px;
  padding: 18px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}

.card-cover span {
  color: white;
  background: rgba(15, 23, 42, 0.3);
  border: 1px solid rgba(255,255,255,0.2);
  padding: 6px 9px;
  border-radius: 999px;
  font-size: 0.72rem;
}

.card-body {
  padding: 18px;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.card-top h4 {
  font-size: 1.2rem;
  margin-bottom: 0;
}

.card-top span {
  color: var(--gold);
  font-weight: 700;
}

.card-body p {
  color: var(--muted);
  line-height: 1.6;
  min-height: 72px;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 12px 0 14px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.card-footer small {
  color: var(--muted);
}

.mini-btn {
  background: rgba(56, 189, 248, 0.12);
  color: var(--text);
  border: 1px solid rgba(56, 189, 248, 0.28);
}

.play-panel {
  margin-top: 28px;
  padding: 22px;
}

.play-header {
  margin-bottom: 18px;
}

.launch-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.launch-tile {
  min-height: 180px;
  border-radius: 18px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.14);
}

.launch-tile span {
  display: inline-block;
  width: fit-content;
  color: white;
  background: rgba(15, 23, 42, 0.32);
  padding: 6px 8px;
  border-radius: 999px;
  font-size: 0.7rem;
}

.launch-tile h4 {
  margin-bottom: 0;
}

.launch-tile p {
  margin-bottom: 0;
  opacity: 0.9;
}

.launch-tile a {
  margin-top: 8px;
  width: fit-content;
  padding: 8px 12px;
  border-radius: 10px;
  background: rgba(15, 23, 42, 0.45);
  border: 1px solid rgba(255,255,255,0.2);
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.76);
  display: grid;
  place-items: center;
  padding: 20px;
}

.modal-card {
  width: min(760px, 100%);
  padding: 20px;
}

.modal-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.modal-top h3 {
  margin-bottom: 0;
  font-size: 2rem;
}

.close-btn {
  width: 40px;
  height: 40px;
  background: rgba(148, 163, 184, 0.12);
  color: var(--text);
  border: 1px solid rgba(148, 163, 184, 0.16);
}

.modal-body {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 20px;
}

.modal-cover {
  min-height: 220px;
  border-radius: 18px;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}

.modal-cover span {
  color: white;
  background: rgba(15, 23, 42, 0.35);
  border-radius: 999px;
  padding: 6px 8px;
  font-size: 0.7rem;
}

.modal-copy p {
  color: var(--muted);
  line-height: 1.7;
}

.modal-copy ul {
  margin: 14px 0 18px;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.8;
}

.modal-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

@media (max-width: 980px) {
  .hero-panel,
  .game-grid,
  .launch-grid,
  .modal-body {
    grid-template-columns: 1fr;
  }

  .catalog-head,
  .retro-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .search-wrap {
    width: 100%;
  }
}

@media (max-width: 640px) {
  .retro-shell {
    padding-left: 14px;
    padding-right: 14px;
  }

  .hero-copy,
  .catalog,
  .play-panel,
  .featured-console,
  .modal-card {
    padding: 16px;
  }

  .nav-links {
    flex-wrap: wrap;
    gap: 10px 18px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
