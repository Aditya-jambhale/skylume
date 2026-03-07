'use client';

import { motion } from 'framer-motion';

/**
 * Reimagined ScrollReveal component using Framer Motion for maximum reliability 
 * with Lenis smooth scrolling. Resolves GSAP ScrollTrigger synchronization issues.
 */
export default function ScrollReveal({
    children,
    animation = 'fade-up',
    duration = 1.0,
    delay = 0,
    y = 60,
    x = 0,
    stagger = 0.1,
    once = true,
    className = ""
}) {
    // ── Animation Variants ──
    const variants = {
        hidden: {
            opacity: 0,
            y: (animation === 'fade-up' || animation === 'stagger-list') ? y : 0,
            x: animation === 'slide-left' ? (x || 50) : animation === 'slide-right' ? (x || -50) : 0,
            scale: animation === 'zoom-in' ? 0.95 : 1,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1], // Cinematic ease-out
                staggerChildren: stagger,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    // Special handling for stagger-list
    if (animation === 'stagger-list') {
        return (
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once, margin: "-10%" }}
                variants={variants}
                className={className}
            >
                {/* 
                  We apply the itemVariants to every direct child. 
                  This works best when ScrollReveal wraps a list or a grid.
                */}
                {Array.isArray(children) ? (
                    children.map((child, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            {child}
                        </motion.div>
                    ))
                ) : (
                    // If children is a single element (like a grid), 
                    // this requires children to respect variants propagation
                    <div className="contents">
                        {children}
                    </div>
                )}
            </motion.div>
        );
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-10%" }}
            variants={variants}
            className={`relative ${className}`}
        >
            {children}
        </motion.div>
    );
}
