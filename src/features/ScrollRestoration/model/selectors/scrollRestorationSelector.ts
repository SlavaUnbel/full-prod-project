import { createSelector } from '@reduxjs/toolkit';
import { ApplicationState } from 'app/providers/StoreProvider';

export const scrollRestorationStateSelector = (state: ApplicationState) => state.scrollRestoration;

export const scrollRestorationSelector = (state: ApplicationState) => scrollRestorationStateSelector(state)?.scroll;

export const scrollRestorationByPathSelector = createSelector(
    scrollRestorationSelector,
    (state: ApplicationState, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
