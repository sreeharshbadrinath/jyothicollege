import { Department, Milestone, GalleryImage, FAQItem } from './types';

export const DEPARTMENTS: Department[] = [
  {
    id: 'cse',
    name: 'Computer Science & Engineering',
    shortName: 'CSE',
    description: 'Nurturing innovators in software development, cloud computing, cybersecurity, and computational intelligence with world-class computing infrastructures.',
    intake: 120,
    accredited: true,
    vision: 'To produce globally competent and value-led computer science engineers capable of solving complex societal challenges through continuous learning and research.',
    labs: ['Advanced Programming Lab', 'Systems & Networks Lab', 'Cloud & IoT Research Center', 'Database Systems Laboratory'],
    careers: ['Software Architect', 'Full Stack Developer', 'Data Scientist', 'Security Engineer', 'DevOps Specialist']
  },
  {
    id: 'aids',
    name: 'Artificial Intelligence & Data Science',
    shortName: 'AI & DS',
    description: 'Empowering future intelligence architects with deep training in Machine Learning, Big Data Analytics, Cognitive Computing, and Neural Networks.',
    intake: 60,
    accredited: false,
    vision: 'To lead the AI revolution by cultivating technology pioneers who harness data and intelligent automation ethically to augment human capability.',
    labs: ['AI Lab', 'Data Analytics Lab', 'Machine Learning Platform Lab', 'Deep Learning Innovation Center'],
    careers: ['AI Researcher', 'Data Engineer', 'Machine Learning Engineer', 'Business Intelligence Analyst']
  },
  {
    id: 'ece',
    name: 'Electronics & Communication Engineering',
    shortName: 'ECE',
    description: 'Fusing hardware ingenuity with communication engineering, covering advanced VLSI systems, signal processing, and high-frequency communication protocols.',
    intake: 60,
    accredited: true,
    vision: 'To attain academic and research excellence in electronics design and wireless communications to empower regional, national, and global ecosystems.',
    labs: ['VLSI & Embedded Systems Lab', 'Advanced Communication Lab', 'Analog & Digital Integrated Circuits Lab', 'Microprocessor & IoT Lab'],
    careers: ['Embedded Systems Designer', 'VLSI Engineer', 'Telecom Consultant', 'RF Design Engineer', 'Network Architect']
  },
  {
    id: 'robotics',
    name: 'Robotics & Automation',
    shortName: 'RA',
    description: 'A futuristic multidisciplinary branch integrating mechanical precision, electronics control, and intelligent machine software for autonomous applications.',
    intake: 60,
    accredited: false,
    vision: 'To nurture world-class automation experts capable of designing smart machines that drive efficiency and precision across industry 4.0.',
    labs: ['Industrial Robotics Lab', 'Automation & PLC Systems Lab', '3D Prototyping & Control Lab', 'Pneumatics & Hydraulics Lab'],
    careers: ['Robotics Design Engineer', 'Automation Lead', 'Controls Engineer', 'Mechatronics Architect', 'Process Engineer']
  },
  {
    id: 'me',
    name: 'Mechanical Engineering',
    shortName: 'ME',
    description: 'The foundation of physical engineering, training students in advanced CAD/CAM, thermal fluids, structural design, and precision digital manufacturing.',
    intake: 60,
    accredited: true,
    vision: 'To prepare mechanical engineers of exceptional caliber with robust hands-on skills, entrepreneurial drive, and an instinct for sustainable industrial innovation.',
    labs: ['CNC & Machining Center', 'Thermal Engineering Lab', 'Fluid Mechanics & Machinery Lab', 'CAD/CAM Simulation Center'],
    careers: ['Product Design Engineer', 'Aerospace Engineer', 'Automotive Specialist', 'HVAC Engineer', 'Manufacturing Consultant']
  },
  {
    id: 'eee',
    name: 'Electrical & Electronics Engineering',
    shortName: 'EEE',
    description: 'Powering the sustainable future with smart grids, power electronics, renewable green energy systems, and high-performance electric vehicle tech.',
    intake: 30,
    accredited: true,
    vision: 'To groom engineering leaders who create sustainable energy solutions and smart electrical frameworks that uplift modern civilization.',
    labs: ['Electrical Machines Laboratory', 'Power Electronics & Drives Lab', 'Control Systems Lab', 'Smart Micro-Grid Simulation Lab'],
    careers: ['Power Systems Engineer', 'Smart Grid Architect', 'EV Drivetrain Engineer', 'Renewable Energy Analyst']
  },
  {
    id: 'ce',
    name: 'Civil Engineering',
    shortName: 'CE',
    description: 'Designing resilient infrastructures. Focus areas include green buildings, eco-friendly concrete, smart urban planning, and structural geology.',
    intake: 30,
    accredited: false,
    vision: 'To build future builders who construct sustainable structures, balancing urban progress with absolute environmental preservation.',
    labs: ['Strength of Materials Lab', 'Concrete Technology Lab', 'Geotechnical Engineering Lab', 'Environmental Engineering Lab'],
    careers: ['Structural Consultant', 'Urban Planner', 'Geotechnical Consultant', 'Project Manager', 'Environmental Auditor']
  }
];

export const MILESTONES: Milestone[] = [
  {
    year: 2002,
    title: 'Inception of JEC',
    description: 'Founded by the Catholic Archdiocese of Trichur with 4 undergraduate streams to provide value-based technical education under the visionary leadership of Mar Jacob Thoomkuzhy.',
    type: 'foundation'
  },
  {
    year: 2008,
    title: 'First Placements & Graduation',
    description: 'Establishment of the dedicated Career Guidance and Placement Cell, resulting in record-breaking placements of our inaugural batch with international consulting and tech giants.',
    type: 'achievement'
  },
  {
    year: 2012,
    title: 'Decennial Milestone & Research Wing',
    description: 'Celebrated 10 successful years. Inauguration of the state-of-the-art Decennial Academic Block and the JEC-TATA Industrial Incubation and Innovation Center.',
    type: 'expansion'
  },
  {
    year: 2016,
    title: 'Premier NBA Accreditation',
    description: 'Awarded prestigious NBA (National Board of Accreditation) certification for our core branches (CSE, ECE, EEE, ME), demonstrating alignment with global technical standards.',
    type: 'achievement'
  },
  {
    year: 2020,
    title: 'Accreditation with NAAC "A" Grade',
    description: 'Achieved NAAC "A" Grade accreditation with an outstanding score, cementing JEC as a center of institutional quality and progressive learning.',
    type: 'achievement'
  },
  {
    year: 2024,
    title: 'Next-Gen Research Centers',
    description: 'Inauguration of the Center of Excellence in IoT, AI, and Autonomous Driving, sponsored in part by major technology grants.',
    type: 'expansion'
  },
  {
    year: 2027,
    title: 'The Silver Jubilee Celebration',
    description: 'Commemorating 25 years of educational distinction, transforming thousands of young minds into global technology leaders under the banner of "Leading Kindly Light."',
    type: 'foundation'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'img1',
    src: 'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/b01223cf-f9a9-41cb-9800-6ff6782c3043/1783697106129-cbb7420e/named.jpg',
    alt: 'Main Academic Building at JEC',
    category: 'Infrastructure',
    title: 'Modern Architecture',
    description: 'State-of-the-art academic blocks designed with sustainable green features and modern spacious lecture theatres.',
    size: 'large'
  },
  {
    id: 'img2',
    src: 'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/b01223cf-f9a9-41cb-9800-6ff6782c3043/1783697120633-a6d7a5f1/nnamed.jpg',
    alt: 'Jyothi Engineering College Campus Sign',
    category: 'Milestone',
    title: 'Silver Jubilee 2002 — 2027',
    description: 'Commemorative college landmark tracking our 25-year history of value-based tech instruction.',
    size: 'small'
  },
  {
    id: 'img3',
    src: 'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/b01223cf-f9a9-41cb-9800-6ff6782c3043/1783697133620-7d92ab1a/unned.jpg',
    alt: 'JEC Campus Entrance',
    category: 'Campus',
    title: 'Gate of Knowledge',
    description: 'The monumental entrance archway welcoming tech aspirants to a serene and empowering learning landscape.',
    size: 'wide'
  },
  {
    id: 'img4',
    src: 'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/b01223cf-f9a9-41cb-9800-6ff6782c3043/1783697145168-c6670bd8/unnmed.jpg',
    alt: 'Beautiful Campus Courtyard & Greenery',
    category: 'Academic',
    title: 'Lush Green Campus',
    description: 'A beautiful eco-friendly campus nestled in Cheruthuruthy, inspiring deep thinking and focused mental clarity.',
    size: 'tall'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do I apply for B.Tech admission at Jyothi Engineering College?',
    answer: 'Admissions are conducted through two pathways: Government Quota (based on KEAM rank and allotment) and Management Quota (applied directly via our website or campus office based on academic credentials).',
    category: 'Admission'
  },
  {
    question: 'Are there scholarship opportunities for top performers?',
    answer: 'Absolutely! JEC offers generous scholarships. Top KEAM rankers, students with excellent PCM percentages, and diocese candidates are eligible for tuition fee waivers of up to 100%. Check our scholarship estimator for custom details.',
    category: 'Scholarship'
  },
  {
    question: 'What is JEC’s accreditation status?',
    answer: 'JEC is accredited by NAAC with an "A" Grade. Five of our premier engineering departments (CSE, ECE, EEE, ME, CE) have been accredited by the National Board of Accreditation (NBA), validating our global technical standard.',
    category: 'Academic'
  },
  {
    question: 'What are the on-campus hostel facilities like?',
    answer: 'We provide separate premium hostels for boys and girls within the campus security perimeter. Features include high-speed Wi-Fi connectivity, athletic gyms, indoor games, study halls, and clean hygienic cafeteria dining.',
    category: 'Hostel'
  }
];
