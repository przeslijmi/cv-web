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
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-y-4 justify-between md:mx-10 my-10">
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
  )
}
