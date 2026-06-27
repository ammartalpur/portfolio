import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Socialogram ",
    description:
      "Socialogram, a full-stack social media web application built using modern web technologies with a strong focus on performance, scalability, and clean UI by using the power of Next.Js.",
    image: "/projects/project1.png",
    tags: ["Next.js", "TailwindCSS", "Supabase", "Zod/Cloudinary"],
    demoUrl: "https://next-social-gamma.vercel.app/",
    githubUrl: "https://github.com/ammartalpur/next-social",
  },
  {
    id: 2,
    title: "Roozgar Job Portal",
    description:
      "Roozgar is a modern job portal built with React.js, designed to seamlessly connect job seekers with recruiters.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "Supabase", "Next.js"],
    demoUrl: "https://roozgar-jobportal.vercel.app/",
    githubUrl: "https://github.com/ammartalpur/roozgar-jobportal",
  },
  {
    id: 3,
    title: "Digital Voting System",
    description:
      "Ditigal Voting System created in C++ with web based GUI and Facial Veification.",
    image: "/projects/project3.png",
    tags: ["Javascript", "HTML/CSS/EJS", "C++"],
    demoUrl: "#",
    githubUrl: "https://github.com/ammartalpur/digital_voting_system",
  },
  {
    id: 4,
    title: "Sportz - Websocket Project",
    description:
      "Sportz is a modern real-time sports tracking platform built to manage matches, live commentary, and instant updates for connected clients using WebSockets..",
    image: "/projects/project4.PNG",
    tags: [
      "Next.js",
      "Node(Express.js)",
      "PostgreSQL",
      "Drizzle ORM",
      "WebSockets",
      "Zod",
      "Arcjet",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/ammartalpur/sportz-websockets",
  },
  {
    id: 5,
    title: "Software House OS",
    description:
      "A comprehensive, role-based Project and Task Management operating system designed specifically for software development agencies. This system serves as a custom-tailored alternative to Jira or Trello, enforcing a strict, professional pipeline from project creation to Quality Assurance (QA) delivery.",
    image: "/projects/project5.PNG",
    tags: ["Next.js 15", " Tailwind CSS", "PostgreSQL", "Prisma", "Clerk"],
    demoUrl: "#",
    githubUrl: "https://github.com/ammartalpur/software-house-os",
  },
  {
    id: 6,
    title: "ProKitchen POS System",
    description:
      "A high-performance, real-time Point of Sale (POS) and Kitchen Display System (KDS) designed for modern restaurant environments. Built with a focus on operational speed, data integrity, and real-time synchronization between the front-of-house and back-of-house.",
    image: "/projects/project6PNG",
    tags: [
      "Next.js 15",
      "Tailwind CSS",
      "PostgreSQL",
      "Websockets",
      "Clerk",
      "Cloudinary",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/ammartalpur/point-of-sale",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ammartalpur"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
