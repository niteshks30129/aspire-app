import {
  Card,
  Col,
  PageHeader,
  Row,
  Skeleton,
  Space,
  Tabs,
} from "antd";
import './index.css'

import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import CarouselCard from "../../components/Caraousel";
import CardOptions from "../../components/DebitCard/CardOptions";
import CardDetail from "../../components/DebitCard/CardDetails";
import CardTransaction from "../../components/DebitCard/Transactions";
import {selectCards, updateCard} from '../../redux/card'
import { fetchCard } from "../../apiClient/DebitCard";
import CardHeader from "../../components/DebitCard/CardHeader";
import AddCard from "../../components/DebitCard/AddCard";
import { CardObject } from "../../types";

const { TabPane } = Tabs;

const MyCard: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        fetchCard().then((data: any) => {
            dispatch(updateCard(data))
        })
    }, [fetchCard])

    const [cardNo, setCardNo] = useState(0)    

  const data: CardObject[] = useSelector(selectCards);

  const slideChange = (cardNo: number) => {
    setCardNo(cardNo)
  }

  return (
    <PageHeader
      title=""
      subTitle={<CardHeader />}
      style={{margin: 20}}
      extra={
        <AddCard />
      }
      footer={
        <Space
          direction="vertical"
          style={{ width: "100%", marginBottom: "24px" }}
        >
          <Tabs defaultActiveKey="1" >
            <TabPane tab={<Space>
                My debit cards
            </Space>} key="1" >
              <Card style={{marginTop: 20.5, boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
}}>
                {!data || !data.length  ? (
                  <Skeleton active />
                ) : (
                    <Row>
                        <Col style={{paddingRight: 80}}>
                            <CarouselCard cards={data} slideChange={slideChange} /> 
                            <CardOptions currentCard={data[cardNo]} />
                        </Col>
                        <Col>
                            <CardDetail />
                            <CardTransaction />
                        </Col>
                    </Row>
                                   
                )}
              </Card>
            </TabPane>
            <TabPane key="2" tab={<Space> 
            All company cards
        </Space>} >
              {<Skeleton active />}
            </TabPane>
          </Tabs>
        </Space>
      }
    />
  );
};

export default MyCard;
