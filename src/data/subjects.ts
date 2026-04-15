import naturalWorld from './naturalWorld'
import moneySkills from './moneySkills'
import digitalLiteracy from './digitalLiteracy'
import { SubjectData } from './naturalWorld'

export const SUBJECTS: SubjectData[] = [
  naturalWorld,
  moneySkills,
  digitalLiteracy,
]

export type { SubjectData }
export type { Session, SessionStep, QuizQuestion } from './naturalWorld'