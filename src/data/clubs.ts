import type { Club } from "../utils/types";

const clubs: Club[] = [
  { 
    id: 'seclub', 
    name: 'Software Engineering Club', 
    image: '/clubimages/seclub.jpeg',
    summary: 'The Software Engineering Club focuses on building real-world problem-solving skills through coding, collaboration, and innovation.', 
    description: 'The Software Engineering Club is dedicated to empowering students with practical programming experience and software development best practices. Members work on projects that solve campus and community problems, learn about modern development tools, and host coding challenges and hackathons. The club also encourages teamwork, creativity, and continuous learning to prepare members for careers in tech and entrepreneurship.',
    staff: [
      {
        image: "/images/brato.jpg",
        name: "Eng. Abdulai Brato Kamara",
        position: "Head of Club"
      },
      {
        image: "/images/hassanatu.jpg",
        name: "Assanatu Barrie",
        position: "Club Coordinator"
      },
      {
        image: "/images/abm.jpg",
        name: "Abubakarr Marah",
        position: "Club Coordinator"
      },
    ] },
  { 
    id: 'csclub', 
    name: 'Cyber Security Club', 
    image: '/clubimages/csclub.jpeg',
    summary: 'The CyberSecurity Club promotes awareness and expertise in securing digital systems and data.', 
    description: 'This club equips students with the knowledge and skills needed to protect computer systems and networks from threats. Activities include ethical hacking workshops, capture-the-flag (CTF) challenges, and discussions on cybercrime, privacy, and digital ethics. The CyberSecurity Club fosters a culture of vigilance and integrity among future security professionals.',
    staff: [
      {
        image: "/images/ds.jpeg",
        name: "Mr. Daniel Samura",
        position: "Head of Club"
      },
      {
        image: "/images/fenfaquee.jpg",
        name: "Osman Fenfaquee",
        position: "Club Coordinator"
      },
      {
        image: "/images/mh.jpg",
        name: "Mohamed Sillah",
        position: "Club Coordinator"
      },
      {
        image: "/images/foday.jpg",
        name: "Foday Martin Conteh",
        position: "Club Coordinator"
      },
    ] },
  { 
    id: 'mmclub', 
    name: 'Multimedia Club', 
    image: '/clubimages/mmclub.jpeg',
    summary: 'The Multimedia Club is where creativity meets technology. Combining design, video, and digital storytelling.', 
    description: 'Focused on visual communication and content creation, the Multimedia Club provides a space for students interested in graphic design, photography, video production, and digital media. Members collaborate on departmental media projects, produce event coverage, and explore creative tools like Adobe Creative Suite and Canva. It’s the creative heartbeat of the department.',
    staff: [
      {
        image: "/images/iron.png",
        name: "Mr. Sorie Ironn-Sky Turay",
        position: "Head of Club"
      },
      {
        image: "/images/kondi.jpg",
        name: "Andrew Kondi Kargbo",
        position: "Club Coordinator"
      },
      {
        image: "/images/bash.jpg",
        name: "Abu Bashiru Sesay",
        position: "Club Coordinator"
      },
    ] },
  { 
    id: 'dsclub', 
    name: 'Data Science Club', 
    image: '/clubimages/dsclub.jpeg',
    summary: 'The Data Science Club explores the power of data to solve real-world problems and drive decision-making.', 
    description: 'Students in the Data Science Club dive into topics such as data analysis, visualization, and machine learning. Through workshops, projects, and competitions, members learn to extract insights from data. The club encourages analytical thinking and collaboration to address societal and academic challenges through data-driven solutions.',
    staff: [
      {
        image: "/images/hod.jpg",
        name: "Mr. Ibrahim Kalokoh",
        position: "Head of Club"
      },
      {
        image: "/images/rahimj.jpg",
        name: "Abdulrahim Jalloh",
        position: "Club Coordinator"
      },
      {
        image: "/images/aliya.jpg",
        name: "Aliya Conteh",
        position: "Club Coordinator"
      },
    ] },
  { 
    id: 'aiclub', 
    name: 'Artificial Intelligence Club', 
    image: '/clubimages/aiclub.jpeg',
    summary: 'The AI Club explores intelligent systems and the technologies shaping the future of computing.', 
    description: 'The AI Club brings together enthusiasts passionate about machine learning, robotics, and intelligent automation. Members engage in AI projects, research, and tutorials, focusing on deep learning, natural language processing, and computer vision. The club also hosts talks and collaborations that inspire innovation and ethical AI development.',
    staff: [
      {
        image: "/images/bah.jpg",
        name: "Eng. Amadu Wurie Bah",
        position: "Head of Club"
      },
      {
        image: "/images/kia.jpg",
        name: "Kai Foday",
        position: "Club Coordinator"
      },
      {
        image: "/images/sawaneh.jpg",
        name: "Abubakarr Sawaneh",
        position: "Club Coordinator"
      },
    ] },
  { 
    id: 'witclub', 
    name: 'Women in Tech Club', 
    image: '/clubimages/witclub.jpeg',
    summary: 'Women in Tech empowers female students to thrive and lead in the world of technology.', 
    description: 'WiT provides a supportive community for women in the Computer Science Department, promoting diversity, mentorship, and career growth. The club organizes workshops, talks, and networking sessions to inspire confidence and skill development among its members. It stands for inclusion, empowerment, and breaking barriers in technology.',
    staff: [
      {
        image: "/images/kissimi.jpeg",
        name: "Mr. Kissimi Kayleemasa Kamara",
        position: "Head of Club"
      },
      {
        image: "/images/samuella.jpg",
        name: "Samuella E. Moiwo",
        position: "Club Coordinator"
      },
      {
        image: "/images/sv.jpg",
        name: "Sylvia Koroma",
        position: "Club Coordinator"
      },
    ] },
]


export default clubs;