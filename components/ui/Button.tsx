import React from "react";
import Link from "next/link";

import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  link?: string;
}

const Button: React.FC<ButtonProps> = ({ children, link, ...props }) => {
  if (link) {
    return (
      <Link href={link}>
        <a className={styles.btn}>{children}</a>
      </Link>
    );
  }
  return <button {...props}>{children}</button>;
};

export default Button;
