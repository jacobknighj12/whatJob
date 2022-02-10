import { TextHelper } from "./TextHelper";

test("it will clean the first letter", () => {
  expect(TextHelper("hello")).toEqual("Hello");
});

test("it will clean the white space in front", () => {
  expect(TextHelper(" Hello this is my title")).toEqual(
    "Hello this is my title"
  );
});
