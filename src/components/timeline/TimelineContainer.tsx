type Props = {
  children: JSX.Element | JSX.Element[]
}

const TimelineContainer = ({ children }: Props) => (
  <ol className="relative border-s border-gray-300 dark:border-gray-700">
    {children}
  </ol>
)

export { TimelineContainer }
