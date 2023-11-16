import { createSelector } from '@reduxjs/toolkit';
import { ApplicationState } from 'app/providers/StoreProvider';

import { UserRole } from '../consts/user';

export const userStateSelector = (state: ApplicationState) => state.user;

export const userAuthDataSelector = (state: ApplicationState) => userStateSelector(state).authData;

export const userInitedSelector = (state: ApplicationState) => userStateSelector(state)._inited;

export const userRolesSelector = (state: ApplicationState) => userAuthDataSelector(state)?.roles ?? [];

export const isUserAdminSelector = createSelector(userRolesSelector, (roles) => roles.includes(UserRole.ADMIN));

export const isUserManagerSelector = createSelector(userRolesSelector, (roles) => roles.includes(UserRole.MANAGER));

export const isAdminPanelAvailableSelector = createSelector(isUserAdminSelector, isUserManagerSelector, (isAdmin, isManager) => isAdmin || isManager);
