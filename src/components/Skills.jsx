import { FaCode, FaBrain, FaUsers, FaTools } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="w-full bg-[#080808] text-white md:px-6 py-16">
        <div className="border-b-1 border-white mx-auto mb-20 w-[80%]"></div>

      <h2 className="text-center text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-20 ">
        My Skills & Technologies
      </h2>

      <div className="max-w-5xl mx-auto space-y-12">
        {/* Technical Skills */}
        <div className="text-center px-2 md:px-0">
          <h3 className="flex items-center justify-center text-xl font-semibold text-green-400 mb-6 underline underline-offset-1">
            <FaCode className="mr-2 " /> Technical Skills
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "MongoDB",
              "Express.js",
              "React.js",
              "Node.js",
              "JavaScript",
              "HTML5",
              "CSS3",
              "REST API",
            ].map((skill, i) => (
              <span
                key={i}
                className="px-5 py-2.5 bg-gray-900 rounded-full text-gray-200 shadow-md hover:shadow-green-500/50 hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                {skill}
              </span>
            ))}
          </div>
          
        </div>

        {/* DSA Skills */}
        <div className="text-center px-2 md:px-0">
          <h3 className="flex items-center justify-center text-xl font-semibold text-blue-400 mb-6 underline underline-offset-1">
            <FaBrain className="mr-2" /> DSA Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Data Structures", "Algorithms", "Problem Solving"].map(
              (skill, i) => (
                <span
                  key={i}
                  className="px-5 py-2.5 bg-gray-900 rounded-full text-gray-200 shadow-md hover:shadow-blue-500/50 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="text-center px-2 md:px-0">
          <h3 className="flex items-center justify-center text-xl font-semibold text-purple-400 mb-6 underline underline-offset-1">
            <FaTools className="mr-2" /> Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Git",
              "GitHub",
              "Postman",
              "AWS",
              "Firebase",
              "Nginx",
              "VS Code",
            ].map((tool, i) => (
              <span
                key={i}
                className="px-5 py-2.5 bg-gray-900 rounded-full text-gray-200 shadow-md hover:shadow-purple-500/50 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="text-center px-2 md:px-0">
          <h3 className="flex items-center justify-center text-xl font-semibold text-yellow-400 mb-6 underline underline-offset-1">
            <FaUsers className="mr-2" /> Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Communication",
              "Time Management",
              "Team Collaboration",
              "Adaptability",
              "Critical Thinking",
            ].map((skill, i) => (
              <span
                key={i}
                className="px-5 py-2.5 bg-gray-900 rounded-full text-gray-200 shadow-md hover:shadow-yellow-500/50 hover:bg-yellow-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
