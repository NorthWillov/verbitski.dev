import { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="pt-20 md:w-full w-11/12 m-auto md:m-0 text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-tight md:leading-none pb-12 text-left">
      {children}
    </h1>
  )
}

export default PostTitle
