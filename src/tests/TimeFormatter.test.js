const { getTimeSpan } = require("../utils/TimeFormatter");

test('timeformatter should show seconds diff with less-minute times', () => {
  let date = new Date("2021-06-08T15:00:00.000Z");
  let now = new Date("2021-06-08T15:00:35.245Z");
  
  expect(getTimeSpan(date.toISOString(), now.toISOString())).toBe('35s');
});

test('timeformatter should show minutes diff with less-hour times', () => {
  let date = new Date("2021-06-08T15:00:00.000Z");
  let now = new Date("2021-06-08T15:32:35.245Z");
  
  expect(getTimeSpan(date.toISOString(), now.toISOString())).toBe('32m');
});

test('timeformatter should show hours diff with less-day times', () => {
  let date = new Date("2021-06-08T15:00:00.000Z");
  let now = new Date("2021-06-09T09:24:22.217Z");
  
  expect(getTimeSpan(date.toISOString(), now.toISOString())).toBe('18h');
});

test('timeformatter should show date with more than one day times', () => {
  let date = new Date("2021-06-08T15:00:00.000Z");
  let now = new Date("2021-06-09T19:24:22.217Z");
  
  expect(getTimeSpan(date.toISOString(), now.toISOString())).toBe('Jun 8');
});
  