'use client'

import { motion } from 'framer-motion'
import { Clapperboard, Video, SlidersHorizontal } from 'lucide-react'

const pillars = [
    {
        title: 'Story',
        description:
            'We craft cinematic narratives that connect emotionally and elevate brands.',
        Icon: Clapperboard
    },
    {
        title: 'Execution',
        description:
            'From pre-production to on-set direction, we deliver flawless shoots.',
        Icon: Video
    },
    {
        title: 'Detail',
        description:
            'Editing, grading, sound design — precision in every final frame.',
        Icon: SlidersHorizontal
    }
]

export default function AgencyPillars() {
    return (
        <div className="grid grid-cols-1 gap-10">
            {pillars.map((pillar, index) => {
                const Icon = pillar.Icon

                return (
                    <motion.div
                        key={pillar.title}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="group flex items-start gap-6 text-left"
                    >
                        {/* Icon Container with Animated Glow */}
                        <div className="relative flex-shrink-0">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: 'linear'
                                }}
                                className="absolute inset-0 flex items-center justify-center opacity-20"
                            >
                                <div className="w-16 h-16 border border-yellow-500 rounded-lg" />
                            </motion.div>

                            <div className="relative z-10 w-16 h-16 bg-pf-card border border-white/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:border-yellow group-hover:bg-yellow-500/10">
                                <Icon
                                    size={32}
                                    className="text-yellow-500 transition-colors duration-300"
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bebas text-2xl text-white tracking-widest mb-1.5 transition-colors duration-300 group-hover:text-yellow-500">
                                {pillar.title.toUpperCase()}
                            </h3>
                            <p className="font-barlow font-light text-[1.05rem] text-textMuted leading-relaxed max-w-xs transition-colors duration-300 group-hover:text-slate-200">
                                {pillar.description}
                            </p>
                        </div>
                    </motion.div>
                )
            })}
        </div>
    )
}