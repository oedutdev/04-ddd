import { AnswersRepository } from '@/domain/application/repositories/answers-repository'
import { AnswerQuestionUseCase } from '@/domain/application/use-cases/answer-question'
import { Answer } from '@/domain/enterprise/entities/answer'

const fakeAnswersRepository: AnswersRepository = {
  create: async (answer: Answer) => {},
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const { answer } = await answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'Nova resposta',
  })

  expect(answer.id).toBeTruthy()
})
