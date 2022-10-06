export function guidGenerator() {
    const S4 = function () {
        return ((((1 + Math.random()) * 0x10000) | 0));
    };
    return (S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4());
}
