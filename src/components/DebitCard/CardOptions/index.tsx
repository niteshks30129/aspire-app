import FreezeCard from "../../../assets/images/FreezeCard.svg";
import SpendLimit from "../../../assets/images/SpendLimit.svg";
import GPay from "../../../assets/images/GPay.svg";
import ReplaceCard from "../../../assets/images/ReplaceCard.svg";
import DeactivateCard from "../../../assets/images/DeactivateCard.svg";

import "./index.css";
import React, {FC, useState} from "react";
import { Button, Col, Image, Row, Modal, Menu } from "antd";

import { useDispatch, useSelector } from "react-redux";
import type { MenuProps } from "antd";
import { selectCards, updateCard } from "../../../redux/card";
import { deleteCurrentCard, freezeCardHandler } from "../../../utils/helpers";
import { CardObject } from "../../../types";
type MenuItem = Required<MenuProps>["items"][number];

const width = 462;
const CARD_WIDTH = width - 48;

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  onClick?: any,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    onClick,
    type,
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      fontSize: 13,
      alignItems: "center",
      textAlign: "center",
      maxWidth: 80,
    },
    className: "card-item", // Set the desired width for the label
  } as MenuItem;
}

interface CardOptionsProps {
    currentCard: CardObject;
}

const CardOptions: FC<CardOptionsProps>  = ({currentCard}) => {
    const dispatch = useDispatch();
    const cards = useSelector(selectCards);
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
    const getText = (text: string) => {
    return (
      <Row
        style={{
          width: 59,
          maxLines: 2,
          lineHeight: 1.2,
          textAlign: "center",
          color: "#0C365A",
          whiteSpace: "normal",
          textOverflow: "ellipsis",
          marginLeft: -15,
          marginTop: 10,
        }}
      >
        {text}
      </Row>
    );
  };

  const deleteCard = () => {
    const updatedCards = deleteCurrentCard(cards, currentCard)
    dispatch(updateCard(updatedCards))
    setModalIsOpen(false);
  }

  const handleCardFreeze = () => {
    const updatedCards = freezeCardHandler(cards, currentCard)
    dispatch(updateCard(updatedCards))
  }

  const FreezeItem = getItem(
    getText(currentCard.status === 'active' ?  "Freeze card" : "UnFreeze Card"),
    "1",
    <Image src={FreezeCard} preview={false} />,
    handleCardFreeze
  );
  const SpendLimitItem = getItem(
    getText("Set spend limit"),
    "2",
    <Image src={SpendLimit} preview={false} />
  );
  const GPayItem = getItem(getText("Add to GPay"), "3", <Image src={GPay} preview={false} />);
  const ReplaceCardItem = getItem(
    getText("Replace card"),
    "4",
    <Image src={ReplaceCard} preview={false} />
  );
  const CancelCardItem = getItem(
    getText("Cancel card"),
    "5",
    <Image src={DeactivateCard} preview={false} />,
    openModal
  );

  const items = [
    FreezeItem,
    SpendLimitItem,
    GPayItem,
    ReplaceCardItem,
    CancelCardItem,
  ];
  return (
    <Col style={{ width: CARD_WIDTH, marginTop: 20 }}>
      <Col
        style={{
          width: CARD_WIDTH,
        }}
      >
        <Menu
          defaultSelectedKeys={["1"]}
          style={{
            backgroundColor: "#EDF3FF",
            alignItems: "center",
            width: 414,
          }}
          mode={"horizontal"}
          className="card-option"
          rootClassName="cardoption"
          itemProp=""
          theme={"light"}
          items={items}
        />
        <Modal
        open={modalIsOpen}
        onCancel={closeModal}
        title="Remove Card Confirmation"
        footer={[
            <Button key="cancel" onClick={closeModal}>
              Cancel
            </Button>,
            <Button key="submit" type="primary"  onClick={deleteCard} style={{backgroundColor: '325BAF'}}>
              Delete
            </Button>,
          ]}
      >
        {(
          <p style={{fontWeight: 600, opacity: 0.7}}>
            Are you sure you want to remove the card ending in{' '}
            {currentCard?.cardNumber?.slice(-4)}?
          </p>
        )}
      </Modal>
      </Col>
    </Col>
  );
};

export default CardOptions;

