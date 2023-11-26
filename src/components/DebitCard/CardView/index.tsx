import AspireLogo from "../../../assets/images/AspireLogo.png";
import EyeOpen from "../../../assets/images/remove_red_eye-24px.svg";
import VisaLogo from '../../../assets/images/VisaLogo.png'
import { Button, Col, Image, Row, Typography } from "antd";
import { CardObject } from "../../../types";

const { Text } = Typography;
const width = 462;
const CARD_WIDTH = width - 48;
const CARD_HEIGHT = 0.6 * CARD_WIDTH;

const CardNumberDisplay = (
  cardDetailsDisplayed: boolean,
  cardNumber: string
) => {
  const styles = {
    bullets: {
      height: 8,
      width: 8,
      borderRadius: 8,
      marginRight: 6,
      marginTop: 24,
      backgroundColor: "white",
    },
  };

  if (cardDetailsDisplayed) {
    return (
      <Row>
        {[...Array(4)].map((_, index) => (
          <Text
            key={index}
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: 16,
              width: 50,
              letterSpacing: 2,
            }}
          >
            {cardNumber.substring(index * 4, (index + 1) * 4)}
          </Text>
        ))}
      </Row>
    );
  } else {
    return (
      <Row>
        {[...Array(3)].map((_, index) => (
          <Col
            style={{ marginRight: 25, display: "flex", flexDirection: "row" }}
          >
            {[...Array(4)].map((_, index) => (
              <Col key={index} style={styles.bullets}></Col>
            ))}
          </Col>
        ))}
        <Text
          style={{
            color: "white",
            fontWeight: "600",
            fontSize: 14,
            width: 50,
            letterSpacing: 2,
            marginTop: 16,
          }}
        >
          {cardNumber.substring(12, 16)}
        </Text>
      </Row>
    );
  }
};

const CardView = (card: CardObject) => {

  return (
    <Col style={{ width: CARD_WIDTH, height: CARD_HEIGHT + 32, marginTop: 20, }}>
      <Row
        style={{
          backgroundColor: "white",
          justifyContent: "flex-end",
          alignItems: 'flex-end',
          display: 'flex',
          zIndex: 2132435443,
        }}
      >
        <Button type="text">
        <Row
          style={{ color: "#01D167", fontSize: 10, fontWeight: "600", marginRight: -15}}
        >
            <Image src={EyeOpen} preview={false} />
            <Col style={{marginLeft: 5}}>
               {"Show card number"}
            </Col>
          
        </Row>
        </Button>
       
      </Row>
      <Col
        style={{
          backgroundColor: "#01D167",
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          padding: 5,
          borderRadius: 10,
          marginTop: 3,
          zIndex: 9999,
        }}
      >
        <Col
          style={{
            marginTop: 24,
            height: 21,
            marginRight: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Image style={{ width: 74 }} src={AspireLogo} preview={false} />
        </Col>
        <Col
          style={{
            height: CARD_HEIGHT - 89,
            flexDirection: "column",
            marginTop: 33,
            alignContent: "space-between",
          }}
        >
          <Col style={{ flex: 1, justifyContent: "center", marginLeft: 24 }}>
            <Text style={{ color: "white", fontWeight: "700", fontSize: 22 }}>
              {card.cardHolderName}
            </Text>
          </Col>
          <Col
            style={{
              flex: 1,
              marginLeft: 24,
              alignContent: "space-between",
            }}
          >
            <Col style={{ height: 17}}>
              {CardNumberDisplay(false, card.cardNumber)}
            </Col>
            <Col style={{ flexDirection: "row", marginTop: 30, display: 'flex' }}>
              <Text style={{ color: "white", fontSize: 13, fontWeight: "600",
                            fontFamily: "Open Sans, sans-serif", }}>
                Thru: {card.expirationDate}
              </Text>
              <Text
                style={{
                  color: "white",
                  fontWeight: "600",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: 13,
                  marginLeft: 40,
                }}
              >
                CVV: 
              </Text>
              <Col style={{
                  color: "white",
                  fontWeight: "600",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: 24,
                  marginLeft: 10,
                  marginTop: -4
                }}>{"* * *"}</Col>
            </Col>
          </Col>
        </Col>
        <Col
          style={{
            marginBottom: 24,
            marginRight: 24,
            marginTop: -40,
            height: 20,
            display: 'flex',
            justifyContent: "flex-end",
          }}
        >
          <Image style={{ width: 59 }} src={VisaLogo} preview={false} />
        </Col>
      </Col>
      <Col
        style={{
          width: width,
          height: 85,
          borderTopRightRadius: 18,
          borderTopLeftRadius: 18,
          marginBottom: 0,
          marginLeft: -24,
          marginRight: -24,
        }}
      />
    </Col>
  );
};

export default CardView;
