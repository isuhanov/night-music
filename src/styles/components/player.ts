import { css, styled } from "styled-components";

import { ITimeLineFill } from "../../ts/interfaces/styles/time-line-fill";
import { IControlsBtn } from "../../ts/interfaces/styles/controls-btn";

export const Player = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.bgSecondary};
`;

export const TimeLine = styled.div`
    width: 100%;
    height: 5px;
    display: flex;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.colors.bgTertiary};
`;

export const TimeLineFill = styled.div<ITimeLineFill>`
    width: ${({ width }) => width}%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.timeLineFill};
`;

export const TrackControls = styled.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 30px;
`;

const mainControl = css`
    width: 35px;
    height: 35px;
`;

const sideControl = css`
    width: 25px;
    height: 25px;
`;

export const ControlsBtn = styled.button<IControlsBtn>`
    height: 75px;
    width: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: inherit;

    &:hover {
        background-color: ${({ theme }) => theme.colors.bgHover};
    }

    svg {
        ${({ showFill = true, showStroke = true }) => 
            css`
                ${({ theme }) => (
                    `
                        fill: ${ showFill ? theme.colors.font : 'none'};
                        path {
                            stroke: ${ showStroke ? theme.colors.font : 'none'};
                        }
                    `
                )}
            `
        }
        ${({ typeSize }) => typeSize === 'main' ? mainControl : sideControl}
    }
`;

export const TrackInfo = styled.div`
    height: 100%;
    flex-grow: 1;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
`;

export const TrackImg = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.bgTertiary};

    svg {
        width: 35px;
        height: 35px;
        fill: ${({ theme }) => theme.colors.fontSecondary};
        path {
            stroke: ${({ theme }) => theme.colors.fontSecondary};
        }
    }    
`;

export const TrackNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5px;
`;

export const TrackName = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.font};
`;

export const TrackAuthor = styled.div`
    font-size: 15px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.fontSecondary};
`;