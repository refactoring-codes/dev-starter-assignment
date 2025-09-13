# Developer Assignment - Starter Repo

## Goal
This is a lightweight TypeScript + Node project intended as a simple homework assignment.

The purpose is to verify they can:
1. Download the repository and run `npm install`.
2. Open it in an IDE (Visual Studio / VS Code).
3. Run the test suite with `npm test` (it should go green).
4. Add a new component and unit tests.
5. Commit changes and create a Merge Request / Pull Request.

## What's included
- `src/` — TypeScript source files.
- `tests/` — Jest tests (one passing test to start).
- `package.json`, `tsconfig.json`, `jest.config.js`
- `README.md` (this file) with the assignment instructions.

## Quick start (for the applicant)
1. `npm install`
2. `npm test`  — the existing tests should pass.
3. Create a new branch: `git checkout -b feat/add-counter-button`
4. Implement the requested task below.
5. Add tests and ensure `npm test` passes.


## The task (what the applicant must do)
Add a **CounterButton** component that:
- Lives in `src/components/CounterButton.ts`
- Exposes a class `CounterButton` with:
  - a constructor optionally accepting an initial count (default `0`).
  - a method `click()` that increments the counter and returns the new value.
  - a method `getCount()` that returns the current count.
- Add unit tests under `tests/` to validate its behavior:
  - It starts at 0 by default.
  - If constructed with a starting number, it begins at that number.
  - `click()` increments and returns the expected count.

## Acceptance criteria (what we'll check)
- Applicant can `npm install` and then `npm test` (all tests pass).
- The new `CounterButton` component exists and is well-tested.
- Changes are committed.
- Tests are readable and demonstrate understanding of unit testing.

