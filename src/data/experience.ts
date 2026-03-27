export type ExperienceItem = {
  id: string;
  year: string;
  title: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'bac-sciences',
    year: '2020',
    title: 'Scientific Foundation',
    company: 'Lycée Qualifiant',
    location: 'Agadir, Morocco',
    description: 'Earned a Baccalaureate in Physical Sciences.',
    technologies: ['Physics', 'Mathematics', 'Logic'],
  },
  {
    id: 'ista-assaka',
    year: '2022 - 2024',
    title: 'Full Stack Web Development Diploma',
    company: 'ISTA ASSAKA',
    location: 'Agadir, Morocco',
    description: 'A rigorous two-year academic program focused on mastering full-stack architectures, from fundamental algorithmic logic to deploying scalable enterprise solutions.',
    technologies: [
      'HTML', 'CSS', 'JavaScript', 'TypeScript', 
      'React JS', 'Next JS', 'PHP', 'Laravel', 
      'Node.js', 'Nest JS', 'MySQL', 'MongoDB', 
      'Docker', 'Git', 'GitHub'
    ],
  },
  {
    id: 'magen2planet',
    year: '2024',
    title: 'Full Stack Developer (1-Month Internship)',
    company: 'Magen2planet',
    location: 'Remote',
    description: 'Developed a sophisticated real estate platform with advanced dynamic filtering and property management systems.',
    technologies: ['React JS','Laravel','Tailwind CSS','MySQL'],
  },
  {
    id: 'ghaythapp-role',
    year: '2025 - 2026',
    title: 'Full Stack Developer (5-Month Internship)',
    company: 'GhaythApp',
    location: 'Agadir, Morocco',
    description: 'Leading the development of a property management ecosystem focused on real-time financial tracking and transparent budgeting.',
    technologies: ['Next.js', 'Node.js (Express)', 'MongoDB', 'Financial APIs'],
  },
];
