import React from 'react'

export default function AuthPage() {
  return (
    <div>
      <input type="text" placeholder='email or username' />
      <input type="text" placeholder='password' />
      <button>
        Signin
      </button>

      <button>
        Continue with google
      </button>
      <button>
        Continue with github
      </button>
    </div>
  )
}


