import { MobileNav } from "@/components/mobile-nav";
import { MobileHero } from "@/components/mobile-hero";
import { MobileIntegrations } from "@/components/mobile-integrations";

import { MobileStats } from "@/components/mobile-stats";
import { MobileComparison } from "@/components/mobile-comparison";
import { MobileServices } from "@/components/mobile-services";
import { MobileFaq } from "@/components/mobile-faq";
import { MobileFooter } from "@/components/mobile-footer";

export default function Home() {
  return (
    <>
      {/* Mobile Version - Visible only on mobile screens (< 768px) */}
      <div className="block md:hidden w-full min-h-screen bg-[#fffff0]">
        <MobileNav />
        <MobileHero />
        <MobileIntegrations />
        <MobileStats />
        <MobileComparison />
        <MobileServices />
        <MobileFaq />
        <MobileFooter />
      </div>

      {/* Desktop Version - Visible only on desktop screens (>= 768px) */}
      <div className="hidden md:block w-full min-h-screen bg-zinc-100 dark:bg-zinc-900">
        <main className="p-10 flex items-center justify-center min-h-screen">
          <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200">
            Desktop Home (To be built)
          </h1>
        </main>
      </div>
    </>
  );
}
