import { useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";

/** Хук контекста меню */
export const useMenu = () => useContext(MenuContext);