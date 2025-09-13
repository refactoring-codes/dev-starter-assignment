import { greet } from '../src/components/AppComponent';

test('greet returns Hello, <name>', () => {
  expect(greet('World')).toBe('Hello, World');
});
