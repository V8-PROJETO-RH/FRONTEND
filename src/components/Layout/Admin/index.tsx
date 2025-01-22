import * as React from "react";
import { Outlet, useNavigate } from 'react-router-dom';
import LogoHorizontal from '../../../assets/logo(Color)Horizontal.png';

type PageSelected = 'jobs' | 'candidates' | 'dashboard';

const SvgDashboardIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="12"
    className={props.className}
    viewBox="0 0 20 12"
  >
    <path
      d="m14.799 1.594 1.386 1.33-4.697 4.506L8.32 4.392a.99.99 0 0 0-1.358 0l-5.775 5.55a.893.893 0 0 0 0 1.301c.375.36.982.36 1.357 0L7.637 6.35l3.167 3.038c.376.36.982.36 1.357 0l5.381-5.152 1.387 1.33c.298.286.818.083.818-.324v-3.97c.01-.259-.202-.462-.472-.462h-4.13c-.433 0-.644.499-.346.785"
    ></path>
  </svg>
);

const SvgJobsIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    className={props.className}
    viewBox="0 0 15 15"
  >
    <path
      d="M4.62.917a.47.47 0 0 0-.362.173l-2.83 3.496h4.138c.123 0 .24.048.328.134a.46.46 0 0 1 .136.325c0 .364.146.714.407.972a1.4 1.4 0 0 0 1.968 0c.26-.258.407-.608.407-.972 0-.122.05-.239.136-.325a.47.47 0 0 1 .328-.134h4.137L10.584 1.09a.46.46 0 0 0-.362-.173zm9.233 4.586h-4.16c-.106.519-.39.985-.804 1.32a2.335 2.335 0 0 1-2.936 0 2.3 2.3 0 0 1-.805-1.32H.988l.298 2.35a.46.46 0 0 0 .154.288.47.47 0 0 0 .308.114h11.348c.113 0 .222-.041.307-.115a.46.46 0 0 0 .153-.287zM3.533.516A1.39 1.39 0 0 1 4.62 0h5.602a1.4 1.4 0 0 1 1.087.516l3.432 4.242a.46.46 0 0 1 .097.343l-.361 2.866a1.37 1.37 0 0 1-.46.86 1.4 1.4 0 0 1-.922.345H1.747a1.4 1.4 0 0 1-.922-.344 1.37 1.37 0 0 1-.46-.861L.004 5.1a.45.45 0 0 1 .098-.343L3.534.516m-3.417 9.73a.46.46 0 0 1 .348-.157h5.102c.123 0 .24.048.328.134a.46.46 0 0 1 .136.325c0 .365.146.715.407.973a1.4 1.4 0 0 0 1.968 0c.26-.258.407-.608.407-.973 0-.122.05-.239.136-.325a.47.47 0 0 1 .328-.134h5.102a.47.47 0 0 1 .348.155.46.46 0 0 1 .112.36l-.361 2.866a1.37 1.37 0 0 1-.46.861 1.4 1.4 0 0 1-.922.344H1.747c-.34 0-.667-.122-.922-.344a1.37 1.37 0 0 1-.46-.861l-.361-2.865a.45.45 0 0 1 .112-.36m.873.76.297 2.35a.46.46 0 0 0 .153.287.47.47 0 0 0 .308.115h11.348c.113 0 .222-.04.307-.115a.46.46 0 0 0 .153-.287l.297-2.35H9.694c-.107.519-.391.985-.805 1.32a2.335 2.335 0 0 1-2.936 0 2.3 2.3 0 0 1-.805-1.32z"
    ></path>
  </svg>
);

const SvgCandidatesIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="14"
    className={props.className}
    viewBox="0 0 22 14"
  >
    <path
      fillRule="evenodd"
      d="M10.203 3.077c0 1.533-1.3 2.77-2.925 2.77S4.344 4.61 4.344 3.078 5.654.307 7.278.307s2.925 1.238 2.925 2.77m7.826 0c0 1.533-1.3 2.77-2.925 2.77-1.623 0-2.934-1.237-2.934-2.77s1.31-2.77 2.934-2.77 2.925 1.238 2.925 2.77M7.28 7.694c-2.28 0-6.848 1.08-6.848 3.232v1.386c0 .507.44.923.978.923h11.739c.538 0 .978-.416.978-.923v-1.386c0-2.151-4.568-3.232-6.848-3.232m6.877.047c.342-.028.665-.047.948-.047 2.28 0 6.848 1.08 6.848 3.232v1.386c0 .507-.44.923-.978.923h-5.067c.107-.286.176-.6.176-.923v-1.386c0-1.357-.773-2.382-1.888-3.148l-.01-.01a.1.1 0 0 0-.03-.027"
      clipRule="evenodd"
    ></path>
  </svg>
);

function defineBackground(pageSelected: PageSelected, page: PageSelected) {
  if(pageSelected === page) {
    return "bg-azul-tecnologia/[.15]";
  } else {
    return "bg-none"
  }
}

function defineColorText(pageSelected: PageSelected, page: PageSelected) {
  if(pageSelected === page) {
    return "text-azul-tecnologia";
  } else {
    return "text-medium-gray"
  }
}

function defineSvgColor(pageSelected: PageSelected, page: PageSelected) {
  if(pageSelected === page) {
    return "fill-azul-tecnologia";
  } else {
    return "fill-medium-gray"
  }
}

export default function Layout({ pageSelected }: { pageSelected: PageSelected }) {
  const navigate = useNavigate();

  function redirectTo(page: PageSelected) {
    navigate(`/adm/${page}`);
  }

  return(
    <>
      <div className="h-screen flex justify-between">
        <div className='w-1/5 p-6 shadow-lg'>
          <img src={LogoHorizontal} alt="Logo V8 TECH"/>
          <nav className="mt-12">

            <div className={`flex items-baseline mt-5 px-3 py-4 rounded-xl cursor-pointer ${defineBackground(pageSelected, "jobs")}`} onClick={() => redirectTo("jobs")} >
              <SvgJobsIcon className={defineSvgColor(pageSelected,  "jobs")}/>
              <span className={`ml-4 ${defineColorText(pageSelected,  "jobs")}`}>Vagas</span>
            </div>

            <div className={`flex items-baseline mt-5 px-3 py-4 rounded-xl cursor-pointer ${defineBackground(pageSelected, "candidates")}`} onClick={() => redirectTo("candidates")} >
              <SvgCandidatesIcon className={defineSvgColor(pageSelected,  "candidates")}/>
              <span className={`ml-4 ${defineColorText(pageSelected,  "candidates")}`}>Candidatos</span>
            </div>

            <div className={`flex items-baseline mt-5 px-3 py-4 rounded-xl cursor-pointer ${defineBackground(pageSelected, "dashboard")}`} onClick={() => redirectTo("dashboard")} >
              <SvgDashboardIcon className={defineSvgColor(pageSelected,  "dashboard")}/>
              <span className={`ml-4 ${defineColorText(pageSelected,  "dashboard")}`}>Dashboard</span>
            </div>
            
          </nav>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}