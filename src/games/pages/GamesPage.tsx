import Section from '@frame/components/Section';
import SubLayout from '@frame/layouts/SubLayout';
import LeaderGame from '@games/components/LeaderGame';

export default function GamesPage() {

  return (
    <SubLayout title="Games">

      <Section
        className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-gray-700 dark:to-gray-800"
        title="Leader Game"
        titleClass="text-red-600 dark:text-red-400"
      >
        <p className="text-lg mb-6 text-gray-800 dark:text-white/80">
          From time to time, every individual - including those who build our digital world - needs encouragement. We may choose to offer it, or we may look away and fail to recognise a colleague's needs. When leader fades, a person may, in due course, depart. Worse still, they may remain, quiet and outwardly acquiescent. In such circumstances, the team has already lost a member, though it may not yet realise it.
        </p>
        <p className="text-lg mb-6 text-gray-800 dark:text-white/80">
          Let us, then, attend to one another with patience and respect. Endeavour to reach sixty points in the exercise below, and in so doing, demonstrate how truly you serve your team.
        </p>
        <p className="text-lg mb-6text-gray-800 dark:text-white/80">
          <p className="font-bold">How to play?</p>
          <p>1. Click START - You will have 60 seconds.</p>
          <p>2. Choose a member of Your team by clicking.</p>
          <p>3. Chose proper action by clicking to gain satisfaction level, or loose satisfaction level if chosen poorly.</p>
          <p>4. Have FUN.</p>
        </p>

        <LeaderGame />

      </Section>

    </SubLayout>
  );
}
