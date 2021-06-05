import React from 'react';

import styles from './button.module.css';

export type ButtonProps = {
    label: string,
    onClick: () => void,
    disabled?: boolean,
}

export const Button = ({
    label,
    onClick,
    disabled=false,
	}: ButtonProps) => (
        <button
            className={styles.button}
            onClick={onClick}
            disabled={disabled}
        >
            { label }
        </button>
	);
