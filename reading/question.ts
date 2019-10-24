import { EdjiComment } from '../'

/*
  Data and logic for Questions inserted into a reading.
  29 July 2017
  Nick Pumper

  Last modified: 2 Aug 2017
*/
/** The reading as it is returned from the server */
export interface EdjiQuestion {
  _id: string
  prompt: string
  answer_types: any[]
  option_types: any[]
  answers?: EdjiComment[]
} //  interface BaseQuestion
