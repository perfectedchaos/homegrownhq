import naturalWorld from './naturalWorld'
import moneySkills from './moneySkills'
import digitalLiteracy from './digitalLiteracy'
import aboutTime from './aboutTime'
import { SubjectData } from './naturalWorld'

export const SUBJECTS: SubjectData[] = [
  naturalWorld,
  moneySkills,
  digitalLiteracy,
  aboutTime,
]

export type { SubjectData }
export type { Session, SessionStep, QuizQuestion } from './naturalWorld'