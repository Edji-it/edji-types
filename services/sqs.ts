export interface iIndexMessage {
  documents: string[]
  collection: CollectionName
}

type CollectionName = 'readings'