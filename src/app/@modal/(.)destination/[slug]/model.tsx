"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import styles from "./modal.module.scss";

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
    <div className={styles["model-backdrop"]}>
      <dialog ref={dialogRef} className={styles["model"]} onClose={onDismiss}>
        {children}
        <button onClick={onDismiss} className="close-button" >Close</button>
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
}
