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
  scenes?: StoryScene[]
  fullHeight?: boolean
  url?: string
}

export type StoryEvent = {
  elements: {
    trigger: string
    handle: string
  }
  type: string
  data?: any
}

export type StoryUpdate = {
  update: {
    path: string
    key: string
  },
  data: {
    path: string
  }
}

export type StoryScene = {
  captions?: {
    command?: string
    complete?: string
  }
  event?: StoryEvent
  update?: StoryUpdate
  next?: StoryScene[]
}
