import { BaseComment, PublicUser, User } from '../'
import { Reading } from '../reading'

/** The project object as it is returned from the server */
interface BaseProject {
  _id: string
  reading_id: Reading
  teacher: User
  teacher_id: any
  co_owner_ids?: string[]
  owner_id: any
  comments: BaseComment[]
  answers?: BaseComment[]
  students_ids: string[] // server populates the ids with this object
  temp_ids: string[] // same as above with temp_ids
  label: string
  code: string
  types: string // can currently be 'emoji' and 'text'
  heat_vision: boolean
  report_evals?: Feedback[]
  group_instructions?: string
  createdAt?: string
  updatedAt?: string
}

export interface Feedback {
  createdAt: Date
  evaluation: string
  user_id: string
  _id: string
}
