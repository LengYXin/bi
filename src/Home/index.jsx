/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";

import Banner0 from "./Banner0";
import Content0 from "./Content0";
import Content1 from "./Content1";
import Content3 from "./Content3";
import Content7 from "./Content7";
import Content13 from "./Content13";
import Feature2 from "./Feature2";
import Feature4 from "./Feature4";
import Pricing0 from "./Pricing0";

import {
  Banner00DataSource,
  Content00DataSource,
  Content70DataSource,
  Content130DataSource,
  Content130DataSource2,
  Content130DataSource22,
  Content130DataSource3,
  Content130DataSource4,
  Content130DataSource5,
  Content130DataSource6,
  Content130DataSource7,
  Content130DataSource8,
  Content120DataSource,
} from "./data.source_en";

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const location = window.location;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Banner0
        id="Banner0_0"
        key="Banner0_0"
        dataSource={Banner00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content13
        id="Content13_08"
        key="Content13_08"
        dataSource={Content130DataSource8}
        isMobile={this.state.isMobile}
      />,
      <Content7
        id="Content7_0"
        key="Content7_0"
        dataSource={Content70DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content1
        id="Content13_0"
        key="Content13_0"
        dataSource={Content130DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content3
        id="Content13_01"
        key="Content13_01"
        dataSource={Content130DataSource2}
        isMobile={this.state.isMobile}
      />,
      <Pricing0
        id="Content13_011"
        key="Content13_011"
        dataSource={Content130DataSource22}
        isMobile={this.state.isMobile}
      />,
      <Feature2
        id="Content13_03"
        key="Content13_03"
        dataSource={Content130DataSource3}
        isMobile={this.state.isMobile}
      />,
      <Feature4
        id="Content13_04"
        key="Content13_04"
        dataSource={Content130DataSource4}
        isMobile={this.state.isMobile}
      />,
      <Content13
        id="Content13_05"
        key="Content13_05"
        dataSource={Content130DataSource5}
        isMobile={this.state.isMobile}
      />,
      <Content13
        id="Content13_06"
        key="Content13_06"
        dataSource={Content130DataSource6}
        isMobile={this.state.isMobile}
      />,
      <Content13
        id="Content13_07"
        key="Content13_07"
        dataSource={Content130DataSource7}
        isMobile={this.state.isMobile}
      />,
      // <Content12
      //   id="Content12_0"
      //   key="Content12_0"
      //   dataSource={Content120DataSource}
      //   isMobile={this.state.isMobile}
      // />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
