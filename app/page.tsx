import Link from "next/link"

export default function Page() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <p className="text-3xl font-bold">Hello Everyone!</p>
      <p className="text-lg mb-8">
        This is the main page, if you see it then you have successfuly{' '}
        <span className="italic">authenticated</span> and{' '}
        <span className="italic">authorized</span>
      </p>

      <div className="flex rounded-xl text-xl text-white font-semibold justify-center items-center w-80 h-24 bg-amber-600 hover:bg-amber-500">
        Great!
      </div>
    </div>
  )
}
