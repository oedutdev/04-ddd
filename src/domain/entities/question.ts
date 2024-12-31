import { Entity } from "../../core/entities/entity"
import type { UniqueEntityID } from "../../core/entities/unique-entity-id"
import type { Slug } from "./value-objects/slug"

interface QuestionProps {
  authorId: UniqueEntityID
  questionId: UniqueEntityID
  bestAnswerId?: UniqueEntityID
  title: string
  content: string
  slug: Slug
  createdAt: Date
  updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {}
