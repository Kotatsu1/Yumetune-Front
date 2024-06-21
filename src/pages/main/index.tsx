import { RootState } from "@/redux"
import { useDispatch, useSelector } from "react-redux"
import { counterActions } from "@/redux"

export const App: React.FC = () => {
    const counter = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    const increment = () => dispatch(counterActions.increment())
    const decrement = () => dispatch(counterActions.decrement())

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>inc</button>
            <button onClick={decrement}>dec</button>
        </div>
    )
}