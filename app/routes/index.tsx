import { Form } from '@remix-run/react';

export default function Index() {
   return (
      <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
         <h1>Welcome to Remix</h1>

         <Form action={`/auth/bungie`} method='post'>
            <button>Login to Bungie</button>
         </Form>
      </div>
   );
}
