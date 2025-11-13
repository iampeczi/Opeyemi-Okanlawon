export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    tagline: "Full-stack online shopping solution",
    description: "A comprehensive e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product filtering, shopping cart, payment integration, and admin dashboard.",
    longDescription: `This project was built to address the growing need for small businesses to have a robust online presence. The platform needed to handle everything from product management to secure payment processing.
    
    The main challenges included implementing real-time inventory synchronization across multiple warehouse locations, ensuring PCI compliance for payment processing, and optimizing the checkout flow to reduce cart abandonment rates.
    
    Key learnings included mastering Stripe API integration, implementing advanced caching strategies with Redis, and creating a scalable microservices architecture that could handle peak traffic during flash sales.`,
    images: [
      "/projects/ecommerce-1.png",
      "/projects/ecommerce-2.png",
      "/projects/ecommerce-3.png"
    ],
    thumbnail: "/projects/ecommerce-thumb.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS", "Redis"],
    features: [
      "User authentication with JWT and OAuth2.0",
      "Advanced product search with Elasticsearch",
      "Real-time shopping cart with WebSocket updates",
      "Stripe payment integration with subscription support",
      "Admin dashboard for inventory and analytics",
      "Responsive design optimized for mobile commerce",
      "Email notifications for order updates",
      "Customer reviews and ratings system"
    ],
    challenges: [
      "Implementing real-time inventory updates across multiple warehouses",
      "Securing payment processing with PCI DSS compliance",
      "Optimizing database queries for 10,000+ product catalogs",
      "Reducing cart abandonment through UX improvements"
    ],
    outcomes: [
      "40% faster page load",
      "500+ transactions/month",
      "98% customer satisfaction",
      "25% reduced cart abandonment"
    ],
    role: "Full Stack Developer",
    duration: "3 months",
    teamSize: "Solo project",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
    demoVideo: "https://youtube.com/watch?v=demo",
    testimonial: {
      text: "Excellent work! The platform exceeded our expectations and doubled our online sales.",
      author: "Sarah Johnson",
      position: "CEO, Fashion Boutique Inc."
    }
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    tagline: "Collaborative project management tool for agile teams",
    description: "A modern task management application with real-time collaboration, kanban boards, and team analytics. Built to streamline project workflows and improve team productivity.",
    longDescription: `This project emerged from observing teams struggle with fragmented communication tools and lack of visibility into project progress. The goal was to create an all-in-one solution that combined task tracking, team collaboration, and performance analytics.
    
    The biggest challenge was implementing real-time updates across multiple users without overwhelming the server. We solved this using WebSocket connections with efficient state management and optimistic UI updates.
    
    Through this project, I gained deep expertise in real-time database synchronization, complex state management with Redux Toolkit, and creating intuitive drag-and-drop interfaces that work seamlessly on both desktop and mobile devices.`,
    images: [
      "/projects/taskapp-1.png",
      "/projects/taskapp-2.png",
      "/projects/taskapp-3.png"
    ],
    thumbnail: "/projects/taskapp-thumb.png",
    technologies: ["React", "Firebase", "Redux Toolkit", "Material-UI", "Chart.js", "Socket.io"],
    features: [
      "Drag-and-drop kanban board interface",
      "Real-time collaboration with multiple users",
      "Task assignments with due dates and priorities",
      "Team activity feed and notifications",
      "Sprint planning and burndown charts",
      "File attachments and comments on tasks",
      "Dark mode and customizable themes",
      "Export reports in PDF and CSV formats"
    ],
    challenges: [
      "Handling real-time updates for 50+ concurrent users",
      "Implementing complex permission systems for teams",
      "Optimizing drag-and-drop performance on mobile",
      "Creating intuitive UI for complex project hierarchies"
    ],
    outcomes: [
      "30% productivity increase",
      "1000+ active users",
      "4.8/5 star rating",
      "50% faster task completion"
    ],
    role: "Lead Frontend Developer",
    duration: "4 months",
    teamSize: "3 developers",
    liveUrl: "https://taskapp-example.com",
    githubUrl: "https://github.com/yourusername/taskapp",
    demoVideo: "https://youtube.com/watch?v=taskdemo",
    testimonial: {
      text: "This tool transformed how our team works. We've never been more organized and efficient.",
      author: "Michael Chen",
      position: "Project Manager, Tech Innovations Ltd."
    }
  },
  {
    id: 3,
    title: "Real Estate Listing Platform",
    tagline: "Smart property search with AI-powered recommendations",
    description: "A comprehensive real estate platform featuring advanced search filters, virtual tours, and AI-driven property recommendations. Connects buyers with their dream homes efficiently.",
    longDescription: `The real estate market needed a modern platform that could handle the complexity of property searches while providing an engaging user experience. Traditional listing sites were cluttered and lacked intelligent matching between buyers and properties.
    
    The major technical challenge was implementing geospatial search that could handle millions of properties while maintaining sub-second response times. We also needed to integrate 360° virtual tour functionality and build a recommendation engine that learned from user behavior.
    
    This project taught me advanced techniques in geospatial databases (PostGIS), machine learning integration for recommendations, working with large datasets efficiently, and creating immersive 3D experiences using WebGL.`,
    images: [
      "/projects/realestate-1.png",
      "/projects/realestate-2.png",
      "/projects/realestate-3.png"
    ],
    thumbnail: "/projects/realestate-thumb.png",
    technologies: ["React", "Node.js", "PostgreSQL", "PostGIS", "Three.js", "TensorFlow.js", "Google Maps API"],
    features: [
      "Advanced geospatial search with map integration",
      "AI-powered property recommendations",
      "360° virtual tours with hotspot navigation",
      "Mortgage calculator and affordability tools",
      "Saved searches with email alerts",
      "Agent dashboard with lead management",
      "Neighborhood insights and school ratings",
      "Appointment scheduling system"
    ],
    challenges: [
      "Optimizing geospatial queries for millions of properties",
      "Implementing smooth 360° virtual tour navigation",
      "Building accurate recommendation algorithm",
      "Handling large image galleries without performance issues"
    ],
    outcomes: [
      "2M+ property listings",
      "60% faster property discovery",
      "10,000+ daily active users",
      "35% increase in user engagement"
    ],
    role: "Full Stack Developer & ML Integration",
    duration: "5 months",
    teamSize: "5 developers, 1 designer",
    liveUrl: "https://realestate-example.com",
    githubUrl: "https://github.com/yourusername/realestate",
    demoVideo: "https://youtube.com/watch?v=realestate-demo",
    testimonial: {
      text: "The virtual tours and smart recommendations have revolutionized how our clients search for homes. Incredible work!",
      author: "Lisa Rodriguez",
      position: "CEO, Prime Properties Group"
    }
  }
];