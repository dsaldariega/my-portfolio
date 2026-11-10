import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

const experience = [
  {
    company: "Activants Pte Ltd",
    location: "Remote · Singapore",
    role: "Application Developer",
    dates: "Nov 2024 — Present",
    current: true,
    stack: ["Decisions BPM", "SQL", "Jira"],
    points: [
      "Maintain and improve business-critical workflow applications built on Decisions BPM.",
      "Investigate production issues and turn business requirements into practical workflow enhancements.",
      "Use SQL-backed data and application monitoring to support reliable day-to-day operations.",
    ],
  },
  {
    company: "Accenture Inc.",
    location: "Philippines",
    role: "Software Engineer",
    dates: "Aug 2022 — Oct 2024",
    stack: ["React", "Node.js", "Express", ".NET", "Azure", "Grafana", "Jenkins"],
    points: [
      "Built and maintained React interfaces and server-side features using Node.js and Express.",
      "Integrated with .NET APIs, implemented authentication features, and improved legacy code.",
      "Supported production monitoring, incident response, deployments, and release activities.",
    ],
  },
  {
    company: "DNA Micro Software Inc.",
    location: "Philippines",
    role: "Software Engineer",
    dates: "Jan 2021 — Jun 2022",
    stack: ["React", "TypeScript", "Node.js", "Express", "GraphQL"],
    points: [
      "Developed responsive web applications with React and TypeScript.",
      "Created backend services with Node.js, Express, and GraphQL, with supporting database work.",
      "Improved application usability and contributed to test plans and software quality checks.",
    ],
  },
];

const capabilities = [
  {
    number: "01",
    title: "Frontend",
    detail: "React, Redux, TypeScript, JavaScript, HTML, CSS, responsive interfaces",
  },
  {
    number: "02",
    title: "Backend",
    detail: "Node.js, Express, GraphQL, REST APIs, .NET",
  },
  {
    number: "03",
    title: "Data",
    detail: "MySQL, SQL, Supabase, PostgreSQL",
  },
  {
    number: "04",
    title: "Cloud & delivery",
    detail: "AWS, Azure, Jenkins, Git, release management",
  },
  {
    number: "05",
    title: "Operations",
    detail: "Grafana, monitoring, troubleshooting, incident management",
  },
];

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="site-header-inner">
          <a className="brand" href="#top" aria-label="Dan Saldariega, home">dan<span>.</span></a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#work">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="header-link" href="mailto:dsaldariega@gmail.com">
            Say hello <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-inner page-wrap">
          <div className="hero-kicker"><span className="status-dot" /> SOFTWARE ENGINEER <span className="kicker-divider">/</span> CEBU, PHILIPPINES</div>
          <div className="hero-main">
            <div className="hero-copy">
              <p className="hero-greeting">Hi, I&apos;m Dan.</p>
              <h1>I make software<br />that <em>works well.</em></h1>
              <p className="hero-summary">
                I&apos;m a software engineer focused on building useful web
                applications, improving existing systems, and making sure
                things keep working after they ship.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="#work">Explore my work <ArrowDown size={15} /></a>
                <a className="text-link" href="mailto:dsaldariega@gmail.com">Get in touch <ArrowUpRight size={15} /></a>
              </div>
            </div>
            <aside className="hero-aside" aria-label="A little about Dan">
              <div className="aside-rule" />
              <p className="aside-label">A LITTLE CONTEXT</p>
              <p className="aside-big">5<span>+</span></p>
              <p className="aside-caption">years building and supporting software</p>
              <div className="aside-bottom">
                <span>Mostly working with</span>
                <strong>React · TypeScript · Node.js</strong>
              </div>
            </aside>
          </div>
          <div className="hero-foot">
            <span><MapPin size={14} /> Liloan, Cebu</span>
            <a href="#about">SCROLL TO KNOW MORE <ArrowDown size={13} /></a>
          </div>
        </div>
      </section>

      <section className="intro-section section-pad" id="about">
        <div className="page-wrap intro-grid">
          <SectionLabel number="01">A BIT ABOUT ME</SectionLabel>
          <div className="intro-body">
            <h2>I enjoy the details: a clear interface, a sensible API, and a system that&apos;s dependable in production.</h2>
            <div className="intro-columns">
              <p>
                Over the past five years, I&apos;ve worked across frontend
                development, backend services, and application support. I&apos;ve
                built features, improved performance, worked through production
                issues, and helped deliver changes across Azure and AWS environments.
              </p>
              <p>
                I care about code that the next person can understand, software
                that solves the actual problem, and the less glamorous work that
                keeps an application healthy once it is in people&apos;s hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section section-pad" id="work">
        <div className="page-wrap">
          <div className="section-heading-row">
            <SectionLabel number="02">WHERE I&apos;VE WORKED</SectionLabel>
            <p className="section-note">A few chapters in my professional journey.</p>
          </div>
          <div className="experience-list">
            {experience.map((job, index) => (
              <article className="experience-item" key={job.company}>
                <div className="experience-date">
                  <span>{job.dates}</span>
                  {job.current ? <small><i /> CURRENT</small> : null}
                </div>
                <div className="experience-content">
                  <div className="experience-title-row">
                    <div>
                      <h3>{job.role}</h3>
                      <p>{job.company} <span>·</span> {job.location}</p>
                    </div>
                    <span className="experience-index">0{index + 1}</span>
                  </div>
                  <ul>
                    {job.points.map((point) => <li key={point}><span className="list-dash">—</span>{point}</li>)}
                  </ul>
                  <div className="tech-list">
                    {job.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section section-pad" id="projects">
        <div className="page-wrap">
          <div className="section-heading-row">
            <SectionLabel number="03">THINGS I&apos;M BUILDING</SectionLabel>
            <p className="section-note">Personal work, experiments, and ideas made real.</p>
          </div>
          <article className="featured-project">
            <div className="project-number">PROJECT / 001</div>
            <div className="project-main">
              <div className="project-topline">
                <span className="project-status"><i /> IN DEVELOPMENT</span>
                <span className="project-type">FULL-STACK WEB APPLICATION</span>
              </div>
              <h3>Dili Labad Members<br /><em>Sinking Fund</em> Management System</h3>
              <p className="project-acronym">DLMSF</p>
              <p className="project-summary">
                A shared place for administrators and members to manage weekly
                sinking fund contributions, loan requests, repayments, and
                financial records with more clarity and accountability.
              </p>
              <div className="project-details">
                <div>
                  <h4>THE PURPOSE</h4>
                  <p>Replace scattered, repetitive fund administration with a more organized process that members and administrators can follow and understand.</p>
                </div>
                <div>
                  <h4>WHAT IT AIMS TO DO</h4>
                  <ul>
                    <li>Make member and weekly contribution records easier to manage.</li>
                    <li>Give loan requests a clear review and approval process.</li>
                    <li>Keep repayment activity and financial changes traceable.</li>
                    <li>Reduce repetitive admin work through bulk contribution tools.</li>
                  </ul>
                </div>
              </div>
              <div className="project-bottom">
                <div className="project-tech">
                  {["Next.js", "React", "TypeScript", "Express", "Supabase", "PostgreSQL"].map((item) => <span key={item}>{item}</span>)}
                </div>
                <a className="project-source" href="https://github.com/dsaldariega/dlmsf-app" target="_blank" rel="noreferrer">
                  View project on GitHub <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
            <div className="project-side-note">
              <span>BUILT TO SUPPORT</span>
              <strong>Members<br />& administrators</strong>
              <div className="side-note-line" />
              <span>FOCUS AREAS</span>
              <p>Contributions<br />Loans<br />Repayments<br />Audit trail</p>
            </div>
          </article>
        </div>
      </section>

      <section className="capabilities-section section-pad" id="skills">
        <div className="page-wrap capabilities-grid">
          <div>
            <SectionLabel number="04">MY TOOLKIT</SectionLabel>
            <h2 className="capabilities-heading">Tools are just tools.<br /><em>Here&apos;s what I use.</em></h2>
          </div>
          <div className="capability-list">
            {capabilities.map((item) => (
              <div className="capability-row" key={item.number}>
                <span className="capability-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="education-section section-pad">
        <div className="page-wrap education-grid">
          <SectionLabel number="05">THE FOUNDATION</SectionLabel>
          <div className="education-content">
            <span className="education-years">2015 — 2020</span>
            <h2>Bachelor of Science in<br />Information Technology</h2>
            <p>Cebu Institute of Technology – University</p>
            <span className="education-location"><MapPin size={13} /> Cebu City, Philippines</span>
          </div>
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div className="page-wrap contact-inner">
          <div className="contact-main">
            <SectionLabel number="06">YOUR TURN</SectionLabel>
            <h2>Have a good<br />problem to <em>solve?</em></h2>
            <p>I&apos;d be happy to hear about it. Let&apos;s connect.</p>
            <a className="button button-light" href="mailto:dsaldariega@gmail.com">Email me <ArrowUpRight size={16} /></a>
          </div>
          <div className="contact-links">
            <a href="mailto:dsaldariega@gmail.com"><Mail size={17} /><span>Email</span><strong>dsaldariega@gmail.com</strong><ArrowUpRight size={15} /></a>
            <a href="https://www.linkedin.com/in/dan-christopher-saldariega-3004a61ab/" target="_blank" rel="noreferrer"><Linkedin size={17} /><span>LinkedIn</span><strong>Dan Christopher Saldariega</strong><ArrowUpRight size={15} /></a>
            <a href="https://github.com/dsaldariega" target="_blank" rel="noreferrer"><Github size={17} /><span>GitHub</span><strong>github.com/dsaldariega</strong><ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="page-wrap footer-bottom">
          <a className="brand footer-brand" href="#top">dan<span>.</span></a>
          <p>Designed with care. Built with code.</p>
          <a href="#top">BACK TO TOP <ArrowUpRight size={13} /></a>
        </div>
      </footer>
    </main>
  );
}
