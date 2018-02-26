const {it, describe} = require('mocha');
const compiler = require('../src/compiler');
const chai = require('chai');
chai.use(require('dirty-chai'));
const { expect } = chai;
const { readFile } = require('fs-extra');

describe('compiler', () => {
    it('compiles something', async () => {
        const file = await compiler.compile('test/files/SimpleClass.cs');
        const expectedResult = (await readFile('test/files/SimpleClass.ts')).toString();
        expect(file).to.equal(expectedResult);
    });
});
