import { Form } from '@remix-run/react'

export default function LogoutButton() {
   return (
      <div className="p-4 mr-4">
         <Form method="post" action="/auth/logout">
            <button className="border-0 bg-white py-2 px-4 text-black">
               Logout
            </button>
         </Form>
      </div>
   )
}
