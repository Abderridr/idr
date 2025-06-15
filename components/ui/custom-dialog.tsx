import React from 'react';
"use client";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CustomDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  hideTitle?: boolean;
}

export function CustomDialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  hideTitle = false,
}: CustomDialogProps) {
  import { Fragment } from 'react';
...
const TitleComponent = hideTitle ? VisuallyHidden : Fragment;

  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <TitleComponent>
            <DialogTitle>{title}</DialogTitle>
          </TitleComponent>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
