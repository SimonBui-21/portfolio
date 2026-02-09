export interface ProjectData {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export const projectsData: ProjectData[] = [
  {
    title: "Voting Assistance AI Chatbot for Greene County",
    description:
      "AI-powered chatbot using a Retrieval-Augmented Generation (RAG) pipeline to help users navigate voting information, polling locations, and election FAQs.",
    tech: [
      "Python",
      "FastAPI",
      "RAG",
      "Vector Database",
      "Prompt Engineering",
    ],
  },
  {
    title: "Personal AI Study Assistant",
    description:
      "Local RAG-based study assistant that indexes notes and generates summaries and practice questions using semantic search and LLMs.",
    tech: [
      "FastAPI",
      "ChromaDB",
      "SentenceTransformers",
      "LLMs",
      "HTML/JS",
    ],
    link: "https://github.com/SimonBui-21/Simon-personal-AI-assisstant",
  },
  {
    title: "Student Residence Life Management System",
    description:
      "Production web application supporting 5,000+ students. Built RESTful APIs and frontend features in an Agile team environment.",
    tech: ["Django Rest Framework", "HTML", "CSS", "jQuery", "Pytest"],
  },
  {
    title: "Enterprise Web Application (Mekong Solutions)",
    description:
      "Full-stack enterprise web application developed in a professional team environment, focusing on API design, UI implementation, and database optimization.",
    tech: ["Java", "Spring MVC", "SQL", "Unit Testing"],
  },
];
