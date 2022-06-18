import { Form } from '@remix-run/react'

export default function Index() {
   return (
      <div className="text-xl border-2 border-yellow p-5">
         <h1 className="text-white p-2 font-title">Welcome to Remix</h1>

         <Form action={`/auth/bungie`} method="post">
            <button className="font-body text-white text-4xl">
               Login to Bungie
            </button>
         </Form>
      </div>
   )
}
