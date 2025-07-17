type Props = {
  href: string
  children: string | JSX.Element | JSX.Element[] | '() => JSX.Element'
}

const Link = ({ href, children }: Props) => {
  return (
    <a className=" hover:text-cyan-700 hover:underline" href={href}>
      {children}
    </a>
  )
}

export { Link }
