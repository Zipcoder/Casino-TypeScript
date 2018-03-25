import HelloCasino from '../src/hello';
describe('the door greeter', () => {
    it('should welcome regulars', () => {
        expect(HelloCasino.hello("Vince")).toEqual("Welcome to HotShots Casino, Vince.");
    });
    it('should welcome everyone', () => {
        expect(HelloCasino.hello()).toEqual("Welcome to HotShots Casino, valued patron.");
    });
});
//# sourceMappingURL=hello.test.js.map