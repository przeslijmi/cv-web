import { Code, Gamepad2, Target, ChevronDown, } from 'lucide-react';
import Counter from '@home/components/sections/WelcomeSection/Counter';
import Explore from '@home/components/sections/WelcomeSection/Explore';
import { scrollToElement } from '@core/utils/html';
import LogoSvg from '@core/components/Logo/LogoSvg';

interface Props {}

export default function WelcomeSection({}: Props) {

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pb-40 pt-5 md:pt-0 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-transparent flex justify-center align-middle">
            <LogoSvg width={160} />
            <div className="text-3xl md:text-5xl font-light pl-4 pt-7 md:pt-5 bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700">lets-create.click</div>
          </h1>
          <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700">
            Karol Nowakowski
          </h1>
          <p className={`text-2xl md:text-3xl font-light dark:text-gray-300 text-gray-700`}>
            Full Stack Developer &&nbsp;Problem&nbsp;Solver
          </p>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed dark:text-gray-400 text-gray-600`}>
            Passionate about crafting elegant solutions with PHP, Laravel, Vue, and React.<br />
            I want to build software that makes a difference.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-delay">
          <Counter
            title="Years of Experience"
            leadingColor="blue"
            unit="+"
            amount={20}
          />
          <Counter
            title="Features Delivered"
            leadingColor="amber"
            amount={1489}
          />
          <Counter
            title="Merge Requests"
            leadingColor="cyan"
            amount={5827}
          />
          <Counter
            title="Dedication"
            leadingColor="yellow"
            unit="%"
            amount={100}
          />
        </div>

        <div className="space-y-8 animate-fade-in-delay-2">
          <h2 className={`text-3xl font-semibold dark:text-gray-200 text-gray-800`}>Explore My Journey</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Explore
              title="Outcome"
              icon={Target}
              text="Find out how I can help You in achieving Your goals."
              location="/outcome"
              leadingColor="blue"
            />
            <Explore
              title="Tech Stack"
              icon={Code}
              text="Technologies I master and use to build amazing features."
              location="/tech-stack"
              leadingColor="amber"
            />
            <Explore
              title="Games"
              icon={Gamepad2}
              text="A playful look at my approach to development, business, and growth."
              location="/games"
              leadingColor="cyan"
            />
          </div>
        </div>

        <button
          onClick={() => scrollToElement('team-player-section', 90)}
          className="animate-bounce mt-12 p-3 rounded-full transition-colors dark:bg-gray-700 dark:hover:bg-gray-600 bg-blue-100 hover:bg-blue-200"
        >
          <ChevronDown className={`w-8 h-8 dark:text-blue-400 text-blue-600`} />
        </button>
      </div>
    </section>
  );
}
