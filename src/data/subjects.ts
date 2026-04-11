import naturalWorld from './naturalWorld'
import moneySkills from './moneySkills'
import { SubjectData } from './naturalWorld'

export const SUBJECTS: SubjectData[] = [
  naturalWorld,
  moneySkills,
]

export type { SubjectData }
export type { Session, SessionStep, QuizQuestion } from './naturalWorld'