import DocContent from '@/components/core/docs/doc-content';
import React from 'react'

export default async function DocContentPage({
  params
}: { params: Promise<{ slug: string[], doctype: string }> }) {

  const { slug, doctype } = await params
  const fullSlug = slug.join("/")

  const response = await fetch(
    `https://raw.githubusercontent.com/gitmahin/fluctux/main/src/content/docs/${doctype}/${fullSlug}`,

  );

  const textData = await response.text(); // Use .text() for plain text like README

  return <DocContent data={textData} />
}


