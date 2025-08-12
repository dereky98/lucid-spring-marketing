"use client";

import React, { createContext, useContext, useState } from "react";

interface WaitlistContextType {
  isModalOpen: boolean;
  openModal: (email?: string, autoSubmit?: boolean) => void;
  closeModal: () => void;
  prefillEmail: string;
  autoSubmit: boolean;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prefillEmail, setPrefillEmail] = useState("");
  const [autoSubmit, setAutoSubmit] = useState(false);

  const openModal = (email = "", shouldAutoSubmit = false) => {
    setPrefillEmail(email);
    setAutoSubmit(shouldAutoSubmit);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setAutoSubmit(false);
  };

  return (
    <WaitlistContext.Provider
      value={{ isModalOpen, openModal, closeModal, prefillEmail, autoSubmit }}
    >
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
