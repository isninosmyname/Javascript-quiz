import { Button } from "@mui/material"
import { useQuestionsData } from "./hooks/useQuestionsData.ts"
import { useQuestionsStore } from "./store/questions.ts"

export const Results = () => {
    const { correct, incorrect } = useQuestionsData()
    const reset = useQuestionsStore(state => state.reset)

    return (
        <div style={{ marginTop: '16px' }}>
            <h1>Your results!</h1>

            <strong>
                <p>✅ {correct} correct</p>
                <p>❌ {incorrect} incorrect</p>
            </strong>

            <div style={{ marginTop: '16px' }}>
                <Button onClick={() => reset()}>
                    Start over!
                </Button>
            </div>
        </div>
    )
}