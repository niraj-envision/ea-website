"use client"

import { useState, useEffect } from "react"
import { Navigation } from "./components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import {
  ArrowRight,
  Rocket,
  Sun,
  Moon,
  BarChart,
  Globe,
  Cpu,
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
  Smartphone,
  BookOpen,
} from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="min-h-screen flex flex-col futuristic-bg">
      <Navigation />
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-2 bg-primary text-primary-foreground rounded-full shadow-lg"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
      <main className="flex-grow">
        
        {/* Hero Section */}
        <motion.section
          id="home"
          className="relative h-screen flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>

          <div className="relative z-10 text-center">
            <motion.h1
              className="text-4xl md:text-8xl font-bold mb-4 text-foreground"
              initial={{ opacity: 0, y: -50, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              Envision Analytics
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-foreground/80"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Futuristic IT Solutions for a Better Tomorrow
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
              >
                Discover Our Services <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-primary/10 w-2 h-2 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          id="services"
          className="py-16 rounded-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 rounded-2xl">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
            <div
              className="
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 
                rounded-2xl
                bg-white/40 dark:bg-gray-800/40 
                backdrop-blur-md 
                shadow-[0_0_80px_rgba(8,_112,_184,_0.2)]
                dark:shadow-[0_20px_80px_rgba(255,255,255,0.1)]
                border border-gray-200/60 
                p-8
                transition-all duration-500 ease-out 
                transform-gpu 
                relative
                before:absolute 
                before:inset-0 
                before:bg-gradient-to-br 
                before:from-primary/20 
                before:to-secondary/20 
              "
            >
              {[
                {
                  title: "Government Solutions",
                  description: "Streamlining public services with cutting-edge technology",
                  icon: Globe,
                  content:
                    "Our e-governance solutions enhance efficiency and transparency in government operations. We develop secure digital platforms for citizen services, document management, and inter-departmental communication.",
                },
                {
                  title: "Education Technology",
                  description: "Empowering institutions with innovative learning solutions",
                  icon: BookOpen,
                  content:
                    "We create adaptive learning platforms, virtual classrooms, and student management systems. Our EdTech solutions incorporate AI for personalized learning experiences and data-driven insights for educators.",
                },
                {
                  title: "Startup Solutions",
                  description: "Powering the next generation of innovative businesses",
                  icon: Rocket,
                  content:
                    "From MVP development to scaling your platform, we provide end-to-end technical support for startups. Our expertise in cloud infrastructure and agile methodologies ensures rapid growth and flexibility.",
                },
                {
                  title: "AI Integration",
                  description: "Enhancing web applications with artificial intelligence",
                  icon: Cpu,
                  content:
                    "We integrate cutting-edge AI and machine learning capabilities into web applications. Our solutions include natural language processing, computer vision, and predictive analytics to drive intelligent decision-making.",
                },
                {
                  title: "Data Analytics",
                  description: "Unlocking insights from your data",
                  icon: BarChart,
                  content:
                    "Our data analytics services help businesses make data-driven decisions. We develop custom dashboards, implement big data solutions, and provide predictive modeling to uncover valuable insights from your data.",
                },
                {
                  title: "Mobile App Development",
                  description: "Creating powerful, user-friendly mobile experiences",
                  icon: Smartphone,
                  content:
                    "We design and develop cutting-edge mobile applications for iOS and Android platforms. Our team ensures seamless user experiences, robust functionality, and integration with backend services for optimal performance.",
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group transform transition-transform duration-300 ease-out hover:scale-[1.02]"
                >
                  <Card className="bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 h-full border-2 border-transparent hover:border-primary overflow-hidden group-hover:shadow-lg">
                    <CardHeader className="relative overflow-hidden pb-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <service.icon className="w-12 h-12 text-primary mb-4 relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
                      <CardTitle className="text-2xl relative z-10">{service.title}</CardTitle>
                      <CardDescription className="relative z-10">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-card-foreground/80">{service.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="py-16"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Envision Analytics</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg mb-4">
                  Envision Analytics Private Limited is a forward-thinking IT company dedicated to developing innovative
                  solutions for diverse sectors including government, education, and startups. Founded in 2015, we have
                  rapidly grown to become a leader in providing cutting-edge technology solutions.
                </p>
                <p className="text-lg mb-4">
                  Our team of over 100 experts specializes in creating advanced applications, integrating AI
                  technologies, and providing top-notch consultancy services to drive digital transformation and growth.
                  We pride ourselves on our ability to blend technical expertise with domain knowledge to deliver
                  tailored solutions that address our clients' unique challenges.
                </p>
                <p className="text-lg mb-4">
                  At Envision Analytics, we're committed to pushing the boundaries of what's possible in technology. Our
                  research and development team constantly explores emerging technologies to ensure we're always at the
                  forefront of innovation. This dedication to advancement allows us to provide our clients with
                  solutions that are not just current, but future-proof.
                </p>
              </motion.div>
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative w-full h-64 md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse-slow">
                      <Rocket size={64} className="text-primary" />
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-full h-full border-2 border-primary/20 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.1, 0.5, 0.1],
                        }}
                        transition={{
                          duration: 3,
                          delay: i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="py-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
            <div
              className="
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
                bg-white/40 dark:bg-gray-800/40
                backdrop-blur-md
                rounded-2xl
                shadow-[0_0_80px_rgba(8,_112,_184,_0.2)]
                dark:shadow-[0_20px_80px_rgba(255,255,255,0.1)]
                border border-gray-200/30
                p-8
                transition-all duration-500 ease-out
                transform-gpu
                relative
                before:absolute
                before:inset-0
                before:bg-gradient-to-br
                before:from-primary/20
                before:to-secondary/20
              "
            >
              {[
                {
                  title: "SkillConnect",
                  description: "On-demand skilled worker booking platform",
                  content:
                    "A mobile and web application that connects skilled workers with customers needing services like plumbing, electrical work, and construction. The platform uses AI for smart matching and includes real-time tracking and secure payment systems.",
                },
                {
                  title: "SmartGov Portal",
                  description: "Comprehensive e-governance solution",
                  content:
                    "An integrated platform for government services, offering citizens easy access to various departments, online form submissions, and status tracking. It includes a robust backend for inter-departmental communication and data management.",
                },
                {
                  title: "EduTech Pro",
                  description: "AI-powered learning management system",
                  content:
                    "A comprehensive education platform that combines virtual classrooms, adaptive learning paths, and advanced analytics. It uses AI to personalize learning experiences and provides educators with insights to improve teaching methods.",
                },
                {
                  title: "HealthAI",
                  description: "AI-driven health diagnostics tool",
                  content:
                    "An innovative application that uses machine learning algorithms to assist in early disease detection and health monitoring. It analyzes medical imaging and patient data to provide preliminary diagnoses and risk assessments.",
                },
                {
                  title: "SmartCity Dashboard",
                  description: "IoT-based city management system",
                  content:
                    "A centralized platform for city administrators to monitor and manage various urban systems including traffic, waste management, and energy consumption. It integrates data from IoT sensors to provide real-time insights and predictive maintenance.",
                },
                {
                  title: "FinTech Analyzer",
                  description: "AI-powered financial analysis tool",
                  content:
                    "A sophisticated platform for financial institutions that uses AI and machine learning to analyze market trends, assess risks, and provide investment insights. It includes natural language processing to analyze financial news and reports.",
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group transform transition-transform duration-300 ease-out hover:scale-[1.02]"
                >
                  <Card className="bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 h-full border-2 border-transparent hover:border-primary overflow-hidden group-hover:shadow-lg">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-card-foreground/80">{project.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          id="team"
          className="py-16"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Team</h2>
            <div
              className="
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
                bg-white/40 dark:bg-gray-800/40
                backdrop-blur-md
                rounded-2xl
                shadow-[0_0_80px_rgba(8,_112,_184,_0.2)]
                dark:shadow-[0_20px_80px_rgba(255,255,255,0.1)]
                border border-gray-200/30
                p-8
                transition-all duration-500 ease-out
                transform-gpu
                relative
                before:absolute
                before:inset-0
                before:bg-gradient-to-br
                before:from-primary/20
                before:to-secondary/20
                before:rounded-2xl
                before:-z-10
              "
            >
              {[
                {
                  name: "Niraj Dahal ",
                  role: "CEO & Founder",
                  avatar: "/nkd.png?height=400&width=400",
                  bio: "With over 8 years of experience in Government Services, IT & consulting, Niraj leads our vision for innovative solutions.",
                },
                {
                  name: "Shushant Sigdel",
                  role: "Founder/Engineer",
                  avatar: "/sss.png?height=400&width=400",
                  bio: "Over 12+ years of experiance in skill training sector. Worked with various government entities and donor funded project.",
                },
                {
                  name: "Saroj Rajbhandari",
                  role: "Senior Software Developer",
                  avatar: "/srb.png?height=400&width=400",
                  bio: "Saroj has more than 15 years of experiance in developing softwares for private and government institutions. He leads the technical team in EA.",
                },
                {
                  name: "Jwala Nepal",
                  role: "BDS",
                  avatar: "/jn.png?height=400&width=400",
                  bio: "Jwala leads our business development. She overseas our business development and ensures our solutions provide exceptional user experiences across all platforms.",
                },
                {
                  name: "Ishwor Thapa",
                  role: "Backend Developer",
                  avatar: "/IT.png?height=400&width=400",
                  bio: "Ishwor has more than 11 years of experiance in software development field. He has experiance in managing complex IT project in Neapl & india and specializes in designing scalable solutions for government and enterprise clients.",
                },
                {
                  name: "Shishir Parajuli",
                  role: "Frontend Developer",
                  avatar: "/sb.png?height=400&width=400",
                  bio: "Shishir brings years of experience in UI/UX design in complex IT implementations.",
                },
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group transform transition-transform duration-300 ease-out hover:scale-[1.02]"
                >
                  <Card className="bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 h-full border-2 border-transparent overflow-hidden group-hover:shadow-lg hover:border-primary">
                    <CardHeader className="text-center">
                      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                        <Image
                          src={member.avatar || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-110"
                        />
                      </div>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-card-foreground/80">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            {/* Centered container with max-width */}
            <div className="max-w-3xl mx-auto">
              <div
                className="
                  lg:grid-cols-3 gap-8
                  bg-white/40 dark:bg-gray-800/40
                  backdrop-blur-md
                  rounded-2xl
                  shadow-[0_0_80px_rgba(8,_112,_184,_0.2)]
                  dark:shadow-[0_20px_80px_rgba(255,255,255,0.1)]
                  border border-gray-200/30
                  p-8
                  transition-all duration-500 ease-out
                  transform-gpu
                  relative
                  before:absolute
                  before:inset-0
                  before:bg-gradient-to-br
                  before:from-primary/20
                  before:to-secondary/20
                  before:rounded-2xl
                  before:-z-10
                "
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl -z-10"></div>

                <Card className="bg-card/50 backdrop-blur-sm ">
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-foreground ">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full p-2 border rounded bg-stone-100 dark:bg-teal-950 text-foreground"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-foreground">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full p-2 border rounded bg-stone-100 dark:bg-teal-950 text-foreground"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-foreground">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="w-full p-2 border rounded bg-stone-100 dark:bg-teal-950 text-foreground"
                          required
                        ></textarea>
                      </div>
                      <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        className="relative py-12 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        viewport={{ once: true }}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r 
          from-[rgba(250,204,21,0.2)] 
          via-[rgba(74,222,128,0.2)] 
          to-[rgba(250,204,21,0.3)] 
          animate-gradient-x"
        ></div>
  
        {/* Pattern overlay */}
        <div className="absolute inset-2px opacity-10">
          <div className="absolute inset-0 pattern-grid animate-pattern"></div>
        </div>

        {/* Content container with glass effect */}
        <div className="relative container mx-auto px-4 z-10  text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sign%20Stamp%20Logo%20(1)-8diKk2DAhelwpotPXXziarnHlD2vy4.png"
                  alt="Envision Analytics Logo"
                  width={200}
                  height={50}
                  className="filter drop-shadow-[0_4px_8px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_8px_16px_rgba(255,255,255,0.6)] transition-all duration-300"
                />
              </div>
              <p className="transition-all duration-300 text-gray-700 dark:text-gray-200 text-sm">
                Futuristic IT Solutions for a Better Tomorrow
              </p>
              <div className="flex space-x-4">
                {/* Social icons with hover effects */}
                <a href="#" className="hover:scale-110 hover:text-yellow-300 text-gray-700 dark:text-gray-200">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:scale-110 hover:text-yellow-300 text-gray-700 dark:text-gray-200">
                  <Twitter size={20} />
                </a>
                <a href="#" className="hover:scale-110 hover:text-yellow-300 text-gray-700 dark:text-gray-200">
                  <LinkedIn size={20} />
                </a>
                <a href="#" className="hover:scale-110 hover:text-yellow-300 text-gray-700 dark:text-gray-200">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="">
              <h4 className="text-lg font-semibold mb-4 transition-all duration-300 text-gray-700 dark:text-gray-200">Quick Links</h4>
              <nav className="flex flex-col space-y-2 transition-all duration-300 text-gray-700 dark:text-gray-200">
                {['Home', 'Services', 'About', 'Projects', 'Team', 'Contact'].map((link) => (
                  <a 
                    key={link} 
                    href={`#${link.toLowerCase()}`} 
                    className="hover:text-yellow-300 hover:translate-x-2 transition-all duration-300"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="">
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Contact Us</h4>
              <address className="not-italic space-y-2">
                <p className="hover:translate-x-2 transition-all duration-300 text-gray-700 dark:text-gray-200">
                  Tokha-10
                </p>
                <p className="hover:translate-x-2 transition-all duration-300 text-gray-700 dark:text-gray-200">
                  Tokha Municipality 44600
                </p>
                <p className="hover:translate-x-2 transition-all duration-300 text-gray-700 dark:text-gray-200">
                  Email: info@envisionanalytics.com
                </p>
                <p className="hover:translate-x-2 transition-all duration-300 text-gray-700 dark:text-gray-200">
                  Phone: +977 985-1111-527
                </p>
              </address>
            </div>


            {/* Newsletter */}
            <div className="">
              <h4 className="text-lg transition-all duration-300 text-gray-700 dark:text-gray-200 font-semibold mb-4">Newsletter</h4>
              <p className="transition-all duration-300 text-gray-700 dark:text-gray-200 mb-2">Stay updated with our latest news and offers.</p>
              <form className="flex group">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="p-2 rounded-l-md w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all duration-300" 
                />
                <button
                  type="submit"
                  className="bg-yellow-400 text-gray-800 p-2 rounded-r-md hover:bg-yellow-300 transition-all duration-300 group-hover:shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-white/20 text-center backdrop-blur-sm">
            <p className="hover:text-yellow-300 transition-colors transition-all duration-300 text-gray-700 dark:text-gray-200">
              &copy; 2025 Envision Analytics Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
