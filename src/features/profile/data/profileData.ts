///////////////// Mock Base Data ////////////

import type { aboutInterface, goalsInterface, overviewInterface, postsInterface, ProfileBaseDataInterface, projectsInterface } from "../types/profileTypes";

export const ProfileBaseData:ProfileBaseDataInterface = {

id:1,
name:'Mohamed Farouk',
userName:'Moo Roka',
avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&utm_source=chatgpt.com',
coverImage:'https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1200&utm_source=chatgpt.com',
bio:'Front-end Developer | Biotechnologiest student at Agricultural Saba Basha',
jobTitle:'Student',
connectionsCount:100
}

///////////////// mock overview /////////////

export const mockOverview:overviewInterface = {

description:'Passionate Front-End Developer and Biotechnology student. Interested in building modern and interactive web experiences.',
location:'Alexandria, Egypt',
education:'Agricultural Saba Basha',
jobTitle:'student',
skill:['HTML','CSS','Javascript','TypeScript','React','Bootstrap'], 
activity:'Working on a new Front-End project.'

}

///////////// mock about ////////////////////

export const mockAbout:aboutInterface = {

    fullName:'Mohamed Farouk',
    userName:'@mohamed',
    emailAddress:'mohamed@example.com',
    location:'Alexandria, Egypt',
    phone:'+20 100 000 0000',
    date_of_birth:'3 March 2006',
jobTitle:'Front-End Developer',
department:'Development',
education:'University Student',
experienceLevel:'Beginner'

}

////////////// mock posts ////////////

export const mockPosts:postsInterface[] = [{
        img:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200',
    content:'Just finished working on my latest Front-End project!  Learning something new every day makes the journey exciting.'
},{
    content:'Just finished working on a new frontend project! '
}]


//////////// mock projects //////////

export const mockPortfolio:projectsInterface[] = [{
    img:"https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800",
    category:'Design',
    calendar:2026,
    title:'Creative Portfolio Design',
    description:'A creative project showcasing modern visual design and unique user experiences.',
    tools:['figma','UI/UX'],
    link:'https://www.facebook.com'
}
,{
  img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  category: "Web Development",
  calendar: 2025,
  title: "Modern E-Commerce Website",
  description: "A responsive online shopping platform with a clean interface and smooth user experience.",
  tools:['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  link: "https://github.com"
}

]


///////// mock goals //////////

export const mockGoals: goalsInterface[] = [
  {
    id: 1,
    title: "Become a Professional Front-End Developer",
    description:
      "Build strong frontend skills and become capable of creating professional, scalable web applications.",
    category: "professional",
    targetDate: "2027",
  },
  {
    id: 2,
    title: "Master React & TypeScript",
    description:
      "Gain advanced knowledge of React, TypeScript, and modern frontend development tools.",
    category: "professional",
    targetDate: "2027",
  },
  {
    id: 3,
    title: "Graduate from University",
    description:
      "Successfully complete my university studies and achieve my academic goals.",
    category: "education",
    targetDate: "2028",
  },
  {
    id: 4,
    title: "Build a Strong Professional Portfolio",
    description:
      "Create meaningful projects that demonstrate my skills, creativity, and experience.",
    category: "professional",
    targetDate: "2027",
  },
];