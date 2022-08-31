import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device, variouble } from '../../../../styles/variouble';

export const Container = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 45%;
    height: calc(100% / 4);

    margin: 2rem auto;

    background-color: #000000;

    border-radius: 30px;
    overflow: hidden;

    position: relative;

    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
        rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
        rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

    @media (${device.tabletXL}) {
        width: 55%;
    }

    @media (${device.tablet}) {
        width: 60%;
    }

    @media (${device.mobileXL}) {
        width: 70%;
    }

    @media (${device.mobile}) {
        width: 80%;
    }

    @media (${device.mobileM}) {
        width: 85%;
    }

    @media (${device.mobileM}) {
        width: 90%;
    }
`;

export const ImgBox = styled.img`
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    opacity: 0.4;

    /* @media (${device.tablet}) {
        width: 35%;
    }

    @media (${device.mobile}) {
        width: 45%;
    }

    @media (${device.mobileM}) {
        width: 55%;
    } */
`;

export const TextBox = styled.div`
    height: 100%;
    color: ${props => props.theme.text};
    font-weight: 800;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: color 0.3s ease;

    padding: 0 3rem;
    opacity: 1;
    z-index: 10;

    box-sizing: border-box;

    /* @media (${device.tablet}) {
        width: 60%;
    }

    @media (${device.mobileM}) {
        width: 80%;
    }

    @media (${device.mobileSM}) {
        width: 90%;
    } */
`;

export const Title = styled.h1`
    font-size: ${variouble.fontxl};

    @media (${device.mobile}) {
        font-size: ${variouble.fontlgxx};
    }

    @media (${device.mobileM}) {
        font-size: ${variouble.fontlgx};
    }

    @media (${device.mobileMx}) {
        font-size: ${variouble.fontlg};
    }
`;

export const Text = styled.span`
    margin-top: 2rem;

    font-size: ${variouble.fontlg};
    line-height: 1.6;
    letter-spacing: 1px;

    @media (${device.mobileM}) {
        font-size: ${variouble.fontmd};
    }

    @media (${device.mobileMx}) {
        font-size: ${variouble.fontsm};
    }
`;

export const Pin = styled.img``;
