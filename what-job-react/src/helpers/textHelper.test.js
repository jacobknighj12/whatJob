import { textClean } from "./textHelper";
test('it will clean the first letter', () => {
    expect(textClean('hello')).toEqual('Hello')
})

test('it will clean the white space in front', () => {
    expect(textClean(' Hello this is my title')).toEqual('Hello this is my title')
})

