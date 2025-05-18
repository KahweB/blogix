import { create } from 'zustand'

interface StoreType {
    headerText: string;
    footerText: string;
    setText: (text: string,) => void;
    setFooterText: (text: string) => void;
    setHeaderText: (text: string) => void;
}


const useStore = create<StoreType>((set) => ({
    headerText: "Default",
    footerText: "Default",
    setHeaderText: (text: string) => set(() => ({
        headerText: text || "Default"
    })),
    setFooterText: (text: string) => set(() => ({
        footerText: text || "Default"
    }))
    ,
    setText: (text: string,) =>
        set(() => ({
            headerText: text || "Default",
            footerText: text || "Default"
        }))
}))
export default useStore