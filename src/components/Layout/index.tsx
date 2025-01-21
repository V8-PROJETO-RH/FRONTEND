import { Outlet } from 'react-router-dom';
import LogoHorizontal from '../../assets/logo(Color)Horizontal.png';
import ProfileIcon from '../../assets/profileIcon.svg'
import GlobeIcon from '../../assets/World.svg'

interface LayoutProps {
    pageSelected: 'home' | 'alerts' | 'search' | 'applications';
}

export default function Layout({ pageSelected }: LayoutProps) {
    return (
        <>
            <header className='flex justify-between items-center px-8 h-28 w-full bg-header-gray'>
                <img src={LogoHorizontal} alt="Logo V8 TECH" className='w-72' />

                <div className='flex flex-col justify-between h-full py-4 mr-16'>
                    <div className='w-full flex flex-row items-end justify-end gap-6'>
                        <div className='flex flex-row items-center gap-2'>
                            <img src={GlobeIcon} alt="" />
                            <a className='font-mont font-medium cursor-pointer text-sm'>Português (Brasil)</a>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <img src={ProfileIcon} alt="" />
                            <a className='font-mont font-medium cursor-pointer text-sm'>Login</a>
                        </div>
                    </div>

                    <nav>
                        <ul className='flex flex-row gap-4 align-center'>
                            <li className={`font-mont cursor-pointer ${pageSelected == 'home' ? 'font-bold text-azul-infinito' : 'text-medium-gray font-medium'} `}  >HOME</li>
                            <span className='font-mont  text-medium-gray'>|</span>
                            <li className={`font-mont cursor-pointer ${pageSelected == 'alerts' ? 'font-bold text-azul-infinito' : 'text-medium-gray font-medium'} `}>ALERTAS DE VAGAS</li>
                            <span className='font-mont  text-medium-gray'>|</span>
                            <li className={`font-mont cursor-pointer ${pageSelected == 'search' ? 'font-bold text-azul-infinito' : 'text-medium-gray font-medium'} `}>PESQUISAR CARGOS</li>
                            <span className='font-mont  text-medium-gray'>|</span>
                            <li className={`font-mont cursor-pointer ${pageSelected == 'applications' ? 'font-bold text-azul-infinito' : 'text-medium-gray font-medium'} `}>MINHAS CANDIDATURAS</li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className='h-[85vh]'>
                <Outlet />
            </main>
            <footer className='flex justify-center items-center h-20 w-full'>
                <h1 className='font-mont text-medium-gray'>© 2025 V8 Tech. All Rights Reserved.</h1>
            </footer>
        </>
    )
}
