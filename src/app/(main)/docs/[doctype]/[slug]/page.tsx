

import DocContent from '@/components/core/docs/doc-content';
import React from 'react'
import { GITHUB_AUTH_DOC_API } from '../../../../../../graphql/constant';

export default async function DocContentPage() {

   const response = await fetch(`${GITHUB_AUTH_DOC_API}/developer/get-started/setup-environment.mdx`, {
     headers: {
       Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
     },
   });

       const data = await response.json();
      const content = atob(data.content); // Decode base64 content

  return <DocContent data={content} />
}


