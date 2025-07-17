type Props = {
  children: string | JSX.Element | JSX.Element[] | '() => JSX.Element'
}
const Underline = ({ children }: Props) => (
  <span className="underline decoration-indigo-500">{children}</span>
)

export { Underline }
