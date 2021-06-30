import React from 'react';
import logo from './logo.png';

export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: logo,
  },
  Menu: {
    className: 'header0-menu',
    children: [
      { name: 'item0', a: { children: 'Home', href: '/' } },
      // { name: 'item1', a: { children: 'DOF基金投资', href: '/page2' } },
      { name: 'item2', a: { children: 'Project safety assessment', href: '/page3' } },
      { name: 'item3', a: { children: 'How to contact us', href: '/page4' } },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};

export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        {/* <div>
       
        </div> */}
        <div>
        DOF (dove Fund) public welfare investment without borders has direction
        Unique contract address：0x1fd88d2c00fb3b18ba1dc6aadc9272c1529d8cfe
        Network: bep20 (BSC) symbol: DOF
        Official website address:  <a href="dovefund.xyz ">dovefund.xyz </a>
          <a href="https://t.me/dovefundCN0.plus/dovefundCN">Telegraph group </a> 
        <a href="https://twitter.com/dof_coin_">Witt </a> 
        </div>

      </span>
    ),
  },
};
