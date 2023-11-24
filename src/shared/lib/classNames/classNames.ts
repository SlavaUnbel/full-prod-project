export type Mods = Record<string, boolean | string | undefined>;

export function classNames(
    cls: string,
    options: {
        mods?: Mods;
        additional?: Array<string | undefined>;
    } = { mods: {}, additional: [] },
): string {
    return [
        cls,
        ...(options.additional ? options.additional.filter(Boolean) : []),
        ...(options.mods
            ? Object.entries(options.mods)
                  .filter(([_, value]) => Boolean(value))
                  .map(([className]) => className)
            : []),
    ].join(' ');
}
