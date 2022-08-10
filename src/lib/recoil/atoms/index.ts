import { atom } from 'recoil';
import { IScrollHeight, IVisible, IWallet } from './types';

export const navAtom = atom<string | null>({
    key: 'navState',
    default: null,
});

export const scrollHeightAtom = atom<IScrollHeight>({
    key: 'scrollHeight',
    default: {
        scrollHeight: 0,
        currentY: 0,
        progressY: 0,
        direction: null,
    },
});

export const walletAtom = atom<IWallet | null>({
    key: 'wallet',
    default: {
        account: '',
        balance: '',
    },
});

export const globalWidthAtom = atom({
    key: 'globalWidth',
    default: {
        width: window.innerWidth,
    },
});

export const visibleAtom = atom<IVisible>({
    key: 'visibleAtom',
    default: {
        overlay: false,
        mobileMenu: false,
    },
});
