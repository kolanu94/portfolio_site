export const profile = {
  name: "Himabindu Kolanu",
  role: "Senior Software Engineer",
  tagline: "Cloud & Distributed Systems • Reliability & Observability • AI Infrastructure",
  location: "Washington, US",

  
  // summary: "I build cloud-native distributed systems with production-grade observability—focused on resiliency, performance, and incident reduction.",
  highlights: [
    "Reduced incident MTTR ~30% via structured logging, correlation IDs, and monitoring.",
    "Improved REST API throughput ~20% via async processing and caching.",
    "Built cloud-native services and CI/CD pipelines across AWS/Azure with production-grade observability.",
  ],
  signatureLine: "I turn production pain into reliable systems.",
  impactBadges: [
    "MTTR ↓ 30%",
    "Throughput ↑ 20%",
    "Telemetry • Observability",
    "AWS/Azure • Docker • K8s",
  ],

  links: {
    resume: "Himabindu_Kolanu_Resume_Updated_MS.pdf",
    linkedin: "https://www.linkedin.com/in/bindu-k-69a7b626a/",
    github: "https://github.com/kolanu94",
    email: "mailto:himakolanu@gmail.com",
  },

  experience: [
    {
      company: "Capital One",
      title: "Senior Software Engineer",
      period: "Jun 2024 – Aug 2025",
      logo: "/logos/capone.webp",
      tags: ["Java", "Spring Boot", "Microservices", "Observability", "AWS/Azure", "CI/CD"],
      bullets: [
        "Designed telemetry solutions for real-time monitoring of customer-facing applications.",
        "Integrated structured logging + correlation IDs to enable end-to-end observability; reduced incident MTTR by ~30%.",
        "Built and optimized Spring Boot microservices; improved fault tolerance and latency characteristics.",
        "Improved performance/availability with load balancing on AWS/Azure; mentored engineers and drove code quality.",
      ],
    },
    {
      company: "PayPal",
      title: "Software Engineer",
      period: "Aug 2023 – May 2024",
      logo: "/logos/paypal.png",
      tags: ["Java", "REST APIs", "Kubernetes", "Docker", "Jenkins", "Monitoring"],
      bullets: [
        "Built high-performance payment APIs handling large transaction volumes.",
        "Designed telemetry/monitoring for payment microservices; improved dashboards and alerting for latency and health trends.",
        "Automated deployments using Jenkins; containerized workloads using Docker/Kubernetes.",
      ],
    },
    {
      company: "Meta",
      title: "Java Developer",
      period: "Aug 2022 – Dec 2022",
      logo: "/logos/meta.webp",
      tags: ["Java", "Distributed Systems", "Caching", "Async"],
      bullets: [
        "Improved REST API throughput by ~20% via asynchronous processing and caching.",
        "Contributed to low-latency distributed systems for reliability and data processing.",
      ],
    },
    {
      company: "Tata Consultancy Services",
      title: "Software Engineer",
      period: "Feb 2016 – Jul 2021",
      logo: "/logos/tcs.jpeg",
      tags: ["Java", "Spring", "Hibernate", "AWS", "ETL"],
      bullets: [
        "Led enterprise Java development and delivered cloud-based applications.",
        "Built automation tools reducing cloud management overhead by ~40%.",
        "Improved batch processing workflows and optimized ETL execution times.",
      ],
    },
  ],

  certifications: [
    { name: "Oracle Certified Associate, Java SE 8 Programmer", issuer: "Oracle", year: "2018", verify: "" },
  ],
    // REQUIRED for UI rendering (avoid blank page)
    skills: {
      Backend: ["Java", "Spring Boot", "Microservices", "REST APIs"],
      CloudDevOps: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Git"],
      Observability: ["Metrics", "Tracing", "Logging", "Dashboards", "Alerting"],
      Data: ["SQL", "MySQL", "MongoDB"],
      Quality: ["JUnit", "Cucumber", "SonarQube", "Postman"],
    },
  
    metrics: [
      { value: "8+", label: "Years Experience" },
      { value: "30%", label: "MTTR Reduction" },
      { value: "20%", label: "Throughput Gain" },
    ],
  
    projects: [
      {
        name: "OpenTelemetry Microservices Demo",
        status: "In Progress",
        desc: "Spring Boot services instrumented with OTEL + Prometheus/Grafana + Jaeger using Docker Compose.",
        link: "",
      },
      {
        name: "Resilience Patterns",
        status: "In Progress",
        desc: "Timeouts, retries, circuit breakers, bulkheads, idempotency — examples + tests.",
        link: "",
      },
    ],
  
    caseStudies: [
      {
        title: "MTTR Reduction via Observability Standardization",
        problem: "Incidents took too long to diagnose due to inconsistent logs and missing traceability.",
        approach:
          "Introduced structured logging, correlation IDs, dashboards, and alert tuning. Improved runbooks and triage flow.",
        result: "Reduced MTTR ~30% and improved incident repeatability.",
        stack: ["Java", "Spring Boot", "Logging", "Metrics", "Tracing", "Dashboards"],
        impact: "Reduced MTTR ~30% and improved incident repeatability.",
      },
      {
        title: "Throughput Improvement via Performance Tuning",
        problem: "High latency and throughput bottlenecks under peak load.",
        approach:
          "Profiled hotspots, optimized DB queries, improved caching and thread configuration, and fixed resource contention.",
        result: "Improved throughput ~20% and stabilized p95 latency during peak hours.",
        stack: ["Java", "Spring Boot", "SQL", "Profiling", "Caching"],
        impact: "Reduced MTTR ~30% and improved incident repeatability.",
      },
    ],
    principles: [
      { title: "Reliability by design", desc: "SLOs, graceful degradation, and resilient patterns from day one." },
      { title: "Observability first", desc: "Logs/metrics/traces with correlation IDs and actionable alerts." },
      { title: "Performance as a feature", desc: "Profiling, load testing, and caching to protect p95/p99." },
      { title: "Secure defaults", desc: "Least privilege, secrets hygiene, and safe-by-default APIs." },
      { title: "Automation over toil", desc: "CI/CD, runbooks, dashboards, and self-healing workflows." },
      { title: "Readable systems", desc: "Clean boundaries, clear ownership, and documentation that scales." },
    ],
};