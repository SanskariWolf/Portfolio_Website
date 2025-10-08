export interface Testimonial {
  quote: string;
  avatar: string;
  name: string;
  title: string;
  link: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Working with Tanush has been a pleasure. His enthusiasm, eagerness to learn, and strong collaborative spirit make him an invaluable team member.",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQHboIyv1iKpIQ/profile-displayphoto-shrink_200_200/B56ZTAAKoYGsAY-/0/1738388059741?e=1762992000&v=beta&t=JCql1wrNmkUUkWnNkSMK3-aSiiRPA_0BAXVw55wELdg",
    name: "Pratham Gupta",
    title: "AI Engineer",
    link: "https://www.linkedin.com/in/prathamgupta006/"
  },
  {
    quote: "Knowledgeable person, I found him helpful in the cybersec domain.",
    avatar: "https://media.licdn.com/dms/image/v2/D5635AQGHnTZpMpUTkg/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1716036641680?e=1760522400&v=beta&t=iJGMX7eFnMFmrPDWgoUrkSybs_rUZzAhiIEyO31sF5o",
    name: "Chayan Khetan",
    title: "Chayan",
    link: "https://www.linkedin.com/in/chayan-khetan-1b9b71222/"
  },
  {
    quote: "A rare talent who excels in multiple technologies! He built a full-stack web app that is both powerful and beautiful.",
    avatar: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxwZXJzb258ZW58MHwwfHx8MTc0MzMyNzEzNHww&ixlib=rb-4.0.3&q=80&w=1080",
    name: "John M",
    title: "Startup CEO",
    link: "#"
  },
  {
    quote: "I struggled with performance issues until Tanush revamped our frontend. The result? A lightweight, maintainable, and stunning interface!",
    avatar: "https://images.unsplash.com/photo-1473830394358-91588751b241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxwZXJzb258ZW58MHwwfHx8MTc0MzMyNzEzNHww&ixlib=rb-4.0.3&q=80&w=1080",
    name: "James L",
    title: "Frontend Engineer",
    link: "#"
  },
  {
    quote: "I can’t recommend Tanush enough! He transformed our project into a high-performance app with seamless API integration.",
    avatar: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8cGVyc29ufGVufDB8MHx8fDE3NDMzMjcxMzR8MA&ixlib=rb-4.0.3&q=80&w=1080",
    name: "Laura P",
    title: "Marketing Manager",
    link: "#"
  },
  {
    quote: "If you’re looking for a top-tier developer, look no further. Tanush delivers quality code and always meets deadlines.",
    avatar: "https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8d29tYW58ZW58MHwwfHx8MTc0MzM5ODE0N3ww&ixlib=rb-4.0.3&q=80&w=1080",
    name: "Lisa T",
    title: "Tech Founder",
    link: "#"
  },
  {
    quote: "Thanks to Tanush, our app now loads in a fraction of the time and ranks higher on search engines!",
    avatar: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8bWVufGVufDB8MHx8fDE3NDMzOTgxOTd8MA&ixlib=rb-4.0.3&q=80&w=1080",
    name: "Kevin H",
    title: "Digital Marketer",
    link: "#"
  }
];

export interface Skill {
  logo: string;
  name: string;
  quote: string;
}

export const SKILLS: Skill[] = [
  {
    logo: "⚛️",
    name: "React",
    quote: "Building interactive UIs with component-based architecture"
  },
  {
    logo: "🔷",
    name: "Angular",
    quote: "Creating robust enterprise applications"
  },
  {
    logo: "🟢",
    name: "Node.js",
    quote: "Server-side JavaScript for scalable applications"
  },
  {
    logo: "🐍",
    name: "Python",
    quote: "Versatile language for automation and AI"
  },
  {
    logo: "🛡️",
    name: "Cybersecurity",
    quote: "Protecting digital assets and infrastructure"
  },
  {
    logo: "☁️",
    name: "AWS",
    quote: "Cloud computing and infrastructure management"
  },
  {
    logo: "🐳",
    name: "Docker",
    quote: "Containerizing applications for consistency"
  },
  {
    logo: "🎨",
    name: "UI/UX",
    quote: "Designing intuitive user experiences"
  }
];
