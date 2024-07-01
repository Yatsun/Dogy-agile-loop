"use client";

import { createContext, useContext, useState } from "react";
import { ReactNode, Dispatch, SetStateAction } from "react";

type RestaurantContextProps = {
  children: ReactNode;
};

type RestaurantContextType = {
  data: object;
  setData: Dispatch<SetStateAction<object>>;
};

const RestaurantContext = createContext<RestaurantContextType | null>(null);

export const RestaurantProvider = ({ children }: RestaurantContextProps) => {
  const [data, setData] = useState<object>({});

  return (
    <RestaurantContext.Provider value={{ data, setData }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurantContext = () => {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error("useRestaurant must be used within a RestaurantProvider");
  }
  return context;
};
