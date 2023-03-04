import React  from "react";
import styles from "./Todo.module.css";
export const ListItems = (props) => {


  const deleteItemHandler = (id) => {
    const updatedItems = Array.from(props.items).filter((e) => {
      return id !== e.id;
    });
    // console.log(updatedItems);
    props.deleteItems(updatedItems);
    
  };

  const editItemHandler = (id) => {
    let currentItem = Array.from(props.items).find((element)=>{
      return element.id === id;
    });
    
    props.editItems(false);
    props.setInputData(currentItem.name);
    props.setIsEditItem(id);

  };
  return (
    <>
      {Array.from(props.items).map((element) => {
        return (
          <div className={`${styles.eachItem}`} key={element.id}>
            <h3>{element.name}</h3>

            <div className={`${styles["todo-btn"]}`}>
              <i
                className={`fa fa-edit ${styles["add-btn"]}`}
                title="Edit item"
                onClick={() => {
                  editItemHandler(element.id);
                }}
              ></i>
              <i
                className={`fa fa-trash-alt ${styles["add-btn"]}`}
                title="Delete item"
                onClick={() => {
                  deleteItemHandler(element.id);
                }}
              ></i>
            </div>
          </div>
        );
      })}
    </>
  );
};
