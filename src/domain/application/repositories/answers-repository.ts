import { Answer } from '@/domain/enterprise/entities/answer'

export interface AnswersRepository {
  create(answer: Answer): Promise<void>
}
