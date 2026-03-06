'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
    const lenisRef = useRef(null);

    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            infinite: false,
        });

        lenisRef.current = lenis;

        // Connect GSAP ScrollTrigger to Lenis
        lenis.on('scroll', () => {
            ScrollTrigger.update();
        });

        const ticker = (time) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(ticker);
        gsap.ticker.lagSmoothing(0);

        // Crucial: Refresh ScrollTrigger when page finishes loading 
        // and on window resize. This prevents stale trigger positions.
        const handleRefresh = () => {
            ScrollTrigger.refresh();
        };

        window.addEventListener('load', handleRefresh);
        window.addEventListener('resize', handleRefresh);

        // Handle anchor links
        const handleAnchorClick = (e) => {
            const target = e.target.closest('a');
            if (target && target.hash && (target.origin === window.location.origin || !target.origin)) {
                try {
                    const element = document.querySelector(target.hash);
                    if (element) {
                        e.preventDefault();
                        lenis.scrollTo(element, { offset: -80, duration: 1.5 });
                    }
                } catch (err) { }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            lenis.destroy();
            document.removeEventListener('click', handleAnchorClick);
            window.removeEventListener('load', handleRefresh);
            window.removeEventListener('resize', handleRefresh);
            gsap.ticker.remove(ticker);
        };
    }, []);

    return <>{children}</>;
}
