import { HeroSection } from "@/components/sections/hero-section";
import { PopularToolsSection } from "@/components/sections/popular-tools-section";
import { GameSupportSection } from "@/components/sections/game-support-section";
import { StatisticsSection } from "@/components/sections/statistics-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ContentSections } from "@/components/sections/content-section";

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<ContentSections />
			<PopularToolsSection />
			<GameSupportSection />
			<StatisticsSection />
			<FeaturesSection />
		</>
	);
}
