export function DemoVideo() {
    return (
        <section className="py-24 bg-background-deep relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 dot-grid-bg opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">
                        Watch it in action
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                        From zero to shipped in 6½ minutes.
                    </h2>
                    <p className="mt-4 text-lg text-zinc-400">
                        This is an unedited 6 minute and 32 second video showing exactly what happens after purchase: 
                        exploring the free plan, upgrading to the Builder plan, creating a project, running the CLI setup, 
                        and using the built-in AI agent. No cuts, no magic.
                    </p>
                </div>

                <div className="mx-auto max-w-4xl">
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden glass-card border border-zinc-800 shadow-2xl shadow-primary/20">
                        {/* 
                          We use the Google Drive preview link here to ensure fast loading 
                          and browser compatibility across all devices, avoiding heavy .mkv files in the repo.
                        */}
                        <iframe 
                            src="https://drive.google.com/file/d/15406fBr3d6fLfyTi_2899KiiPp1MZcxM/preview" 
                            className="absolute top-0 left-0 w-full h-full border-0"
                            allow="autoplay; fullscreen"
                            title="ShipOnClick Demo Video"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
