import { Card, Col, PageHeader, Row, Skeleton, Space, Tabs, Image } from "antd";
import "./index.css";
import Logo from "../../assets/images/Logo.svg";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarouselCard from "../../components/Caraousel";
import CardOptions from "../../components/DebitCard/CardOptions";
import CardDetail from "../../components/DebitCard/CardDetails";
import CardTransaction from "../../components/DebitCard/Transactions";
import { selectCards, updateCard } from "../../redux/card";
import { fetchCard } from "../../apiClient/DebitCard";
import CardHeader from "../../components/DebitCard/CardHeader";
import AddCard from "../../components/DebitCard/AddCard";
import { CardObject } from "../../types";
import { useMediaQuery } from "react-responsive";

const { TabPane } = Tabs;

const MyCard: React.FC = () => {
  const isMobile: boolean = useMediaQuery({ maxWidth: 567 });

  const dispatch = useDispatch();
  useEffect(() => {
    fetchCard().then((data: any) => {
      setCardNo(0);
      dispatch(updateCard(data));
      
    });
  }, [dispatch]);

  const [cardNo, setCardNo] = useState(0);

  const data: CardObject[] = useSelector(selectCards);

  const slideChange = (cardNo: number) => {
    setCardNo(cardNo);
  };

  const updateCardNo = (isLastCard: boolean) => {
    if(isLastCard){
      setCardNo((no) => no-1)
    }
  }

  console.log("MyCard", data, cardNo)

  return (
    <PageHeader
      title=""
      style={
        isMobile
          ? {
              backgroundColor: "#0C365A",
              position: "absolute",
              left: 0,
              width: "100vw",
              marginTop: -200,
              right: 0,
              zIndex: 1,
            }
          : { margin: 20 }
      }
      subTitle={
        <Col style={isMobile ? { paddingLeft: 15, paddingTop: 40  } : undefined}>
          <CardHeader isMobile={isMobile} />
        </Col>
      }
      // style={{margin: 20}}
      extra={
        <Col style={isMobile ? { paddingRight: 15, paddingTop: 70 } : undefined}>
          {" "}
          {<Image src={Logo} style={{paddingBottom: 10, position: 'absolute', right: -100, top: -60}} />}
          <AddCard isMobile={isMobile} />
        </Col>
      }
      footer={
        <Space
          direction="vertical"
          style={{ width: "100%", marginBottom: "24px" }}
        >
          <Tabs defaultActiveKey="1">
            <TabPane tab={<Space>My debit cards</Space>} key="1">
              <Card
                style={
                  isMobile
                    ? {
                        backgroundColor: "#FFF",
                        borderWidth: 0,
                        marginTop: -30,
                        marginBottom: 30,
                        paddingBottom: 50
                      }
                    : {
                        marginTop: 20.5,
                        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
                      }
                }
              >
                {!data || !data?.length ? (
                  <Skeleton active />
                ) : (
                  <Row>
                    <Col
                      style={
                        isMobile
                          ? {
                              backgroundColor: "#0C365A",
                              padding: 0,
                              paddingRight: 0,
                            }
                          : { paddingRight: 80 }
                      }
                    >
                      <Col
                        style={
                          isMobile ? { padding: 20, marginLeft: 10 } : undefined
                        }
                      >
                        <CarouselCard cards={data} slideChange={slideChange} />
                      </Col>
                      <CardOptions currentCard={data?.[cardNo]} updateCardNo={updateCardNo} />
                    </Col>

                    <div
                      style={{
                        backgroundColor: "#fff",
                        // marginLeft: 60,
                        display: isMobile ?'flex' : 'block',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <CardDetail  isMobile={isMobile} />
                      <CardTransaction isMobile={isMobile} /> 
                    </div>
                  </Row>
                )}
              </Card>
            </TabPane>
            <TabPane key="2" tab={<Space>All company cards</Space>}>
              {<Skeleton active />}
            </TabPane>
          </Tabs>
        </Space>
      }
    />
  );
};

export default MyCard;
