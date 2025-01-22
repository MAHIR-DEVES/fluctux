import { useEffect, useState } from "react";

interface ToggleOpenProps {
  id: string;
  shortcutKey?: string;
}

export default function useToggleOpen({ id, shortcutKey }: ToggleOpenProps) {
  const [openStates, setOpenStates] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!shortcutKey) return;

    const down = (e: KeyboardEvent) => {
      if (e.key === shortcutKey && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpenStates((prev) => ({
          ...prev,
          [id]: !prev[id], // Toggle state for the specific ID
        }));
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [shortcutKey, id]);

  return {
    isOpen: !!openStates[id], // Get the state for the specific ID & convert to strict boolean
    toggle: () =>
      setOpenStates((prev) => ({
        ...prev,
        [id]: !prev[id],
      })), // toggle function
    setOpen: (state: boolean) =>
      setOpenStates((prev) => ({
        ...prev,
        [id]: state,
      })), // state setter
  };
}
