import { useCallback, useState } from "react"
import { ClockForm } from "../ClockForm/ClockForm";
import { ClockList } from "../ClockList/ClockList";
import { TClockData } from "../../types/types";


export const Watches = () => {
    const [clocks, setClocks] = useState<TClockData[]>([]);

    const addClock = useCallback(
        (clock: TClockData) => {
            setClocks([...clocks, clock]);
        }, 
        [clocks]
    )

    const removeClock = (index: number) => {
      const newClocks = [...clocks];
      newClocks.splice(index, 1);
      setClocks(newClocks)
    }


  return (
    <div className="watches">
        <h2>Мировые часы</h2>
        <ClockForm onAddClock={addClock}/>
        <div className="container">
          {clocks.map((clock, index) => (
            <ClockList key={index} clock={clock} onRemove={() => removeClock(index)}/>
          ))}
        </div>
    </div>
  )
}
