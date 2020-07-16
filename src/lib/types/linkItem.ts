export interface LinkItem {
  title: string
  url: LinkUrl
  icon: IconType
}

export interface LinkUrl {
  cached_url?: string
  fieldtype?: string
  id?: string
  linktype?: string
  url?: string
}

export interface IconType {
  filename?: string
  name?: string
  title?: string
}

export interface NavigationLinks {
  links: Array<LinkItem>
}

export interface NavigationType {
  navigation: Array<NavigationLinks>
}
