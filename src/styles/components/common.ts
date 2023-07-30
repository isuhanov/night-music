import { styled } from "styled-components";

import { IFlexContainer } from "../../ts/interfaces/styles/flex-container";
import { Direction, Wrap } from "../../ts/enums/flex";
import { stringify } from "querystring";


export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 1199px) {
        & {
            max-width: 991px;
        }
    }
`;

export const FlexContainer = styled.div<IFlexContainer>`
    width: 100%;
    display: flex;
    flex-direction: ${({ $direction = Direction.Row }) => $direction};
    align-items: ${({ $align = 'center' }) => $align};
    flex-wrap: ${({ $wrap = Wrap.Nowrap }) => $wrap};
    justify-content: ${({ $justify = 'center' }) => $justify};
    gap: ${({ $gap = '0px' }) => $gap};
    padding: ${({ $padding = '0px' }) => $padding};
`;

export const Body = styled(FlexContainer)` 
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Main = styled.main` 
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const IconButton = styled.button`
    width: 45px;
    height: 45px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color .1s linear;

    svg {
        fill: ${({ theme }) => theme.colors.font};
        path {
            stroke: ${({ theme }) => theme.colors.font};
        }
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;