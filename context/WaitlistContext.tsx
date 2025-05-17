"use client";

import React, { createContext, useContext, useState } from "react";

interface WaitlistContextType {
  isModalOpen: boolean;
  openModal: (email?: string) => void;
  closeModal: () => void;
  prefillEmail: string;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prefillEmail, setPrefillEmail] = useState("");

  const openModal = (email = "") => {
    setPrefillEmail(email);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <WaitlistContext.Provider value={{ isModalOpen, openModal, closeModal, prefillEmail }}>
      {children}
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const context = useContext(WaitlistContext);
  if (context === undefined) {
    throw new Error("useWaitlist must be used within a WaitlistProvider");
  }
  return context;
}
