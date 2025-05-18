import { create } from 'zustand'

interface StoreType {
    headerText: string;
    footerText: string;
    setText: (text: string) => void;
}


const useStore = create<StoreType>((set) => ({
    headerText: "Default",
    footerText: "Default",
    setText: (text: string) =>
        set(() => ({
            headerText: text || "Default",
            footerText: text || "Default"
        }))
}))
export default useStore