import React, { createContext, useState } from 'react';

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [items, setItems] = useState([]);
  
    // Create
    const addItem = (item) => {
      setItems(prev => [...prev, item]);
    };
  
    // Edit
    const updateItem = (updatedItem) => {
      setItems(prev => prev.map(item => item.id === updatedItem.id ? updatedItem : item));
    };
  
    // Delete
    const deleteItem = (id) => {
      setItems(prev => prev.filter(item => item.id !== id));
    };
  
    return (
      <UserContext.Provider value={{ items, addItem, updateItem, deleteItem }}>
        {children}
      </UserContext.Provider>
    );
  };