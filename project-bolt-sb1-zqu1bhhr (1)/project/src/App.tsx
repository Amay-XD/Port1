import React, { useEffect, useState } from 'react';
import { Terminal, Download, Mail, Linkedin, Github, Twitter, ExternalLink } from 'lucide-react';
import MatrixRain from './components/MatrixRain';
import GlitchText from './components/GlitchText';
import TypewriterText from './components/TypewriterText';
import TimelineItem from './components/TimelineItem';
import CertificationCard from './components/CertificationCard';
import SkillTag from './components/SkillTag';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'home';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono relative overflow-hidden">
      <MatrixRain />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-sm border-b border-cyan-500/30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Terminal className="h-6 w-6 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-bold">AJ_</span>
            </div>
            
            <div className="hidden md:flex space-x-6">
              {['home', 'about', 'education', 'certifications', 'experience', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm uppercase tracking-wider hover:text-cyan-400 transition-colors ${
                    activeSection === section ? 'text-cyan-400 border-b border-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            
            <button 
              className="md:hidden text-cyan-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3 bg-gray-800 bg-opacity-95">
            {['home', 'about', 'education', 'certifications', 'experience', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm uppercase tracking-wider py-2 hover:text-cyan-400 transition-colors ${
                  activeSection === section ? 'text-cyan-400 border-l-2 pl-2 border-cyan-400' : 'text-gray-300'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="mb-6">
            <GlitchText text="AMAY JOGDAND" className="text-5xl md:text-7xl font-bold mb-4" />
            <div className="h-12">
              <TypewriterText 
                text="Aspiring Cybersecurity Professional" 
                className="text-xl md:text-2xl text-cyan-400"
              />
            </div>
          </div>
          
          <div className="mt-16 inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 blur-xl opacity-30 animate-pulse"></div>
            <div className="relative bg-gray-800 bg-opacity-80 backdrop-blur-sm p-6 border border-gray-700 rounded-lg">
              <Terminal className="w-6 h-6 text-cyan-400 mb-3" />
              <div className="font-mono text-sm md:text-base">
                <span className="text-green-400">root@amay:~$</span> <span className="text-purple-400">whoami</span><br />
                <span className="text-gray-300">Cybersecurity enthusiast with a passion for ethical hacking and network security.</span><br /><br />
                <span className="text-green-400">root@amay:~$</span> <span className="text-purple-400">cat skills.txt</span><br />
                <span className="text-gray-300">Python, INFOSEC, Cyber Defense, NIST CSF, IAM Design</span><br /><br />
                <span className="text-green-400">root@amay:~$</span> <span className="text-purple-400">./start_journey.sh</span><br />
                <span className="text-cyan-400">Initializing cybersecurity career path...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-800 bg-opacity-50 relative">
        <div className="container mx-auto px-4 z-10 relative">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="border-b-2 border-purple-500 pb-2">ABOUT ME</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900 bg-opacity-70 p-8 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Cybersecurity Enthusiast | Building the Future of Digital Security</h3>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  At 17, I've embarked on an exciting journey into the dynamic world of cybersecurity. Driven by curiosity and a passion for solving complex challenges, I'm dedicated to learning how to protect digital spaces and outsmart ever-evolving cyber threats.
                </p>
                
                <p>
                  I'm diving deep into ethical hacking, network security, and risk assessment, combining hands-on practice with a thirst for knowledge. While my journey is just beginning, my vision is clear: to become a proactive defender in the fight against cybercrime.
                </p>
                
                <p>
                  Let's connect to collaborate, share insights, and shape a safer digital future together!
                </p>
              </div>
              
              <div className="mt-8 flex justify-center space-x-6">
                <div className="group">
                  <div className="w-20 h-20 rounded-full bg-gray-800 border-2 border-purple-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
                    <span className="text-3xl text-purple-400">17</span>
                  </div>
                  <p className="text-center mt-2 text-gray-400">Age</p>
                </div>
                
                <div className="group">
                  <div className="w-20 h-20 rounded-full bg-gray-800 border-2 border-cyan-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300">
                    <span className="text-3xl text-cyan-400">2+</span>
                  </div>
                  <p className="text-center mt-2 text-gray-400">Certifications</p>
                </div>
                
                <div className="group">
                  <div className="w-20 h-20 rounded-full bg-gray-800 border-2 border-green-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-green-500/20 transition-all duration-300">
                    <span className="text-3xl text-green-400">∞</span>
                  </div>
                  <p className="text-center mt-2 text-gray-400">Passion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="container mx-auto px-4 z-10 relative">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="border-b-2 border-purple-500 pb-2">EDUCATION</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <TimelineItem 
              year="2024 - 2026"
              title="HSC"
              organization="Balbhim Arts, Science and Commerce College"
              description="Higher Secondary Education focusing on Science and Computer Applications."
              image="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            />
            
            <TimelineItem 
              year="2023 - 2024"
              title="SSC"
              organization="Sharda Vidya Mandir"
              description="Secondary School Certificate with Grade: 94.60%"
              highlight="Grade: 94.60%"
              image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-800 bg-opacity-50 relative">
        <div className="container mx-auto px-4 z-10 relative">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="border-b-2 border-cyan-500 pb-2">CERTIFICATIONS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CertificationCard 
              title="Foundations of Cybersecurity"
              issuer="Google"
              date="February 2025"
              description="Comprehensive introduction to cybersecurity principles, threats, and defense mechanisms. Verify this certificate using the link below."
              color="cyan"
              pdfUrl="https://www.coursera.org/account/accomplishments/verify/MSA18TNAQ5GE"
              logo="https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_dark_color_272x92dp.png"
            />
            
            <CertificationCard 
              title="Python for Cybersecurity Professionals"
              issuer="Cybrary"
              date="February 2025"
              description="Applied Python programming for security automation, analysis, and tool development. Verify this certificate using the link below."
              color="purple"
              pdfUrl="https://app.cybrary.it/profile/Amay_17?tab=cert-completion&cert=CC-f89c4a13-4a04-4f89-abc5-98fe413da5fa&utm_source=chatgpt.com"
              logo="https://www.cybrary.it/wp-content/uploads/2020/05/cybrary-logo-white.png"
            />
            
            <CertificationCard 
              title="Cybersecurity Analyst Job Simulation"
              issuer="Tata Group"
              date="March 2025"
              description="Hands-on simulation of cybersecurity analyst responsibilities and challenges. Verify this certificate using the link below."
              color="green"
              pdfUrl="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_kQASgmTxg3rk6h7aG_1741004193678_completion_certificate.pdf"
              logo="https://www.tata.com/content/dam/tata/images/home-page/desktop/logo_card_desktop_362x362.jpg"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-4 z-10 relative">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="border-b-2 border-green-500 pb-2">EXPERIENCE</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <TimelineItem 
              year="March 2025"
              title="Cybersecurity Analyst Job Simulation"
              organization="Tata Group"
              description="Participated in a comprehensive job simulation focusing on Identity and Access Management (IAM) design and implementation. Solved real-world security challenges and developed practical solutions."
              image="https://www.tata.com/content/dam/tata/images/home-page/desktop/logo_card_desktop_362x362.jpg"
            />
            
            <TimelineItem 
              year="Ongoing"
              title="Self-Project: Python Network Scanning Script"
              organization="Personal Project"
              description="Developing and experimenting with Python scripts for automated network scanning and vulnerability detection. Implementing best practices for secure coding and efficient network analysis."
              image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800 bg-opacity-50 relative">
        <div className="container mx-auto px-4 z-10 relative">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="border-b-2 border-cyan-500 pb-2">SKILLS</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            <SkillTag text="Python" color="cyan" />
            <SkillTag text="Cybersecurity" color="purple" />
            <SkillTag text="INFOSEC" color="green" />
            <SkillTag text="Cyber Defense" color="cyan" />
            <SkillTag text="NIST CSF" color="purple" />
            <SkillTag text="IAM Design" color="green" />
            <SkillTag text="Problem Solving" color="cyan" />
            <SkillTag text="Critical Thinking" color="purple" />
            <SkillTag text="Network Security" color="green" />
            <SkillTag text="Ethical Hacking" color="cyan" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4 z-10 relative">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="border-b-2 border-green-500 pb-2">CONTACT ME</span>
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Get In Touch</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-gray-800 border border-gray-700 focus:border-cyan-500 rounded-md py-2 px-3 text-gray-200 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-gray-800 border border-gray-700 focus:border-cyan-500 rounded-md py-2 px-3 text-gray-200 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full bg-gray-800 border border-gray-700 focus:border-cyan-500 rounded-md py-2 px-3 text-gray-200 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <div className="flex gap-4">
                    <button 
                      type="submit" 
                      className="group relative inline-flex items-center justify-center px-6 py-2 overflow-hidden rounded-md bg-transparent border border-cyan-500 text-cyan-500 hover:text-gray-900 transition duration-300 flex-1"
                    >
                      <span className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                      <span className="relative z-10">Send Message</span>
                    </button>
                    <button 
                      type="button" 
                      className="group relative inline-flex items-center justify-center px-6 py-2 overflow-hidden rounded-md bg-transparent border border-purple-500 text-purple-500 hover:text-gray-900 transition duration-300"
                    >
                      <span className="absolute inset-0 bg-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                      <Download className="w-5 h-5 mr-2 relative z-10" />
                      <span className="relative z-10">Download CV</span>
                    </button>
                  </div>
                </form>
              </div>
              
              <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-purple-400 mt-1 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a href="mailto:amayjogdand17@gmail.com" className="text-gray-200 hover:text-purple-400 transition-colors">amayjogdand17@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Linkedin className="w-5 h-5 text-purple-400 mt-1 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/amay-jogdand-794758347" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-purple-400 transition-colors">Amay Jogdand</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Github className="w-5 h-5 text-purple-400 mt-1 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">GitHub</p>
                      <a href="https://github.com/Amay-XD" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-purple-400 transition-colors">Amay-XD</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Twitter className="w-5 h-5 text-purple-400 mt-1 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">X (Twitter)</p>
                      <a href="https://x.com/Amay_Jogdand_17?t=IxyeaY7iQilvOjxUDeUE8Q&s=08" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-purple-400 transition-colors">@Amay_Jogdand_17</a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/in/amay-jogdand-794758347" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full flex items-center justify-center border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-gray-900 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://github.com/Amay-XD" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full flex items-center justify-center border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-gray-900 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://x.com/Amay_Jogdand_17?t=IxyeaY7iQilvOjxUDeUE8Q&s=08" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full flex items-center justify-center border border-green-500 text-green-500 hover:bg-green-500 hover:text-gray-900 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 border-t border-gray-800 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Amay Jogdand. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/amay-jogdand-794758347" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/Amay-XD" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://x.com/Amay_Jogdand_17?t=IxyeaY7iQilvOjxUDeUE8Q&s=08" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;