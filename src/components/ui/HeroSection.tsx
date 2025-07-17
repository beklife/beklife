type Props = {
  children: React.ReactNode
}
const HeroSection = ({ children }: Props) => (
  <section className="flex flex-col items-center gap-y-7">
    <div className="flex flex-col items-center gap-y-4">{children}</div>
  </section>
)

export { HeroSection }
