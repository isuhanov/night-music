import { styled } from "styled-components";
import { IconButton } from "./common";

export const Header = styled.header` 
    width: 100%;
    height: 80px;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: inherit;
`;

export const Search = styled.div`
    position: relative;
    width: 350px;
    height: 45px;
    border-radius: 25px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.bgSecondary};
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    padding: 0 20px;
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.font};
    background-color: inherit;
`;

export const SearchButton = styled(IconButton)`
    position: absolute;
    top: 0;
    right: 0;
    background-color: inherit;

    &:hover {
        background-color: ${({ theme }) => theme.colors.bgHover};
    }

    svg {
        width: 25px;
        height: 25px;
    }
`;

export const HeaderControls = styled.div`
    position: relative;
    z-index: 200;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
`;

export const MenuButton = styled(IconButton)`
    background-color: ${({ theme }) => theme.colors.bgSecondary};
    &:hover {
        background-color: ${({ theme }) => theme.colors.bgHover};
    }

    svg {
        path {
            stroke: ${({ theme }) => theme.colors.fontSecondary};
        }
    }
`;

export const ProfileButton = styled(IconButton)`
    background-color: ${({ theme }) => theme.colors.bgTertiary};

    svg {
        width: 25px;
        height: 25px;
        fill: ${({ theme }) => theme.colors.fontSecondary};
        path {
            stroke: ${({ theme }) => theme.colors.fontSecondary};
        }
    }       
`;