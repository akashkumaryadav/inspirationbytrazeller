"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import styles from "./modal.module.scss";
import { BsTrash } from "react-icons/bs";
import { Button } from "react-bootstrap";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className={styles["modal-backdrop"]}>
      <dialog ref={dialogRef} className={styles["modal"]} onClose={onDismiss}>
        {children}
        <Button variant="light" onClick={onDismiss} className={styles["close-button"]}>
          <BsTrash />
          Close
        </Button>
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
}
