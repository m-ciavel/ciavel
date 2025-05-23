import '@fortawesome/fontawesome-free/css/all.min.css';
import TechIcon from '../components/TechIcon';
import '../index.css';

const About = () => {
  return (
      <section className="w-full h-auto relative overflow-hidden bg-gradient-to-b from-[#6a9ecf] via-[#f59e42] to-black pt-24 pb-16">

        <div className="flex flex-col items-center gap-8 px-4">
          <div className="w-full lg:w-3/5 text-white text-justify animate-fall-overview">
            <h1 className="text-4xl font-bold text-center mb-4 transform transition-transform duration-300 ease-in-out group">
              Overview
              <span className="block w-[80%] h-1 mt-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-all duration-300 mx-auto"></span>
            </h1>
            <p className="bg-white/60 p-4 text-black font-semibold rounded-lg backdrop-blur-sm mt-4">
              I'm currently working toward my Bachelor of Science in Computer Science at Batangas State University The National Engineering University - Alangilan.
            </p>
            <p className="bg-white/60 p-4 text-black font-semibold rounded-lg backdrop-blur-sm mt-4">
              Starting with a passion for front-end development, I’ve grown increasingly interested in back-end technologies, building a well-rounded skill set to better understand full-stack workflows. I enjoy crafting clean, responsive interfaces that support user-focused and innovative digital experiences.
            </p>
          </div>

          <div className="w-full lg:w-3/5 text-white text-justify mt-4 animate-fall-techstack">
            <h2 className="text-3xl font-bold text-center mb-4 transform transition-transform duration-300 ease-in-out group">
              Tech Stack
              <span className="block w-[80%] h-1 mt-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-all duration-300 mx-auto"></span>
            </h2>
            <div className="bg-white/60 p-6 rounded-lg backdrop-blur-sm text-black">
              <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-7 gap-2 sm:gap-4 justify-items-center">
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg" alt="HTML5" label="HTML5" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg" alt="CSS3" label="CSS3" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg" alt="React" label="React" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bootstrap.svg" alt="Bootstrap" label="Bootstrap" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg" alt="TailwindCSS" label="TailwindCSS" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/microsoft.svg" alt="WPF" label="WPF" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/node-dot-js.svg" alt="Node.js" label="Node.js" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/express.svg" alt="Express.js" label="Express.js" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/flask.svg" alt="Flask" label ="Flask" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/fastapi.svg" alt="FastAPI" label="FastAPI" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mongodb.svg" alt="MongoDB" label="MongoDB" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mariadb.svg" alt="MariaDB" label="MariaDB" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg" alt="MySQL" label="MySQL" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/firebase.svg" alt="Firebase" label="Firebase" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sqlite.svg" alt="SQLite" label="SQLite" />

                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/java.svg" alt="Java" label="Java" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg" alt="JavaScript" label="JavaScript" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/c.svg" alt="C" label="C" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/cplusplus.svg" alt="C++" label="C++" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/csharp.svg" alt="C#" label="C#" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg" alt="Python" label="Python" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/git.svg" alt="Git" label="Git" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" alt="GitHub" label="GitHub" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/visualstudiocode.svg" alt="VS Code" label="VS Code" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/visualstudio.svg" alt="Visual Studio" label="Visual Studio" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/intellijidea.svg" alt="IntelliJ IDEA" label="IntelliJ IDEA" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/canva.svg" alt="Canva" label="Canva" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/qt.svg" alt="Qt" label="Qt" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vite.svg" alt="Vite" label="Vite" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/eclipseide.svg" alt="Eclipse" label="Eclipse" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/androidstudio.svg" alt="Android Studio" label="Android Studio" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/trello.svg" alt="Trello" label="Trello" />
                <TechIcon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/notepadplusplus.svg" alt="Notepad++" label="Notepad++" />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/5 text-white text-justify mt-4 mb-12 animate-fall-other-interests">
            <h2 className="text-3xl font-bold text-center mb-4 transform transition-transform duration-300 ease-in-out group">
              Other Interests
              <span className="block w-[80%] h-1 mt-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-all duration-300 mx-auto"></span>
            </h2>
            <div className="bg-white/60 p-6 rounded-lg backdrop-blur-sm text-black">
              <p className="text-center font-semibold mb-4">
                Outside of coding, I enjoy activities that help me relax, learn, and stay creative.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex flex-col items-center group">
                  <i className="fas fa-seedling text-4xl text-black"></i>
                  <span className="text-center opacity-0 group-hover:opacity-100 transition-all">Gardening</span>
                </div>
                <div className="flex flex-col items-center group">
                  <i className="fas fa-book-open text-4xl text-black"></i>
                  <span className="text-center opacity-0 group-hover:opacity-100 transition-all">Reading</span>
                </div>
                <div className="flex flex-col items-center group">
                  <i className="fas fa-gamepad text-4xl text-black"></i>
                  <span className="text-center opacity-0 group-hover:opacity-100 transition-all">Gaming</span>
                </div>
                <div className="flex flex-col items-center group">
                  <i className="fas fa-theater-masks text-4xl text-black"></i>
                  <span className="text-center opacity-0 group-hover:opacity-100 transition-all">Watching Theatre</span>
                </div>
              </div>
            </div>
          </div>
            
        </div>
      </section>
  );
};

export default About;
