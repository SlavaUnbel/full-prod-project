import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import {
    userAuthDataSelector,
    UserRole,
    userRolesSelector,
} from '@/entities/User';
import { getRouteForbidden, getRouteMain } from '@/shared/const/routeConfig';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

const RequireAuth = ({ children, roles }: RequireAuthProps) => {
    const auth = useSelector(userAuthDataSelector);
    const userRoles = useSelector(userRolesSelector);

    const location = useLocation();

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => userRoles.includes(requiredRole));
    }, [roles, userRoles]);

    if (!auth) {
        return (
            <Navigate to={getRouteMain()} state={{ from: location }} replace />
        );
    }

    if (!hasRequiredRoles) {
        return (
            <Navigate
                to={getRouteForbidden()}
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
};

export default RequireAuth;
