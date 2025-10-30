import { useState } from 'react';

export interface Person {
  id: number;
  anger: number;
  selected: boolean;
  silenced: boolean;
};

const randomAnger = (): number => {
  return 4 + (Math.random() * 3);
};

let initialPeople:Person[] = [
  { id: 1, anger: randomAnger(), selected: false, silenced: false },
  { id: 2, anger: randomAnger(), selected: false, silenced: false },
  { id: 3, anger: randomAnger(), selected: false, silenced: false },
  { id: 4, anger: randomAnger(), selected: true, silenced: false },
  { id: 5, anger: randomAnger(), selected: false, silenced: false },
  { id: 6, anger: randomAnger(), selected: false, silenced: false },
];

export const useLeader = () => {
  const [ people, setPeople ] = useState<Person[]>(initialPeople);
  const [ endsAt, setEndsAt ] = useState<Date|undefined>(undefined);

  const reshuffle = (): void => {
    initialPeople = initialPeople.map((p: Person) => ({
      ...p,
      anger: randomAnger(),
    }))
  }

  const setSelected = (id: number): void => {
    setPeople(prev =>
      prev.map(p => (p.id === id && !p.silenced ? { ...p, selected: true } : { ...p, selected: false }))
    );
  };

  const calcAngerChange = (): number => 0.3 + Math.random() * 0.3;

  const changeAnger = (direction: 1 | -1): void => {
    setPeople(prev => {
      const delta = calcAngerChange();
      let mutated = false;

      const next = prev.map((p: Person) => {
        if (!p.selected) return p;
        mutated = true;
        const newAnger = p.anger + direction * delta;
        if (newAnger > 9.75) {
          return { ...p, anger: 10, silenced: true, selected: false };
        }
        // Clamp 0–10 and round to 2 decimals
        const clamped = Math.max(0, Math.min(10, newAnger));
        return { ...p, anger: +clamped.toFixed(2) };
      });

      return mutated ? next : prev; // no-op if nothing was selected
    });
  };
  const increaseAnger = (): void => changeAnger(1);
  const decreaseAnger = (): void => changeAnger(-1);

  const getResult = (): number => {
    return 60
      - (people.reduce((sum: number, p: Person) => {
        return sum + p.anger
      }, 0))
      - ( (initialPeople.length - people.length)*10 ) // for those no longer hired
  };

  const isAnyoneSelected = (): boolean => people.some((p: Person) => p.selected);

  const startGame = (): void => {
    const now = new Date();
    reshuffle();
    setPeople(initialPeople);
    setEndsAt(new Date(now.getTime() + 60 * 1000));
  }

  return { people, setSelected, increaseAnger, decreaseAnger, getResult, isAnyoneSelected, startGame, endsAt };
};
