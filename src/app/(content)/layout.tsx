import Flags from './_components/flags'

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="max-w-4xl mx-auto px-4 my-3">
      <Flags />

      <div className="mt-3">
        {children}
      </div>
    </div>
  )
}
