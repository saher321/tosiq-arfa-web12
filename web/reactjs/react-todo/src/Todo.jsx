import React, { useState } from 'react'
import { FaRegTrashAlt, FaPlus } from "react-icons/fa";

const Todo = () => {
    const [inputValue, setInputValue] = useState("")
    const [listItems, setListItems] = useState([])

  const addNewItem = () => {
    console.log(inputValue)
    const newArr = [...listItems, inputValue]
    setListItems(newArr)

    setInputValue("");
  }
  const removeItem = (key) => {
    // console.log(key)
    const oldArr = [...listItems];
    oldArr.splice(key, 1);

    setListItems(oldArr)
  }

  return (
    <div className='flex items-center justify-center m-2'>
        <div className='bg-white p-3 rounded'>
            <div>
                <input
                 value={inputValue}
                 onChange={(e) => setInputValue(e.target.value)}
                 className='border p-2 rounded border-gray-400'
                 type="text" placeholder='Enter item'/>
                 
                <button onClick={addNewItem} className='border border-green-800 p-2 rounded ml-2 hover:bg-green-300'>
                    <FaPlus />
                </button>
            </div>
            <hr className='my-4 '/>

            {listItems.length > 0 ?
            <div>
                <ul>
                    { listItems.map((item, i) => {
                        return (
                            <li key={i}>
                                <div className='
                                bg-amber-100 mb-1 p-1 rounded flex items-center justify-between'>
                                    <span>{item}</span>
                                    <button onClick={() => removeItem(i)}> 
                                        <FaRegTrashAlt className='cursor-pointer bg-red-400 p-1 rounded'/>
                                    </button>
                                </div>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>  : "No records found"
            }
        </div>
    </div>
  )
}

export default Todo