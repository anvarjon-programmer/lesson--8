







import React, { useEffect, useState } from 'react';
import { useReducer } from 'react';
import { IoMdRefresh } from "react-icons/io";

const initialState = {
  items: JSON.parse(localStorage.getItem('todoList')) || [],
  editingIndex: null,
};

const reducer = (state, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload),
        editingIndex: null,
      };
    case 'EDIT_ITEM':
      return {
        ...state,
        editingIndex: action.payload,
      };
    case 'UPDATE_ITEM':
      const updatedItems = [...state.items];
      updatedItems[state.editingIndex] = action.payload;
      return {
        ...state,
        items: updatedItems,
        editingIndex: null, 
      };
    default:
      return state;
  }
};

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editValue, setEditValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setpasswordValue] = useState('');


  const addItem = (text) => {
    dispatch({ type: 'ADD_ITEM', payload: text });
  };

  const removeItem = (index) => {
    dispatch({ type: 'REMOVE_ITEM', payload: index });
  };

  const editItem = (index) => {
    dispatch({ type: 'EDIT_ITEM', payload: index });
    setEditValue(state.items[index]);
  };

  const updateItem = () => {
    dispatch({ type: 'UPDATE_ITEM', payload: editValue });
    dispatch({ type: 'UPDATE_ITEM', payload: emailValue });
    dispatch({ type: 'UPDATE_ITEM', payload: passwordValue });

    setEditValue('');
  };

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(state.items));
  }, [state.items]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.editingIndex !== null) {
      updateItem();
    } else if (editValue !== '') {
      addItem(editValue);
      addItem(emailValue);
      addItem(passwordValue)
      e.target.reset();
    }
  };

  return (
    <div className='container'>
      <div className="wraper">
      <h1 className='title'>TODO LIST</h1>
      <form onSubmit={handleSubmit} className='toDo-form'>
        <input
          type="text"
          name="task"
          placeholder="enter name"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
          <input
          type="text"
          name="task"
          placeholder="enter name"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <input className='input'
          type="text"
          name="task"
          placeholder="enter name"
          value={passwordValue}
          onChange={(e) => setpasswordValue(e.target.value)}
        />
         
        <button type="submit" className='submit'>
          {state.editingIndex !== null ? 'Update' : 'Submit'}
        </button>
      </form>
      <ul className='list'>
        {state.items.map((item, index) => (
          <li className='key' key={index}>
            {item}{" "}
            <div>
            <button className='remove-btn' onClick={() => removeItem(index)}>X</button>{' '}
            <button className='edit-btn' onClick={() => editItem(index)}><IoMdRefresh /></button>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Todo;

