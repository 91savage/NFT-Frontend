import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LocomotiveScrollProvider, Scroll } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import ScrollTriggerProxy from './lib/animation/gsap/ScrollTriggerProxy';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { lightTheme, darkTheme } from './styles/theme';

import useDebounceResize from './lib/hooks/useDebounceResize';
import loadable from '@loadable/component';

import { useRecoilValue } from 'recoil';
import { isDarkSelector } from './lib/recoil/selector';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Overlay from './components/Overlay/Overlay';
import FixedBtn from './components/FixedBtn/FixedBtn';

import Loader from './components/Loader/Loader';

// import pMinDelay from 'p-min-delay';

const LoadableHome = loadable(() => import(/* webpackChunkName: "Home" */ './pages/HomePage'));
const LoadableMint = loadable(() => import(/* webpackChunkName: "Mint" */ './pages/MintPage'));
const LoadableGallary = loadable(
    () => import(/* webpackChunkName: "Gallary" */ './pages/GallaryPage')
);

const preload = (component: any) => {
    component.preload && component.preload();
};

function App() {
    const containRef = useRef<HTMLElement>(null);
    const isDark = useRecoilValue(isDarkSelector);
    const [loaded, setLoaded] = useState(false);
    const LOADING_TIMEOUT: number = 100;

    useDebounceResize();

    useEffect(() => {
        preload(LoadableHome);
        preload(LoadableMint);
        preload(LoadableGallary);

        setTimeout(() => {
            setLoaded(true);
        }, LOADING_TIMEOUT);
    }, []);
    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <GlobalStyle />
            <BrowserRouter>
                {!loaded ? (
                    <Loader />
                ) : (
                    <LocomotiveScrollProvider
                        options={{
                            smooth: true,
                            smartphone: {
                                smooth: true,
                            },
                            tablet: {
                                smooth: true,
                            },
                            getDirection: true,
                        }}
                        watch={
                            [
                                //..all the dependencies you want to watch to update the scroll.
                                //  Basicaly, you would want to watch page/location changes
                                //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
                            ]
                        }
                        containerRef={containRef}
                        onUpdate={(scroll: Scroll) =>
                            scroll.scrollTo(0, { duration: 0, disableLerp: true })
                        }
                    >
                        <ScrollTriggerProxy />
                        <main className="Main" data-scroll-container ref={containRef}>
                            <FixedBtn />
                            <Overlay />
                            <Header />
                            <Routes>
                                <Route path="/" element={<LoadableHome fallback={<Loader />} />} />
                                <Route
                                    path="/mint"
                                    element={<LoadableMint fallback={<Loader />} />}
                                />
                                <Route
                                    path="/gallary"
                                    element={<LoadableGallary fallback={<Loader />} />}
                                />
                            </Routes>
                            <Footer />
                        </main>
                    </LocomotiveScrollProvider>
                )}
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
