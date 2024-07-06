import authenticate from "../lib/actions"


export default async function LoginForm(){
  return (
    <form action={authenticate}>
      <label className="block py-4 text-center" htmlFor="user">
        username{' '}
        <input required className="py-0.5 px-2 border border-neutral-600 rounded" type="text" id="user" name="username" placeholder="username..." />
      </label>
      <label className="block py-4 mb-2 text-center" htmlFor="password">
        password{' '}
        <input required className="py-0.5 px-2 border border-neutral-600 rounded" type="password" name="password" id="password" placeholder="password..." />
      </label>
      <div className="text-center"><button className="py-1 px-6 rounded bg-black hover:bg-neutral-800 active:bg-purple-700 transition text-white" type="submit">ok</button></div>
      
    </form>
  )
}