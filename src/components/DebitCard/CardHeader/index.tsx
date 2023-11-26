
import { Button, Space } from "antd";
import { MobileCheck } from "../../../types";
import { FC } from "react";

const CardHeader: FC<MobileCheck> = ({isMobile}) => {
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Space
        style={{
          fontFamily: "Open Sans, sans-serif",
          fontWeight: "normal",
          marginLeft: -10,
          color: isMobile ? "#fff" : "#222222",
        }}
      >
        Available balance
      </Space>
      <Space
        direction="horizontal"
        size="middle"
        style={{
          display: "flex",
          marginTop: -14,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          style={{
            backgroundColor: "#01D167",
            borderColor: "#01D167",
            width: 40,
            height: 24,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 13,
          }}
          type="primary"
        >
          S$
        </Button>
        <Space
          style={{
            fontSize: 26,
            color: isMobile ? "#fff" : "#222222",
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: "bolder",
          }}
        >
          3,000
        </Space>
      </Space>
    </Space>
  );
};

export default CardHeader;
