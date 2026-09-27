'use client';

import { useState, useEffect } from 'react';

const AdvancedSkillsTyping = () => {
    const [text, setText] = useState('AND MORE');
    const [isHovered, setIsHovered] = useState(false);
    
    const skills = [
        '/brainstorming', 
        '/scaffold-exercises', 
        '/grill-with-docs', 
        '/systematic-debugging', 
        '/test-driven-development',
        'b2b-multi-tenancy',
        'github-webhook-sync'
    ];
    
    useEffect(() => {
        if (!isHovered) {
            setText('AND MORE');
            return;
        }
        
        let isCancelled = false;
        
        const typeCycle = async () => {
            if (isCancelled) return;
            let current = 'AND MORE';
            for (let i = current.length; i >= 0; i--) {
                if (isCancelled) return;
                setText(current.slice(0, i));
                await new Promise(r => setTimeout(r, 40));
            }
            if (isCancelled) return;
            setText('');
            await new Promise(r => setTimeout(r, 150));
            
            let skillIndex = 0;
            while (!isCancelled) {
                const targetSkill = skills[skillIndex];
                current = '';
                for (let i = 0; i < targetSkill.length; i++) {
                    if (isCancelled) return;
                    current += targetSkill[i];
                    setText(current);
                    await new Promise(r => setTimeout(r, 60));
                }
                if (isCancelled) return;
                await new Promise(r => setTimeout(r, 1200));
                
                for (let i = current.length; i > 0; i--) {
                    if (isCancelled) return;
                    current = current.slice(0, i - 1);
                    setText(current);
                    await new Promise(r => setTimeout(r, 30));
                }
                
                skillIndex = (skillIndex + 1) % skills.length;
            }
        };
        
        typeCycle();
        return () => { isCancelled = true; };
    }, [isHovered]);

    return (
        <span 
            className="relative inline-block cursor-pointer whitespace-nowrap transition-all duration-300 hover:scale-110 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] mt-4 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <code className="text-silver-mist px-1.5 py-0.5 tracking-[0.2em] font-medium text-[12px] min-w-[120px] inline-block text-center transition-colors border-b border-dashed border-white/30 group-hover:border-transparent">
                {text}
                <span className={isHovered ? "animate-pulse font-bold" : "hidden"}>_</span>
            </code>
        </span>
    );
};

const SkillTerminal = ({ skill, output, windowClass }: { skill: string, output: string, windowClass: string }) => {
    return (
        <div className={`absolute w-[320px] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-50 ${windowClass}`}>
            <div className="bg-[#021312]/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl relative translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-white/5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-[11px] font-mono text-white/30 uppercase tracking-widest">{skill.replace('/', '')}.sh</span>
                </div>
                <div className="p-5 font-mono text-[13px] text-silver-mist text-left min-h-[110px] flex flex-col justify-center">
                    <div className="text-white flex items-center">
                        <span className="text-liquid-mist mr-2">$</span> 
                        <div className="overflow-hidden whitespace-nowrap transition-all duration-[500ms] w-0 group-hover:w-full">
                            <span className="inline-block border-r-2 border-white/50 pr-1">{skill.replace('/', '')}</span>
                        </div>
                    </div>
                    <div className="mt-3 text-liquid-mist overflow-hidden whitespace-nowrap transition-all duration-[500ms] delay-[400ms] opacity-0 w-0 group-hover:opacity-100 group-hover:w-full">
                        <div className="inline-block border-r-2 border-transparent pr-1">
                            <span className="text-white/40 mr-2">&gt;</span>{output}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export function InteractiveSkills() {
    return (
        <div className="flex flex-col items-center">
            {/* The Skill Words container - standard inline layout, no fixed height or shifting */}
            <div className="flex flex-wrap justify-center gap-x-2">
                
                {/* /onboard */}
                <span className="relative inline-block cursor-pointer whitespace-nowrap group">
                    <code className="text-liquid-mist transition-all duration-200 group-hover:text-[#cbfffc] group-hover:-rotate-2 group-hover:scale-110 inline-block bg-transparent group-hover:bg-white/10 px-1.5 py-0.5 rounded text-[13px] underline decoration-dashed decoration-white/30 underline-offset-4 group-hover:decoration-transparent">
                        /improve-codebase-architecture
                    </code>
                    <SkillTerminal 
                        skill="/improve-codebase-architecture" 
                        output="Deepening opportunities found." 
                        windowClass="bottom-[80px] right-[20px] -rotate-6 origin-bottom-right" 
                    />
                </span>

                {' · '}
                
                {/* /sync-updates */}
                <span className="relative inline-block cursor-pointer whitespace-nowrap group">
                    <code className="text-liquid-mist transition-all duration-200 group-hover:text-[#cbfffc] group-hover:-rotate-2 group-hover:scale-110 inline-block bg-transparent group-hover:bg-white/10 px-1.5 py-0.5 rounded text-[13px] underline decoration-dashed decoration-white/30 underline-offset-4 group-hover:decoration-transparent">
                        /sync-updates
                    </code>
                    <SkillTerminal 
                        skill="/sync-updates" 
                        output="3-way merge complete." 
                        windowClass="bottom-[140px] right-[-100px] -rotate-2 origin-bottom" 
                    />
                </span>

                {' · '}
                
                {/* /add-feature */}
                <span className="relative inline-block cursor-pointer whitespace-nowrap group">
                    <code className="text-liquid-mist transition-all duration-200 group-hover:text-[#cbfffc] group-hover:rotate-2 group-hover:scale-110 inline-block bg-transparent group-hover:bg-white/10 px-1.5 py-0.5 rounded text-[13px] underline decoration-dashed decoration-white/30 underline-offset-4 group-hover:decoration-transparent">
                        /to-spec
                    </code>
                    <SkillTerminal 
                        skill="/to-spec" 
                        output="Spec generated and published." 
                        windowClass="bottom-[140px] left-[-100px] rotate-2 origin-bottom" 
                    />
                </span>

                {' · '}
                
                {/* /ui-ux-pro-max */}
                <span className="relative inline-block cursor-pointer whitespace-nowrap group">
                    <code className="text-liquid-mist transition-all duration-200 group-hover:text-[#cbfffc] group-hover:rotate-2 group-hover:scale-110 inline-block bg-transparent group-hover:bg-white/10 px-1.5 py-0.5 rounded text-[13px] underline decoration-dashed decoration-white/30 underline-offset-4 group-hover:decoration-transparent">
                        /ui-ux-pro-max
                    </code>
                    <SkillTerminal 
                        skill="/ui-ux-pro-max" 
                        output="Premium design tokens applied." 
                        windowClass="bottom-[80px] left-[20px] rotate-6 origin-bottom-left" 
                    />
                </span>
                
            </div>

            <AdvancedSkillsTyping />
        </div>
    );
}
