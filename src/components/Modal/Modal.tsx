import React, { MutableRefObject, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");
const Modal: React.FC = ({ children }) => {
  const elRef: MutableRefObject<HTMLElement | null> = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    if (!modalRoot || !elRef.current) {
      return;
    }
    modalRoot.appendChild(elRef.current);
    return () => {
      if (elRef.current) {
        modalRoot.removeChild(elRef.current);
      }
    }
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
