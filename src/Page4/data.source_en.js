import React from 'react';

export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '产品与服务' }],
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
          title: { children: '一站式业务接入' },
          content: { children: '支付、结算、核算接入产品效率翻四倍' },
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
          title: { children: '一站式事中风险监控' },
          content: { children: '在所有需求配置环节事前风险控制和质量控制能力' },
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
          title: { children: '一站式数据运营' },
          content: { children: '沉淀产品接入效率和运营小二工作效率数据' },
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
        children: 'How to contact us ',
        className: 'title-h1',
      },
      { name: 'content', children: 'All information collection please go through dovefunddof@gmail.com conduct！' },
    ],
  },
  tabsWrapper: { className: 'content7-tabs-wrapper' },
  block: {
    children: [
      {
        name: 'block0',
        tag: {
          className: 'content7-tag',
          text: { children: 'How to contact us ', className: 'content7-tag-name' },
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
                Official website: dovefund.xyz <br/>
                Official email: dovefunddof@gmail.com<br/>
                Official Twitter: twitter.com/dof_ coin_<br/>
                Official telegram: t.me/dovefundcn<br/>
                Chinese community: 0.plus/dovefundcn<br/>
                If you are a project party, you need to carry out project risk level assessment and promotion and go to the DOF website to provide the following information: project name, project logo, white paper, website address, fund reserve certificate, project time planning form as initial assessment information collection, After receiving the information and information, DOF will audit the information of the project for 3 working days, observe and give the risk level and make the information public and put it on the shelf. If there is any update of the latest data: for example, audit report, exchange listing and other security levels, please submit the information in time to facilitate the change of risk level.

                If you want to publish information on the official website of DOF for publicity, please provide relevant evidence: project name, project logo, chat record, transfer voucher, and cheated information. After summarizing, we will make publicity to prevent other users from being cheated.

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
      // {
      //   name: 'block1',
      //   tag: {
      //     className: 'content7-tag',
      //     icon: { children: 'tablet' },
      //     text: { className: 'content7-tag-name', children: 'TABLET' },
      //   },
      //   content: {
      //     className: 'content7-content',
      //     text: {
      //       className: 'content7-text',
      //       md: 14,
      //       xs: 24,
      //       children: (
      //         <span>
      //           <h3>技术</h3>
      //           <p>
      //             丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
      //           </p>
      //           <br />
      //           <h3>融合</h3>
      //           <p>
      //             解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
      //           </p>
      //           <br />
      //           <h3>
      //             开放
      //           </h3>
      //           符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
      //         </span>
      //       ),
      //     },
      //     img: {
      //       className: 'content7-img',
      //       md: 10,
      //       xs: 24,
      //       children:
      //         'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
      //     },
      //   },
      // },
      // {
      //   name: 'block2',
      //   tag: {
      //     className: 'content7-tag',
      //     text: { children: 'DESKTOP', className: 'content7-tag-name' },
      //     icon: { children: 'laptop' },
      //   },
      //   content: {
      //     className: 'content7-content',
      //     text: {
      //       className: 'content7-text',
      //       md: 14,
      //       xs: 24,
      //       children: (
      //         <span>
      //           <h3>技术</h3>
      //           <p>
      //             丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
      //           </p>
      //           <br />
      //           <h3>融合</h3>
      //           <p>
      //             解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
      //           </p>
      //           <br />
      //           <h3>
      //             开放
      //           </h3>
      //           符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
      //         </span>
      //       ),
      //     },
      //     img: {
      //       className: 'content7-img',
      //       md: 10,
      //       xs: 24,
      //       children:
      //         'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
      //     },
      //   },
      // },
    ],
  },
};
export const Content70DataSource3 = {
  wrapper: { className: 'home-page-wrapper content7-wrapper' },
  page: { className: 'home-page content7' },
  OverPack: {},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: 'Asset Supervision',
        className: 'title-h1',
      },
      { name: 'content', children: 'The public welfare account locks 30% of the token, the community and platform vote for the sale and the landing of the aid fund, and invites the platform organization to supervise together to ensure the fund security and the actual landing of the project.' },
    ],
  },
  tabsWrapper: { className: 'content7-tabs-wrapper' },
  block: {
    children: [
      {
        name: 'block0',
        tag: {
          className: 'content7-tag',
          text: { children: 'Asset Supervision', className: 'content7-tag-name' },
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
                <h3>Regulators******** </h3>
                <p>
                Regulators********
                </p>
                <br />
                <h3>30% (300000000 tokens) of regulatory project  </h3>
                <p>
                Supervision project DOF Foundation
                </p>
                <br />
                <h3>
                Wallet address publicity and sales ratio
                </h3>
                Regulatory amount:***
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
      // {
      //   name: 'block1',
      //   tag: {
      //     className: 'content7-tag',
      //     icon: { children: 'tablet' },
      //     text: { className: 'content7-tag-name', children: 'TABLET' },
      //   },
      //   content: {
      //     className: 'content7-content',
      //     text: {
      //       className: 'content7-text',
      //       md: 14,
      //       xs: 24,
      //       children: (
      //         <span>
      //           <h3>技术</h3>
      //           <p>
      //             丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
      //           </p>
      //           <br />
      //           <h3>融合</h3>
      //           <p>
      //             解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
      //           </p>
      //           <br />
      //           <h3>
      //             开放
      //           </h3>
      //           符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
      //         </span>
      //       ),
      //     },
      //     img: {
      //       className: 'content7-img',
      //       md: 10,
      //       xs: 24,
      //       children:
      //         'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
      //     },
      //   },
      // },
      // {
      //   name: 'block2',
      //   tag: {
      //     className: 'content7-tag',
      //     text: { children: 'DESKTOP', className: 'content7-tag-name' },
      //     icon: { children: 'laptop' },
      //   },
      //   content: {
      //     className: 'content7-content',
      //     text: {
      //       className: 'content7-text',
      //       md: 14,
      //       xs: 24,
      //       children: (
      //         <span>
      //           <h3>技术</h3>
      //           <p>
      //             丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
      //           </p>
      //           <br />
      //           <h3>融合</h3>
      //           <p>
      //             解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
      //           </p>
      //           <br />
      //           <h3>
      //             开放
      //           </h3>
      //           符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
      //         </span>
      //       ),
      //     },
      //     img: {
      //       className: 'content7-img',
      //       md: 10,
      //       xs: 24,
      //       children:
      //         'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
      //     },
      //   },
      // },
    ],
  },
};
