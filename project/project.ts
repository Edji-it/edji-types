import { EdjiComment, PublicUser } from '../'

export interface Feedback {
  createdAt: Date
  evaluation: string
  user_id: string
  _id: string
}
