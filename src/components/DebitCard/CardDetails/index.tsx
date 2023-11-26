import GroupCard from "../../../assets/images/Group.svg";
import DownArrow from "../../../assets/images/down-arrow.svg";
import { Image, Row, Typography } from "antd";
import { MobileCheck } from "../../../types";
import { FC } from "react";

const { Text } = Typography;

const CardDetail: FC<MobileCheck> = ({isMobile}) => {
  return (
    <Row style={{
        backgroundColor: "#F5F9FF",
        width: isMobile? '90%' : 366,
        height: 72,
        marginTop: 54,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        display: 'flex',
        padding: 24,
        zIndex: 9999,
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)'
      }}>
      <Row>
        <Image src={GroupCard} preview={false}/>
        <Text color="#0C365A" style={{fontSize: 14, fontFamily: 'Open Sans, sans-serif', marginLeft: 16}}>
        Card details
        </Text>
        </Row>
        <Image src={DownArrow} preview={false}/>
    </Row>
  );
};

export default CardDetail;
