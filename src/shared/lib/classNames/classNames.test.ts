import { classNames } from './classNames';

describe('classNames', () => {
    it('should return exact lass with only first param provided', () => {
        const funcCall = classNames('someClass');
        const expected = 'someClass';

        expect(funcCall).toBe(expected);
    });

    it('should return joined string with all classes provided in both first arg as main class and third arg as array of additional classes', () => {
        const funcCall = classNames('someClass', {
            mods: {},
            additional: ['otherClass1', 'otherClass2'],
        });
        const expected = 'someClass otherClass1 otherClass2';

        expect(funcCall).toBe(expected);
    });

    it('should return joined string with all classes provided in all first arg as main class, third arg as array of additional classes and second arg as class mods', () => {
        const funcCall = classNames('someClass', {
            mods: { hovered: true, scrollable: true },
            additional: ['otherClass1', 'otherClass2'],
        });
        const expected = 'someClass otherClass1 otherClass2 hovered scrollable';

        expect(funcCall).toBe(expected);
    });

    it('should return joined string with all classes provided in all function args but without a mod which is undefined', () => {
        const funcCall = classNames('someClass', {
            mods: { hovered: true, scrollable: undefined },
            additional: ['otherClass1', 'otherClass2'],
        });
        const expected = 'someClass otherClass1 otherClass2 hovered';

        expect(funcCall).toBe(expected);
    });
});
