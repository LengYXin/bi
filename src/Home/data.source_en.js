import React from 'react';
import logo from '../layouts/logo.png';

export const Banner00DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: logo,
  },
  content: {
    className: 'banner0-content',
    children: (
      <span>
        <p>DOF is the world's first public welfare and investment security assessment project to enhance the positive influence of Internet decentralization!</p>
        <p> </p>
        <p>Dovefund (DOF) is a governance token based on BSC chain, which provides users with governance token to participate in public welfare undertakings and project investment risk assessment. Dovefund is committed to realizing information sharing and community spiritual environment construction for global public welfare organizations. All donation and assistance projects are provided by global public welfare organizations, and the community votes to complete the actual donation landing by the DOF fund. Empowering decentralized public welfare! DOF is the first virtual to real charity project of Internet decentralization. All projects that need donation and assistance are elected by the community through voting, and the entity donation is completed by the DOF fund. We will take the community voting fund donation as well as the donation of all community users with money as our goal, and at the same time complete the excellent ecosystem of Internet decentralization.</p>
      </span>
    ),
  },
  button: { className: 'banner0-button', children: 'PPT' },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: 'Project features' }],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
          },
          title: { children: '' },
          content: { children: 'DOF is a virtual to real sustainable public welfare decentralized currency. Every coin holder has the right to vote for people or areas in need of help. All decisions are made by the community,' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
          },
          title: { children: '' },
          content: { children: 'At the same time, accept all the people or regions who need help to apply for the project and publish the information in the community. The members vote and donate the token. Finally, the foundation will land all the funds to the people who need help. We will connect with major public welfare organizations around the world to realize the transformation from decentralized public welfare community to real public welfare projects, and improve the benign influence of the Internet decentralized excellent ecology. Let people feel the public interest of Internet decentralization.' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
          },
          title: { children: '' },
          content: { children: `Investment security assessment is another major feature of DOF. At present, the investment environment is very bad, and the capital loss rate of many users is too high. Aiming at environmental investment security, DOF provides project investment assessment reference for users, and investment security audit rating (a + - D -) for project parties to escort users' investment! Empower excellent projects, so that everyone can see you!` },
        },
      },
    ],
  },
};
export const Content70DataSource = {
  wrapper: { className: 'home-page-wrapper content7-wrapper' },
  page: { className: 'home-page content7' },
  OverPack: {},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: 'Operation mechanism',
        className: 'title-h1',
      },
      // { name: 'content', children: '基于阿里云计算强大的基础资源' },
    ],
  },
  tabsWrapper: { className: 'content7-tabs-wrapper' },
  block: {
    children: [
      {
        name: 'block0',
        tag: {
          className: 'content7-tag',
          text: { children: 'Project features', className: 'content7-tag-name' },
          icon: { children: 'mobile' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <div> DOF is a virtual to real sustainable public welfare decentralized currency. Every coin holder has the right to vote for people or areas in need of help. All decisions are made by the community,</div>
                <div>At the same time, accept all the people or regions who need help to apply for the project and publish the information in the community. The members vote and donate the token. Finally, the foundation will land all the funds to the people who need help. We will connect with major public welfare organizations around the world to realize the transformation from decentralized public welfare community to real public welfare projects, and improve the benign influence of the Internet decentralized excellent ecology. Let people feel the public interest of Internet decentralization.</div>
                Investment security assessment is another major feature of DOF. At present, the investment environment is very bad, and the capital loss rate of many users is too high. Aiming at environmental investment security, DOF provides project investment assessment reference for users, and investment security audit rating (a + - D -) for project parties to escort users' investment! Empower excellent projects, so that everyone can see you!

              </span>
            ),
          },
          img: {
            className: 'content7-img',
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: 'block1',
        tag: {
          className: 'content7-tag',
          icon: { children: 'tablet' },
          text: { className: 'content7-tag-name', children: 'Operation mechanism' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <div>Perfect collection value - fund income repurchases continue to appreciate public welfare feedback</div>
                <div>Continuous public welfare - everyone's love</div>
                <div>Fund investment - high rate of return</div>
                <div>Fund dividend - fund investment dividend BNB</div>
                <div>Investment evaluation - high user growth rate</div>
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
      {
        name: 'block2',
        tag: {
          className: 'content7-tag',
          text: { children: 'project vision', className: 'content7-tag-name' },
          icon: { children: 'laptop' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                Our vision is to build a fund that can not only decentralize public welfare community organizations, but also implement decentralized public welfare projects. We believe that Internet decentralization should need a monetary fund that can enhance the benign influence of virtual circle. Everyone has a heart. Whether they are community members or decentralized users with a public interest, DOF (dovefund) is the only choice for them to decide the help and donation of charity projects with influential voting rights. In view of the current bad investment environment, users can pass the first and second market project risk audit publicity of DOF, so that more users can really understand the risk, capital rate, security, support point and investment yield of the project, and prevent the loss of user assets!

              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
    ],
  },
};
export const Content130DataSource = {
 
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: { className: 'content1-title', children: 'Project application scenarios' },
  content: {
    className: 'content1-content',
    children:
      `  DOF (dovefund) will provide a complete set of public welfare assistance programs for the global disaster stricken areas, the affected people and the people in need of help. The community project shows that the community members will vote selectively on the project to determine the areas, people or things we need to help and the amount of assistance. Finally, the DOF foundation will complete the implementation of the assistance project. At the same time, we will provide community project applications for the people in need of help. Community members will vote for the projects on the shelves and vote again or donate the relevant amount of assistance. Finally, the DOF foundation will complete the implementation of the assistance projects. Public welfare has no borders. DOF plans to connect with global public welfare organizations to realize information sharing, aiming at establishing an open and sustainable public welfare token economy system. The risk and investment evaluation of DOF project is an in-depth evaluation of the risk, assets, background, mechanism and sustainability of the global virtual token project. Level 1 and level 2 projects can make risk investment grade reports and suggestions through audit standards, and the project risk grade will be adjusted from time to time to provide more powerful choices for investment users. All major project parties are welcome to contact DOF project team to provide effective data and information for risk audit publicity, so that more investors can understand your project, and users can prevent asset loss at the same time!
      Project application scenarios`,
  },
};

export const Content130DataSource2 = {
  // OverPack: {
  //   className:
  //     'home-page-wrapper content13-wrapper home-page-wrapper content13-wrapper jnwq7vhwgqg-editor_css',
  //   playScale: 0.3,
  // },
  // titleWrapper: {
  //   className: 'title-wrapper',
  //   children: [
  //     { name: 'title', children: 'Token distribution', className: 'title-h1' },
  //     {
  //       name: 'content',
  //       children: (
  //         <div>
  //           Total pre-sale: 180000000DOF<br />
  //           Pre sale unit price:<br />
  //           One stage    1BNB = 500000DOF<br />
  //           Phase 2        1BNB = 450000DOF<br />
  //           Three stage 1BNB = 400000DOF<br />
  //         </div>
  //       ),
  //       className: 'title-content',
  //     },
  //     {
  //       name: 'content2',
  //       children: <div>
  //         Handling charge 0.8% after holding currency and not circulating during airdrop and pre-sale
  //         <div> Pre sale automatic wallet address: 0xab88d95a5419B3CCcd763e276c416c69D591f4AE </div>
  //         <div>BNB payment will be accepted during the pre-sale period!</div>
  //       </div> ,
  //       className: 'title-content',
  //     },
  //   ],
  // },
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: 'Token distribution',
        className: 'title-h1',
      },
      // {
      //   name: 'content',
      //   className: 'title-content',
      //   children: '基于阿里云强大的基础资源',
      // },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Total pre-sale' },
          content: {
            className: 'content3-content',
            children:
              '180000000DOF',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Pre sale ' },
          content: {
            className: 'content3-content',
            children:
              'unit price',
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'One stage' },
          content: {
            className: 'content3-content',
            children:
              '1BNB = 500000DOF',
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Phase 2' },
          content: {
            className: 'content3-content',
            children:
              '1BNB = 450000DOF',
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Three stage' },
          content: {
            className: 'content3-content',
            children:
              '1BNB = 400000DOF',
          },
        },
      },
      // {
      //   name: 'block5',
      //   className: 'content3-block',
      //   md: 8,
      //   xs: 24,
      //   children: {
      //     icon: {
      //       className: 'content3-icon',
      //       children:
      //         'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
      //     },
      //     textWrapper: { className: 'content3-text' },
      //     title: { className: 'content3-title', children: '大数据' },
      //     content: {
      //       className: 'content3-content',
      //       children:<div>
      //                Handling charge 0.8% after holding currency and not circulating during airdrop and pre-sale
      //                <div> Pre sale automatic wallet address: 0xab88d95a5419B3CCcd763e276c416c69D591f4AE </div>
      //                <div>BNB payment will be accepted during the pre-sale period!</div>
      //              </div>,
      //     },
      //   },
      // },
    ],
  },
};
export const Content130DataSource22 = {
  wrapper: { className: 'home-page-wrapper pricing0-wrapper' },
  OverPack: { playScale: 0.3, className: 'home-page pricing0' },
  imgWrapper: { className: 'pricing0-img-wrapper', md: 12, xs: 24 },
  img: {
    className: 'pricing0-img',
    name: 'image',
    children:
      'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*OnyWT4Nsxy0AAAAAAAAAAABjARQnAQ',
  },
  childWrapper: {
    className: 'pricing0-text-wrapper',
    md: 12,
    xs: 24,
    children: [
      {
        name: 'title',
        children: 'Handling charge 0.8% after holding currency and not circulating during airdrop and pre-sale',
        className: 'pricing0-title',
      },
      {
        name: 'content',
        children:
          'Pre sale automatic wallet address: 0xab88d95a5419B3CCcd763e276c416c69D591f4AE',
        className: 'pricing0-content',
      },
      // { name: 'pricing', children: '¥2,200', className: 'pricing0-pricing' },
      {
        name: 'content',
        children: 'BNB payment will be accepted during the pre-sale period!',
      },
    ],
  },
}
export const Content130DataSource3 = {
  // OverPack: {
  //   className:
  //     'home-page-wrapper content13-wrapper home-page-wrapper content13-wrapper jnwq7vhwgqg-editor_css',
  //   playScale: 0.3,
  // },
  // titleWrapper: {
  //   className: 'title-wrapper',
  //   children: [
  //     { name: 'title', children: 'Lock your wallet', className: 'title-h1' },
  //     {
  //       name: 'content',
  //       children: (
  //         <div>
  //           30% of the locked tokens are sold by community voting, and all of them are donated to the charity target in need of help in the first community voting volume. The single voting volume is no more than 0.5% of the total locked tokens, which is determined by the fund market price. Bonus with currency: 0.8% of transaction fee is used for DOF fund. If DOF fund invests all transaction fee users in virtual investment or physical project, and the currency holding is higher than 30 days, users will get BNB income bonus. We firmly believe that people who like to do public welfare will be rewarded.
  //         </div>
  //       ),
  //       className: 'title-content',
  //     },
  //     // {
  //     //   name: 'content2',
  //     //   children: '现场问诊，为你答疑解难',
  //     //   className: 'title-content',
  //     // },
  //   ],
  // },
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/tvQTfCupGUFKSfQ.png',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: { className: 'content2-title', children: 'Lock your wallet' },
  content: {
    className: 'content2-content',
    children:
      `30% of the locked tokens are sold by community voting, and all of them are donated to the charity target in need of help in the first community voting volume. The single voting volume is no more than 0.5% of the total locked tokens, which is determined by the fund market price. Bonus with currency: 0.8% of transaction fee is used for DOF fund. If DOF fund invests all transaction fee users in virtual investment or physical project, and the currency holding is higher than 30 days, users will get BNB income bonus. We firmly believe that people who like to do public welfare will be rewarded.
      `,
  },
};
export const Content130DataSource4 = {
  // OverPack: {
  //   className:
  //     'home-page-wrapper content13-wrapper home-page-wrapper content13-wrapper jnwq7vhwgqg-editor_css',
  //   playScale: 0.3,
  // },
  // titleWrapper: {
  //   className: 'title-wrapper',
  //   children: [
  //     { name: 'title', children: 'Ecosystem', className: 'title-h1' },
  //     {
  //       name: 'content',
  //       children: (
  //         <div>
  //           1.0.8% commission fee will be charged for each transaction, which will be used for fund reserve of DOF fund and project investment fund reserve for donation project investment of community voting foundation. We will make virtual investment in the name of DOF fund
  //           <br />

  //           2.The profit and loss of the virtual investment of the investment dividend fund will be announced in the community every 15 days, and the dividend standard is that users holding money for 30 consecutive days or more will pay BNB / usdt dividends manually according to the amount of money they hold. <br />

  //           3.After adding liquidity to the fund as a community reserve, the fund will broadcast the amount daily. The exchange will invite the exchange and the platform to supervise and broadcast daily to prevent fraud. <br />

  //           4.DOF accepts the information, security review report, capital reserve, currency holding, transaction flow ratio, 15 day transaction volume, project progress and project development plan submitted by all market project parties for in-depth evaluation, and publishes the investment security level, so that users can have good reference in the investment process and prevent asset loss, Let the project side of the project at a glance show to users, convenient for project promotion and sales.
  //         </div>
  //       ),
  //       className: 'title-content',
  //     },
  //     // {
  //     //   name: 'content2',
  //     //   children: '现场问诊，为你答疑解难',
  //     //   className: 'title-content',
  //     // },
  //   ],
  // },
  wrapper: { className: 'home-page-wrapper content6-wrapper' },
  OverPack: { className: 'home-page content6' },
  textWrapper: { className: 'content6-text', xs: 24, md: 10 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: 'Ecosystem',
        className: 'title-h1',
      },
      // {
      //   name: 'content',
      //   className: 'title-content',
      //   children: '基于阿里云计算强大的基础资源',
      // },
    ],
  },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png',
    className: 'content6-img',
    xs: 24,
    md: 14,
  },
  block: {
    children: [
      {
        name: 'block0',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'content6-icon',
        },
        title: { className: 'content6-title', children: '' },
        content: {
          className: 'content6-content',
          children:
            '0.8% commission fee will be charged for each transaction, which will be used for fund reserve of DOF fund and project investment fund reserve for donation project investment of community voting foundation. We will make virtual investment in the name of DOF fund',
        },
      },
      {
        name: 'block1',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        },
        title: { className: 'content6-title', children: '' },
        content: {
          className: 'content6-content',
          children:
            'The profit and loss of the virtual investment of the investment dividend fund will be announced in the community every 15 days, and the dividend standard is that users holding money for 30 consecutive days or more will pay BNB / usdt dividends manually according to the amount of money they hold.',
        },
      },
      {
        name: 'block2',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: { className: 'content6-title', children: '' },
        content: {
          className: 'content6-content',
          children:
            'After adding liquidity to the fund as a community reserve, the fund will broadcast the amount daily. The exchange will invite the exchange and the platform to supervise and broadcast daily to prevent fraud.',
        },
      },
      {
        name: 'block3',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: { className: 'content6-title', children: '' },
        content: {
          className: 'content6-content',
          children:
            'DOF accepts the information, security review report, capital reserve, currency holding, transaction flow ratio, 15 day transaction volume, project progress and project development plan submitted by all market project parties for in-depth evaluation, and publishes the investment security level, so that users can have good reference in the investment process and prevent asset loss, Let the project side of the project at a glance show to users, convenient for project promotion and sales.',
        },
      },
    ],
  },
};
export const Content130DataSource5 = {
  OverPack: {
    className:
      'home-page-wrapper content13-wrapper home-page-wrapper content13-wrapper jnwq7vhwgqg-editor_css',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: 'Operation process', className: 'title-h1' },
      {
        name: 'content',
        children: (
          <div>
            1. Project information collection - Community voting aid objects - aid amount voting (DOF fund payment / community donation payment) - docking with donors / institutions / regions - project implementation<br />

            2. declaration of donor information - authenticity of foundation audit - launch of official website - Community voting aid method - DOF fund counterpart / institution / Region - Implementation of project implementation<br />

            3. Project owner application - Submission materials - DOF review materials - risk assessment - investment assessment - investment grade content publicity - user reference investment<br />
            4. The recipient provides the information of the project, and the DOF provides the audit and help, and publicizes it with the official website for other users to check, so as to prevent the loss of assets.
          </div>
        ),
        className: 'title-content',
      },
      // {
      //   name: 'content2',
      //   children: '现场问诊，为你答疑解难',
      //   className: 'title-content',
      // },
    ],
  },
};
export const Content130DataSource6 = {
  OverPack: {
    className:
      'home-page-wrapper content13-wrapper home-page-wrapper content13-wrapper jnwq7vhwgqg-editor_css',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: 'Official website of DOF', className: 'title-h1' },
      {
        name: 'content',
        children: (
          <div>
          Allow users to view all the people / institutions / regions in need of assistance and integrate all the information for users' reference and influence voting<br/>

Once the false declaration is checked, the declaration qualification of the relevant person / institution / region will be closed, and it will be blacklisted and publicized.<br/>

DOF fund amount, investment project, profit and loss (fund dividends support personal wallet dividends and exchange currency address account dividends)<br/>

DOF reviews the publicity and rating of investment security assessment projects. Users can make reference investment to make their investment more directional and secure!<br/>

We try to integrate the ways of fund-raising, such as cryptocurrency, into the website. The fund-raising will publicize the designated wallet, and open a variety of payment methods, such as bank card, credit card, PayPai, virtual currency, etc。<br/>

          </div>
        ),
        className: 'title-content',
      },
      // {
      //   name: 'content2',
      //   children: '现场问诊，为你答疑解难',
      //   className: 'title-content',
      // },
    ],
  },
};
export const Content130DataSource7 = {
  OverPack: {
    className:
      'home-page-wrapper content13-wrapper home-page-wrapper content13-wrapper jnwq7vhwgqg-editor_css',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: 'Development track and vision', className: 'title-h1' },
      {
        name: 'content',
        children: (
          <div>
            {/* <table >
              <tr>
                <td> 第一阶段  </td>
                <td> 第二阶段 </td>
                <td> 第三阶段  </td>
                <td> 第四阶段  </td>
                <td> 第五阶段 </td>
              </tr>
              <tr>
                <td> 启动（进行中）  </td>
                <td> 发芽（待启动） </td>
                <td> 成长（待启动）  </td>
                <td> 肌肉（待启动）  </td>
                <td> 爆发（待启动） </td>
              </tr>
            </table> */}
            <div>The first stage The second stage The third stage The fourth stage The fifth stage</div>
            <div>Start up (in progress) Germination (to be started) Growth (to be launched) Muscle (to be activated) Burst (to be started)</div>
          </div>
        ),
        className: 'title-content',
      },
      // {
      //   name: 'content2',
      //   children: '现场问诊，为你答疑解难',
      //   className: 'title-content',
      // },
    ],
  },
};

export const Content120DataSource = {
  wrapper: { className: 'home-page-wrapper content12-wrapper' },
  page: { className: 'home-page content12' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '特别鸣谢', className: 'title-h1' }],
  },
  block: {
    className: 'img-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/TFicUVisNHTOEeMYXuQF.svg',
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/hkLGkrlCEkGZeMQlnEkD.svg',
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/bqyPRSZmhvrsfJrBvASi.svg',
          },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/UcsyszzOabdCYDkoPPnM.svg',
          },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/kRBeaICGexAmVjqBEqgw.svg',
          },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/ftBIiyJcCHpHEioRvPsV.svg',
          },
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        DOF(Dove Fund) 公益无国界 投资有方向
        唯一合约地址：0x1fd88d2c00fb3b18ba1dc6aadc9272c1529d8cfe
        网络：BEP20（BSC） 符号：DOF
        官网地址:dovefund.xyz
      </span>
    ),
  },
};
