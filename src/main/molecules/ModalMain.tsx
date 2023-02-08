import { Button, DatePicker, DatePickerProps, Modal, Select } from "antd";
import React, { ReactNode, useState } from "react";
import { ButtonHeaderMainPage } from "../atoms/ButtonHeaderMainPage";
export type Modal = {
  children: ReactNode;
  open: boolean;
};
export const ModalMain = (props: Modal): JSX.Element => {
  const { children } = props;
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <ButtonHeaderMainPage children={children} onClick={showModal} />
      <Modal
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
        onCancel={handleCancel}
        style={styles.modal as React.CSSProperties}
        open={isModalOpen}
        onOk={handleOk}
        confirmLoading={confirmLoading}
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
                defaultValue="Выбрать"
                style={styles.selectModal as React.CSSProperties}
                allowClear
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
                style={styles.selectModal as React.CSSProperties}
                allowClear
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
    background: "var(--button-text-color)",
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
    background: "var(--button-text-color)",
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
    borderRadius: "8px",
    background: "white",
  },
};
