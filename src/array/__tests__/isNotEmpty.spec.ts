import isNotEmpty from '../isNotEmpty';

describe('isNotEmpty', () => {
    /*
        const mockSettings = {};
        const mockOptions = {};
        beforeEach(() => {});
    */
    it('description', () => {
        const result = isNotEmpty([]);
        expect(result).toEqual(false);
    });
});
