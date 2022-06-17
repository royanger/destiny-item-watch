import { Form } from '@remix-run/react'

export default function Index() {
   return (
      <div className="text-xl border-2 border-red-600 p-5">
         <h1>Welcome to Remix</h1>

         <Form action={`/auth/bungie`} method="post">
            <button>Login to Bungie</button>
         </Form>
      </div>
   )
}
