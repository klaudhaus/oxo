export type OxoProject = {
  name: string
  storyGroups: StoryGroup[]
}

export type StoryGroup = {
  name: string
  stories: Array<Story<any>>
}

export type Story<T> = {
  title: string
  model?: T
  view?: (model: T) => any
  init?: T | ((...params: any[]) => T)
  scenes: StoryScene[]
  fullHeight?: boolean
  url?: string
}

export type StoryEvent = {
  captureXpath: string
  bubbleXpath: string
  type: string
}

export type StoryUpdate = {
  fn: {
    path: string
    key: string
  },
  paramPath: string
}

export type StoryScene = {
  caption: string
  nextEvent?: StoryEvent
  nextUpdate?: StoryUpdate
  snapshot?: string // Flatted representation of model
}
