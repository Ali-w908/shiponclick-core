import { Navbar } from '@/components/marketing/navbar';
import { Footer } from '@/components/marketing/footer';
import { AuroraBackground } from '@/components/marketing/aurora-background';

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col bg-background relative">
            <AuroraBackground />
            <Navbar />
            <main className="flex-1 pt-16 relative z-10">
                {children}
            </main>
            <Footer />
        </div>
    );
}
