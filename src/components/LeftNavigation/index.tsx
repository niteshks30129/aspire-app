import { Col, Menu, Skeleton, Space } from "antd";

import AspireLogo from "../../assets/images/aspire_logo.svg";

import { useMediaQuery } from "react-responsive";

import { GetAccessControlledNav } from "./config";
import React from "react";
import "./index.css";

const LeftNavigation: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 567 });
  const leftNavConfig = GetAccessControlledNav();
  return (
    <Col
      style={{
        height: "100%",
        width: isMobile ? "100%" :330,
        position: isMobile ? 'relative' :"fixed",
        paddingLeft: 48,
        paddingRight: 48,
        flexDirection: "column",
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "#0C365A",
        
      }}
      className="mobile-left-nav"
    >
      <Col className="inmobi-logo">
        <Space size="large" align="start">
          <img src={AspireLogo} height={35} width={125} alt="logo" />
        </Space>
      </Col>
      <Col style={{ color: "#FFFFFF", opacity: 0.3, marginBottom: 81 }}>
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </Col>
      {leftNavConfig ? (
        <Menu
          defaultSelectedKeys={["1"]}
          style={{
            backgroundColor: isMobile ? "#fff" : "#0C365A",
            justifyContent: "space-around",
            alignItems: "center",
            paddingTop: 10,
          }}
          mode={isMobile ? "horizontal" : "inline"}
          className="bottom-nav"
          theme={isMobile ? "light" : "dark"}
          items={leftNavConfig}
        />
      ) : (
        <Skeleton active />
      )}
    </Col>
  );
};

export default LeftNavigation;
