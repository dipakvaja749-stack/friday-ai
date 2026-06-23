"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentTitle: string;
  onSubmit: (title: string) => void;
}

export function RenameChatDialog({
  open,
  onOpenChange,
  currentTitle,
  onSubmit,
}: Props) {
  const [title, setTitle] =
    useState(currentTitle);

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Rename Chat
          </DialogTitle>
        </DialogHeader>

        <Input
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <Button
          onClick={() => onSubmit(title)}
        >
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
}