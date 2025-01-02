import { QuestionsRepository } from '@/domain/application/repositories/questions-repository'
import { CreateQuestionUseCase } from '@/domain/application/use-cases/create-question'
import { Question } from '@/domain/enterprise/entities/question'

const fakeQuestionsRepository: QuestionsRepository = {
  create: async (question: Question) => {},
}
test('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)

  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'Nova pergunta',
    content: 'Conteúdo da pergunta',
  })

  expect(question.id).toBeTruthy()
})
