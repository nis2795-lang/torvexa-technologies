import { 
  Activity, 
  BarChart3, 
  Briefcase, 
  Bot,
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Layout, 
  LineChart, 
  Monitor, 
  Network, 
  RefreshCcw, 
  Server, 
  Settings, 
  TerminalSquare, 
  Wrench,
  ShoppingCart
} from "lucide-react";

export const companyInfo = {
  name: "Torvexa Technologies",
  tagline: "Engineering Systems Where Performance Matters",
  shortDesc: "Torvexa Technologies is a specialized software engineering consultancy helping businesses build, optimize, and scale high-performance software systems.",
  longDesc: "From low-latency trading infrastructure and market data platforms to custom business applications, CRM systems, dashboards, and enterprise software, we deliver reliable technology solutions designed for performance, scalability, and long-term success. We partner with startups, fintech companies, trading firms, and enterprises to solve complex technical challenges and transform ideas into production-ready systems.",
  location: "Torvexa Technologies\nGhodasar Canal Road, \nAhmedabad - 380050\nGujarat, India",
  globalReach: "Serving clients globally.",
  email: "contact@torvexatech.com",
  linkedin: "www.linkedin.com/company/torvexa-technologies/",
  whatsapp: "+91-9265243375",
  foundedVision: "To build software systems that are reliable, scalable, and engineered for long-term success.",
};

export const services = [
  {
    id: "low-latency",
    title: "Low-Latency Trading Infrastructure",
    description: "Design and development of performance-critical trading systems where speed, reliability, and deterministic behavior are essential.",
    icon: Activity,
    features: [
      "High-Frequency Trading (HFT) Infrastructure",
      "Order Management Systems (OMS)",
      "Execution Management Systems",
      "Exchange Connectivity",
      "Market Data Platforms",
      "Feed Handlers ",
      "Trading Gateways",
      "Real-Time Event Processing"
    ]
  },
  {
    id: "market-data",
    title: "Market Data Systems",
    description: "Build scalable market data platforms capable of processing large volumes of real-time information with minimal latency.",
    icon: Network,
    features: [
      "Feed Handlers",
      "Market Data Normalization",
      "Tick Processing Systems",
      "Real-Time Streaming Platforms",
      "Data Distribution Services",
      "Event-Driven Architectures"
    ]
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Build software solutions tailored to your business requirements.",
    icon: Code2,
    features: [
      "Enterprise Applications",
      "SaaS Platforms",
      "Business Automation Tools",
      "Internal Management Systems",
      "Industry-Specific Applications",
      "Desktop Applications",
      "Backend Services"
    ]
  },
  {
    id: "business-analytics",
    title: "Business Management & Analytics Solutions",
    description: "Streamline operations and gain actionable insights through custom CRM platforms, workflow automation, dashboards, and reporting systems.",
    icon: Briefcase,
    features: [
      "Customer Relationship Management (CRM)",
      "Lead & Sales Management Systems",
      "Workflow & Business Process Automation",
      "Internal Operations Portals",
      "Executive & Operational Dashboards",
      "Real-Time Monitoring & Reporting Platforms",
      "Business Intelligence & Data Visualization"
    ]
  },
  {
    id: "ai-automation",
    title: "AI-Powered Automation & Agentic Solutions",
    description: "Leverage AI-driven automation, intelligent assistants, and autonomous workflows to improve efficiency, customer engagement, and business operations.",
    icon: Bot,
    features: [
      "AI Chatbots & Virtual Assistants",
      "Agentic AI Solutions",
      "Customer Support Automation",
      "Lead Qualification & Routing",
      "AI Workflow Automation",
      "Knowledge Base Assistants",
      "Document Processing & Data Extraction"
    ]
  },
  {
    id: "web-dev",
    title: "Web Application Development",
    description: "Modern web applications built for performance, usability, and scalability.",
    icon: Layout,
    features: [
      "Custom Web Applications",
      "Admin Panels",
      "Customer Portals",
      "SaaS Products",
      "API-Driven Applications",
      "Responsive User Interfaces"
    ]
  }
];

export const industries = [
  {
    title: "Trading & Financial Technology",
    description: "Building infrastructure where microseconds matter.",
    icon: LineChart
  },
  {
    title: "Technology Startups",
    description: "Helping startups move from idea to scalable product.",
    icon: Activity
  },
  {
    title: "Enterprise Organizations",
    description: "Developing custom solutions that improve efficiency and productivity.",
    icon: Briefcase
  },
  {
    title: "SaaS Companies",
    description: "Engineering scalable platforms designed for growth.",
    icon: Globe
  },
  {
    title: "Data & Analytics Businesses",
    description: "Creating systems that process and visualize information effectively.",
    icon: Database
  },
  {
    title: "E-Commerce & Retail",
    description: "Designing robust, high-traffic platforms and inventory management solutions.",
    icon: ShoppingCart
  }
];

export const whyChooseUs = [
  {
    title: "Engineering-First Approach",
    description: "We focus on solving business problems through practical and efficient engineering solutions."
  },
  {
    title: "Deep Technical Expertise",
    description: "Experience across low-latency systems, distributed platforms, enterprise applications, and modern software architectures."
  },
  {
    title: "Performance-Focused Development",
    description: "Every solution is designed with scalability, reliability, maintainability, and performance in mind."
  },
  {
    title: "Flexible Engagement Model",
    description: "Whether you need consulting, architecture guidance, development support, or a complete project team, we adapt to your requirements."
  },
  {
    title: "Global Delivery",
    description: "Based in India and serving clients worldwide with transparent communication and professional execution."
  }
];

export const capabilitiesDetails = [
  "High-Frequency Trading (HFT) Infrastructure",
  "Market Data Systems",
  "Feed Handlers & Market Data Processing",
  "Order Management Systems (OMS)",
  "Modern C++ (C++17/20)",
  "Low-Latency System Design",
  "Lock-Free Data Structures",
  "Multithreaded Applications",
  "Linux Performance Engineering",
  "Performance Profiling & Optimization",
  "Exchange Connectivity",
  "Real-Time Distributed Systems"
];

export const techStack = [
  {
    category: "Languages",
    items: ["C++", "Python", "JavaScript", "TypeScript", "Rust"]
  },
  {
    category: "Backend Technologies",
    items: ["FastAPI", "Flask", "Node.js", "REST APIs", "Microservices"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "Redis"]
  },
  {
    category: "Messaging & Streaming",
    items: ["Kafka", "RabbitMQ"]
  },
  {
    category: "Infrastructure",
    items: ["Linux", "Docker", "Azure", "AWS", "CI/CD Pipelines"]
  },
  {
    category: "Performance Engineering",
    items: ["Multithreading", "Lock-Free Data Structures", "Performance Profiling", "Memory Optimization", "System Design"]
  }
];
