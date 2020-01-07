import { hello } from '../src/index';

describe('hello()', () => {
    it('Hello(World) == Hello World', () => {
        expect(hello("World")).toBe('Hello World!');
    });
});
