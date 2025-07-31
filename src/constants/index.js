// index.js
export const servicesData = [
	{
		title: "Full Stack Development",
		description:
			"Building modern web applications with clean, efficient code using the MERN stack. I create scalable solutions with secure authentication, real-time features, and responsive design.",
		items: [
			{
				title: "Backend Development",
				description: "(Spring Boot, Node.js, Express.js, REST APIs)",
			},
			{
				title: "Frontend Development",
				description: "(React.js, JavaScript, HTML/CSS, Tailwind CSS)",
			},
			{
				title: "Database Management",
				description: "(MongoDB, NoSQL Design)",
			},
		],
	},
	{
		title: "Real-time Applications",
		description:
			"Creating interactive web applications with real-time communication features. Specializing in chat applications, live updates, and seamless user experiences.",
		items: [
			{
				title: "WebSocket Integration",
				description: "(Socket.IO, Real-time Messaging)",
			},
			{
				title: "Authentication Systems",
				description: "(JWT, Secure User Management)",
			},
			{
				title: "Cloud Integration",
				description: "(Cloudinary, File Upload Systems)",
			},
		],
	},
	{
		title: "Deployment & Tools",
		description:
			"Deploying applications to production with modern deployment platforms and maintaining clean, version-controlled codebases.",
		items: [
			{
				title: "Version Control",
				description: "(Git/GitHub, Code Reviews)",
			},
			{
				title: "Deployment Platforms",
				description: "(Vercel, Railway)",
			},
			{
				title: "Development Tools",
				description: "(VS Code, JetBrains Toolbox)",
			},
		],
	},
	{
		title: "Leadership & Mentoring",
		description:
			"Leading technical teams and mentoring junior developers. Organizing workshops, hackathons, and managing agile development processes.",
		items: [
			{
				title: "Team Management",
				description: "(Technical Leadership, Core Team Coordination)",
			},
			{
				title: "Workshop Delivery",
				description: "(Programming Workshops, Problem-solving Sessions)",
			},
			{
				title: "Agile Development",
				description: "(Code Reviews, Team Meetings, Project Management)",
			},
		],
	},
];

export const projects = [
	{
		id: 1,
		name: "QuickChat - Real-time Chat Application",
		description:
			"A full-stack MERN application with real-time messaging, typing indicators, online status updates, and secure JWT authentication.",
		href: "https://chat-app-five-ebon.vercel.app/", // Add your actual project link here
		image: "/assets/img.jpg",
		bgImage: "/assets/img_1.jpg",
		frameworks: [
			{ id: 1, name: "React" },
			{ id: 2, name: "Express.js" },
			{ id: 3, name: "Socket.IO" },
			{ id: 4, name: "MongoDB" },
			{ id: 5, name: "Cloudinary" },
		],
	},
	{
		id: 2,
		name: "Personal Portfolio",
		description:
			"A responsive portfolio website built with Spring Boot and Thymeleaf, featuring dynamic content rendering and interactive forms.",
		href: "https://github.com/ayushchauhan7/portfolio", // Add your actual project link here
		image: "/assets/img_2.png",
		bgImage: "/assets/img_2.jpg",
		frameworks: [
			{ id: 1, name: "Spring Boot" },
			{ id: 2, name: "Thymeleaf" },
			{ id: 3, name: "JavaScript" },
			{ id: 4, name: "HTML/CSS" },
		],
	},
	{
		id: 3,
		name: "Spotify Clone",
		description:
			"A responsive music streaming web app with playlist management, music controls, and dynamic UI built with React and Tailwind CSS.",
		href: "https://spotify-clone-rho-hazel.vercel.app/", // Add your actual project link here
		image: "/assets/img_3.png",
		bgImage: "/assets/img_3.png",
		frameworks: [
			{ id: 1, name: "React.js" },
			{ id: 2, name: "Tailwind CSS" },
			{ id: 3, name: "JavaScript" },
			{ id: 4, name: "HTML/CSS" },
		],
	},
];

export const socials = [
	{ name: "Instagram", href: "https://www.instagram.com/_ayush___chauhan__/" },
	{ name: "LinkedIn", href: "https://linkedin.com/in/ayushchauhan7" },
	{ name: "GitHub", href: "https://github.com/ayushchauhan7" },
	{ name: "Email", href: "mailto:chauhan0007ayush@gmail.com" },
];
