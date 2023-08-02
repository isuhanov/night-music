import { ReactNode, createContext, useState } from "react";

/** Интерфейс контекста меню */
interface IMenuContext {
    /** Состояние отображения меню */
    menuVisible: boolean;
    /** Состояние октрытия меню */
    menuOpen: boolean;
    /** Функция открытия меню */
    openMenu: () => void;
    /** Функция закрытия меню */
    closeMenu: () => void;
    /** Функция смены состояния меню */
    changeStateMenu: () => void;
}

/** Контекст меню */
export const MenuContext = createContext<IMenuContext>({
    menuVisible: false,
    menuOpen: false,
    openMenu: () => {},
    closeMenu: () => {},
    changeStateMenu: () => {}
});

/** Компонент для работы с контекстом меню */
const MenuProvider = ({ children }: { children: ReactNode }) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
        setMenuOpen(true);
        setMenuVisible(true);
    }
    const closeMenu = () => {
        setMenuOpen(false);
        setTimeout(() => {
            setMenuVisible(false);
        }, 190);
    }
    const changeStateMenu = () => menuOpen ? closeMenu() : openMenu();

    return (
        <MenuContext.Provider value={{menuVisible, menuOpen, openMenu, closeMenu, changeStateMenu}}>
            { children }
        </MenuContext.Provider>
    );
}

export default MenuProvider;