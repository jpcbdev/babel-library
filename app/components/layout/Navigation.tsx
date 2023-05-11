import React from 'react';
import Link from 'next/link';
import { useEffect } from 'react';

import { useRouter } from 'next/router';

export const Navigation = () => {

  const router = useRouter();

  useEffect(() => { }, []);

  return <>
    <nav className='navbar navbar-expand-lg'>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigationNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon v-align">
          <i className="fas fa-bars text-white"></i>
        </span>
      </button>

      <a className="navbar-brand" href="/">
        <img className='mt-2 mb-2 ms-2 me-2 ' src={'logo.png'} alt="logo" height={30} />
        <small className='text-white'>Babel library</small>
      </a>

      <div className="collapse navbar-collapse" id="navigationNav">

        <ul className='navbar-nav navbar-nav-scroll'>
          <li className="nav-item">
            <a className="nav-link" href="/" id="navbarDropdown" role="button">
              Inicio
            </a>
          </li>
          {
            router.pathname !== '/manage' ? <li className='nav-item'>
              <Link href='/manage'>
                <a className='nav-link' role="button">
                  Administrar
                </a>
              </Link>
            </li> : <></>
          }

        </ul>

      </div>

    </nav>

  </>
};