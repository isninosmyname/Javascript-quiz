import { Button } from '@mui/material'
import { useQuestionsData } from './hooks/useQuestionsData.ts'
import { useQuestionsStore } from './store/questions.ts'

export const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionsData()
  const reset = useQuestionsStore(state => state.reset)

  return (
    <footer style={{ marginTop: '16px' }}>
      <strong>{`✅ ${correct} correct - ❌ ${incorrect} incorrect - ❓ ${unanswered} unanswered`}</strong>
      <div style={{ marginTop: '16px' }}>
        <Button onClick={() => reset()}>
          Reset game
        </Button>
      </div>
    </footer>
  )
}