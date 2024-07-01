import { create } from "zustand";

interface MessageDataState {
  messageData: object;
  setMessageData: (messageData: object) => void;
  input: string;
  setInput: (userInput: string) => void;
}

export const useMessageData = create<MessageDataState>((set: any) => ({
  messageData: {},
  setMessageData: (messageData: object) => set(messageData),
  input: "",
  setInput: (userInput: string) => set(userInput),
}));
