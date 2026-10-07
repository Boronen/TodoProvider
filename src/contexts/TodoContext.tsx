import { createContext, type ReactNode, useState } from "react";
import type { AllapotTipus, TodoTipus } from "../adat";

interface FeladatokContextValue {
    lista: TodoTipus[];
    setAllapot: (index: number, allapot: AllapotTipus) => void;
}

export const TodoContext = createContext<FeladatokContextValue | undefined>(undefined);

interface TodoProviderProps {
    children: ReactNode;
}

export function TodoProvider({ children }: TodoProviderProps) {
    const [lista, setLista] = useState<TodoTipus[]>([]);

    const setAllapot = (index: number, allapot: AllapotTipus) => {
        setLista((prevLista) =>
            prevLista.map((todo, todoIndex) =>
                todoIndex === index ? { ...todo, allapot } : todo
            )
        );
    };

    return (
        <TodoContext.Provider value={{ lista, setAllapot }}>
            {children}
        </TodoContext.Provider>
    );
}