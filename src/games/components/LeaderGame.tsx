import Button from '@games/components/Button';
import Buttons from '@games/components/leader/Buttons';
import People from '@games/components/leader/People';
import Result from '@games/components/leader/Result';
import { useCountdown } from '@games/hooks/useCountdown';
import { useLeader } from '@games/hooks/useLeader';


export interface LeaderButtons {
  id: string,
  name: string,
  decreaseAnger: boolean,
}

interface Props {}

export default function LeaderGame({}: Props) {
  const {
    people,
    setSelected,
    increaseAnger,
    decreaseAnger,
    getResult,
    isAnyoneSelected,
    startGame,
    endsAt,
  } = useLeader();

  const { remaining, isRunning } = useCountdown(endsAt);

  return (
    <>
      <div className="grid border border-orange-300 dark:border-orange-900 bg-gradient-to-tr from-white/10 to-white/90 shadow-md mt-5 rounded-xl">
        <div className="opacity-100 col-start-1 row-start-1">
          <People people={people} setSelected={setSelected} />
          <Buttons
            isAnyoneSelected={isAnyoneSelected}
            decreaseAnger={decreaseAnger}
            increaseAnger={increaseAnger}
          />
        </div>
        {!isRunning && (<div className="bg-white/50 dark:bg-black/50 backdrop-blur-md col-start-1 row-start-1 rounded-xl">
          {endsAt && (<Result result={getResult()} />)}
        </div>)}

      </div>

      <div className="flex justify-center mt-10">
        <Button onClick={() => startGame()} disabled={isRunning}>
          {isRunning ? `${remaining} s` : 'Start Game'}
        </Button>
      </div>
    </>
  )
}
