'use client'

import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import cx from 'clsx';
import classes from './LightDarkToggle.module.css';

export default function LightDarkToggle() {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    return (
        <ActionIcon
            onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
            variant="default"
            size="xl"
            aria-label="Toggle color scheme"
        >
            <SunIcon className={cx(classes.icon, classes.light)} />
            <MoonIcon className={cx(classes.icon, classes.dark)} />
        </ActionIcon>
    );
}