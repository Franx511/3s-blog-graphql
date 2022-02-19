import React, { Children, ReactElement } from 'react';
import { Header } from '.';

function Layout({children}:{ children: ReactElement}) {
  return <>
  
    <div className='container h-screen mx-auto '>
    <Header/>
    <div className='container bg-white pt-10  bg-post'>
    {children}
    </div>

    </div>

</>;
}

export default Layout;
