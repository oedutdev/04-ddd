import { Question } from '@/domain/enterprise/entities/question'

export interface QuestionsRepository {
  create(question: Question): Promise<void>
}
