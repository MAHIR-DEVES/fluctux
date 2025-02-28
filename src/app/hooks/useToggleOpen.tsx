import { useEffect, useState } from "react";

interface ToggleOpenProps {
  id?: string;
  shortcutKey?: string;
}

export const useToggleOpen = ({ id, shortcutKey }: ToggleOpenProps) => {
  const [openStates, setOpenStates] = useState<Record<string, boolean>>({});
  const [openArray, setOpenArray] = useState<{ [key: string]: boolean }>({});

  const handleOpenArray = (openArrayId: string) => {
    setOpenArray((prev) => ({
      ...prev,
      [openArrayId]: !prev[openArrayId],
    }));
  }

  useEffect(() => {
    if (!shortcutKey || !id) return;

    const down = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenStates((prev) => ({
          ...prev,
          [id]: false, // Set state to false for the specific ID
        }));
      }

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
    isOpen: id && !!openStates[id] || false, // Get the state for the specific ID & convert to strict boolean
    toggle: () => {
      if (!id) return
      setOpenStates((prev) => ({
        ...prev,
        [id]: !prev[id],
      }))
    }, // toggle function
    setOpen: (state: boolean) => {
      if (!id) return
      setOpenStates((prev) => ({
        ...prev,
        [id]: state,
      }))
    }, // state setter
    isOpenFromArray: (openArrayId: string) => {
      return openArray[openArrayId]
    },
    openArray,
    setOpenArray,
    handleOpenArray
  };
}
