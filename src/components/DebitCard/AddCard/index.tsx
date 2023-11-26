import React, { FC, useState } from "react";
import { Modal, Input, Button, Form } from "antd";
import Box from "../../../assets/images/box.svg";
import { getCardDetails } from "../../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { selectCards, updateCard } from "../../../redux/card";
import { MobileCheck } from "../../../types";


const AddCard: FC<MobileCheck> = ({isMobile}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const cards = useSelector(selectCards);

  const showModal = () => {
    setOpen(true);
    form.resetFields();
  };

  const closeModal = () => {
    setOpen(false);
    form.resetFields();
  };

  const [form] = Form.useForm();

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      const newCardDetail = getCardDetails(values.cardName);
      dispatch(updateCard([...cards, newCardDetail]));
      form.resetFields();
      setOpen(false);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  return (
    <>
      <Button
        key="add"
        type="primary"
      icon={<img src={Box} alt="img" style={{ marginLeft: -5, marginRight: 10 }} />}
        style={{
          backgroundColor: isMobile?"#0C365A": "#325BAF",
          borderColor: isMobile ? "#0C365A": "#325BAF",
          width: 109,
          color: isMobile? "#23CEFD": '#fff',
          height: 35,
          borderRadius: 4,
          textAlign: "center",
          fontSize: 13,
          fontFamily: "Open Sans, sans-serif",
          fontWeight: "bold",
        }}
        onClick={showModal}
      >
        New Card
      </Button>
      <Modal
        open={open}
        title="Enter Card Holder Name"
        closable
        onCancel={closeModal}
        footer={[
          <Button key="cancel" onClick={closeModal}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={handleOk}
            style={{ backgroundColor: "325BAF" }}
          >
            Add
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="cardName"
            label="Card Holder Name"
            rules={[{ required: true, message: "Please enter the card name!" }]}
          >
            <Input placeholder="Enter card holder name" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddCard;
