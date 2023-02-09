type Mods = Record<string, string | boolean>;

export default function classNames(cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...additional,
        Object.entries(mods)
            .filter(([_, value]) => !!value)
            .map(([className]) => className),
    ].join(' ');
};
