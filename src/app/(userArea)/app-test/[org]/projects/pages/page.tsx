import PageList from '@/components/core/app/PageList'
import React from 'react'

const initialData = [
  {
    title: "Project Alpha",
    assigns: {
      value: "halima-khatun",
      label: "Halima Khatun",
      image:
        "https://st2.depositphotos.com/3867453/9096/v/450/depositphotos_90960358-stock-illustration-letter-m-logo-icon-design.jpg",
    },
    status: "PRIVATE",
  },
  {
    title: "Project Beta",
    // assigns: {
    //   value: "mehena-khatun",
    //   label: "Mehena Khatun",
    //   image:
    //     "https://i.pinimg.com/474x/b6/74/f5/b674f5c59532b8f0e6efeb17bf6f75bc.jpg",
    // },
    status: "PUBLIC",
  },
];

export default function PageProject() {
  return <PageList data={initialData} />
}

