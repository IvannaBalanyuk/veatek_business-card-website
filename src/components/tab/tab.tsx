import clsx from 'clsx';
import React, { FC } from 'react';
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
        'pt-4',
        'pr-10',
        'pb-4',
        'pl-10',
        'noselect'
    );

    const onClick = React.useCallback(() => {
        if (typeof handleClick === 'function') {
            handleClick(value);
        }
    }, [handleClick, value]);

    return (
        <div className={className} onClick={onClick}>
            <span className="text text_type_main-default">{children}</span>
        </div>
    );
};

export default Tab;
