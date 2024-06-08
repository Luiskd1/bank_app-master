import { create } from 'zustand'


interface bgTheme{

 theme:boolean
 setTheme: () => void;

}


export const useTheme = create<bgTheme>((set) => ({

    theme: true,
    setTheme: () => set((state) =>({ theme: !state.theme }))

}))
