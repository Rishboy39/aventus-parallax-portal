
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
    longDescription: 'Alex was elected team principal due to their immense passion for the competition and exclusive choice of the members for the formation of our team. Their role is to ensure the smooth operation and flow of the team throughout the competition. Therefore, they are responsible for the assignment of tasks of the whole team, maintaining constant contact with each member to inform everyone about the situation and progress of each part of the teamwork and to ensure that all deadlines are met.'
  },
  {
    id: 1,
    name: 'Arnav Mittal',
    role: 'Manufacturing Engineer',
    image: '/img/arnav.png',
    delay: 200,
    longDescription: 'Emma leads our manufacturing division, bringing years of experience in precision engineering. She oversees the production of our car components, ensuring each part meets our exacting standards. Her innovative approach to manufacturing has helped us reduce weight while maintaining structural integrity, giving our car a competitive edge on the track.'
  },
  {
    id: 2,
    name: 'Rishabh Menasinakayi',
    role: 'Marketing Officer',
    image: '/img/rishabh.png',
    delay: 300,
    longDescription: 'Michael is the creative mind behind our car\'s aerodynamic design. Working closely with the manufacturing team, he examines various phenomena of aerodynamics and force effect throughout our course in the competition. His designs have significantly contributed to the efficient performance, maximum speed, and overall excellence of our team\'s car.'
  },
  {
    id: 3,
    name: 'Ishir Sharma',
    role: 'Testing Lead',
    image: '/img/ishir.png',
    delay: 400,
    longDescription: 'Sophia manages our team\'s resources with precision and foresight. She ensures that we have the materials, tools, and services needed to build and race our car. Her strategic planning has been crucial to our ability to meet deadlines and operate within our budget constraints. She also coordinates with sponsors to secure additional resources and support.'
  },
  {
    id: 4,
    name: 'Demain Orlov',
    role: 'Graphics Lead',
    image: '/img/demain.png',
    delay: 500,
    longDescription: 'Daniel leads our marketing and communication efforts, crafting our team\'s narrative and managing our social media presence. He works tirelessly to increase our visibility in the F1 in Schools community and attract sponsors. His creative campaigns have successfully highlighted our team\'s unique approach and values to a wider audience.'
  },
  {
    id: 5,
    name: 'Pragyan Singh',
    role: 'Manufacturing Lead',
    image: '/img/pragyan.png',
    delay: 600,
    longDescription: 'Olivia is our technology expert, handling everything from simulation software to data analysis. She develops custom software solutions that help us test and refine our designs virtually before physical production. Her skills in performance analysis have been invaluable in identifying areas for improvement and optimizing our car\'s performance.'
  },
];
