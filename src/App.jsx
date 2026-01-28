import { useMemo, useState } from "react";
import { profile } from "./data";
import "./styles.css";

/* ---------- helpers ---------- */
const safeArr = (v) => (Array.isArray(v) ? v : []);
const safeObj = (v) => (v && typeof v === "object" ? v : {});
const initials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((x) => x[0]?.toUpperCase())
    .join("");

const skillIcon = (label) => {
  const map = {
    Java: "☕",
    "Spring Boot": "🌿",
    Microservices: "🧩",
    "REST APIs": "🔌",
    AWS: "☁️",
    Azure: "☁️",
    Docker: "🐳",
    Kubernetes: "⎈",
    "CI/CD": "🚀",
    Git: "🔧",
    Metrics: "📈",
    Tracing: "🧭",
    Logging: "📝",
    Dashboards: "📊",
    Alerting: "⏰",
    SQL: "🗄️",
    MySQL: "🗄️",
    MongoDB: "🍃",
    JUnit: "✅",
    Cucumber: "🥒",
    SonarQube: "🔍",
    Postman: "📮",
  };
  return map[label] || "•";
};

/* ---------- UI atoms ---------- */
function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="section">
      <div className="sectionHead">
        <div className="sectionTitle">
          {kicker ? <p className="kicker">{kicker}</p> : null}
          <h2>{title}</h2>
        </div>
        <div className="divider" />
      </div>
      {children}
    </section>
  );
}

function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

function Button({ variant = "ghost", href, children }) {
  const cls =
    variant === "primary"
      ? "btn primary"
      : variant === "linkedin"
      ? "btn brand linkedin"
      : variant === "github"
      ? "btn brand github"
      : variant === "resume"
      ? "btn brand resume"
      : variant === "email"
      ? "btn brand email"
      : "btn";

  return (
    <a className={cls} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function Card({ title, subtitle, right, children }) {
  return (
    <div className="card">
      <div className="cardTop">
        <div>
          <h3>{title}</h3>
          {subtitle ? <p className="muted">{subtitle}</p> : null}
        </div>
        {right ? <div className="right">{right}</div> : null}
      </div>
      {children}
    </div>
  );
}

function LogoCircle({ text, logo }) {
  return (
    <div className="logoCircle">
      {logo ? <img className="logoImg" src={logo} alt="" /> : text}
    </div>
  );
}
const base = import.meta.env.BASE_URL; // e.g. "/portfolio_site1/"

function logoUrl(path) {
  if (!path) return "";
  // if already absolute (http) leave it
  if (/^https?:\/\//.test(path)) return path;
  // ensure exactly one slash between base + path
  return `${base}${path}`.replace(/\/{2,}/g, "/");
}

/* ---------- main ---------- */
export default function App() {
  const [dark, setDark] = useState(true);

  const p = profile || {};
  const links = safeObj(p.links);
  const groupedSkills = useMemo(() => safeObj(p.skills), [p.skills]);

  const navItems = [
    { href: "#about", label: "ABOUT" },
    { href: "#skills", label: "SKILLS" },
    { href: "#experience", label: "EXPERIENCE" },
    { href: "#case-studies", label: "CASE STUDIES" },
    //{ href: "#projects", label: "PROJECTS" },
    { href: "#certs", label: "CERTIFICATIONS" },
    { href: "#contact", label: "CONTACT" },
  ];

  const badges =
    safeArr(p.impactBadges).length > 0
      ? safeArr(p.impactBadges)
      : String(p.tagline || "")
          .split("•")
          .map((x) => x.trim())
          .filter(Boolean);

  const metrics =
    safeArr(p.metrics).length > 0
      ? safeArr(p.metrics)
      : [
          { value: "8+", label: "Years" },
          { value: "30%", label: "MTTR ↓" },
          { value: "20%", label: "Throughput ↑" },
        ];

  const focusLine =
    badges.length > 0
      ? badges.slice(0, 3).join(" • ")
      : "Observability-first systems • Reliability • Performance tuning";

  const stackLine =
    "Java • Spring Boot • Microservices • AWS/Azure • Docker/K8s • OTEL";

  return (
    <div className={dark ? "app dark" : "app"}>
      {/* ===== NAV ===== */}
      <header className="nav">
        <div className="navInner">
        <div className="navLeft">
  <a className="brand" href="#top" aria-label="Home">
  {/* <span className="monogram">{initials(p.name || "HK")}</span> */}
  </a>
</div>

          <nav className="navCenter">
            {navItems.slice(0, 4).map((x) => (
              <a key={x.href} href={x.href}>
                {x.label}
              </a>
            ))}
            {navItems.slice(4).map((x) => (
              <a key={x.href} href={x.href}>
                {x.label}
              </a>
            ))}
          </nav>

          <div className="navRight">
            <button className="toggle" onClick={() => setDark((v) => !v)}>
              {dark ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </header>

      {/* ===== HERO / SPLASH ===== */}
      <section id="top" className="splash2">
        <div className="splash2Inner">
          {/* LEFT */}
          <div className="splash2Left">
            <p className="splashKicker">{p.location || "Washington, US"}</p>

            <h1 className="splashName2">{p.name || "Your Name"}</h1>

            <p className="splashRole2">{p.role || "Senior Software Engineer"}</p>

            <p className="splashTag2">
              {p.tagline ||
                "Cloud & Distributed Systems • Reliability & Observability • Performance"}
            </p>
            <p className="heroValueLine">
  I help teams ship reliable services with SLOs, telemetry, and performance tuning.
</p>

            {p.summary ? <p className="splashSummary">{p.summary}</p> : null}

            <div className="splashCTA2">
  <Button variant="resume" href={links.resume || "#"}>Download Resume</Button>
</div>

            {/* <a className="scrollCue" href="#about">
              Scroll ↓
            </a> */}
          </div>

          {/* RIGHT */}
          <div className="splash2Right">
            <div className="summaryCard">
              <div className="summaryHeader">
                <div>
                  <div className="summaryEyebrow">Executive Summary</div>
                  <div className="summaryCaption">
                    SLO-driven reliability • performance • observability
                  </div>
                </div>
                <div className="summaryBadge">Production</div>
              </div>

              {/* Small + subtle, not “fake dashboard” */}
              <div className="miniSignals" aria-hidden="true">
                <div className="sigRow">
                  <span className="sigLabel">Latency</span>
                  <div className="sigBar b1" />
                </div>
                <div className="sigRow">
                  <span className="sigLabel">Errors</span>
                  <div className="sigBar b2" />
                </div>
                <div className="sigRow">
                  <span className="sigLabel">Saturation</span>
                  <div className="sigBar b3" />
                </div>
              </div>

              <div className="summaryMetrics">
                {metrics.slice(0, 3).map((m) => (
                  <div className="summaryMetric" key={m.label}>
                    <div className="summaryValue">{m.value}</div>
                    <div className="summaryLabel">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="summaryRows">
                <div className="summaryRow">
                  <div className="summaryKey">Focus</div>
                  <div className="summaryText">{focusLine}</div>
                </div>
                <div className="summaryRow">
                  <div className="summaryKey">Stack</div>
                  <div className="summaryText">{stackLine}</div>
                </div>
              </div>

              <p className="summaryNote muted">
                *Signals are a visual metaphor for what I optimize in production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest uses container */}
      <main className="container">
        {/* ===== ABOUT ===== */}
        <Section id="about" kicker="WHO I AM" title="About">
          <div className="aboutGrid">
            <div className="avatarCard">
              <div className="avatar">{initials(p.name || "HK")}</div>
              <p className="avatarName">{p.name}</p>
              <p className="muted small">{p.role}</p>

              <div className="aboutBlocks">
                <div className="aboutBlock">
                  <p className="aboutBlockTitle">What I build</p>
                  <p className="muted">
                    Cloud-native microservices and distributed systems with
                    production-grade observability. Focused on resiliency,
                    performance, and incident reduction.
                  </p>
                </div>

                <div className="aboutBlock">
                  <p className="aboutBlockTitle">What I’m known for</p>
                  <ul className="aboutList">
                    <li>
                      Reducing MTTR via structured logging, correlation IDs,
                      dashboards & alerting
                    </li>
                    <li>
                      Improving throughput/latency with profiling, async
                      patterns, caching, DB tuning
                    </li>
                    <li>
                      Operational excellence: SLOs, incident response, runbooks,
                      alert hygiene
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="aboutRight">
              <div className="card">
                <h3>How I work</h3>
                <p className="muted" style={{ marginTop: 6, lineHeight: 1.6 }}>
                  I focus on systems that are observable by default, resilient
                  under failure, and measurable with clear SLOs. I prefer simple
                  architectures that scale, and I optimize based on real
                  production signals.
                </p>

                <div className="aboutMiniGrid">
                  <div className="miniCard">
                    <div className="miniTitle">Strengths</div>
                    <ul className="aboutList">
                      <li>Distributed systems & microservices</li>
                      <li>Telemetry: logs / metrics / traces</li>
                      <li>Performance tuning & reliability</li>
                    </ul>
                  </div>

                  <div className="miniCard">
                    <div className="miniTitle">What to review</div>
                    <ul className="aboutList">
                      <li>Case studies (Problem → Approach → Impact)</li>
                      <li>Projects + repos with evidence</li>
                      <li>Architecture notes & diagrams</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card" style={{ marginTop: 14 }}>
                <h3>Quick wins I deliver</h3>
                <div className="chipGrid">
                  {safeArr(p.impactBadges).map((b) => (
                    <span className="pill" key={b}>
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ===== SKILLS ===== */}
        <Section id="skills" kicker="TOOLBOX" title="Skills & Technologies">
          <div className="skillsGrid">
            {Object.entries(groupedSkills).map(([group, items]) => (
              <div key={group} className="skillCol">
                <h3 className="skillColTitle">{group}</h3>
                <div className="skillList">
                  {safeArr(items).map((x) => (
                    <div className="skillItem" key={x}>
                      <span className="skillIcon">{skillIcon(x)}</span>
                      <span className="skillText">{x}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ===== EXPERIENCE ===== */}
        <Section id="experience" kicker="CAREER" title="Experience">
          <div className="timeline">
            <div className="timelineLine" aria-hidden="true" />
            {safeArr(p.experience).map((e, idx) => (
              <div
                key={(e.company || "") + (e.title || "")}
                className={`timelineRow ${idx % 2 === 0 ? "left" : "right"}`}
              >
                <div className="timelineNode">
                <LogoCircle text={initials(e.company || "Co")} logo={logoUrl(e.logo)}/>
                </div>

                <div className="timelineCard">
                  <div className="timelineTop">
                    <div>
                      <h3 className="timelineTitle">
                        {e.company} <span className="muted">•</span> {e.title}
                      </h3>
                      <p className="muted">{e.period}</p>
                    </div>
                    <div className="timelineTags">
                      {safeArr(e.tags)
                        .slice(0, 4)
                        .map((t) => (
                          <Pill key={t}>{t}</Pill>
                        ))}
                    </div>
                  </div>

                  <ul className="list">
                    {safeArr(e.bullets).map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  {safeArr(e.tags).length > 4 ? (
                    <div className="chipGrid">
                      {safeArr(e.tags)
                        .slice(4)
                        .map((t) => (
                          <Pill key={t}>{t}</Pill>
                        ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ===== CASE STUDIES ===== */}
        <Section id="case-studies" kicker="IMPACT" title="Featured Case Studies">
          <div className="grid2">
            {safeArr(p.caseStudies).map((c) => (
              <Card key={c.title} title={c.title} subtitle={c.result}>
                <div className="caseBlock">
                  <p>
                    <b>Problem:</b> {c.problem}
                  </p>
                  <p>
                    <b>Approach:</b> {c.approach}
                  </p>
                </div>
                <div className="chipGrid">
                  {safeArr(c.stack).map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* ===== PROJECTS ===== */}
        {/* <Section id="projects" kicker="WORK" title="Projects">
          <div className="grid2">
            {safeArr(p.projects).map((proj) => (
              <Card
                key={proj.name}
                title={proj.name}
                subtitle={proj.desc}
                right={<span className="badge">{proj.status}</span>}
              >
                {proj.link ? (
                  <Button variant="github" href={proj.link}>
                    View repo
                  </Button>
                ) : (
                  <p className="muted tiny" style={{ marginTop: 10 }}>
                    Repo link will be added once the first version is pushed.
                  </p>
                )}
              </Card>
            ))}
          </div>
        </Section> */}

        {/* ===== CERTS ===== */}
        <Section id="certs" kicker="PROOF" title="Certifications">
          <div className="stack">
            {safeArr(p.certifications).length === 0 ? (
              <Card title="Add your certifications" subtitle="Include verification links">
                <p className="muted">
                  Update <code>src/data.js</code> → <code>certifications</code>.
                </p>
              </Card>
            ) : (
              safeArr(p.certifications).map((c) => (
                <Card
                  key={c.name}
                  title={c.name}
                  subtitle={`${c.issuer} • ${c.year}`}
                  right={
                    c.verify ? (
                      <Button variant="primary" href={c.verify}>
                        Verify
                      </Button>
                    ) : null
                  }
                />
              ))
            )}
          </div>
        </Section>

        {/* ===== CONTACT ===== */}
        <Section id="contact" kicker="LET’S TALK" title="Contact">
          <Card title="Let’s connect" subtitle="Fastest response via email / LinkedIn">
            <div className="quick">
              <Button variant="email" href={links.email || "#"}>
                Email
              </Button>
              <Button variant="linkedin" href={links.linkedin || "#"}>
                LinkedIn
              </Button>
              {/* <Button variant="github" href={links.github || "#"}>
                GitHub
              </Button> */}
              {/* <Button variant="resume" href={links.resume || "#"}>
                Resume
              </Button> */}
            </div>
          </Card>
        </Section>

        <footer className="footerNew">
          <div className="footerMonogram">{initials(p.name || "HK")}</div>
          <div className="footerLinks">
            <a href="#about">About</a>
            <span>/</span>
            <a href="#skills">Skills</a>
            <span>/</span>
            <a href="#experience">Experience</a>
            <span>/</span>
            <a href="#contact">Contact</a>
          </div>
          <div className="muted tiny">
            © {new Date().getFullYear()} {p.name}
          </div>
        </footer>
      </main>
    </div>
  );
}