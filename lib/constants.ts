export const SITE_CONFIG = {
  name: 'Karthik M Gowda',
  title: 'Software Engineer',
  description: 'Passionate software engineer building scalable, user-friendly solutions that transform ideas into meaningful digital experiences.',
  socialLinks: {
    github: 'https://github.com/karthi973120',
    linkedin: 'www.linkedin.com/in/karthik-m-gowda-957691130',
    twitter: 'https://x.com/coolkarthik_m?s=21',
    instagram: 'https://www.instagram.com/karthi_m_g0wda/',
  },
};

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  // { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS = {
  frontend: [
    { name: 'React', level: 90 },
    { name: 'React Native', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'CSS/SCSS', level: 85 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'REST API', level: 70 },
    { name: 'GraphQL', level: 65 },
  ],
  other: [
    { name: 'Git', level: 85 },
    { name: 'Docker', level: 70 },
    { name: 'K8', level: 65 },
    { name: 'CI/CD', level: 75 },
    { name: 'Testing', level: 90 },
  ],
};

export const PROJECTS = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with product management, cart functionality, and secure checkout.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoLink: 'https://demo.com',
    codeLink: 'https://github.com',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team functionality.',
    image: 'https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    demoLink: 'https://demo.com',
    codeLink: 'https://github.com',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Finance Dashboard',
    description: 'An analytics dashboard for personal finance tracking with data visualization and insights.',
    image: 'https://images.pexels.com/photos/7054528/pexels-photo-7054528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'TypeScript', 'D3.js', 'PostgreSQL'],
    demoLink: 'https://demo.com',
    codeLink: 'https://github.com',
    featured: false,
  },
  {
    id: 'project-4',
    title: 'AI-Powered Note Taking',
    description: 'Smart note-taking app with AI-powered organization and search capabilities.',
    image: 'https://images.pexels.com/photos/7054748/pexels-photo-7054748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Python', 'TensorFlow', 'MongoDB'],
    demoLink: 'https://demo.com',
    codeLink: 'https://github.com',
    featured: false,
  },
];

export const EXPERIENCE = [
  {
    id: 'exp-1',
    company: 'Wissen Technology',
    position: 'Senior Software Engineer',
    period: 'Apr 2024 - Present',
    description: 'Software Development Consultant at Flipkart',
    achievements: [
      'Contributed significantly to Flipkart’s Marketplace team by owning key migrations in the Seller Hub SLM vertical, ensuring 100% uptime during the high-traffic Big Billion Days (BBD) sale',
      'Successfully migrated the Seller App from native Android and iOS to a fully 100% React Native application. Achieved 99.9% crashfree sessions, improved user ratings from 3.X to 4.2 post-release, and reduced app download size by 12 MB.',
      'Mentored junior developers and established frontend coding standards',
      'Monitored and analysed key performance metrics using Snoopy and Mix-panel, leveraging real-time insights to optimise user experience, identify bottlenecks, and drive data-informed decision-making.',
      'Mentored team members and supported Individual Development Plans to drive professional growth. Led technical initiatives, facilitated cross-team collaboration, and managed Scrum ceremonies and quarterly planning with stakeholders'
    ],
  },
  {
    id: 'exp-2',
    company: 'Wissen Technology',
    position: 'Software Engineer',
    period: 'May 2021 - Mar 2024',
    description: 'Software Development Consultant at GE Healthcare',
    achievements: [
      'Fully refactored and released the MyGE Healthcare App using React Native, delivering a unified codebase for both iOS and Android platforms.',
      'Optimised the mobile application and website, resulting in a 50% increase in users traffic',
      'Implemented CI/CD pipeline reducing deployment time by 70%',
    ],
  },
  {
    id: 'exp-3',
    company: 'Mofosys Technologies Private Limited',
    position: 'Software Developer',
    period: 'Nov 2017 - Jan 2020',
    description: 'Collaborated on the development of responsive web & mobile applications and e-commerce solutions.',
    achievements: [
      'Contributed to rebuilding the company website, increasing conversion by 25%',
      'Built the SportsZo website and mobile app from scratch, ensuring seamless user experience and performance across platforms.',
      'Collaborated with cross-functional teams including designers, QA, and product managers to ensure timely and high-quality project delivery.',
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: 'testimonial-1',
    name: 'Sarah Johnson',
    position: 'CTO, Tech Innovations',
    content: 'John is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills make him an invaluable team member.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'testimonial-2',
    name: 'Michael Chen',
    position: 'Product Manager, Digital Solutions',
    content: 'Working with John was a pleasure. He not only implemented the features we needed but also provided valuable insights that improved our product.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'testimonial-3',
    name: 'Emily Rodriguez',
    position: 'Founder, StartUp Ventures',
    content: 'John has a rare combination of technical expertise and creative thinking. He helped transform our vision into a successful digital product.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];