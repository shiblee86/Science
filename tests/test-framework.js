// ============================================================
// TF — minimal zero-dependency browser test framework.
// No Node/npm involved: everything runs in-page via tests/runner.html.
// ============================================================

const TF = (() => {
  const suites = [];
  let currentSuite = null;

  function suite(name, category, fn) {
    const s = { name, category, tests: [], beforeEachFns: [] };
    suites.push(s);
    const prev = currentSuite;
    currentSuite = s;
    fn();
    currentSuite = prev;
  }

  function test(name, fn) {
    if (!currentSuite) throw new Error('TF.test() called outside of TF.suite()');
    currentSuite.tests.push({ name, fn });
  }

  function beforeEach(fn) {
    if (!currentSuite) throw new Error('TF.beforeEach() called outside of TF.suite()');
    currentSuite.beforeEachFns.push(fn);
  }

  class AssertionError extends Error {}
  function fail(message) { throw new AssertionError(message || 'Assertion failed'); }

  function assertTrue(value, message) {
    if (value !== true) fail(message || `Expected true, got ${JSON.stringify(value)}`);
  }
  function assertFalse(value, message) {
    if (value !== false) fail(message || `Expected false, got ${JSON.stringify(value)}`);
  }
  function assertOk(value, message) {
    if (!value) fail(message || `Expected a truthy value, got ${JSON.stringify(value)}`);
  }
  function assertEqual(actual, expected, message) {
    if (actual !== expected) fail(message || `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
  function assertNotEqual(actual, expected, message) {
    if (actual === expected) fail(message || `Expected value to differ from ${JSON.stringify(expected)}`);
  }
  function assertDeepEqual(actual, expected, message) {
    const a = JSON.stringify(actual);
    const e = JSON.stringify(expected);
    if (a !== e) fail(message || `Expected ${e}, got ${a}`);
  }
  function assertArrayLength(arr, length, message) {
    assertOk(Array.isArray(arr), message || 'Expected an array');
    if (arr.length !== length) fail(message || `Expected array length ${length}, got ${arr.length}`);
  }
  function assertThrows(fn, message) {
    let threw = false;
    try { fn(); } catch (e) { threw = true; }
    if (!threw) fail(message || 'Expected function to throw');
  }
  function assertIncludes(arr, item, message) {
    if (!arr.includes(item)) fail(message || `Expected array to include ${JSON.stringify(item)}`);
  }

  async function run(categoryFilter) {
    const results = [];
    for (const s of suites) {
      if (categoryFilter && s.category !== categoryFilter) continue;
      for (const t of s.tests) {
        const record = { suite: s.name, category: s.category, test: t.name, status: 'pass', error: null };
        try {
          for (const be of s.beforeEachFns) await be();
          await t.fn();
        } catch (e) {
          record.status = 'fail';
          record.error = (e && e.message) ? e.message : String(e);
        }
        results.push(record);
      }
    }
    const summary = {
      total: results.length,
      passed: results.filter(r => r.status === 'pass').length,
      failed: results.filter(r => r.status === 'fail').length
    };
    const byCategory = {};
    results.forEach(r => {
      byCategory[r.category] = byCategory[r.category] || { total: 0, passed: 0, failed: 0 };
      byCategory[r.category].total++;
      byCategory[r.category][r.status === 'pass' ? 'passed' : 'failed']++;
    });
    return { results, summary, byCategory };
  }

  return {
    suite, test, beforeEach,
    assertTrue, assertFalse, assertOk, assertEqual, assertNotEqual,
    assertDeepEqual, assertArrayLength, assertThrows, assertIncludes,
    run, suites
  };
})();
