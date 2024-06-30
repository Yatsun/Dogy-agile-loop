import { create } from "zustand";

interface MessageDataState {
  messageData: Object;
  setMessageData: (messageData: string) => void;
}

export const useMessageData = create<MessageDataState>((set: any) => ({
  messageData: {},
  setMessageData: (messageData: Object) => set({ messageData }),
}));
