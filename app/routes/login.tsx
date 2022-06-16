import { Form } from '@remix-run/react';

export default function Login() {
   return (
      <>
         <h1>Login</h1>
         <Form action={`/auth/bungie`} method='post'>
            <button>Bungie</button>
         </Form>
      </>
   );
}
