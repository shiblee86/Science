# Scout's Science Trail — Test Suite

A zero-dependency test suite that runs entirely in a browser (no Node.js,
no npm, no build step — matching the app itself). It loads the real
`app.js` and every `data/*.js` file, reuses the app's real DOM screens
(hidden off-screen), and exercises the actual functions and markup a
player would trigger.

## Files

| File | Purpose |
|---|---|
| `test-framework.js` | Minimal `describe/it`-style suite runner + assertions. No app knowledge. |
| `test-helpers.js` | Shared app-specific helpers: reset state, simulate correct/incorrect answers, play a skill start-to-finish, build synthetic test skills. |
| `unit.test.js` | Pure functions (`shuffle`, `rnd`, `normalizeItem`, lookup helpers) and full data-schema validation for every skill in all 3 grades. |
| `integration.test.js` | Multi-function flows against the real DOM: navigation, question rendering per type, answer checking, scoring, progress persistence, hints. |
| `regression.test.js` | Locks in bugs found during development (schema typos, stray `undefined` fields) and invariants that must never silently change (skill/unit counts per grade, pass threshold, storage key, star bands). |
| `runner.html` | Loads everything in the right order and renders a pass/fail report. |

## Running the suite

Open `tests/runner.html` directly in a browser (double-click, or
`file://` works fine — the app has no server-side dependencies). Tests
run automatically on load and render a report with a pass/fail count
per category and per suite, plus the full assertion error for any
failure.

To run only one category, add a query string:

```
tests/runner.html?category=unit
tests/runner.html?category=integration
tests/runner.html?category=regression
```

### Headless / scripted runs

For CI or command-line use with headless Chrome:

```bash
google-chrome --headless --disable-gpu --no-sandbox \
  --virtual-time-budget=8000 --dump-dom \
  "file:///path/to/Science/tests/runner.html" \
  | grep -o '<pre id="test-summary-json">.*</pre>'
```

The `#test-summary-json` element (hidden in the UI) contains the full
`{ summary, byCategory, results }` object as JSON for scripted parsing.
`document.title` is also set to `✅ All passing — Test Suite` or
`❌ N failing — Test Suite` for a quick grep.

## Adding new tests

Register tests inside `TF.suite(name, category, fn)` blocks, where
`category` is `'unit'`, `'integration'`, or `'regression'`:

```js
TF.suite('My new suite', 'integration', () => {
  TF.beforeEach(qaResetAppState); // if the tests mutate app state

  TF.test('does the thing', () => {
    TF.assertEqual(1 + 1, 2);
  });
});
```

- Use **unit** tests for pure functions or static data-shape checks that
  don't touch the DOM or global app state.
- Use **integration** tests for anything that calls `startSkill()`,
  `checkAnswer()`, navigation functions, or reads/writes the real DOM —
  most of these should start with `TF.beforeEach(qaResetAppState)`.
- Use **regression** tests to lock in a specific bug fix or an invariant
  that would be easy to silently break (a magic number, a storage key,
  a count that should stay fixed). Name the test after what it protects,
  and note in a comment which bug or decision it's guarding.

New `.test.js` files must be added to the `<script>` list in
`runner.html` (after `test-helpers.js`, before the closing bootstrap
script) to actually run.
