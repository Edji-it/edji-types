/*  
  Last Mod: 8.5.17
*/

/**
 * Comment, server
 * - Raw comment data received from server
 */
export interface BaseComment {
  _id: string
  user_id: string
  start: number
  end: number
  data: any
  author: string
  type: string // emoji, text, or audio comment?
  dataArray?: any[]
  url?: string
  text?: string
  loc?: { x: number; y: number }
  box?: {
    start: number
    end: number
    start_x: number
    start_y: number
  } // Hit box/word indices for images/pdfs
  lineY?: number // Used to get comments for a line (annotator, comment pane)
  imageY?: number // Used for positioning of comments in rows on images
  reply_to?: string
  replies?: any[]
  questionId?: string
  prompt?: string
  new?: boolean
  question_number?: number
  createdAt?: Date
  updatedAt?: Date
}
