"use client"
import { createNewOrg } from '@/actions/org.server'
import { OrgVisibilityType } from '@/types/org-types'
import React from 'react'

const page = () => {


  const createOrg = async () => {
    try {
      const data = {
        org_thumbnail: "thumbnail",
        org_name: "hello rog",
        org_description: "desc",
        org_visibility: OrgVisibilityType.PUBLIC,
        category: "mahin vai",
        tags: ["tata", "bye", "hello"],
      }
      await createNewOrg(data)
      console.log("org created success");
      
    } catch (error) {
      console.log("error in org creation");
      
    }

  }

  return (
    <div>
      auth error
      <button onClick={createOrg}>
        create
      </button>
    </div>
  )
}

export default page
