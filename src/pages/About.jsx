import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
  return (
    <section className="w-full h-auto relative overflow-hidden bg-gradient-to-b from-[#6a9ecf] via-[#f59e42] to-black pt-16">
      <div className="text-white text-justify p-8">
        <h1 className="text-4xl font-bold text-center">Overview</h1>
        <div className="mt-4">
          <p className="bg-white/60 p-4 text-black rounded-lg backdrop-blur-sm mt-4">
            I'm currently working toward my Bachelor of Science in Computer Science at Batangas State University The National Engineering University - Alangilan.
          </p>
          <p className="bg-white/60 p-4 text-black rounded-lg backdrop-blur-sm mt-4">
            Starting with a passion for front-end development, I’ve grown increasingly interested in back-end technologies, building a well-rounded skill set to better understand full-stack workflows. I enjoy crafting clean, responsive interfaces that support user-focused and innovative digital experiences.
          </p>
        </div>

        <div className="bg-white/60 p-6 mt-8 rounded-lg backdrop-blur-sm text-black">
          <h2 className="text-2xl font-bold text-center mb-4">🛠️ Tech Stack</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">

            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg" alt="HTML5" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">HTML5</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg" alt="CSS3" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">CSS3</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg" alt="JavaScript" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">JavaScript</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg" alt="React" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">React</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bootstrap.svg" alt="Bootstrap" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">Bootstrap</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg" alt="TailwindCSS" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">TailwindCSS</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/microsoft.svg" alt="WPF" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">WPF</span>
            </div>

            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/node-dot-js.svg" alt="Node.js" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">Node.js</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/express.svg" alt="Express" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">Express.js</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/flask.svg" alt="Flask" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">Flask</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/fastapi.svg" alt="FastAPI" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">FastAPI</span>
            </div>


            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mongodb.svg" alt="MongoDB" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">MongoDB</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mariadb.svg" alt="MariaDB" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">MariaDB</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg" alt="MySQL" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">MySQL</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/firebase.svg" alt="Firebase" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">Firebase</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sqlite.svg" alt="SQLite" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">SQLite</span>
            </div>

            {/* Languages */}
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/java.svg" alt="Java" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">Java</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg" alt="JavaScript" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">JavaScript</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg" alt="HTML" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">HTML</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg" alt="CSS" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">CSS</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/c.svg" alt="C" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">C</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/cplusplus.svg" alt="C++" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">C++</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg" alt="Python" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">Python</span>
            </div>

            {/* Tools */}
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/git.svg" alt="Git" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">Git</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" alt="GitHub" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">GitHub</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/visualstudiocode.svg" alt="VS Code" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">VS Code</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/intellijidea.svg" alt="IntelliJ IDEA" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">IntelliJ IDEA</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/canva.svg" alt="Canva" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">Canva</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/qt.svg" alt="Qt" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">Qt</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vite.svg" alt="Vite" className="w-32" />
              <span className="text-center opacity-0 group-hover:opacity-100 transition-all">Vite</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/60 p-6 mt-8 rounded-lg backdrop-blur-sm text-black">
          <h2 className="text-2xl font-bold text-center mb-4">🌱 My Interests</h2>
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
    </section>
  );
};

export default About;
