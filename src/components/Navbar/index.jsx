import React from 'react';

import S from './styles.module.css';

export default function Navbar() {
  return (
    <>
      <div className={S.container}>
        <div className={S.brand_name}>Tennis School</div>
        <ul className={S.link_list}>
          <li className={S.link}>About</li>
          <li className={S.link}>Plans</li>
          <li className={S.link}>Shop</li>
        </ul>
      </div>
    </>
  );
}
