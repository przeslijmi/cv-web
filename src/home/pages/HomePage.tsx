import WelcomeSection from '@home/components/sections/WelcomeSection';
import TeamPlayerSection from '@home/components/sections/TeamPlayerSection';
import BugFixingSection from '@home/components/sections/BugFixingSection';
import LegacyCodeSection from '@home/components/sections/LegacyCodeSection';
import MobileAppsSection from '@home/components/sections/MobileAppsSection';
import AiSection from '@home/components/sections/AiSection';
import CommentsSection from '@home/components/sections/CommentsSection';
import CooperateSection from '@home/components/sections/CooperateSection';
import Layout from '@core/layouts/Layout';

export default function HomePage() {

  return (
    <Layout>
      <WelcomeSection />
      <TeamPlayerSection />
      <BugFixingSection />
      <LegacyCodeSection />
      <MobileAppsSection />
      <AiSection />
      <CommentsSection />
      <CooperateSection />
    </Layout>
  );
}
