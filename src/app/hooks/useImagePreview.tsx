import React, { useState } from 'react'

export const useImagePreview = () => {

    const [imagePreview, setImagePreview] = useState<string>("");
    const [file, setFile] = useState<File | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files?.[0]) {
        const newFile = e.target.files[0];
        if (file) URL.revokeObjectURL(imagePreview); // Revoke previous URL
        const imageUrl = URL.createObjectURL(newFile);
        setImagePreview(imageUrl);
        setFile(newFile);
  
        // Reset input value to allow re-selecting the same file
        e.target.value = '';
      }
    };
  
    const handleRemoveImage = () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview); // Revoke URL
      setImagePreview('');
      setFile(null);
    };

  return {
    handleImageChange,
    imagePreview,
    handleRemoveImage
  }
}


