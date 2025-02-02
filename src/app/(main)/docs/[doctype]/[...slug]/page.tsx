import DocContent from '@/components/core/docs/doc-content';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function DocContentPage({
  params
}: { params: Promise<{ slug: string[], doctype: string }> }) {

  const { slug, doctype } = await params
  const fullSlug = slug.join("/")

  try {
    const response = await fetch(
      `${process.env.GITHUB_RAW_CONTENT_API}/src/content/docs/${doctype}/${fullSlug}.mdx`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        cache: "no-cache"
      }
    );

    const textData = await response.text(); // Use .text() for plain text like README

    return <DocContent data={textData} />
  } catch (error) {
    throw new Error("Something went wrong")
  }

}


