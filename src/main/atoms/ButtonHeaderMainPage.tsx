import { Button, DatePicker, DatePickerProps, Modal, Select } from "antd";
import React, { ReactNode, useState } from "react";
import pic from "../../image/Group 1.svg";
export type ButtonHeader = {
  children: ReactNode;
  onClick: (event: MouseEvent) => void;
};
export const ButtonHeaderMainPage = (props: ButtonHeader): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmLoading] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button
        onClick={showModal}
        style={styles.buttonHeader as React.CSSProperties}
      >
        <div style={styles.basicHeader as React.CSSProperties}>
          <img alt="" src={pic} />
          <div style={styles.textHeader}>Новая задача</div>
        </div>
      </button>
      <Modal
        onCancel={handleCancel}
        style={styles.modal as React.CSSProperties}
        open={isModalOpen}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        footer={[
          <div style={styles.buttonModal as React.CSSProperties}>
            <div style={styles.cancelButtonModal as React.CSSProperties}>
              <Button
                onClick={handleCancel}
                style={styles.cancelButton as React.CSSProperties}
              >
                <div style={styles.textCancelButton}>Отменить</div>
              </Button>
            </div>
            <Button style={styles.saveTemplate as React.CSSProperties}>
              <div style={styles.textSaveTemplate}>Сохранить как шаблон</div>
            </Button>
            <Button
              onClick={handleOk}
              style={styles.addButton as React.CSSProperties}
            >
              <div style={styles.textCancelButton}>Добавить</div>
            </Button>
          </div>,
        ]}
      >
        <div style={styles.titleModal as React.CSSProperties}>
          <div style={styles.textModal}>Добавить новую задачу</div>
        </div>
        <div style={styles.contentModal as React.CSSProperties}>
          <div style={styles.itemContent as React.CSSProperties}>
            <div style={styles.itemTextModal}>Что нужно сделать?</div>
            <input style={styles.taskModal as React.CSSProperties}></input>
          </div>
          <div style={styles.item2Content as React.CSSProperties}>
            <div style={styles.categoriesModal as React.CSSProperties}>
              <div style={styles.titleCategoriesModal}>Категория</div>
              <Select
                bordered={false}
                defaultValue="Выбрать"
                style={styles.selectModal as React.CSSProperties}
                options={[{ value: "lucy", label: "Lucy" }]}
              />
            </div>
            <div style={styles.categoriesModal as React.CSSProperties}>
              <div style={styles.titleCategoriesModal}>Когда?</div>
              <DatePicker
                style={styles.selectModal as React.CSSProperties}
                onChange={onChange}
              />
            </div>
            <div style={styles.categoriesModal as React.CSSProperties}>
              <div style={styles.titleCategoriesModal}>Приоритет задачи</div>
              <Select
                defaultValue="Выбрать"
                bordered={false}
                style={styles.selectModal as React.CSSProperties}
                options={[{ value: "lucy", label: "Lucy" }]}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
const styles = {
  buttonHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px",
    width: "182px",
    height: "42px",
    background: "#29A19C",
    borderRadius: "8px",
    cursor: "pointer",
    // border: "none",
  },
  basicHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "42px",
  },
  textHeader: {
    width: "104px",
    height: "22px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "0.01e",
    color: "#FAFAFA",
  },
  buttonModal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: "0px",
    gap: "10px",
    width: "660px",
    height: "65px",
  },
  cancelButtonModal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    width: "292px",
    height: "42px",
  },
  cancelButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 25px",
    gap: "10px",
    width: "124px",
    height: "42px",
    background: "#F05454",
    borderRadius: "8px",
    cursor: "pointer",
  },
  textCancelButton: {
    width: "74px",
    height: "22px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "0.01em",
    color: "#FAFAFA",
  },
  saveTemplate: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 25px",
    gap: "10px",
    width: "224px",
    height: "42px",
    border: "1px solid #29A19C",
    borderRadius: "8px",
    cursor: "pointer",
    background: "#ffffff",
  },
  textSaveTemplate: {
    width: "174px",
    height: "22px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "22x",
    lineHeight: "22px",
    letterSpacing: "0.01em",
    color: "#29A19C",
  },
  addButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 25px",
    gap: "10px",
    width: "124px",
    height: "42px",
    background: "#29A19C",
    borderRadius: "8px",
    cursor: "pointer",
  },
  modal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    gap: "30px",
    position: "relative",
    width: "700px",
    height: "350px",
    // background: "#FFFFFF",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",
    borderRadius: "10px",
  },
  titleModal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: "30px",
    gap: "20px",
    width: "660px",
    height: "27px",
  },
  textModal: {
    width: "236px",
    height: "27px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "27px",
    letterSpacing: "0.02em",
    color: "#29A19C",
  },
  contentModal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "30px",
    width: "660px",
    height: "158px",
  },
  itemContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "660px",
    height: "64px",
  },
  itemTextModal: {
    width: "137px",
    height: "19px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.02,em",
    color: "#282846",
  },
  taskModal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    // padding: "8px 15px",
    gap: "10px",
    width: "660px",
    height: "35px",
    border: "1px solid rgba(40, 40, 70, 0.1)",
    borderRadius: "8px",
  },
  inputModal: {
    width: "123px",
    height: "19px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.02em",
    color: "#000000",
  },
  item2Content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px",
    gap: "30px",
    width: "660px",
    height: "64px",
    // background: "var(--button-text-color)",
  },
  categoriesModal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "200px",
    height: "64px",
    background: "white",
  },
  titleCategoriesModal: {
    width: "127px",
    height: "19px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.02em",
    color: "#282846",
  },
  selectModal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "10px",
    width: "200px",
    height: "35px",
    border: "1px solid #d9d9d9",
    borderRadius: "8px",
    background: "white",
  },
};
