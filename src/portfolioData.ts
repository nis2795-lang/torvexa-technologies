export interface PortfolioProject {
  id: string;
  title: string;
  problem: string;
  highlights: string[];
  results?: string[];
  industry?: string;
}

export interface PortfolioCategory {
  title: string;
  projects: PortfolioProject[];
}

export const portfolioCategories: PortfolioCategory[] = [
  {
    title: "Financial Services & Banking Systems",
    projects: [
      {
        id: "transaction-platform",
        title: "Transaction Processing Platform",
        industry: "Banking & Financial Services",
        problem: "Enterprise banking systems require reliable transaction execution under high-volume workloads while maintaining low response times.",
        highlights: [
          "Distributed transaction workflows",
          "High-volume request processing handling 10,000+ daily transactions",
          "Achieved low-latency execution paths",
          "99.9% uptime with robust backend service integration"
        ]
      },
      {
        id: "integration-gateway",
        title: "Enterprise Integration Gateway",
        industry: "Banking",
        problem: "Financial institutions operate multiple backend systems requiring secure and reliable communication.",
        highlights: [
          "Multi-service integration across distributed nodes",
          "Network communication optimization reducing latency by ~20%",
          "High-availability architecture",
          "Fault-tolerant processing preventing data loss"
        ]
      },
      {
        id: "perf-optimization",
        title: "Performance Optimization Initiative",
        industry: "Banking",
        problem: "Production systems experiencing increased latency due to memory inefficiencies and contention.",
        highlights: [
          "12% response-time improvement across central APIs",
          "Reduced heap allocations saving compute resources",
          "Cache-aware optimizations leading to higher throughput",
          "Improved overall system stability"
        ]
      }
    ]
  },
  {
    title: "Low-Latency & High-Performance Systems",
    projects: [
      {
        id: "veltrix",
        title: "Veltrix — High-Performance Event Processing Framework",
        problem: "Real-time systems struggle to process thousands of events concurrently without contention.",
        highlights: [
          "Cache-aware architecture preventing data contention",
          "Lock-free communication paths reducing latency overhead by ~30%",
          "NUMA-conscious design enhancing memory locality",
          "Multi-threaded event processing efficiently utilizing CPU cores"
        ]
      },
      {
        id: "pulsematch",
        title: "PulseMatch - Low Latency Order Matching Engine",
        problem: "Financial exchanges require deterministic order execution with low latency.",
        highlights: [
          "Price-time priority matching",
          "In-memory order book for fast access",
          "Lock-free execution pipeline matching orders securely",
          "Optimized memory allocation mitigating garbage collection spikes"
        ]
      },
      {
        id: "marketflow",
        title: "MarketFlow Replay Engine",
        problem: "Trading firms need to replay historical market data for strategy validation.",
        highlights: [
          "High-throughput tick replay speeding up strategy backtesting by 2x",
          "Accurate timestamp preservation ensuring reliability",
          "Deterministic event sequencing of large daily data dumps",
          "Parallel processing architecture across scalable instances"
        ]
      },
      {
        id: "latency-analyzer",
        title: "Torvexa Latency Analyzer",
        problem: "Production systems often hide latency bottlenecks across distributed services.",
        highlights: [
          "End-to-end latency measurement across microservices",
          "Detailed profiling isolating bottlenecks effectively",
          "Throughput bottleneck detection improving systemic reliability",
          "Real-time performance visualization dashboard"
        ]
      },
      {
        id: "cacheflow",
        title: "CacheFlow Execution Framework",
        problem: "Traditional synchronization mechanisms introduce latency under heavy workloads.",
        highlights: [
          "Cache-aware memory layout preventing costly CPU cache misses",
          "False-sharing mitigation improving multi-core scaling by 1.5x",
          "Lock-free producer-consumer architecture",
          "Predictable low-latency execution"
        ]
      },
      {
        id: "concurrent-processing",
        title: "Concurrent Processing Framework",
        problem: "High-volume backend systems require scalable task execution across multiple CPU cores.",
        highlights: [
          "Work-stealing scheduler maintaining 85%+ CPU utilization",
          "Thread pool management serving concurrent users",
          "CPU affinity optimization cutting context switches",
          "High-throughput concurrent execution for heavy loads"
        ]
      }
    ]
  },
  {
    title: "Distributed Backend Platforms",
    projects: [
      {
        id: "fastqueue",
        title: "FastQueue API Platform",
        problem: "Modern applications require reliable asynchronous processing without blocking user workflows.",
        highlights: [
          "High-throughput API handling up to 500 requests per second",
          "Event-driven processing minimizing blocking",
          "Queue-backed workflows ensuring reliable delivery",
          "Horizontal scalability supporting seamless deployments"
        ]
      },
      {
        id: "industryfinder",
        title: "IndustryFinder Platform",
        problem: "Industrial procurement teams struggle to discover suppliers across multiple geographic regions.",
        highlights: [
          "Location-based search filtering 15,000+ vendors in under 200ms",
          "Vendor discovery engine boosting B2B connections",
          "Location intelligence integrating localized data",
          "Real-time search APIs"
        ]
      },
      {
        id: "distributed-service",
        title: "Distributed Service Framework",
        problem: "Backend services need reliable communication under high traffic conditions.",
        highlights: [
          "Service orchestration bridging independent microservices",
          "API gateway processing 1,000+ orders effectively",
          "Fault-tolerant design enabling sustained uptime",
          "Scalable architecture accommodating traffic growth"
        ]
      }
    ]
  },
  {
    title: "AI Automation Solutions",
    projects: [
      {
        id: "menvish-ai",
        title: "Torvexa AI Automation",
        problem: "Businesses lose leads due to delayed responses and manual follow-ups.",
        highlights: [
          "AI-powered lead qualification",
          "WhatsApp automation cutting response time by up to 90%",
          "Real-time customer engagement",
          "Deep CRM integration synchronizing interaction histories"
        ]
      },
      {
        id: "smarthome-ai",
        title: "SmartHome AI",
        problem: "Real-estate sales teams spend significant time handling repetitive inquiries.",
        highlights: [
          "Automated property recommendations",
          "Lead qualification workflows saving agents 8+ hours weekly",
          "Seamless appointment scheduling",
          "Sales funnel automation"
        ]
      },
      {
        id: "conversational-ai",
        title: "Conversational Business Automation",
        problem: "Organizations need 24/7 customer support without increasing operational costs.",
        highlights: [
          "Multi-channel AI operating 24/7 across platforms",
          "Automated resolutions handling 40% of routine client queries",
          "Lead capture automation filling the sales pipeline",
          "Analytics dashboard detailing sentiment"
        ]
      }
    ]
  }
];
