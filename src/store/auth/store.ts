import { UserInterface } from "@/types/types.user";
import create from "zustand";

const useUserStore = create((set) => ({
  user: null,
  setUser: (newUser: UserInterface) => set({ user: newUser }),
  clearUser: () => set({ user: null }),
}));

export default useUserStore;
