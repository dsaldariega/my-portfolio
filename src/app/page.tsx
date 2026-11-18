import { Button, Chip, Stack } from "@mui/material";

import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Check,
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
    items: ["SQL", "MySQL", "RethinkDB"],
  },
  {
    icon: Globe2,
    title: "Cloud & DevOps",
    items: ["AWS", "Microsoft Azure", "Jenkins", "Terraform", "Grafana"],
  },
  {
    icon: ShieldCheck,
    title: "Reliability & Support",
    items: ["Production Support", "Incident Management", "Root-Cause Analysis", "Monitoring", "Release & Change Management"],
  },
  {
    icon: Workflow,
    title: "Tools & Platforms",
    items: ["Decisions BPM", "Git", "Jira", "Confluence", "ServiceNow"],
  },
];

const experience = [
  {
    company: "Activants Pte Ltd",
    location: "Remote · Singapore",
    role: "Application Developer",
    dates: "Nov 2024 — Present",
    type: "Current role",
    stack: ["Decisions BPM", "SQL", "Workflow Engineering"],
    points: [
      "Develop and maintain business-critical Decisions BPM and SQL workflow applications supporting operational processes across 60+ healthcare institutions.",
      "Engineer and support enterprise asset management workflows for equipment disposal, write-off, exchange, transfer, and verification across institutions and cost centres.",
      "Maintain high-volume billing and payment workflows, including electronic invoicing, transaction processing, multi-tier approvals, and external system integrations.",
      "Troubleshoot production issues involving workflow routing, approval assignments, automated notifications, form processing, and cross-system data exchange.",
      "Deliver change requests for payment and claims modules, updating shared components such as bank configurations, approver matrices, and operational dashboards.",
      "Work with support teams and business stakeholders to investigate incidents, translate requirements into technical solutions, and keep workflow operations running reliably.",
    ],
  },
  {
    company: "Accenture Inc.",
    location: "Philippines",
    role: "Software Engineer",
    dates: "Aug 2022 — Oct 2024",
    stack: ["React", ".NET", "SQL", "AWS", "Terraform", "Grafana", "Jenkins"],
    points: [
      "Resolved 750+ complex Level 2 production incidents through ServiceNow, maintaining an SLA adherence rate above 85% across enterprise applications built with React, .NET, and SQL.",
      "Served as a Directly Responsible Individual for production operations, monitoring runtime health through Grafana, leading incident triage, and providing status updates to leadership.",
      "Coordinated production releases through Jenkins by validating commits, preparing change requests, and working with development teams to deploy defect fixes safely.",
      "Administered AWS environments and maintained Terraform infrastructure-as-code configurations for account provisioning, access controls, and scheduled credential and key rotation.",
      "Contributed to effort-sizing and root-cause analysis sessions to assess change complexity and help prevent recurring production defects.",
    ],
  },
  {
    company: "DNA Micro Software Inc.",
    location: "Philippines",
    role: "Software Engineer",
    dates: "Jan 2021 — Jun 2022",
    stack: ["React", "TypeScript", "Node.js", "GraphQL", "RethinkDB"],
    points: [
      "Built reusable UI templates and foundational components for an internal application platform using React, TypeScript, Node.js, GraphQL, and RethinkDB.",
      "Developed and maintained features for a digital asset and product information management platform handling high-volume product catalogs and media assets.",
      "Investigated and resolved client-reported production defects, including cart calculation discrepancies and responsive CSS and layout issues.",
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
          <a className="nav-contact" href="#contact">
            Contact
          </a>
        </nav>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <div className="mobile-nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content container">
          <div className="hero-copy">
            <div className="availability"><span /> SOFTWARE ENGINEER · CEBU, PH</div>
            <p className="hero-intro">Hello, I&apos;m</p>
            <h1>Dan Christopher <span>Saldariega.</span></h1>
            <h2>I build thoughtful digital experiences and dependable software.</h2>
            <p className="hero-description">
              Software Engineer with 5+ years of experience across web development, enterprise workflow engineering, and production reliability. Experienced in React, TypeScript, Node.js, .NET, SQL, AWS, and Decisions BPM, with a track record of building and supporting business-critical applications, resolving complex production incidents, and coordinating reliable software releases.
            </p>
            <div className="hero-actions">
              <Button className="button button-primary" variant="contained" href="#experience" endIcon={<ArrowDownRight size={17} />}>
                Explore my work
              </Button>
              <Button className="button button-ghost" variant="outlined" href="mailto:dsaldariega@gmail.com" endIcon={<ArrowUpRight size={16} />}>
                Get in touch
              </Button>
            </div>
          </div>


        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
      </header>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-copy">
            <SectionHeading
              eyebrow="01 / A LITTLE ABOUT ME"
              title="Engineering with purpose, from the first line to production."
            />
            <p className="about-lead">
              I&apos;m a Software Engineer with 5+ years of experience spanning web application development, enterprise workflow engineering, and production reliability.
            </p>
            <p>
              My development experience includes React, Redux, TypeScript, JavaScript, Node.js, Express, GraphQL, .NET, and SQL. I also work with Decisions BPM to develop and maintain enterprise workflows supporting operational processes across healthcare institutions.
            </p>
            <p>
              My background includes production incident management, root-cause analysis, application monitoring, release coordination, and cloud infrastructure support across AWS and Azure. I focus on practical, maintainable solutions and reliable software operations.
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
            description="Independent projects shaped around practical problems, thoughtful product decisions, and continuous learning."
          />
          <div className="projects-grid">
            <article className="project-card">
              <div className="project-content">
                <div className="project-meta">
                  <span className="eyebrow">PERSONAL PROJECT · 01</span>
                  <span className="project-status"><i /> In development</span>
                </div>
                <h3>Dili Labad Members Sinking Fund Management System</h3>
                <p className="project-subtitle">DLMSF · Full-stack web application</p>
                <p className="project-description">
                  A management system designed to help administrators and members organize sinking fund contributions, loans, repayments, and financial activity.
                </p>
                <div className="project-detail-grid">
                  <div>
                    <h4>Purpose</h4>
                    <p>Make member fund administration clearer and more consistent by bringing weekly contributions, loan requests, repayment tracking, and audit records into one workflow.</p>
                  </div>
                  <div>
                    <h4>Project goals</h4>
                    <ul>
                      <li>Simplify member and contribution management.</li>
                      <li>Provide a clear loan request and approval process.</li>
                      <li>Track repayments and keep financial actions auditable.</li>
                      <li>Reduce repetitive admin work through bulk contribution tools.</li>
                    </ul>
                  </div>
                </div>
                <Stack className="project-stack" direction="row" flexWrap="wrap" gap={1}>
                  {["Next.js", "React", "TypeScript", "Express", "Supabase", "PostgreSQL"].map((item) => (
                    <Chip key={item} label={item} size="small" />
                  ))}
                </Stack>
                <a className="project-link" href="https://github.com/dsaldariega/dlmsf-app" target="_blank" rel="noreferrer">
                  View source on GitHub <Github size={16} /> <ArrowUpRight size={15} />
                </a>
              </div>
            </article>

            <article className="project-card">
              <div className="project-content">
                <div className="project-meta">
                  <span className="eyebrow">PERSONAL PROJECT · 02</span>
                  <span className="project-status"><i /> Live application</span>
                </div>
                <h3>BudgetNest</h3>
                <p className="project-subtitle">Personal finance web application</p>
                <p className="project-description">
                  A personal finance workspace built to make everyday money management easier to organize, understand, and keep up with.
                </p>
                <div className="project-detail-grid">
                  <div>
                    <h4>Purpose</h4>
                    <p>Bring budgets, accounts, transactions, savings goals, loans, subscriptions, and financial activity together in one focused workspace.</p>
                  </div>
                  <div>
                    <h4>Project goals</h4>
                    <ul>
                      <li>Make budgets and everyday spending easier to follow.</li>
                      <li>Keep accounts and transactions organized.</li>
                      <li>Support savings goals and recurring financial commitments.</li>
                    </ul>
                  </div>
                </div>
                <Stack className="project-stack" direction="row" flexWrap="wrap" gap={1}>
                  {["Next.js", "React", "TypeScript", "Node.js", "Supabase"].map((item) => (
                    <Chip key={item} label={item} size="small" />
                  ))}
                </Stack>
                <div className="project-links">
                  <a className="project-link" href="https://github.com/dsaldariega/personalized-budget-tracker" target="_blank" rel="noreferrer">
                    View source <Github size={16} /> <ArrowUpRight size={15} />
                  </a>
                  <a className="project-link" href="https://budgetnest-app.vercel.com" target="_blank" rel="noreferrer">
                    Open live app <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          </div>
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
          </div>
          <div className="contact-details">
            <a href="mailto:dsaldariega@gmail.com"><span className="contact-icon"><Mail size={18} /></span><span><small>EMAIL</small>dsaldariega@gmail.com</span><span className="email-action">Email me <ArrowUpRight size={14} /></span></a>
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
