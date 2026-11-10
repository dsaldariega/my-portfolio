import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Monitor,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const skills = [
  {
    icon: Monitor,
    title: "Frontend",
    items: ["React", "Redux", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Express", "GraphQL", "REST APIs", ".NET"],
  },
  {
    icon: Database,
    title: "Database",
    items: ["MySQL", "SQL"],
  },
  {
    icon: Globe2,
    title: "Cloud & DevOps",
    items: ["AWS", "Microsoft Azure", "Jenkins (CI/CD)", "Grafana"],
  },
  {
    icon: ShieldCheck,
    title: "Reliability & Support",
    items: ["Incident Management", "Monitoring", "Troubleshooting", "Release Management"],
  },
  {
    icon: Workflow,
    title: "Tools & Platforms",
    items: ["Git", "Jira", "Confluence", "ServiceNow", "Decisions BPM"],
  },
];

const experience = [
  {
    company: "Activants Pte Ltd",
    location: "Remote · Singapore",
    role: "Application Developer",
    dates: "Nov 2024 — Present",
    type: "Current role",
    stack: ["Decisions BPM", "SQL", "Jira"],
    points: [
      "Maintain and enhance business-critical workflow applications built on Decisions BPM.",
      "Investigate and resolve production workflow issues, helping keep business processes reliable.",
      "Translate business requirements into workflow enhancements and new features backed by SQL data.",
      "Monitor application performance and uptime, and support ongoing operational improvements.",
    ],
  },
  {
    company: "Accenture Inc.",
    location: "Philippines",
    role: "Software Engineer",
    dates: "Aug 2022 — Oct 2024",
    stack: ["React", "Node.js", "Express", ".NET", "Azure", "Grafana", "Jenkins"],
    points: [
      "Built and maintained reusable React components, improving usability across devices and browsers.",
      "Developed server-side features and REST APIs with Node.js and Express, integrating with .NET APIs.",
      "Implemented authentication and security-related application features.",
      "Refactored legacy code, resolved defects, and optimized backend performance.",
      "Used Grafana for application monitoring and supported production incident response and ITIL-aligned processes.",
      "Supported deployments, release management, automation, and security and compliance activities.",
      "Worked with cross-functional teams and client stakeholders to deliver application changes.",
    ],
  },
  {
    company: "DNA Micro Software Inc.",
    location: "Philippines",
    role: "Software Engineer",
    dates: "Jan 2021 — Jun 2022",
    stack: ["React", "TypeScript", "Node.js", "Express", "GraphQL"],
    points: [
      "Developed responsive web applications using React and TypeScript.",
      "Built backend services with Node.js, Express, and GraphQL, including supporting database design.",
      "Improved application usability and navigation to create clearer user experiences.",
      "Prepared and maintained test plans, procedures, and results to support software quality.",
    ],
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="hero" id="top">
        <nav className="nav container" aria-label="Main navigation">
          <a className="wordmark" href="#top" aria-label="Dan Saldariega home">
            DS<span>.</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
          </div>
          <a className="nav-contact" href="mailto:dsaldariega@gmail.com">
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </nav>

        <div className="hero-content container">
          <div className="hero-copy">
            <div className="availability"><span /> SOFTWARE ENGINEER · CEBU, PH</div>
            <p className="hero-intro">Hello, I&apos;m</p>
            <h1>Dan Christopher <span>Saldariega.</span></h1>
            <h2>I build thoughtful digital experiences and dependable software.</h2>
            <p className="hero-description">
              Software Engineer with 5+ years of experience building and maintaining
              web applications — from polished frontend interfaces to reliable
              backend services and production support.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experience">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a className="button button-ghost" href="mailto:dsaldariega@gmail.com">
                Get in touch <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={14} /> Liloan, Cebu, Philippines</span>
              <span className="meta-divider" />
              <span>React · TypeScript · Node.js</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Software engineering illustration">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-glow" />
            <div className="code-card">
              <div className="code-top">
                <div className="window-dots"><i /><i /><i /></div>
                <span>building-things.ts</span>
                <Code2 size={15} />
              </div>
              <div className="code-body">
                <div><span className="line-no">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}</div>
                <div><span className="line-no">02</span> &nbsp; focus: <span className="code-green">&quot;quality&quot;</span>,</div>
                <div><span className="line-no">03</span> &nbsp; mindset: <span className="code-green">&quot;curious&quot;</span>,</div>
                <div><span className="line-no">04</span> &nbsp; approach: <span className="code-green">&quot;reliable&quot;</span>,</div>
                <div><span className="line-no">05</span> &nbsp; stack: [</div>
                <div><span className="line-no">06</span> &nbsp; &nbsp; <span className="code-orange">&quot;React&quot;</span>, <span className="code-orange">&quot;Node.js&quot;</span>,</div>
                <div><span className="line-no">07</span> &nbsp; &nbsp; <span className="code-orange">&quot;TypeScript&quot;</span></div>
                <div><span className="line-no">08</span> &nbsp; ]</div>
                <div><span className="line-no">09</span>{"}"};</div>
                <div className="code-cursor"><span className="line-no">10</span><span className="cursor-block" /></div>
              </div>
              <div className="code-status"><span><i /> Ready to build</span><span>UTF-8</span></div>
            </div>
            <div className="float-chip chip-react"><span>⚛</span> React</div>
            <div className="float-chip chip-ts"><span>TS</span> TypeScript</div>
            <div className="float-chip chip-node"><span>⬡</span> Node.js</div>
            <div className="visual-caption"><span /> Turning ideas into reliable software</div>
          </div>
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
      </header>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-label">
            <span className="eyebrow">01 / A LITTLE ABOUT ME</span>
            <div className="about-mark">DS<span>.</span></div>
          </div>
          <div className="about-copy">
            <SectionHeading
              eyebrow="WHO I AM"
              title="Engineering with purpose, from the first line to production."
            />
            <p className="about-lead">
              I&apos;m a Software Engineer who enjoys building useful products and
              making the systems behind them dependable.
            </p>
            <p>
              Over the past 5+ years, I&apos;ve worked across the full software
              development lifecycle — developing features, improving performance,
              resolving production incidents, and supporting deployments across
              Azure and AWS environments.
            </p>
            <p>
              My background spans frontend engineering, backend development, and
              application reliability. I care about writing maintainable code and
              creating software that is not only useful, but also operable and
              monitorable after it ships.
            </p>
            <div className="about-facts">
              <div><strong>5+</strong><span>Years in software</span></div>
              <div><strong>3</strong><span>Professional roles</span></div>
              <div><strong>Full cycle</strong><span>Build · ship · support</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="container">
          <SectionHeading
            eyebrow="02 / MY TOOLKIT"
            title="Tools I use to make things work."
            description="A practical mix of technologies and engineering practices I've used across product development and application support."
          />
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <article className="skill-card" key={skill.title}>
                  <div className="skill-card-top">
                    <span className="skill-icon"><Icon size={20} strokeWidth={1.7} /></span>
                    <span className="skill-index">0{index + 1}</span>
                  </div>
                  <h3>{skill.title}</h3>
                  <div className="skill-tags">
                    {skill.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="container">
          <SectionHeading
            eyebrow="03 / THE JOURNEY"
            title="Experience that goes beyond the code."
            description="From building web applications to keeping business-critical workflows running, each role has added a new layer to how I approach engineering."
          />
          <div className="timeline">
            {experience.map((job, index) => (
              <article className="timeline-item" key={job.company}>
                <div className="timeline-marker"><span /></div>
                <div className="timeline-date">
                  <span>{job.dates}</span>
                  {job.type ? <small>{job.type}</small> : null}
                </div>
                <div className="job-card">
                  <div className="job-heading">
                    <div>
                      <h3>{job.role}</h3>
                      <p className="company-name">{job.company} <span>·</span> {job.location}</p>
                    </div>
                    <span className="job-count">0{index + 1}</span>
                  </div>
                  <ul className="job-points">
                    {job.points.map((point) => (
                      <li key={point}><Check size={15} /> <span>{point}</span></li>
                    ))}
                  </ul>
                  <div className="job-stack">
                    {job.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="container">
          <SectionHeading
            eyebrow="04 / PERSONAL PROJECTS"
            title="Things I build beyond the day job."
            description="A look at the products and practical tools I work on independently to solve real-world problems and keep learning."
          />
          <article className="project-card">
            <div className="project-visual" aria-label="DLMSF application overview">
              <div className="project-window">
                <div className="project-window-top">
                  <span className="project-window-dots"><i /><i /><i /></span>
                  <span>dlmsf · management system</span>
                  <span className="project-window-status">IN DEVELOPMENT</span>
                </div>
                <div className="project-dashboard">
                  <div className="project-dashboard-sidebar">
                    <span className="project-sidebar-logo">DL<span>.</span></span>
                    <i /><i /><i /><i />
                  </div>
                  <div className="project-dashboard-main">
                    <span className="project-dashboard-kicker">OVERVIEW</span>
                    <strong>Fund management</strong>
                    <div className="project-metric-row">
                      <div><small>CONTRIBUTIONS</small><b>Weekly</b><span>Member funds</span></div>
                      <div><small>LOANS</small><b>Requests</b><span>Review & track</span></div>
                    </div>
                    <div className="project-dashboard-bars"><i /><i /><i /><i /><i /><i /><i /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-content">
              <div className="project-meta">
                <span className="eyebrow">FEATURED PROJECT · 01</span>
                <span className="project-status"><i /> Active development</span>
              </div>
              <h3>Dili Labad Members Sinking Fund Management System</h3>
              <p className="project-subtitle">DLMSF · Full-stack web application</p>
              <p className="project-description">
                A web-based management system designed to help administrators and
                members manage sinking fund contributions, loans, repayments, and
                financial activity in one organized place.
              </p>
              <div className="project-detail-grid">
                <div>
                  <h4>Purpose</h4>
                  <p>Make member fund administration clearer and more consistent by bringing weekly contributions, loan requests, repayment tracking, and audit records into a single workflow.</p>
                </div>
                <div>
                  <h4>Goals</h4>
                  <ul>
                    <li>Simplify member and contribution management.</li>
                    <li>Provide a transparent loan request and approval process.</li>
                    <li>Track repayments and keep financial actions auditable.</li>
                    <li>Reduce repetitive admin work with bulk weekly contribution tools.</li>
                  </ul>
                </div>
              </div>
              <div className="project-highlights">
                <span><Check size={14} /> Member & admin workflows</span>
                <span><Check size={14} /> Weekly fund contributions</span>
                <span><Check size={14} /> Loan & repayment tracking</span>
                <span><Check size={14} /> Consolidated audit trail</span>
              </div>
              <div className="project-stack">
                {["Next.js", "React", "TypeScript", "Express", "Supabase", "PostgreSQL"].map((item) => <span key={item}>{item}</span>)}
              </div>
              <a className="project-link" href="https://github.com/dsaldariega/dlmsf-app" target="_blank" rel="noreferrer">
                View source on GitHub <Github size={16} /> <ArrowUpRight size={15} />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section education-section" id="education">
        <div className="container education-grid">
          <div>
            <SectionHeading eyebrow="05 / THE FOUNDATION" title="Always learning." />
            <p className="education-intro">
              A foundation in information technology, strengthened through hands-on
              experience and continuous learning.
            </p>
          </div>
          <article className="education-card">
            <div className="education-icon"><GraduationCap size={23} /></div>
            <div>
              <span className="education-date">2015 — 2020</span>
              <h3>Bachelor of Science in Information Technology</h3>
              <p>Cebu Institute of Technology – University</p>
              <span className="education-location"><MapPin size={13} /> Cebu City, Philippines</span>
            </div>
            <ArrowUpRight className="education-arrow" size={19} />
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-inner">
          <div className="contact-copy">
            <span className="eyebrow">06 / WHAT&apos;S NEXT?</span>
            <h2>Have something<br />good in mind<span>?</span></h2>
            <p>I&apos;m always open to connecting with people who care about building thoughtful, reliable software.</p>
            <a className="button button-light" href="mailto:dsaldariega@gmail.com">
              Say hello <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="contact-details">
            <a href="mailto:dsaldariega@gmail.com"><span className="contact-icon"><Mail size={18} /></span><span><small>EMAIL</small>dsaldariega@gmail.com</span><ArrowUpRight size={16} /></a>
            <a href="https://www.linkedin.com/in/dan-christopher-saldariega-3004a61ab/" target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin size={18} /></span><span><small>LINKEDIN</small>dan-christopher-saldariega</span><ArrowUpRight size={16} /></a>
            <a href="https://github.com/dsaldariega" target="_blank" rel="noreferrer"><span className="contact-icon"><Github size={18} /></span><span><small>GITHUB</small>github.com/dsaldariega</span><ArrowUpRight size={16} /></a>
            <div className="contact-location"><MapPin size={16} /> Based in Liloan, Cebu, Philippines</div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="wordmark footer-mark" href="#top">DS<span>.</span></a>
          <p>Designed & built with care. © {new Date().getFullYear()} Dan Christopher Saldariega.</p>
          <a className="back-top" href="#top">BACK TO TOP <ArrowUpRight size={14} /></a>
        </div>
      </footer>
    </main>
  );
}
