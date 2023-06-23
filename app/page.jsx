'use client';
//test-branch
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skill from './components/Skill';
import Footer from './components/Footer';

export default function Home() {
  const [isTopInView, setTopIsInView] = useState(false);
  const [isSkillInView, setSkillIsInView] = useState(false);
  const [isProjectInView, setProjectIsInView] = useState(false);

  const [isDarkTheme, setTheme] = useState(true);
  const [refTop, inView] = useInView({ threshold: 0.7 });
  //apply when atleast 70% of the element is in viewport
  const [refSkill, inViewSkill] = useInView({ threshold: 0.6 });
  const [refProject, inViewProject] = useInView({ threshold: 0.3 });

  useEffect(() => {
    setTopIsInView(inView);
  }, [inView]);

  useEffect(() => {
    setProjectIsInView(inViewProject);
  }, [inViewProject]);

  useEffect(() => {
    setSkillIsInView(inViewSkill);
  }, [inViewSkill]);

  const changeTheme = () => {
    setTheme((value) => !value);
  };
  return (
    <div
      className={`bg-gradient-to-r ${
        isDarkTheme
          ? 'from-emerald-800 md:via-slate-800 to-pink-800'
          : ' from-emerald-400 md:via-indigo-400 to-pink-400 '
      } `}
    >
      <Navbar isDarkTheme={isDarkTheme} />
      <div className={`mainDiv p-2 md:p-20`}>
        <div className="text-right">
          <button
            onClick={changeTheme}
            className="p-4 shadow-xl rounded text-white my-4"
          >
            {isDarkTheme ? 'Color' : 'Dark'} Mode
          </button>
        </div>

        <div
          ref={refTop}
          className={`topPortion duration-300 ${
            isDarkTheme ? 'bg-slate-800' : 'bg-indigo-500'
          } shadow-2xl rounded-lg my-8 ${isTopInView ? 'scale-105' : ''}`}
        >
          <div
            className={`grid grid-cols-1 md:grid-cols-3 md:gap-8 text-white py-16 px-8 md:p-40`}
          >
            <div className="backdrop-blur-2xl md:col-span-2">
              <p className="text-3xl font-bold py-4 md:py-0">
                Welcome to Shahan&apos;s Environment ಠ ಠ
              </p>{' '}
            </div>
            <div className="py-2 md:py-0">
              A Full Stack Web Developer who has passion and love for
              interactive and beautiful web application development
            </div>
          </div>
          <div className="grid grid-cols-3 text-center text-white p-4 md:p-8 gap-12">
            <Link
              className="bg-gray-900 active:translate-y-1 duration-150  animate-pulse hover:animate-none py-4 md:py-6 shadow-lg rounded-xl"
              href="https://github.com/ShahanOne"
            >
              <button>GitHub</button>
            </Link>
            <Link
              className="bg-indigo-700 active:translate-y-1 duration-150 animate-pulse hover:animate-none py-4 md:py-6 shadow-lg rounded-xl"
              href="https://www.linkedin.com/in/syed-shahan-hussain-481b87218/"
            >
              <button>LinkedIn</button>
            </Link>
            <Link
              className="bg-orange-500 active:translate-y-1 duration-150  animate-pulse hover:animate-none py-4 md:py-6 shadow-lg rounded-xl"
              href="https://drive.google.com/file/d/1MHq03MnrnRa9r2Hjo8BjnLzWhfSO1XL9/view?usp=sharing"
            >
              <button>Resume</button>
            </Link>
          </div>
        </div>

        <div
          ref={refSkill}
          className={`skillPortion duration-300 ${
            isDarkTheme ? 'bg-slate-900' : 'bg-emerald-600'
          } shadow-2xl rounded-lg my-8 md:my-16 text-white px-6 py-8 md:p-24 ${
            isSkillInView ? 'scale-105' : ''
          }`}
        >
          <p className={`text-3xl $ font-bold py-4`}>My Skills</p>
          <hr className={`w-1/3 py-4 `} />

          <div className="py-4 text-center grid grid-cols-3 md:grid-cols-8 gap-4 md:gap-8">
            <Skill color="red" name="React" />
            <Skill color="blue" name="Next JS" />{' '}
            <Skill color="green" name="Tailwind CSS" />{' '}
            <Skill color="yellow" name="MongoDB" />
            <Skill color="pink" name="Git" />
            <Skill color="orange" name="GitHub" />
            <Skill color="purple" name="Node JS" />{' '}
            <Skill color="cyan" name="Express JS" />
            <Skill color="violet" name="SQL" />{' '}
            <Skill color="slate" name="Bootstrap" />
            <Skill color="sky" name="Hosting" />{' '}
            <Skill color="indigo" name="Auth" />
            <Skill color="fuchsia" name="Postman" />{' '}
            <Skill color="gray" name="REST APIs" />
            <Skill color="yellow" name="CMD" />
            <Skill color="emerald" name="Vercel" />
            <Skill color="sky" name="Netlify" />{' '}
            <Skill color="orange" name="Heroku" />
            <Skill color="red" name="Wordpress" />
            <Skill color="violet" name="Canva" />
            <Skill color="pink" name="jQuery" />
            <Skill color="blue" name="EJS" />{' '}
            <Skill color="orange" name="HTML CSS" />
            <Skill color="sky" name="Javascript" />
          </div>
        </div>

        <div
          ref={refProject}
          className={`projectPortion duration-300 ${
            isDarkTheme ? 'bg-slate-900' : 'bg-red-400'
          } shadow-2xl rounded-lg my-10 md:my-20 text-white p-8 md:p-20 ${
            isProjectInView ? 'scale-105' : ''
          }`}
        >
          <p className="text-3xl font-bold py-4">Projects</p>
          <hr className="w-1/3 py-6 text-yellow-300" />
          <div
            id="projects"
            className="projects grid grid-cols-1 md:grid-cols-2 gap-16"
          >
            <Project
              title="Olx Clone"
              link="https://olxcloneapp.netlify.app"
              bg="olx"
              info="An operational Olx clone having Buy & Sell functionalities along with Login and register authentications"
            />
            <Project
              title="Next Countries"
              link="https://atlasone.vercel.app"
              bg="nx"
              info="Contains information about 200+ countries.
              Has Search and Filter by region functionalities along with Light and Dark Themes"
            />
            <Project
              title="Ip Tracker"
              link="https://iptrackapp.netlify.app"
              bg="ip"
              info="Ip Address tracker fetches you the details of any IP address you put in, like their Location on Map , Country, State and Time Zone. It can also fetch the Ip details of the user"
            />
            <Project
              title="Youtube Video Player"
              link="https://videoplaya.netlify.app"
              bg="vp"
              info="Youtube video playing and uploading app with a MongoDB database for register and login along with like and comment functionalities.
              The fun part ? There’s NO ADS at all !"
            />
            <Project
              title="Space App"
              link="https://space-tourism-react.netlify.app/"
              bg="sp"
              info="The first time I made this with Backend with EJS but recently I made this website in REACT and since it is a multi-page website , it brushed up many of my skills in React."
            />
            <Project
              title="Weather App"
              link="https://weatherapp-shahan.netlify.app/"
              bg="weather"
              info="A basic weather application with a simplistic yet beautiful UI."
            />
            <Project
              title="Tip Calculator"
              link="https://shahanone.github.io/Tip-Calculator/"
              bg="split"
              info="Made with HTML,CSS (with Bootstrap) & JavaScript"
            />

            <Project
              title="Finance App"
              link="https://financing-app.vercel.app/"
              bg="finance"
              info="A page all about finances and how to start investing. 
              Built for a society."
            />
          </div>
        </div>
        <div
          id="contact"
          className={`bottomPortion text-center hover:scale-105 duration-300 ${
            isDarkTheme ? 'bg-gray-950' : 'bg-sky-900'
          } shadow-2xl rounded-lg my-6 md:my-20 text-white p-8 md:p-20`}
        >
          <p className="text-lg font-bold p-6">Thank you for visiting</p>
          <p className="text-lg py-6">Let&apos;s connect : </p>
          <div className="grid grid-cols-3 gap-4  md:px-32">
            <Link
              className="rounded-full shadow p-2 bg-orange-600 hover:bg-orange-500 active:-translate-y-1 duration-200"
              href="mailto:shahanhussain9105@gmail.com"
            >
              <button>Mail</button>
            </Link>{' '}
            <Link
              className="rounded-full shadow p-2 bg-indigo-700 hover:bg-indigo-600 active:-translate-y-1 duration-200"
              href="https://www.linkedin.com/in/syed-shahan-hussain-481b87218/"
            >
              <button>LinkedIn</button>{' '}
            </Link>{' '}
            <Link
              className="rounded-full shadow p-2 bg-violet-700 hover:bg-violet-600 active:-translate-y-1 duration-200"
              href="https://www.discordapp.com/users/Shahan.One#4036"
            >
              <button>Discord</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer isDarkTheme={isDarkTheme} />
    </div>
  );
}
