import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { DesktopFaq } from "@/components/desktop-faq";
import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";
import { MobileFaq } from "@/components/mobile-faq";
import { DesktopAboutHero } from "@/components/desktop-about-hero";
import { DesktopAboutTeam } from "@/components/desktop-about-team";

export default function About() {
  return (
    <div className="w-full bg-[#fffff0] min-h-screen flex flex-col">
      <div className="hidden md:block">
        <DesktopNav />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>

      <main className="flex-grow">
        <DesktopAboutHero />
        <DesktopAboutTeam />
      </main>

      <div className="hidden md:block">
        <DesktopFaq />
        <DesktopFooter />
      </div>
      <div className="md:hidden">
        <MobileFaq />
        <MobileFooter />
      </div>
    </div>
  );
}
