import { keyframes, styled } from "styled-components";
import { svgIconsBg } from "./common";
import { ISvgIcons } from "../../ts/interfaces/styles/svg-icons";

const open = keyframes`
    from { left: -300px; }
    to { left: 0px; }
`;

const close = keyframes`
    from { left: 0px; }
    to { left: -300px; }
`;

export const Menu = styled.div<{ isOpen: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    width: 300px;
    height: 100%;
    padding: 90px 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.bgSecondary};
    animation: ${({ isOpen }) => isOpen ? open : close} .2s linear;
`;

export const MenuItemsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MenuItem = styled.p<ISvgIcons>`
    width: 100%;
    height: 50px;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;

    ${svgIconsBg}
    svg {
        width: 30px;
        height: 30px;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.bgHover};
    }
`;

export const MenuItemName = styled.span`
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.font};
`;