import React , {useState} from 'react';
import styles from './Todo.module.css'
import todo from '../images/todo.svg'
import { ListItems } from './ListItems';
const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items,setItems] = useState([]);
    const [toggleSubmit,setToggleSubmit] = useState(true);
    const[isEditItem,setIsEditItem] = useState(null);

    const onChangeHandler = (e)=>{
        setInputData(e.target.value);
    }

    const addItem = (e)=>{
        if (inputData.length === 0) {
            return;
        }

        const allInputData = {
            id: Math.floor(10000*Math.random()).toString(),
            name: inputData
        };

        // setItems((prevStats,)=>{
        //     return [...prevStats , inputData];
        // })

        setItems((prevState)=>{
            return [...prevState,allInputData];
        })

        setInputData('');
    }

    //~ Remove item handler
    const removeItemsHandler=()=>{
        setItems([]);
    }

    const updateItemHandler = (arg)=>{
        if(inputData && !toggleSubmit){
            setItems(
                items.map((element)=>{
                    if (element.id === isEditItem) {
                        return{...element,name:inputData};
                    }
                    return element;
                })
            )

        }
        setInputData('');
        setIsEditItem(null);
        setToggleSubmit(!toggleSubmit);
    }

  return (
    <>
        <div className={`${styles['main-div']}`} >
            <div className={`${styles['child-div']}`}>
                <figure>
                    <img src={todo} alt='todologo'/>
                <figcaption>
                    Add your List Here , Prozone
                </figcaption>
                </figure>

                <div className={`${styles.addItems}`}>
                    <input type={`text`} placeholder={`Add a Task`} 
                    
                    value={inputData}
                    onChange={onChangeHandler}
                    ></input>

                    {
                        (toggleSubmit)?
                        <i className={`${'fa fa-plus'} ${styles['add-btn']}`} title='Add item' 
                    onClick={addItem}></i>
                        :          <i className={`${'fa fa-edit'} ${styles['add-btn']}`} title='update item' 
                    onClick={updateItemHandler}></i>
                    }
          
                </div>


                <div className={`${styles.showItems}`}>


                {/* list items */}
                    <ListItems items={items} deleteItems={setItems} editItems={setToggleSubmit} setInputData={setInputData} updateItemHandler={updateItemHandler}
                        setIsEditItem={setIsEditItem}
                    />
                </div>


                {/* clear all */}
                <div className={`${styles.showItems}`}>
                    <button className={`${styles.btn} ${styles.effect04}`} data-sm-link-text='Remove All' onClick={removeItemsHandler}><span>Check List</span></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo;