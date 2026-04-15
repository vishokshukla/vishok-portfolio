export const data = {
  name: 'Vishok Shukla',
  title: 'Backend Software Engineer',
  tagline: 'Java · Spring Boot · Kafka · Microservices',
  location: 'Lucknow, India',
  phone: '+91 9315814170',
  email: 'vishok.bhumca19@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vishok-shukla-15a9511b6',
  github: 'https://github.com/vishokshukla',
  summary:
    '4+ years building scalable, event-driven distributed systems. Specialized in custom scheduling engines, Kafka-based async pipelines, and end-to-end backend ownership — from architecture to production.',

  stats: [
    { num: '4+',  label: 'Years experience' },
    { num: '10+', label: 'Microservices built' },
    { num: '30%', label: 'Query latency cut' },
    { num: '40%', label: 'Integration effort saved' },
  ],

  experience: [
    {
      company: 'Meron',
      role: 'Senior Software Engineer',
      period: 'Apr 2025 – Present',
      location: 'Bengaluru, IN',
      current: true,
      bullets: [
        'Architected a custom scheduling engine supporting time-based and event-driven executions, eliminating failures across 5+ backend services.',
        'Engineered Kafka-based async messaging pipelines for email and multi-step workflow processing with guaranteed message consistency.',
        'Built configurable workflow orchestration framework reducing new integration effort by ~40%.',
        'Resolved concurrency race conditions and data-consistency bugs using TDD and secure coding practices.',
        'Collaborated across product, frontend, and DevOps through full SDLC — design to production.',
      ],
    },
    {
      company: 'Vectorflow',
      role: 'Software Engineer',
      period: 'Sept 2022 – Mar 2025',
      location: 'Bengaluru, IN',
      current: false,
      bullets: [
        'Developed and maintained 10+ backend microservices in Java and Spring Boot for enterprise clients with high-availability requirements.',
        'Designed custom scheduling mechanisms beyond standard cron to handle complex application-specific execution requirements.',
        'Integrated Apache Kafka for async inter-service communication enabling horizontal scalability.',
        'Optimized SQL and MongoDB queries — reduced average query latency by 30% via execution plan analysis and index restructuring.',
        'Practiced TDD with JUnit 5, contributing to measurable reduction in production defects and faster release cycles.',
      ],
    },
    {
      company: 'InfoObjects',
      role: 'Software Engineer',
      period: 'Jan 2022 – Aug 2022',
      location: 'Jaipur, IN',
      current: false,
      bullets: [
        'Built and deployed RESTful APIs using Java and Spring Boot for data-driven enterprise applications.',
        'Designed relational database schemas and implemented optimized SQL/PL/SQL procedures for backend reporting.',
        'Contributed to agile delivery through sprint planning, code reviews, and technical documentation.',
      ],
    },
  ],

  skills: [
    {
      label: 'Languages & Frameworks',
      items: ['Java 8/11/17', 'Spring Boot', 'Spring MVC', 'Spring Security', 'JPA / Hibernate', 'REST APIs', 'OOP', 'Design Patterns'],
      accent: true,
    },
    {
      label: 'Messaging & Architecture',
      items: ['Apache Kafka', 'Event-Driven Architecture', 'Microservices', 'Distributed Systems', 'Async Processing', 'Workflow Orchestration'],
      accent: true,
    },
    {
      label: 'Databases',
      items: ['MySQL', 'Oracle', 'SQL Server', 'MongoDB', 'SQL', 'PL/SQL', 'Query Optimization'],
      accent: false,
    },
    {
      label: 'Testing & DevOps',
      items: ['JUnit 5', 'TDD', 'Integration Testing', 'Git', 'Maven / Gradle', 'Docker', 'Linux', 'Agile / Scrum'],
      accent: false,
    },
  ],

  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      university: 'Banaras Hindu University',
      location: 'Varanasi, IN',
      period: 'Aug 2019 – May 2022',
      medal: 'Gold Medalist — Ranked 1st in batch',
    },
    {
      degree: 'B.Sc. (Hons.) Computer Science',
      university: 'University of Delhi',
      location: 'New Delhi, IN',
      period: 'July 2015 – May 2018',
      medal: null,
    },
  ],
}
