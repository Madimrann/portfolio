
import { FaReact, FaNodeJs, FaJava, FaDocker, FaAndroid, FaGitAlt, FaWindows } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiDotnet, SiPhp, SiMysql, SiGooglecloud, SiWordpress } from 'react-icons/si';

export const content = {
  hero: {
    name: "Madimran",
    role: "Full Stack Developer",
    tagline: "Passionate about building mobile and web applications.",
    cta: "View My Work",
    socials: {
      github: "https://github.com/Madimrann",
      linkedin: "https://www.linkedin.com/in/madimran/",
      email: "mailto:adibrohim01@gmail.com",
      phone: "+6019-4272307"
    }
  },
  about: {
    title: "About Me",
    description: "I am a recent Software Engineering graduate passionate about problem-solving and coding. My academic experience is complemented by hands-on projects where I developed practical applications and contributed to team successes. I aim to find a junior role to further enhance my skills and add value to innovative software solutions.",
    stats: [
      { label: "CGPA (Degree)", value: "3.85" },
      { label: "CGPA (Diploma)", value: "3.88" },
      { label: "Projects", value: "10+" }
    ]
  },
  skills: [
    { name: "React Native", icon: FaReact, color: "#61DAFB" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: ".NET", icon: SiDotnet, color: "#512BD4" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "SQL", icon: SiMysql, color: "#4479A1" },
    { name: "Firebase", icon: SiGooglecloud, color: "#FFCA28" },
    { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" }
  ],
  experience: [
    {
      role: "Business Analyst",
      company: "ZEN Computer Systems Sdn Bhd",
      location: "Cyberjaya, Malaysia",
      period: "06/2025 - 09/2025",
      type: "Internship",
      details: [
        "Degree Internship for 3 months.",
        "Prepared and maintained project documentation including Business Requirements Specification (BRS) and Software Requirements Specification (SRS).",
        "Assisted in requirement gathering and clarification with technical stakeholders."
      ]
    },
    {
      role: "Analyst / Programmer",
      company: "MODENAS",
      location: "Kedah, Malaysia",
      period: "09/2021 - 02/2022",
      type: "Internship",
      details: [
        "Diploma Internship for 6 months.",
        "Configured and managed an internally hosted IT helpdesk ticketing system.",
        "Assisted in maintaining the internal IT website using WordPress.",
        "Updated IT asset records for hardware and software inventory."
      ]
    }
  ],
  education: [
    {
      institution: "Universiti Tenaga Nasional (UNITEN)",
      degree: "Bachelor of Computer Science (Software Engineering) (Hons)",
      period: "01/2023 - 01/2026",
      cgpa: "3.85 / 4.0",
      location: "Selangor, Malaysia"
    },
    {
      institution: "Politeknik Ungku Omar (PUO)",
      degree: "Diploma in Information Technology (Digital Technology)",
      period: "06/2019 - 02/2022",
      cgpa: "3.88 / 4.0",
      location: "Kedah, Malaysia"
    }
  ],
  projects: [
    {
      title: "Style It - Personalized Wardrobe Planner",
      description: "A dual-platform (Web & Mobile) fashion application featuring a custom outfit creator and wardrobe planner. developing a web-based/mobile application for organizing a digital wardrobe and generating outfit suggestions. Integrates generative language features and Google Vision API for clothing image recognition.",
      tech: ["React Native", "React", "Node.js", "GenAI", "Google Vision API"],
      links: { github: "https://github.com/Madimrann/Style-It", demo: "#" },
      featured: true
    },
    {
      title: "ProofPay",
      description: "Fintech application designed for receipt verification and transaction management. Implements a secure and clean UI for financial tracking.",
      tech: ["React Native", "TypeScript", "Firebase"],
      links: { github: "https://github.com/Madimrann/ProofPay", demo: "#" },
      featured: true
    },
    {
      title: "CrowdCheck",
      description: "Real-time crowd monitoring app using Google Places API to show venue occupancy. Features dynamic map markers and search filtering.",
      tech: ["React Native", "Google Maps API", "Node.js"],
      links: { github: "https://github.com/Madimrann/crowdcheck-native", demo: "#" },
      featured: true
    },
    {
      title: "RoomSync",
      description: "A room management or synchronization application (TypeScript).",
      tech: ["TypeScript"],
      links: { github: "https://github.com/Madimrann/RoomSync", demo: "#" },
      featured: false
    }
  ]
};
