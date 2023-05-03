type Mods = Record<string, boolean | string>

export function classNames(
    cls: string,
    options: {
        mods?: Mods,
        additional?: string[],
    } = { mods: {}, additional: [] },
): string {
    return [
        cls,
        ...options.additional.filter(Boolean),
        ...Object.entries(options.mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ]
        .join(' ');
}
