import GroupCard from "../../../assets/images/Group1.svg";
import UpArrow from "../../../assets/images/up-arrow.svg";
import FireStorage from "../../../assets/images/file-storage.svg";
import BusinessCard from "../../../assets/images/business-and-finance.svg";
import Next from "../../../assets/images/next.svg";

import "./index.css";
import { Col, Image, Row, Typography, List } from "antd";
import { MobileCheck } from "../../../types";
import { FC } from "react";
const { Text } = Typography;

const transactions: any = [
  {
    name: "Hamleys",
    date: "05/20/2020",
    mode: "credit",
    amount: "150",
  },
  {
    name: "Hamleys",
    date: "05/20/2020",
    mode: "debit",
    amount: "150",
  },
  {
    name: "Hamleys",
    date: "05/20/2020",
    mode: "debit",
    amount: "150",
  },
  {
    name: "Hamleys",
    date: "05/20/2020",
    mode: "debit",
    amount: "150",
  },
];

const TransactionHeader: FC<MobileCheck> = ({isMobile}) => {
  return (
    <Row
      style={{
        width: isMobile ? '90vw' : 366,
        marginTop: -40,
        marginLeft: -45,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Row
        style={{
          backgroundColor: "#F5F9FF",
          width: isMobile ? '90vw' : 366,
          height: 84,
          paddingTop: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 8,
          padding: 24,
          boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Row>
          <Image src={GroupCard} preview={false} />
          <Text
            color="#0C365A"
            style={{
              fontSize: 14,
              fontFamily: "Open Sans, sans-serif",
              marginLeft: 16,
            }}
          >
            Recent transactions
          </Text>
        </Row>
        <Image src={UpArrow} preview={false} />
      </Row>
    </Row>
  );
};

const TransactionFooter: FC<MobileCheck> = ({isMobile}) => {
  return (
    <Row
      style={{
        backgroundColor: "#EDFFF5",
        width: isMobile ? '90vw' : 365,
        marginLeft: 1,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        color: "#01D167",
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 600,
        fontSize: 13,
        textAlign: "center",
        padding: 24,
        marginTop: -10,
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      View all card transactions
    </Row>
  );
};

const formatDate = (inputDate: string) => {
  const date = new Date(inputDate);
  const day = date.getDate();
  const monthAbbreviation = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  const formattedDate = `${day} ${monthAbbreviation} ${year}`;
  return formattedDate;
};

const AvatarView = () => {
  return (
    <Row
      style={{
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: -25,
        display: "flex",
        backgroundColor: "#009DFF1A",
      }}
    >
      <Image src={FireStorage} preview={false} />
    </Row>
  );
};

type Transaction = {
  name: string;
  date: string;
  amount: string;
  mode: string;
};

const ListTitle = (transaction: Transaction) => {
  return (
    <Col>
      <Text
        style={{
          color: "#222222",
          fontFamily: "Open Sans, sans-serif",
          fontWeight: "bold",
          fontSize: 14,
        }}
      >
        {transaction?.name}
      </Text>
      <Row
        style={{
          color: "#AAAAAA",
          fontSize: 13,
          fontFamily: "Open Sans, sans-serif",
        }}
      >
        {formatDate(transaction.date)}
      </Row>
    </Col>
  );
};

const TransactionDescription = (transaction: Transaction) => {
  return (
    <Row style={{ marginTop: 20, flexDirection: 'row', display: 'flex' }}>
      <Row
        style={{
          width: 24,
          height: 20,
          borderRadius: 12,
          justifyContent: "center",
          marginRight: 8,
          alignItems: "center",
          display: "flex",
          backgroundColor: "#325BAF",
        }}
      >
        <Image
          src={BusinessCard}
          preview={false}
          style={{ textAlign: "center", marginBottom: 4 }}
        />
      </Row>
      <Text
        style={{
          color: "#325BAF",
          fontFamily: "Open Sans, sans-serif",
          fontWeight: "bold",
          fontSize: 12,
        }}
      >
        {`${
          transaction.mode === "credit" ? "Refund on " : "Charged to "
        }debit card`}
      </Text>
    </Row>
  );
};

const TransactionAmount = (transaction: Transaction) => {
    return(
        <Row style={{marginBottom: 54, marginRight: -20}}>
            <Text style={{color: transaction.mode === 'debit' ? '#222' :'#01D167', fontFamily: "Open Sans, sans-serif",
          fontWeight: "bold",
          marginRight: 11,
          fontSize: 14,}}>
                {`${transaction.mode === 'debit' ? '- S$ ' : '+ S$ ' }${transaction.amount}`}
            </Text>
            <Image src={Next} preview={false}/>
        </Row>
    )
}
const CardTransaction: FC<MobileCheck> = ({isMobile}) => {
  const renderItem = (transaction: any) => {
    return (
      <List.Item style={{ paddingTop: 15 }}>
        <List.Item.Meta
          avatar={<AvatarView />}
          title={<ListTitle {...transaction} />}
          description={<TransactionDescription {...transaction} />}
        />
        <TransactionAmount {...transaction}/>
      </List.Item>
    );
  };
  return (
    <Col>
      <List
        dataSource={transactions}
        bordered
        header={<TransactionHeader isMobile={isMobile} />}
        style={{
          width:isMobile ? '90vw' : 366,
          backgroundColor: "#fff",
          marginTop: 54,
          padding: 20,
          borderColor: "#F0F0F0",
          borderRadius: 8,
          zIndex: 100,
          overflow: "hidden",
        }}
        renderItem={renderItem}
      />
      <TransactionFooter isMobile={isMobile} />
    </Col>
  );
};

export default CardTransaction;
