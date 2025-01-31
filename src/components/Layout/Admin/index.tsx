import { Outlet, useNavigate } from 'react-router-dom';
import LogoHorizontal from '../../../assets/logo(Color)Horizontal.png';
import { SvgDashboardIcon } from "../../DashboardIcon";
import { SvgJobsIcon } from "../../JobIcon";
import { SvgCandidatesIcon } from '../../CandidateIcon';

type PageSelected = 'jobs' | 'candidates' | 'dashboard';

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
      <div className="h-screen flex">
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

        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}