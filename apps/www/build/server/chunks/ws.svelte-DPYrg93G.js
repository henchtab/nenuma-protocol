import { w as writable } from './index2-d8GdKNTl.js';
import 'clsx';
import './constants-u-0RYjcS.js';
import './tma-CBfk33he.js';
import './_sentry-release-injection-file-B-U-aYmd.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d64413db-7994-444e-902e-09cf2ab12c07", e._sentryDebugIdIdentifier = "sentry-dbid-d64413db-7994-444e-902e-09cf2ab12c07");
  } catch (e2) {
  }
}();
var KlineTopic = /* @__PURE__ */ ((KlineTopic2) => {
  KlineTopic2["BTCUSDT"] = "BTCUSDT";
  KlineTopic2["ETHUSDT"] = "ETHUSDT";
  KlineTopic2["SOLUSDT"] = "SOLUSDT";
  KlineTopic2["TONUSDT"] = "TONUSDT";
  KlineTopic2["BNBUSDT"] = "BNBUSDT";
  return KlineTopic2;
})(KlineTopic || {});
const latestPrices = writable({
  ["BTCUSDT"]: 0,
  /* BTCUSDT */
  ["ETHUSDT"]: 0,
  /* ETHUSDT */
  ["SOLUSDT"]: 0,
  /* SOLUSDT */
  ["TONUSDT"]: 0,
  /* TONUSDT */
  ["BNBUSDT"]: 0
  /* BNBUSDT */
});

export { KlineTopic as K, latestPrices as l };
//# sourceMappingURL=ws.svelte-DPYrg93G.js.map
