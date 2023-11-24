import {
    CreateSliceOptions,
    SliceCaseReducers,
    bindActionCreators,
    createSlice,
} from '@reduxjs/toolkit';
import { useMemo } from 'react';

import { useAppDispatch } from '../hooks/useAppDispatch';

export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string,
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
    const slice = createSlice(options);

    const useActions = (): typeof slice.actions => {
        const dispacth = useAppDispatch();

        // @ts-ignore
        return useMemo(
            // @ts-ignore
            () => bindActionCreators(slice.actions, dispacth),
            [dispacth],
        );
    };

    return {
        ...slice,
        useActions,
    };
}
