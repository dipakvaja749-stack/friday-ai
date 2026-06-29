"use client";

import { useRef, useState } from "react";
import { ImagePlus, X } from "lucide-react";

interface ImageUploadProps {
  onImageSelect: (file: File | null) => void;
}

export default function ImageUpload({
  onImageSelect,
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    onImageSelect(file);

    const reader = new FileReader();

    reader.onload = () => {
      setPreview(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setPreview(null);

    onImageSelect(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="flex items-center gap-2">
      {!preview ? (
        <>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleChange}
          />

          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="rounded-lg p-2 hover:bg-zinc-800 transition"
            title="Upload Image"
          >
            <ImagePlus className="h-5 w-5 text-zinc-400" />
          </button>
        </>
      ) : (
        <div className="relative">
          <img
            src={preview}
            alt="Preview"
            className="h-16 w-16 rounded-lg object-cover border border-zinc-700"
          />

          <button
            type="button"
            onClick={removeImage}
            className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1 text-white shadow"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}
    </div>
  );
}