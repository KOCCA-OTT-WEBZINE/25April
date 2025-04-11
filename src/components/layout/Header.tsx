import React from 'react';
import { useLocation } from 'react-router-dom';

import logo from '../../assets/logo.png';

const Header = () => {
  const location = useLocation();
  const isAbsHeader = location.pathname === '/';

  return (
    <header
      className={`flex justify-between items-center max-w-[1560px] w-full mx-auto py-[40px]
        ${isAbsHeader ? 'absolute top-0 left-1/2 -translate-x-1/2' : 'static'}`}
    >
      <img src={logo} className="w-[272px]" alt="로고" />
      <div className="bg-white px-[16px] py-[4px] rounded-full text-[var(--color-primary)] text-[18px] font-semibold">
        Vol.42 2025년
      </div>
    </header>
  );
};

export default Header;
