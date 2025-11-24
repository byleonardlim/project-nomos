import { HeroSection } from '@/app/(product)/_components/HeroSection';
import { FeaturesSection } from '@/app/(product)/_components/FeaturesSection';
import { EarlyAccessSection } from '@/app/(product)/_components/EarlyAccessSection';

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <EarlyAccessSection />
    </div>
  );
}
