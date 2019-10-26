export interface iIndexMessage {
  documents: string[]
  collection: DatabaseCollectionName
}

export type DatabaseCollectionName = 'readings'