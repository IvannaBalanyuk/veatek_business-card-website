import clsx from "clsx";
import React, { FC, useCallback } from "react";
import styles from "./tab.module.css";

const Tab: FC<
  React.PropsWithChildren<{
    active: boolean;
    value: string;
    onClick: (value: string) => void;
  }>
> = ({ active, value, children, onClick: handleClick }) => {
  const className = clsx(
    styles.tab,
    {
      tab_type_current: active,
    },
    "container",
    "noselect"
  );

  const onClick = useCallback(() => {
    if (typeof handleClick === "function") {
      handleClick(value);
    }
  }, [handleClick, value]);

  return (
    <div className={className} onClick={onClick}>
      <span className={`${styles.text} text text_type_normal`}>{children}</span>
    </div>
  );
};

export default Tab;
