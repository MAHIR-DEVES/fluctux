'use client';

import dynamic from 'next/dynamic';
import 'graphiql/graphiql.min.css';

const GraphiQL = dynamic(() => import('graphiql').then(mod => mod.GraphiQL), {
  ssr: false,
});

const fetcher = async graphQLParams => {
  const response = await fetch(
    'http://localhost:3000/api/graphql',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(graphQLParams),
    },
  );
  return response.json();
};

export default function App() {
  return <div className='h-screen pt-[64px]'>

      <GraphiQL className='h-screen' fetcher={fetcher} />;
  </div>
  
}
