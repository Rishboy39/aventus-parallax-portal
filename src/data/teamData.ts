
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  delay: number;
  longDescription?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 0,
    name: 'Bhrugu Mehta',
    role: 'Project Manager',
    image: '/img/bhrugu.png',
    delay: 100,
    longDescription: 'A junior at STEM High School who combines creative and technical passions through photography and automotive design. Experienced in 3D modeling with Fusion 360, creating everything from mechanical parts to artistic concepts. '
  },
  {
    id: 1,
    name: 'Arnav Mittal',
    role: 'Manufacturing Engineer',
    image: '/img/arnav.png',
    delay: 200,
    longDescription: 'A junior at STEM High School with a strong engineering mindset. Active member of the Rocketry Club and passionate about hands-on building and design. From rockets to personal projects, I thrive on turning ideas into reality.'
  },
  {
    id: 2,
    name: 'Rishabh Menasinakayi',
    role: 'Marketing Officer',
    image: '/img/rishabh.png',
    delay: 300,
    longDescription: 'A junior at STEM High School pursuing engineering courses, with a passion for coding and design. Experienced in front-end development and UI/UX design. My free time is dedicated to exploring my enthusiasm for high-performance cars.'
  },
  {
    id: 3,
    name: 'Ishir Sharma',
    role: 'Testing Lead',
    image: '/img/ishir.png',
    delay: 400,
    longDescription: 'A sophomore at STEM High School with aspirations in aerospace engineering. I\'m passionate about expanding my knowledge in mathematics and physics, dedicating my free time to exploring these fundamental concepts.'
  },
  {
    id: 4,
    name: 'Demain Orlov',
    role: 'Graphics Lead',
    image: '/img/demain.png',
    delay: 500,
    longDescription: 'A sophomore at STEM High School with aspirations in engineering. I\'m passionate about automotive design and photography, often found perfecting racing lines in Gran Turismo. I combine my technical interests with creative pursuits to develop a well-rounded engineering mindset.'
  },
  {
    id: 5,
    name: 'Pragyan Singh',
    role: 'Manufacturing Lead',
    image: '/img/pragyan.png',
    delay: 600,
    longDescription: 'A sophomore at STEM High School who combines technical and artistic pursuits. I spend my time coding for enjoyment, practicing piano, diving into books, and racing in Forza. These diverse interests fuel my creative approach to problem-solving.'
  },
];
