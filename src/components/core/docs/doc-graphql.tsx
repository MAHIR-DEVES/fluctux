'use client';
import 'graphiql/graphiql.min.css';
import { GraphiQL } from 'graphiql'

const fetcher = async (graphQLParams: any) => {
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

export default function DocGraphiQl(){
    return <div className='h-screen pt-[64px]'>
        <GraphiQL className='h-screen' fetcher={fetcher} />
    </div>

}
