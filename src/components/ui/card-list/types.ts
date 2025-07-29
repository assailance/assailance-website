export interface ICardProps {
  title: string
  titleLink: string
  description: string
  externalLink?: string
  tags?: string[]
}

export interface ICardWithImageProps extends ICardProps {
  images: string[]
}
