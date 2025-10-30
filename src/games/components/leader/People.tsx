import { type Person as PersonType } from '@games/hooks/useLeader';
import Person from '@games/components/leader/Person';

interface Props {
  people: PersonType[];
  setSelected: (id: number) => void;
}

export default function People({
  people,
  setSelected,
}: Props) {

  return (
    <div>
      <div className="text-center mt-4 text-gray-600 text-lg">Current motivation level of Your team</div>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-y-4 justify-between md:mx-10 mt-4 mb-10">
        {people.map((p: PersonType) => (
          <div
            key={p.id}
            onClick={() => {
              if (!p.silenced) { setSelected(p.id) }
            }}
          >
            <Person anger={p.anger} silenced={p.silenced} selected={p.selected} />
          </div>
        ))}
      </div>
    </div>
  )
}
