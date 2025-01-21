import * as React from "react";
import { Outlet } from 'react-router-dom';
import LogoHorizontal from '../../../assets/logo(Color)Horizontal.png';

interface LayoutProps {
  pageSelected: 'jobs' | 'candidates' | 'dashboard';
}

const SvgJobsIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
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

function defineBackground(pageSelected: string) {
  if(pageSelected === "jobs" || pageSelected === "candidates" || pageSelected === "dashboard") {
    return "bg-azul-tecnologia/[.15]";
  } else {
    return "bg-medium-gray"
  }
}

function defineColorText(pageSelected: string) {
  if(pageSelected === "jobs" || pageSelected === "candidates" || pageSelected === "dashboard") {
    return "text-azul-tecnologia";
  } else {
    return "text-medium-gray"
  }
}

function defineSvgColor(pageSelected: string) {
  if(pageSelected === "jobs" || pageSelected === "candidates" || pageSelected === "dashboard") {
    return "fill-azul-tecnologia";
  } else {
    return "fill-medium-gray"
  }
}

export default function Layout({ pageSelected }: LayoutProps) {
  return(
    <>
      <div className="h-screen flex justify-between">
        <div className='w-1/5 p-6 shadow-lg'>
          <img src={LogoHorizontal} alt="Logo V8 TECH"/>
          <nav className="mt-12">

            <div className={`flex items-baseline px-3 py-4 rounded-xl ${defineBackground(pageSelected)}`}>
              <SvgJobsIcon className={defineSvgColor(pageSelected)}/>
              <span className={`ml-4 ${defineColorText(pageSelected)}`}>Vagas</span>
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