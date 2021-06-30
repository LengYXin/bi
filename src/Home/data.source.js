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
        <p>DOF 全球首个提升互联网去中心化良性影响力的公益及投资安全评估项目！</p>
        <p> </p>
        <p>DoveFund（DOF）是以BSC链为基础为用户提供参与公益事业和项目投资风险评估的治理代币，对接全球公益组织致力实现信息共享及社区精神环境建设为公益慈善捐助为己任。所有捐赠及援助项目均由全球公益组织提供社区投票选出由DOF基金完成实体捐赠落地。为去中心化公益赋能！
          DOF是去互联网去中心化的首个虚拟到现实慈善项目，所有需要捐赠及援助的项目均由社区投票选出由DOF基金完成实体捐赠落地。
          我们会以社区投票基金捐赠的同时也接受所有持币的社区用户捐赠同时完成互联网去中心化的优秀生态体系为目标。</p>
      </span>
    ),
  },
  button: { className: 'banner0-button', children: '' },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '项目特点' }],
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
          content: { children: 'DOF是具有虚拟到现实的可持续性公益去中心化货币，每一个持币用户均有权利选择投票需要帮助的人或者地区所有的决定均由社区进行投票决定，' },
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
          content: { children: '同时接受所有需要帮助人或者地区进行项目申请且公布信息于社区由成员投票以及代币捐赠，最终由基金会将所有获取捐赠的资金落地到现实需要帮助的人身上。我们会对接全球各大公益性组织实现去中心化公益社区-现实公益项目-落地转换，提高互联网去中心化优秀生态的良性影响力。让人们能感受到互联网去中心化的公益心。' },
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
          content: { children: '投资安全评估是DOF另一大特征之一，目前投资环境恶劣牛头马面众多用户的资金流失率太高，DOF针对环境投资安全为用户提供项目投资评估参考、为项目方提供投资安全审计评级（A+ — D-），为用户投资护航！为优秀项目赋能，让大家都能看到您！' },
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
        children: '运营机制',
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
          text: { children: '项目特点', className: 'content7-tag-name' },
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
                <div> DOF是具有虚拟到现实的可持续性公益去中心化货币，每一个持币用户均有权利选择投票需要帮助的人或者地区所有的决定均由社区进行投票决定，</div>
                <div>同时接受所有需要帮助人或者地区进行项目申请且公布信息于社区由成员投票以及代币捐赠，最终由基金会将所有获取捐赠的资金落地到现实需要帮助的人身上。我们会对接全球各大公益性组织实现去中心化公益社区-现实公益项目-落地转换，提高互联网去中心化优秀生态的良性影响力。让人们能感受到互联网去中心化的公益心。</div>
                投资安全评估是DOF另一大特征之一，目前投资环境恶劣牛头马面众多用户的资金流失率太高，DOF针对环境投资安全为用户提供项目投资评估参考、为项目方提供投资安全审计评级（A+ — D-），为用户投资护航！为优秀项目赋能，让大家都能看到您！

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
          text: { className: 'content7-tag-name', children: '运营机制' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <div>完美收藏价值 - 基金收益回购销毁 持续升值 公益回馈</div>
                <div>公益持续 - 人人一颗爱心</div>
                <div>基金投资- 项目高回报率</div>
                <div>基金分红 -基金投资分红BNB</div>
                <div>投资评估 -用户增长率高</div>

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
          text: { children: '项目愿景', className: 'content7-tag-name' },
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
                我们的愿景是打造一个既能去中心化的公益社区组织又能将去中心化的公益项目落地的基金，我们认为：互联网去中心化应该需要一个能提升虚拟圈良性影响力的货币基金。
                每个人都有一颗爱心，不论是社区成员还是有公益心的去中心化用户拿上有影响力的投票权来决定慈善项目的帮助及捐赠，DOF（DoveFund）都是他们的不二选择。
                针对目前投资环境恶劣用户可通过DOF的一级、二级市场项目风险审核公示让更多的用户能真正的了解项目的风险性、资金率、安全性、支撑点以及投资收益率，防止用户资产流失！

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
  OverPack: {
    className:
      'home-page-wrapper content13-wrapper home-page-wrapper content13-wrapper jnwq7vhwgqg-editor_css',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '项目应用场景', className: 'title-h1' },
      {
        name: 'content',
        children: (
          <div>
            DOF（DoveFund）会为全球受灾地区、受灾群众、需要帮助的人提供一套完整的公益援助方案，社区项目展示由社区成员就
            项目进行选择性的影响力投票最终确定我们需要帮助的地区、群众或者事物以及援助金额，最终由DOF基金会完成援助项目的落地。
            同时我们会为需要帮助的群众提供社区项目申请，由社区成员进行影响力投票上架项目且再次投票或捐助相关的援助金额，最终由DOF基金会完成援助项目落地。
            公益无国界，DOF计划对接全球的公益性组织实现信息共享，旨在建立一个开放的、具有可持续性公益代币经济体系。
            DOF项目风险及投资评估面向全球虚拟代币项目进行风险、资产、背景、机制、可持续性进行深度评估。一级、二级项目均可通过审计标准进行风险投资等级报告和建议，会不定期对项目风险等级进行上下调整给投资用户更有力的选择，欢迎各大项目方联系DOF项目组提供有效资料及信息进行风险审查公示让更多的投资者了解您的项目，同时用户防止资产流失！
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
export const Content130DataSource2 = {
  OverPack: {
    className:
      'home-page-wrapper content13-wrapper home-page-wrapper content13-wrapper jnwq7vhwgqg-editor_css',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '代币分配', className: 'title-h1' },
      {
        name: 'content',
        children: (
          <div>
            代币总量：1000000000 <br />
            锁定30% 300000000 社区投票出售用于捐赠援助项目<br />
            流动30％ 300000000<br />
            战略15％ 150000000<br />
            私募15 ％ 150000000<br />
            团队  8 ％ 80000000<br />
            空头  2 ％ 20000000<br />
          </div>
        ),
        className: 'title-content',
      },
      {
        name: 'content2',
        children: '无挖矿 空投与私募期间可持币且不流通 流通后交易手续费0.8 ％',
        className: 'title-content',
      },
    ],
  },
};
export const Content130DataSource3 = {
  OverPack: {
    className:
      'home-page-wrapper content13-wrapper home-page-wrapper content13-wrapper jnwq7vhwgqg-editor_css',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '锁定钱包', className: 'title-h1' },
      {
        name: 'content',
        children: (
          <div>
            锁定代币的30％均由社区投票进行出售并全部捐献于社区投票量第一需帮助的慈善目标，单次投票售量不高于总锁定的0.5％具体以基金市场价格定。
            持币分红：
            交易手续费0.8 ％全部用于DOF基金，DOF基金会将所有交易手续费用户虚拟投资或实体项目投资且持币高于：0天用户会得到BNB收益分红。
            我们坚信喜欢做公益的人一定能有回报。
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
export const Content130DataSource4 = {
  OverPack: {
    className:
      'home-page-wrapper content13-wrapper home-page-wrapper content13-wrapper jnwq7vhwgqg-editor_css',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '生态系统', className: 'title-h1' },
      {
        name: 'content',
        children: (
          <div>
            1.每笔交易收取0.8 ％的手续费作为DOF基金用于资金储备以及项目投资
            资金储备用于社区投票基金会捐款 项目投资我们会以DOF基金名义进行虚拟投资 <br />

            2.投资分红 基金会虚拟投资盈亏15日/次公布于社区，分红标准为连续持币30日及以上用户以持币量进行手动BNB/USDT分红。 <br />

            3.DOF基金作为社区储备金添加流动性后会以每日播报金额，上交易所会邀请交易所及平台进行监督以及每日播报防止弄虚作假。 <br />

            4.DOF接受所有市场项目方提交的信息、安全审查报告、资金储备、持币量、交易流动比例、15天交易量、项目进展、项目发展规划进行深度评估并公示给予投资安全等级，让用户在投资过程中有好的参考防止资产流失，让项目方的项目一目了然的展示给用户便于项目推广和募资。
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
export const Content130DataSource5 = {
  OverPack: {
    className:
      'home-page-wrapper content13-wrapper home-page-wrapper content13-wrapper jnwq7vhwgqg-editor_css',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '运作流程', className: 'title-h1' },
      {
        name: 'content',
        children: (
          <div>
            一 项目信息收集-社区投票援助对象-援助金额投票（DOF基金支付/社区捐款支付）-对接援助人/机构/地区-实现项目落地<br />

            二 援助人信息申报-基金会审核真实性-上架官网-社区投票援助方式-DOF基金对接人/机构/地区-实现项目落地<br />

            三 项目所有人申请-递交资料-DOF审核资料-风险评估-投资评估-投资等级内容公示-用户参考投资<br />
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
      { name: 'title', children: 'DOF官网', className: 'title-h1' },
      {
        name: 'content',
        children: (
          <div>
            允许用户查看所有需援助的人/机构/地区并集成所有信息供用户进行参考以及影响力投票<br />

            开设援助人/机构/地区项目申报，一旦查核虚假申报将关闭相关人/机构/地区的申报资格且进入黑名单并进行公示。<br />

            DOF基金金额、投资项目、盈亏情况（基金分红 支持个人钱包分红以及交易所持币地址账户分红）<br />

            DOF审查投资安全评估项目公示及评级，用户可进行参考性投资，让用户的投资更有方向和安全感！<br />

            我们尝试将募捐将加密货币等方式集成到网站中，募捐将为指定钱包进行公示同时开通银行卡、信用卡、PayPai、虚拟货币等多种支付方式<br />
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
      { name: 'title', children: '发展轨迹及愿景', className: 'title-h1' },
      {
        name: 'content',
        children: (
          <div>
            <table >
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
            </table>
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
