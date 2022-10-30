const fn = require("./fn");

test("1은 1이야", () => {
  expect(1).toBe(1);
});

test("2 더하기 3은 5야.", () => {
  expect(fn.add(2, 3)).toBe(5);
});

test("3 더하기 3은 5야.", () => {
  expect(fn.add(3, 3)).not.toBe(5);
});

//내가 테스팅하고 싶은 함수를 가져온다.

test("5+5는 10이야", () => {
  expect(fn.add(5, 5)).toEqual(10);
});

//toBe==Matcher
//toEqual
//toStrictEqual
test("이름과 나이를 전달받아서 객체를 변환해줘", () => {
  expect(fn.makeUser("Mike", 30)).toEqual({ name: "Mike", age: 30 });
});

test("null", () => {
  expect(null).toBeNull();
});

test("undefined", () => {
  expect(undefined).toBeUndefined();
});
//toBeNull      =>null이면 통과
//toBeUndefined=>undefined 이면 통과
//toBeDefined => defined이면 통과

//toBeTruthy => true면 통과
//toBefalsy => false면 통과

//toBeGreaterThan 크다
//toBeGreaterThanOrEual 크거나 같다
//toBeLessThan 적다
//toBeLessThanOrEqual 작거나 같다.

test("비어있지 않은 문자열은 true 입니다.", () => {
  const id = "hihihi";
  expect(id.length).toBeLessThan(10); //10자 이하
});

//소수점 계산 오차 방지를 위해 toBeCloseTo를 쓴다.
//정규 표현식 공부하기

//toContain 포함하고있나?

test("유저 리스트에 mike 가 있나??", () => {
  const user = "Mike";
  const userList = ["Tom", "Jane", "Kai", "Mike"];
  expect(userList).toContain(user);
});

test("이거 에러 나나요?", () => {
  expect(() => fn.throwErr().toThrow("oo"));
});
