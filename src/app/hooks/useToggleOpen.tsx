import { useEffect, useState } from "react"

interface ToggleOpenProps {
    shortcutKey?: string
}

export default function useToggleOpen({shortcutKey}: ToggleOpenProps) {
    const [open, setOpen] = useState<boolean>(false)
 
    useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === shortcutKey && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          setOpen((open) => !open)
        }
      }
      document.addEventListener("keydown", down)
      return () => document.removeEventListener("keydown", down)
    }, [])


    return {open, setOpen}

}