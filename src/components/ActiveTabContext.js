import React, { createContext, useState } from 'react';

// Créer un contexte pour l'onglet actif
export const ActiveTabContext = createContext();

// Créer un fournisseur de contexte
export const ActiveTabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('Home_page'); // État pour suivre l'onglet actif

  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </ActiveTabContext.Provider>
  );
};