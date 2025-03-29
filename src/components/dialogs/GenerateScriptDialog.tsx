import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function GenerateScriptDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate Script</DialogTitle>
          <DialogDescription>
            Fill in the details below to generate a script for your video.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
