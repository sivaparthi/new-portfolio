// Centralised content for the portfolio. Update values here to refresh the site.

export const profile = {
  name: 'Siva Sundara Krishna P',
  shortName: 'Siva P',
  role: 'Software Engineer @ Microsoft Azure',
  tagline: 'Securing & Scaling the Cloud with AI',
  currently: {
    company: 'Microsoft',
    detail: 'Azure · Reliability & Security',
  },
  intro:
    'Software Engineer at Microsoft Azure, focused on the security and reliability of cloud services that power millions of customers worldwide. I build AI-driven tooling that detects, prevents, and shortens outages — turning operational signals into safer, self-healing systems.',
  email: 'sivaparthi1989@gmail.com',
  resumeUrl:
    'https://drive.google.com/file/d/1aNRGswLj7KTQX8Pdknx8lUBNSSSMBmnN/view?usp=sharing',
  socials: {
    github: 'https://github.com/sivaparthi',
    linkedin: 'https://www.linkedin.com/in/siva-sundara-krishna-p-19b642218/',
    email: 'mailto:sivaparthi1989@gmail.com',
  },
};

export const highlights = [
  'Strengthen the security and reliability of Azure services at hyperscale',
  'Build AI tooling that predicts, detects, and reduces cloud outages',
  'Translate live telemetry and incident signals into self-healing automation',
  'Design highly available systems with auto-scaling and auto-healing',
  'Integrate Large Language Models (LLMs) into operational and developer workflows',
  'Implement CI/CD pipelines for safe, fast, and reversible deployments',
  'Build containerised services with Docker & Kubernetes',
  'Automate infrastructure configuration with Ansible and code-first workflows',
  'Develop backend services in Python with Django, Flask, and PostgreSQL',
];

// Devicon classes — see https://devicon.dev for the full list.
export const skills = [
  { name: 'Azure', icon: 'devicon-azure-plain colored' },
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'Kubernetes', icon: 'devicon-kubernetes-plain colored' },
  { name: 'Docker', icon: 'devicon-docker-plain colored' },
  { name: 'PyTorch', icon: 'devicon-pytorch-original colored' },
  { name: 'C#', icon: 'devicon-csharp-plain colored' },
  { name: 'Django', icon: 'devicon-django-plain colored' },
  { name: 'Flask', icon: 'devicon-flask-original colored' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
  { name: 'Redis', icon: 'devicon-redis-plain colored' },
  { name: 'Kafka', icon: 'devicon-apachekafka-original colored' },
  { name: 'Neo4j', icon: 'devicon-neo4j-plain colored' },
  { name: 'GitHub Actions', icon: 'devicon-githubactions-plain colored' },
  { name: 'Ansible', icon: 'devicon-ansible-plain colored' },
  { name: 'Linux', icon: 'devicon-linux-plain colored' },
  { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
];

export const proficiencies = [
  { label: 'Cloud Reliability & Security (Azure)', level: 92 },
  { label: 'AI / LLM Engineering', level: 90 },
  { label: 'Python & Backend Development', level: 95 },
  { label: 'Docker / Kubernetes', level: 88 },
  { label: 'CI / CD & Automation', level: 86 },
  { label: 'Distributed Systems', level: 82 },
];

export const experiences = [
  {
    company: 'Microsoft',
    role: 'Software Engineer · Azure',
    period: 'Oct 2025 – Present',
    featured: true,
    summary:
      'Working on the security and reliability of Azure cloud services. I build AI-driven tooling that helps detect, prevent, and shorten outages across the platform that powers millions of customer workloads.',
    bullets: [
      'Strengthen the security posture and reliability of core Azure services that serve customers worldwide.',
      'Design and ship AI tools that turn telemetry, incidents, and operational signals into early-warning systems for outages.',
      'Use LLM-driven analysis to triage incidents faster, surface root causes, and recommend mitigations to on-call engineers.',
      'Drive automation that reduces manual toil and shortens mean-time-to-detect (MTTD) and mean-time-to-mitigate (MTTM).',
      'Collaborate across reliability, security, and platform teams to harden services at hyperscale.',
    ],
  },
  {
    company: 'ThoughtClan Technologies',
    role: 'Software Engineer',
    period: 'Aug 2025 – Sep 2025',
    summary:
      'Focused on building ML/AI solutions with cutting-edge technologies like LLMs, SLMs, and RAG.',
    bullets: [
      'Built a web scraper and crawler using Selenium and BeautifulSoup to gather data from various sources for an internal knowledge base that powers a flagship product.',
    ],
  },
  {
    company: 'Navriti Technologies',
    role: 'Software Engineer',
    period: 'Sep 2024 – July 2025',
    summary:
      'Automated infrastructure, enhanced deployment efficiency, and ensured system reliability through cloud and DevOps solutions.',
    bullets: [
      'Built CI/CD pipelines using GitHub Actions, eliminating manual deployments and accelerating the release cycle.',
      'Automated movement of development code to the QA environment using cron jobs for smooth code transitions.',
      'Set up Kubernetes clusters with auto-healing and auto-scaling for UAT and Production, achieving 99.9% uptime.',
      'Implemented Ansible-based automation for server configuration and management, reducing manual effort by 80%.',
    ],
  },
  {
    company: 'IBM',
    role: 'Software Developer',
    period: 'July 2023 – July 2024',
    summary:
      'Designed and implemented solutions to address critical business challenges.',
    bullets: [
      'Developed a robust document validation pipeline, automating document integrity checks for seamless business operations.',
      'Optimised database interactions using connection pooling, improving query response times by 30%.',
      'Integrated large language models like LLAMA 3 and Mistral into IBM\u2019s chatbot, enhancing AI-driven interactions.',
      'Improved deployment efficiency by up to 40% via Docker containerisation for scalable application deployment.',
    ],
  },
  {
    company: 'IBM',
    role: 'Software Developer Intern',
    period: 'Jan 2023 – Jun 2023',
    summary:
      'Developed a tool to translate Electronic Data Interchange (EDI) formats into human-readable English using NLP and language models.',
    bullets: [],
  },
  {
    company: 'National Institute of Technology, Trichy',
    role: 'Research Intern',
    period: 'May 2022 – Aug 2022',
    summary:
      'Researched AI-driven language models for legal text classification and synthetic data generation.',
    bullets: [
      'Developed a robust NLP model using Hugging Face transformers for legal text classification.',
      'Generated high-quality synthetic legal data using GPT-3, open-sourcing 47,000+ data points for further research.',
      'Fine-tuned open-source language models and benchmarked them against OpenAI\u2019s state-of-the-art models.',
    ],
  },
];

export const education = [
  {
    school: 'Coimbatore Institute of Technology',
    degree: 'Bachelor of Engineering in Electronics and Communication',
    period: 'August 2019 – May 2023',
    description:
      'Ranked in the top 10% of the program. Coursework in Software Engineering, Operating Systems, Data Structures & Algorithms, Computer Networks and Databases.',
  },
];
