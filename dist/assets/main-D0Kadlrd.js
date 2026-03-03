(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) o(h);
  new MutationObserver((h) => {
    for (const c of h) if (c.type === "childList") for (const m of c.addedNodes) m.tagName === "LINK" && m.rel === "modulepreload" && o(m);
  }).observe(document, { childList: true, subtree: true });
  function s(h) {
    const c = {};
    return h.integrity && (c.integrity = h.integrity), h.referrerPolicy && (c.referrerPolicy = h.referrerPolicy), h.crossOrigin === "use-credentials" ? c.credentials = "include" : h.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c;
  }
  function o(h) {
    if (h.ep) return;
    h.ep = true;
    const c = s(h);
    fetch(h.href, c);
  }
})();
const ln = "183", un = 300, Wr = 1e3, vi = 1001, Vr = 1002, Qa = 1006, Ja = 1008, $a = 1009, Ka = 1023, cn = "", bt = "srgb", qr = "srgb-linear", Yr = "linear", ms = "srgb", Fi = 2e3, Xr = 2001;
function Fs(F) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", F);
}
const Hr = {};
function fn(F) {
  const t = F[0];
  if (typeof t == "string" && t.startsWith("TSL:")) {
    const s = F[1];
    s && s.isStackTrace ? F[0] += " " + s.getLocation() : F[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
  }
  return F;
}
function Bt(...F) {
  F = fn(F);
  const t = "THREE." + F.shift();
  {
    const s = F[0];
    s && s.isStackTrace ? console.warn(s.getError(t)) : console.warn(t, ...F);
  }
}
function Gr(...F) {
  F = fn(F);
  const t = "THREE." + F.shift();
  {
    const s = F[0];
    s && s.isStackTrace ? console.error(s.getError(t)) : console.error(t, ...F);
  }
}
function Zr(...F) {
  const t = F.join(" ");
  t in Hr || (Hr[t] = true, Bt(...F));
}
class dn {
  addEventListener(t, s) {
    this._listeners === void 0 && (this._listeners = {});
    const o = this._listeners;
    o[t] === void 0 && (o[t] = []), o[t].indexOf(s) === -1 && o[t].push(s);
  }
  hasEventListener(t, s) {
    const o = this._listeners;
    return o === void 0 ? false : o[t] !== void 0 && o[t].indexOf(s) !== -1;
  }
  removeEventListener(t, s) {
    const o = this._listeners;
    if (o === void 0) return;
    const h = o[t];
    if (h !== void 0) {
      const c = h.indexOf(s);
      c !== -1 && h.splice(c, 1);
    }
  }
  dispatchEvent(t) {
    const s = this._listeners;
    if (s === void 0) return;
    const o = s[t.type];
    if (o !== void 0) {
      t.target = this;
      const h = o.slice(0);
      for (let c = 0, m = h.length; c < m; c++) h[c].call(this, t);
      t.target = null;
    }
  }
}
const gt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
function ks() {
  const F = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, s = Math.random() * 4294967295 | 0, o = Math.random() * 4294967295 | 0;
  return (gt[F & 255] + gt[F >> 8 & 255] + gt[F >> 16 & 255] + gt[F >> 24 & 255] + "-" + gt[t & 255] + gt[t >> 8 & 255] + "-" + gt[t >> 16 & 15 | 64] + gt[t >> 24 & 255] + "-" + gt[s & 63 | 128] + gt[s >> 8 & 255] + "-" + gt[s >> 16 & 255] + gt[s >> 24 & 255] + gt[o & 255] + gt[o >> 8 & 255] + gt[o >> 16 & 255] + gt[o >> 24 & 255]).toLowerCase();
}
function it(F, t, s) {
  return Math.max(t, Math.min(s, F));
}
function to(F, t) {
  return (F % t + t) % t;
}
function gs(F, t, s) {
  return (1 - s) * F + s * t;
}
class ui {
  constructor(t = 0, s = 0) {
    ui.prototype.isVector2 = true, this.x = t, this.y = s;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, s) {
    return this.x = t, this.y = s, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setComponent(t, s) {
    switch (t) {
      case 0:
        this.x = s;
        break;
      case 1:
        this.y = s;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, s) {
    return this.x = t.x + s.x, this.y = t.y + s.y, this;
  }
  addScaledVector(t, s) {
    return this.x += t.x * s, this.y += t.y * s, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, s) {
    return this.x = t.x - s.x, this.y = t.y - s.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const s = this.x, o = this.y, h = t.elements;
    return this.x = h[0] * s + h[3] * o + h[6], this.y = h[1] * s + h[4] * o + h[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, s) {
    return this.x = it(this.x, t.x, s.x), this.y = it(this.y, t.y, s.y), this;
  }
  clampScalar(t, s) {
    return this.x = it(this.x, t, s), this.y = it(this.y, t, s), this;
  }
  clampLength(t, s) {
    const o = this.length();
    return this.divideScalar(o || 1).multiplyScalar(it(o, t, s));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t) {
    const s = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (s === 0) return Math.PI / 2;
    const o = this.dot(t) / s;
    return Math.acos(it(o, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const s = this.x - t.x, o = this.y - t.y;
    return s * s + o * o;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, s) {
    return this.x += (t.x - this.x) * s, this.y += (t.y - this.y) * s, this;
  }
  lerpVectors(t, s, o) {
    return this.x = t.x + (s.x - t.x) * o, this.y = t.y + (s.y - t.y) * o, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, s = 0) {
    return this.x = t[s], this.y = t[s + 1], this;
  }
  toArray(t = [], s = 0) {
    return t[s] = this.x, t[s + 1] = this.y, t;
  }
  fromBufferAttribute(t, s) {
    return this.x = t.getX(s), this.y = t.getY(s), this;
  }
  rotateAround(t, s) {
    const o = Math.cos(s), h = Math.sin(s), c = this.x - t.x, m = this.y - t.y;
    return this.x = c * o - m * h + t.x, this.y = c * h + m * o + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class ci {
  constructor(t = 0, s = 0, o = 0, h = 1) {
    this.isQuaternion = true, this._x = t, this._y = s, this._z = o, this._w = h;
  }
  static slerpFlat(t, s, o, h, c, m, x) {
    let b = o[h + 0], g = o[h + 1], w = o[h + 2], T = o[h + 3], A = c[m + 0], v = c[m + 1], E = c[m + 2], B = c[m + 3];
    if (T !== B || b !== A || g !== v || w !== E) {
      let G = b * A + g * v + w * E + T * B;
      G < 0 && (A = -A, v = -v, E = -E, B = -B, G = -G);
      let V = 1 - x;
      if (G < 0.9995) {
        const q = Math.acos(G), Y = Math.sin(q);
        V = Math.sin(V * q) / Y, x = Math.sin(x * q) / Y, b = b * V + A * x, g = g * V + v * x, w = w * V + E * x, T = T * V + B * x;
      } else {
        b = b * V + A * x, g = g * V + v * x, w = w * V + E * x, T = T * V + B * x;
        const q = 1 / Math.sqrt(b * b + g * g + w * w + T * T);
        b *= q, g *= q, w *= q, T *= q;
      }
    }
    t[s] = b, t[s + 1] = g, t[s + 2] = w, t[s + 3] = T;
  }
  static multiplyQuaternionsFlat(t, s, o, h, c, m) {
    const x = o[h], b = o[h + 1], g = o[h + 2], w = o[h + 3], T = c[m], A = c[m + 1], v = c[m + 2], E = c[m + 3];
    return t[s] = x * E + w * T + b * v - g * A, t[s + 1] = b * E + w * A + g * T - x * v, t[s + 2] = g * E + w * v + x * A - b * T, t[s + 3] = w * E - x * T - b * A - g * v, t;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  set(t, s, o, h) {
    return this._x = t, this._y = s, this._z = o, this._w = h, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  setFromEuler(t, s = true) {
    const o = t._x, h = t._y, c = t._z, m = t._order, x = Math.cos, b = Math.sin, g = x(o / 2), w = x(h / 2), T = x(c / 2), A = b(o / 2), v = b(h / 2), E = b(c / 2);
    switch (m) {
      case "XYZ":
        this._x = A * w * T + g * v * E, this._y = g * v * T - A * w * E, this._z = g * w * E + A * v * T, this._w = g * w * T - A * v * E;
        break;
      case "YXZ":
        this._x = A * w * T + g * v * E, this._y = g * v * T - A * w * E, this._z = g * w * E - A * v * T, this._w = g * w * T + A * v * E;
        break;
      case "ZXY":
        this._x = A * w * T - g * v * E, this._y = g * v * T + A * w * E, this._z = g * w * E + A * v * T, this._w = g * w * T - A * v * E;
        break;
      case "ZYX":
        this._x = A * w * T - g * v * E, this._y = g * v * T + A * w * E, this._z = g * w * E - A * v * T, this._w = g * w * T + A * v * E;
        break;
      case "YZX":
        this._x = A * w * T + g * v * E, this._y = g * v * T + A * w * E, this._z = g * w * E - A * v * T, this._w = g * w * T - A * v * E;
        break;
      case "XZY":
        this._x = A * w * T - g * v * E, this._y = g * v * T - A * w * E, this._z = g * w * E + A * v * T, this._w = g * w * T + A * v * E;
        break;
      default:
        Bt("Quaternion: .setFromEuler() encountered an unknown order: " + m);
    }
    return s === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, s) {
    const o = s / 2, h = Math.sin(o);
    return this._x = t.x * h, this._y = t.y * h, this._z = t.z * h, this._w = Math.cos(o), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    const s = t.elements, o = s[0], h = s[4], c = s[8], m = s[1], x = s[5], b = s[9], g = s[2], w = s[6], T = s[10], A = o + x + T;
    if (A > 0) {
      const v = 0.5 / Math.sqrt(A + 1);
      this._w = 0.25 / v, this._x = (w - b) * v, this._y = (c - g) * v, this._z = (m - h) * v;
    } else if (o > x && o > T) {
      const v = 2 * Math.sqrt(1 + o - x - T);
      this._w = (w - b) / v, this._x = 0.25 * v, this._y = (h + m) / v, this._z = (c + g) / v;
    } else if (x > T) {
      const v = 2 * Math.sqrt(1 + x - o - T);
      this._w = (c - g) / v, this._x = (h + m) / v, this._y = 0.25 * v, this._z = (b + w) / v;
    } else {
      const v = 2 * Math.sqrt(1 + T - o - x);
      this._w = (m - h) / v, this._x = (c + g) / v, this._y = (b + w) / v, this._z = 0.25 * v;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, s) {
    let o = t.dot(s) + 1;
    return o < 1e-8 ? (o = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = o) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = o)) : (this._x = t.y * s.z - t.z * s.y, this._y = t.z * s.x - t.x * s.z, this._z = t.x * s.y - t.y * s.x, this._w = o), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(it(this.dot(t), -1, 1)));
  }
  rotateTowards(t, s) {
    const o = this.angleTo(t);
    if (o === 0) return this;
    const h = Math.min(1, s / o);
    return this.slerp(t, h), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t = this.length();
    return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, s) {
    const o = t._x, h = t._y, c = t._z, m = t._w, x = s._x, b = s._y, g = s._z, w = s._w;
    return this._x = o * w + m * x + h * g - c * b, this._y = h * w + m * b + c * x - o * g, this._z = c * w + m * g + o * b - h * x, this._w = m * w - o * x - h * b - c * g, this._onChangeCallback(), this;
  }
  slerp(t, s) {
    let o = t._x, h = t._y, c = t._z, m = t._w, x = this.dot(t);
    x < 0 && (o = -o, h = -h, c = -c, m = -m, x = -x);
    let b = 1 - s;
    if (x < 0.9995) {
      const g = Math.acos(x), w = Math.sin(g);
      b = Math.sin(b * g) / w, s = Math.sin(s * g) / w, this._x = this._x * b + o * s, this._y = this._y * b + h * s, this._z = this._z * b + c * s, this._w = this._w * b + m * s, this._onChangeCallback();
    } else this._x = this._x * b + o * s, this._y = this._y * b + h * s, this._z = this._z * b + c * s, this._w = this._w * b + m * s, this.normalize();
    return this;
  }
  slerpQuaternions(t, s, o) {
    return this.copy(t).slerp(s, o);
  }
  random() {
    const t = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random(), o = Math.random(), h = Math.sqrt(1 - o), c = Math.sqrt(o);
    return this.set(h * Math.sin(t), h * Math.cos(t), c * Math.sin(s), c * Math.cos(s));
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  fromArray(t, s = 0) {
    return this._x = t[s], this._y = t[s + 1], this._z = t[s + 2], this._w = t[s + 3], this._onChangeCallback(), this;
  }
  toArray(t = [], s = 0) {
    return t[s] = this._x, t[s + 1] = this._y, t[s + 2] = this._z, t[s + 3] = this._w, t;
  }
  fromBufferAttribute(t, s) {
    return this._x = t.getX(s), this._y = t.getY(s), this._z = t.getZ(s), this._w = t.getW(s), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
let dt = class _n {
  constructor(t = 0, s = 0, o = 0) {
    _n.prototype.isVector3 = true, this.x = t, this.y = s, this.z = o;
  }
  set(t, s, o) {
    return o === void 0 && (o = this.z), this.x = t, this.y = s, this.z = o, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, s) {
    switch (t) {
      case 0:
        this.x = s;
        break;
      case 1:
        this.y = s;
        break;
      case 2:
        this.z = s;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, s) {
    return this.x = t.x + s.x, this.y = t.y + s.y, this.z = t.z + s.z, this;
  }
  addScaledVector(t, s) {
    return this.x += t.x * s, this.y += t.y * s, this.z += t.z * s, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, s) {
    return this.x = t.x - s.x, this.y = t.y - s.y, this.z = t.z - s.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, s) {
    return this.x = t.x * s.x, this.y = t.y * s.y, this.z = t.z * s.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(jr.setFromEuler(t));
  }
  applyAxisAngle(t, s) {
    return this.applyQuaternion(jr.setFromAxisAngle(t, s));
  }
  applyMatrix3(t) {
    const s = this.x, o = this.y, h = this.z, c = t.elements;
    return this.x = c[0] * s + c[3] * o + c[6] * h, this.y = c[1] * s + c[4] * o + c[7] * h, this.z = c[2] * s + c[5] * o + c[8] * h, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const s = this.x, o = this.y, h = this.z, c = t.elements, m = 1 / (c[3] * s + c[7] * o + c[11] * h + c[15]);
    return this.x = (c[0] * s + c[4] * o + c[8] * h + c[12]) * m, this.y = (c[1] * s + c[5] * o + c[9] * h + c[13]) * m, this.z = (c[2] * s + c[6] * o + c[10] * h + c[14]) * m, this;
  }
  applyQuaternion(t) {
    const s = this.x, o = this.y, h = this.z, c = t.x, m = t.y, x = t.z, b = t.w, g = 2 * (m * h - x * o), w = 2 * (x * s - c * h), T = 2 * (c * o - m * s);
    return this.x = s + b * g + m * T - x * w, this.y = o + b * w + x * g - c * T, this.z = h + b * T + c * w - m * g, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const s = this.x, o = this.y, h = this.z, c = t.elements;
    return this.x = c[0] * s + c[4] * o + c[8] * h, this.y = c[1] * s + c[5] * o + c[9] * h, this.z = c[2] * s + c[6] * o + c[10] * h, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, s) {
    return this.x = it(this.x, t.x, s.x), this.y = it(this.y, t.y, s.y), this.z = it(this.z, t.z, s.z), this;
  }
  clampScalar(t, s) {
    return this.x = it(this.x, t, s), this.y = it(this.y, t, s), this.z = it(this.z, t, s), this;
  }
  clampLength(t, s) {
    const o = this.length();
    return this.divideScalar(o || 1).multiplyScalar(it(o, t, s));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, s) {
    return this.x += (t.x - this.x) * s, this.y += (t.y - this.y) * s, this.z += (t.z - this.z) * s, this;
  }
  lerpVectors(t, s, o) {
    return this.x = t.x + (s.x - t.x) * o, this.y = t.y + (s.y - t.y) * o, this.z = t.z + (s.z - t.z) * o, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, s) {
    const o = t.x, h = t.y, c = t.z, m = s.x, x = s.y, b = s.z;
    return this.x = h * b - c * x, this.y = c * m - o * b, this.z = o * x - h * m, this;
  }
  projectOnVector(t) {
    const s = t.lengthSq();
    if (s === 0) return this.set(0, 0, 0);
    const o = t.dot(this) / s;
    return this.copy(t).multiplyScalar(o);
  }
  projectOnPlane(t) {
    return xs.copy(this).projectOnVector(t), this.sub(xs);
  }
  reflect(t) {
    return this.sub(xs.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const s = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (s === 0) return Math.PI / 2;
    const o = this.dot(t) / s;
    return Math.acos(it(o, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const s = this.x - t.x, o = this.y - t.y, h = this.z - t.z;
    return s * s + o * o + h * h;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, s, o) {
    const h = Math.sin(s) * t;
    return this.x = h * Math.sin(o), this.y = Math.cos(s) * t, this.z = h * Math.cos(o), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, s, o) {
    return this.x = t * Math.sin(s), this.y = o, this.z = t * Math.cos(s), this;
  }
  setFromMatrixPosition(t) {
    const s = t.elements;
    return this.x = s[12], this.y = s[13], this.z = s[14], this;
  }
  setFromMatrixScale(t) {
    const s = this.setFromMatrixColumn(t, 0).length(), o = this.setFromMatrixColumn(t, 1).length(), h = this.setFromMatrixColumn(t, 2).length();
    return this.x = s, this.y = o, this.z = h, this;
  }
  setFromMatrixColumn(t, s) {
    return this.fromArray(t.elements, s * 4);
  }
  setFromMatrix3Column(t, s) {
    return this.fromArray(t.elements, s * 3);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, s = 0) {
    return this.x = t[s], this.y = t[s + 1], this.z = t[s + 2], this;
  }
  toArray(t = [], s = 0) {
    return t[s] = this.x, t[s + 1] = this.y, t[s + 2] = this.z, t;
  }
  fromBufferAttribute(t, s) {
    return this.x = t.getX(s), this.y = t.getY(s), this.z = t.getZ(s), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2, s = Math.random() * 2 - 1, o = Math.sqrt(1 - s * s);
    return this.x = o * Math.cos(t), this.y = s, this.z = o * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
};
const xs = new dt(), jr = new ci();
class ve {
  constructor(t, s, o, h, c, m, x, b, g) {
    ve.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], t !== void 0 && this.set(t, s, o, h, c, m, x, b, g);
  }
  set(t, s, o, h, c, m, x, b, g) {
    const w = this.elements;
    return w[0] = t, w[1] = h, w[2] = x, w[3] = s, w[4] = c, w[5] = b, w[6] = o, w[7] = m, w[8] = g, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(t) {
    const s = this.elements, o = t.elements;
    return s[0] = o[0], s[1] = o[1], s[2] = o[2], s[3] = o[3], s[4] = o[4], s[5] = o[5], s[6] = o[6], s[7] = o[7], s[8] = o[8], this;
  }
  extractBasis(t, s, o) {
    return t.setFromMatrix3Column(this, 0), s.setFromMatrix3Column(this, 1), o.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    const s = t.elements;
    return this.set(s[0], s[4], s[8], s[1], s[5], s[9], s[2], s[6], s[10]), this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, s) {
    const o = t.elements, h = s.elements, c = this.elements, m = o[0], x = o[3], b = o[6], g = o[1], w = o[4], T = o[7], A = o[2], v = o[5], E = o[8], B = h[0], G = h[3], V = h[6], q = h[1], Y = h[4], Q = h[7], st = h[2], j = h[5], X = h[8];
    return c[0] = m * B + x * q + b * st, c[3] = m * G + x * Y + b * j, c[6] = m * V + x * Q + b * X, c[1] = g * B + w * q + T * st, c[4] = g * G + w * Y + T * j, c[7] = g * V + w * Q + T * X, c[2] = A * B + v * q + E * st, c[5] = A * G + v * Y + E * j, c[8] = A * V + v * Q + E * X, this;
  }
  multiplyScalar(t) {
    const s = this.elements;
    return s[0] *= t, s[3] *= t, s[6] *= t, s[1] *= t, s[4] *= t, s[7] *= t, s[2] *= t, s[5] *= t, s[8] *= t, this;
  }
  determinant() {
    const t = this.elements, s = t[0], o = t[1], h = t[2], c = t[3], m = t[4], x = t[5], b = t[6], g = t[7], w = t[8];
    return s * m * w - s * x * g - o * c * w + o * x * b + h * c * g - h * m * b;
  }
  invert() {
    const t = this.elements, s = t[0], o = t[1], h = t[2], c = t[3], m = t[4], x = t[5], b = t[6], g = t[7], w = t[8], T = w * m - x * g, A = x * b - w * c, v = g * c - m * b, E = s * T + o * A + h * v;
    if (E === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const B = 1 / E;
    return t[0] = T * B, t[1] = (h * g - w * o) * B, t[2] = (x * o - h * m) * B, t[3] = A * B, t[4] = (w * s - h * b) * B, t[5] = (h * c - x * s) * B, t[6] = v * B, t[7] = (o * b - g * s) * B, t[8] = (m * s - o * c) * B, this;
  }
  transpose() {
    let t;
    const s = this.elements;
    return t = s[1], s[1] = s[3], s[3] = t, t = s[2], s[2] = s[6], s[6] = t, t = s[5], s[5] = s[7], s[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const s = this.elements;
    return t[0] = s[0], t[1] = s[3], t[2] = s[6], t[3] = s[1], t[4] = s[4], t[5] = s[7], t[6] = s[2], t[7] = s[5], t[8] = s[8], this;
  }
  setUvTransform(t, s, o, h, c, m, x) {
    const b = Math.cos(c), g = Math.sin(c);
    return this.set(o * b, o * g, -o * (b * m + g * x) + m + t, -h * g, h * b, -h * (-g * m + b * x) + x + s, 0, 0, 1), this;
  }
  scale(t, s) {
    return this.premultiply(ys.makeScale(t, s)), this;
  }
  rotate(t) {
    return this.premultiply(ys.makeRotation(-t)), this;
  }
  translate(t, s) {
    return this.premultiply(ys.makeTranslation(t, s)), this;
  }
  makeTranslation(t, s) {
    return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, s, 0, 0, 1), this;
  }
  makeRotation(t) {
    const s = Math.cos(t), o = Math.sin(t);
    return this.set(s, -o, 0, o, s, 0, 0, 0, 1), this;
  }
  makeScale(t, s) {
    return this.set(t, 0, 0, 0, s, 0, 0, 0, 1), this;
  }
  equals(t) {
    const s = this.elements, o = t.elements;
    for (let h = 0; h < 9; h++) if (s[h] !== o[h]) return false;
    return true;
  }
  fromArray(t, s = 0) {
    for (let o = 0; o < 9; o++) this.elements[o] = t[o + s];
    return this;
  }
  toArray(t = [], s = 0) {
    const o = this.elements;
    return t[s] = o[0], t[s + 1] = o[1], t[s + 2] = o[2], t[s + 3] = o[3], t[s + 4] = o[4], t[s + 5] = o[5], t[s + 6] = o[6], t[s + 7] = o[7], t[s + 8] = o[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const ys = new ve(), Qr = new ve().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), Jr = new ve().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function eo() {
  const F = { enabled: true, workingColorSpace: qr, spaces: {}, convert: function(h, c, m) {
    return this.enabled === false || c === m || !c || !m || (this.spaces[c].transfer === ms && (h.r = $t(h.r), h.g = $t(h.g), h.b = $t(h.b)), this.spaces[c].primaries !== this.spaces[m].primaries && (h.applyMatrix3(this.spaces[c].toXYZ), h.applyMatrix3(this.spaces[m].fromXYZ)), this.spaces[m].transfer === ms && (h.r = Xe(h.r), h.g = Xe(h.g), h.b = Xe(h.b))), h;
  }, workingToColorSpace: function(h, c) {
    return this.convert(h, this.workingColorSpace, c);
  }, colorSpaceToWorking: function(h, c) {
    return this.convert(h, c, this.workingColorSpace);
  }, getPrimaries: function(h) {
    return this.spaces[h].primaries;
  }, getTransfer: function(h) {
    return h === cn ? Yr : this.spaces[h].transfer;
  }, getToneMappingMode: function(h) {
    return this.spaces[h].outputColorSpaceConfig.toneMappingMode || "standard";
  }, getLuminanceCoefficients: function(h, c = this.workingColorSpace) {
    return h.fromArray(this.spaces[c].luminanceCoefficients);
  }, define: function(h) {
    Object.assign(this.spaces, h);
  }, _getMatrix: function(h, c, m) {
    return h.copy(this.spaces[c].toXYZ).multiply(this.spaces[m].fromXYZ);
  }, _getDrawingBufferColorSpace: function(h) {
    return this.spaces[h].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(h = this.workingColorSpace) {
    return this.spaces[h].workingColorSpaceConfig.unpackColorSpace;
  }, fromWorkingColorSpace: function(h, c) {
    return Zr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), F.workingToColorSpace(h, c);
  }, toWorkingColorSpace: function(h, c) {
    return Zr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), F.colorSpaceToWorking(h, c);
  } }, t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], s = [0.2126, 0.7152, 0.0722], o = [0.3127, 0.329];
  return F.define({ [qr]: { primaries: t, whitePoint: o, transfer: Yr, toXYZ: Qr, fromXYZ: Jr, luminanceCoefficients: s, workingColorSpaceConfig: { unpackColorSpace: bt }, outputColorSpaceConfig: { drawingBufferColorSpace: bt } }, [bt]: { primaries: t, whitePoint: o, transfer: ms, toXYZ: Qr, fromXYZ: Jr, luminanceCoefficients: s, outputColorSpaceConfig: { drawingBufferColorSpace: bt } } }), F;
}
const Wt = eo();
function $t(F) {
  return F < 0.04045 ? F * 0.0773993808 : Math.pow(F * 0.9478672986 + 0.0521327014, 2.4);
}
function Xe(F) {
  return F < 31308e-7 ? F * 12.92 : 1.055 * Math.pow(F, 0.41666) - 0.055;
}
let Ue;
class io {
  static getDataURL(t, s = "image/png") {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u") return t.src;
    let o;
    if (t instanceof HTMLCanvasElement) o = t;
    else {
      Ue === void 0 && (Ue = Fs("canvas")), Ue.width = t.width, Ue.height = t.height;
      const h = Ue.getContext("2d");
      t instanceof ImageData ? h.putImageData(t, 0, 0) : h.drawImage(t, 0, 0, t.width, t.height), o = Ue;
    }
    return o.toDataURL(s);
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const s = Fs("canvas");
      s.width = t.width, s.height = t.height;
      const o = s.getContext("2d");
      o.drawImage(t, 0, 0, t.width, t.height);
      const h = o.getImageData(0, 0, t.width, t.height), c = h.data;
      for (let m = 0; m < c.length; m++) c[m] = $t(c[m] / 255) * 255;
      return o.putImageData(h, 0, 0), s;
    } else if (t.data) {
      const s = t.data.slice(0);
      for (let o = 0; o < s.length; o++) s instanceof Uint8Array || s instanceof Uint8ClampedArray ? s[o] = Math.floor($t(s[o] / 255) * 255) : s[o] = $t(s[o]);
      return { data: s, width: t.width, height: t.height };
    } else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let so = 0;
class ro {
  constructor(t = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: so++ }), this.uuid = ks(), this.data = t, this.dataReady = true, this.version = 0;
  }
  getSize(t) {
    const s = this.data;
    return typeof HTMLVideoElement < "u" && s instanceof HTMLVideoElement ? t.set(s.videoWidth, s.videoHeight, 0) : typeof VideoFrame < "u" && s instanceof VideoFrame ? t.set(s.displayHeight, s.displayWidth, 0) : s !== null ? t.set(s.width, s.height, s.depth || 0) : t.set(0, 0, 0), t;
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
  toJSON(t) {
    const s = t === void 0 || typeof t == "string";
    if (!s && t.images[this.uuid] !== void 0) return t.images[this.uuid];
    const o = { uuid: this.uuid, url: "" }, h = this.data;
    if (h !== null) {
      let c;
      if (Array.isArray(h)) {
        c = [];
        for (let m = 0, x = h.length; m < x; m++) h[m].isDataTexture ? c.push(bs(h[m].image)) : c.push(bs(h[m]));
      } else c = bs(h);
      o.url = c;
    }
    return s || (t.images[this.uuid] = o), o;
  }
}
function bs(F) {
  return typeof HTMLImageElement < "u" && F instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && F instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && F instanceof ImageBitmap ? io.getDataURL(F) : F.data ? { data: Array.from(F.data), width: F.width, height: F.height, type: F.data.constructor.name } : (Bt("Texture: Unable to serialize Texture."), {});
}
let no = 0;
const ws = new dt();
class fe extends dn {
  constructor(t = fe.DEFAULT_IMAGE, s = fe.DEFAULT_MAPPING, o = vi, h = vi, c = Qa, m = Ja, x = Ka, b = $a, g = fe.DEFAULT_ANISOTROPY, w = cn) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: no++ }), this.uuid = ks(), this.name = "", this.source = new ro(t), this.mipmaps = [], this.mapping = s, this.channel = 0, this.wrapS = o, this.wrapT = h, this.magFilter = c, this.minFilter = m, this.anisotropy = g, this.format = x, this.internalFormat = null, this.type = b, this.offset = new ui(0, 0), this.repeat = new ui(1, 1), this.center = new ui(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new ve(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = w, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0;
  }
  get width() {
    return this.source.getSize(ws).x;
  }
  get height() {
    return this.source.getSize(ws).y;
  }
  get depth() {
    return this.source.getSize(ws).z;
  }
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  addUpdateRange(t, s) {
    this.updateRanges.push({ start: t, count: s });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.renderTarget = t.renderTarget, this.isRenderTargetTexture = t.isRenderTargetTexture, this.isArrayTexture = t.isArrayTexture, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = true, this;
  }
  setValues(t) {
    for (const s in t) {
      const o = t[s];
      if (o === void 0) {
        Bt(`Texture.setValues(): parameter '${s}' has value of undefined.`);
        continue;
      }
      const h = this[s];
      if (h === void 0) {
        Bt(`Texture.setValues(): property '${s}' does not exist.`);
        continue;
      }
      h && o && h.isVector2 && o.isVector2 || h && o && h.isVector3 && o.isVector3 || h && o && h.isMatrix3 && o.isMatrix3 ? h.copy(o) : this[s] = o;
    }
  }
  toJSON(t) {
    const s = t === void 0 || typeof t == "string";
    if (!s && t.textures[this.uuid] !== void 0) return t.textures[this.uuid];
    const o = { metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (o.userData = this.userData), s || (t.textures[this.uuid] = o), o;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== un) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
      case Wr:
        t.x = t.x - Math.floor(t.x);
        break;
      case vi:
        t.x = t.x < 0 ? 0 : 1;
        break;
      case Vr:
        Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
        break;
    }
    if (t.y < 0 || t.y > 1) switch (this.wrapT) {
      case Wr:
        t.y = t.y - Math.floor(t.y);
        break;
      case vi:
        t.y = t.y < 0 ? 0 : 1;
        break;
      case Vr:
        Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
        break;
    }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === true && (this.version++, this.source.needsUpdate = true);
  }
  set needsPMREMUpdate(t) {
    t === true && this.pmremVersion++;
  }
}
fe.DEFAULT_IMAGE = null;
fe.DEFAULT_MAPPING = un;
fe.DEFAULT_ANISOTROPY = 1;
class Kt {
  constructor(t, s, o, h, c, m, x, b, g, w, T, A, v, E, B, G) {
    Kt.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], t !== void 0 && this.set(t, s, o, h, c, m, x, b, g, w, T, A, v, E, B, G);
  }
  set(t, s, o, h, c, m, x, b, g, w, T, A, v, E, B, G) {
    const V = this.elements;
    return V[0] = t, V[4] = s, V[8] = o, V[12] = h, V[1] = c, V[5] = m, V[9] = x, V[13] = b, V[2] = g, V[6] = w, V[10] = T, V[14] = A, V[3] = v, V[7] = E, V[11] = B, V[15] = G, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Kt().fromArray(this.elements);
  }
  copy(t) {
    const s = this.elements, o = t.elements;
    return s[0] = o[0], s[1] = o[1], s[2] = o[2], s[3] = o[3], s[4] = o[4], s[5] = o[5], s[6] = o[6], s[7] = o[7], s[8] = o[8], s[9] = o[9], s[10] = o[10], s[11] = o[11], s[12] = o[12], s[13] = o[13], s[14] = o[14], s[15] = o[15], this;
  }
  copyPosition(t) {
    const s = this.elements, o = t.elements;
    return s[12] = o[12], s[13] = o[13], s[14] = o[14], this;
  }
  setFromMatrix3(t) {
    const s = t.elements;
    return this.set(s[0], s[3], s[6], 0, s[1], s[4], s[7], 0, s[2], s[5], s[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(t, s, o) {
    return this.determinant() === 0 ? (t.set(1, 0, 0), s.set(0, 1, 0), o.set(0, 0, 1), this) : (t.setFromMatrixColumn(this, 0), s.setFromMatrixColumn(this, 1), o.setFromMatrixColumn(this, 2), this);
  }
  makeBasis(t, s, o) {
    return this.set(t.x, s.x, o.x, 0, t.y, s.y, o.y, 0, t.z, s.z, o.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(t) {
    if (t.determinant() === 0) return this.identity();
    const s = this.elements, o = t.elements, h = 1 / Ne.setFromMatrixColumn(t, 0).length(), c = 1 / Ne.setFromMatrixColumn(t, 1).length(), m = 1 / Ne.setFromMatrixColumn(t, 2).length();
    return s[0] = o[0] * h, s[1] = o[1] * h, s[2] = o[2] * h, s[3] = 0, s[4] = o[4] * c, s[5] = o[5] * c, s[6] = o[6] * c, s[7] = 0, s[8] = o[8] * m, s[9] = o[9] * m, s[10] = o[10] * m, s[11] = 0, s[12] = 0, s[13] = 0, s[14] = 0, s[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const s = this.elements, o = t.x, h = t.y, c = t.z, m = Math.cos(o), x = Math.sin(o), b = Math.cos(h), g = Math.sin(h), w = Math.cos(c), T = Math.sin(c);
    if (t.order === "XYZ") {
      const A = m * w, v = m * T, E = x * w, B = x * T;
      s[0] = b * w, s[4] = -b * T, s[8] = g, s[1] = v + E * g, s[5] = A - B * g, s[9] = -x * b, s[2] = B - A * g, s[6] = E + v * g, s[10] = m * b;
    } else if (t.order === "YXZ") {
      const A = b * w, v = b * T, E = g * w, B = g * T;
      s[0] = A + B * x, s[4] = E * x - v, s[8] = m * g, s[1] = m * T, s[5] = m * w, s[9] = -x, s[2] = v * x - E, s[6] = B + A * x, s[10] = m * b;
    } else if (t.order === "ZXY") {
      const A = b * w, v = b * T, E = g * w, B = g * T;
      s[0] = A - B * x, s[4] = -m * T, s[8] = E + v * x, s[1] = v + E * x, s[5] = m * w, s[9] = B - A * x, s[2] = -m * g, s[6] = x, s[10] = m * b;
    } else if (t.order === "ZYX") {
      const A = m * w, v = m * T, E = x * w, B = x * T;
      s[0] = b * w, s[4] = E * g - v, s[8] = A * g + B, s[1] = b * T, s[5] = B * g + A, s[9] = v * g - E, s[2] = -g, s[6] = x * b, s[10] = m * b;
    } else if (t.order === "YZX") {
      const A = m * b, v = m * g, E = x * b, B = x * g;
      s[0] = b * w, s[4] = B - A * T, s[8] = E * T + v, s[1] = T, s[5] = m * w, s[9] = -x * w, s[2] = -g * w, s[6] = v * T + E, s[10] = A - B * T;
    } else if (t.order === "XZY") {
      const A = m * b, v = m * g, E = x * b, B = x * g;
      s[0] = b * w, s[4] = -T, s[8] = g * w, s[1] = A * T + B, s[5] = m * w, s[9] = v * T - E, s[2] = E * T - v, s[6] = x * w, s[10] = B * T + A;
    }
    return s[3] = 0, s[7] = 0, s[11] = 0, s[12] = 0, s[13] = 0, s[14] = 0, s[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(ao, t, oo);
  }
  lookAt(t, s, o) {
    const h = this.elements;
    return Dt.subVectors(t, s), Dt.lengthSq() === 0 && (Dt.z = 1), Dt.normalize(), ue.crossVectors(o, Dt), ue.lengthSq() === 0 && (Math.abs(o.z) === 1 ? Dt.x += 1e-4 : Dt.z += 1e-4, Dt.normalize(), ue.crossVectors(o, Dt)), ue.normalize(), ki.crossVectors(Dt, ue), h[0] = ue.x, h[4] = ki.x, h[8] = Dt.x, h[1] = ue.y, h[5] = ki.y, h[9] = Dt.y, h[2] = ue.z, h[6] = ki.z, h[10] = Dt.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, s) {
    const o = t.elements, h = s.elements, c = this.elements, m = o[0], x = o[4], b = o[8], g = o[12], w = o[1], T = o[5], A = o[9], v = o[13], E = o[2], B = o[6], G = o[10], V = o[14], q = o[3], Y = o[7], Q = o[11], st = o[15], j = h[0], X = h[4], wt = h[8], yt = h[12], vt = h[1], $ = h[5], Pt = h[9], Rt = h[13], qt = h[2], rt = h[6], Ut = h[10], te = h[14], de = h[3], Fe = h[7], ke = h[11], J = h[15];
    return c[0] = m * j + x * vt + b * qt + g * de, c[4] = m * X + x * $ + b * rt + g * Fe, c[8] = m * wt + x * Pt + b * Ut + g * ke, c[12] = m * yt + x * Rt + b * te + g * J, c[1] = w * j + T * vt + A * qt + v * de, c[5] = w * X + T * $ + A * rt + v * Fe, c[9] = w * wt + T * Pt + A * Ut + v * ke, c[13] = w * yt + T * Rt + A * te + v * J, c[2] = E * j + B * vt + G * qt + V * de, c[6] = E * X + B * $ + G * rt + V * Fe, c[10] = E * wt + B * Pt + G * Ut + V * ke, c[14] = E * yt + B * Rt + G * te + V * J, c[3] = q * j + Y * vt + Q * qt + st * de, c[7] = q * X + Y * $ + Q * rt + st * Fe, c[11] = q * wt + Y * Pt + Q * Ut + st * ke, c[15] = q * yt + Y * Rt + Q * te + st * J, this;
  }
  multiplyScalar(t) {
    const s = this.elements;
    return s[0] *= t, s[4] *= t, s[8] *= t, s[12] *= t, s[1] *= t, s[5] *= t, s[9] *= t, s[13] *= t, s[2] *= t, s[6] *= t, s[10] *= t, s[14] *= t, s[3] *= t, s[7] *= t, s[11] *= t, s[15] *= t, this;
  }
  determinant() {
    const t = this.elements, s = t[0], o = t[4], h = t[8], c = t[12], m = t[1], x = t[5], b = t[9], g = t[13], w = t[2], T = t[6], A = t[10], v = t[14], E = t[3], B = t[7], G = t[11], V = t[15], q = b * v - g * A, Y = x * v - g * T, Q = x * A - b * T, st = m * v - g * w, j = m * A - b * w, X = m * T - x * w;
    return s * (B * q - G * Y + V * Q) - o * (E * q - G * st + V * j) + h * (E * Y - B * st + V * X) - c * (E * Q - B * j + G * X);
  }
  transpose() {
    const t = this.elements;
    let s;
    return s = t[1], t[1] = t[4], t[4] = s, s = t[2], t[2] = t[8], t[8] = s, s = t[6], t[6] = t[9], t[9] = s, s = t[3], t[3] = t[12], t[12] = s, s = t[7], t[7] = t[13], t[13] = s, s = t[11], t[11] = t[14], t[14] = s, this;
  }
  setPosition(t, s, o) {
    const h = this.elements;
    return t.isVector3 ? (h[12] = t.x, h[13] = t.y, h[14] = t.z) : (h[12] = t, h[13] = s, h[14] = o), this;
  }
  invert() {
    const t = this.elements, s = t[0], o = t[1], h = t[2], c = t[3], m = t[4], x = t[5], b = t[6], g = t[7], w = t[8], T = t[9], A = t[10], v = t[11], E = t[12], B = t[13], G = t[14], V = t[15], q = s * x - o * m, Y = s * b - h * m, Q = s * g - c * m, st = o * b - h * x, j = o * g - c * x, X = h * g - c * b, wt = w * B - T * E, yt = w * G - A * E, vt = w * V - v * E, $ = T * G - A * B, Pt = T * V - v * B, Rt = A * V - v * G, qt = q * Rt - Y * Pt + Q * $ + st * vt - j * yt + X * wt;
    if (qt === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const rt = 1 / qt;
    return t[0] = (x * Rt - b * Pt + g * $) * rt, t[1] = (h * Pt - o * Rt - c * $) * rt, t[2] = (B * X - G * j + V * st) * rt, t[3] = (A * j - T * X - v * st) * rt, t[4] = (b * vt - m * Rt - g * yt) * rt, t[5] = (s * Rt - h * vt + c * yt) * rt, t[6] = (G * Q - E * X - V * Y) * rt, t[7] = (w * X - A * Q + v * Y) * rt, t[8] = (m * Pt - x * vt + g * wt) * rt, t[9] = (o * vt - s * Pt - c * wt) * rt, t[10] = (E * j - B * Q + V * q) * rt, t[11] = (T * Q - w * j - v * q) * rt, t[12] = (x * yt - m * $ - b * wt) * rt, t[13] = (s * $ - o * yt + h * wt) * rt, t[14] = (B * Y - E * st - G * q) * rt, t[15] = (w * st - T * Y + A * q) * rt, this;
  }
  scale(t) {
    const s = this.elements, o = t.x, h = t.y, c = t.z;
    return s[0] *= o, s[4] *= h, s[8] *= c, s[1] *= o, s[5] *= h, s[9] *= c, s[2] *= o, s[6] *= h, s[10] *= c, s[3] *= o, s[7] *= h, s[11] *= c, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, s = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], o = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], h = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(s, o, h));
  }
  makeTranslation(t, s, o) {
    return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, s, 0, 0, 1, o, 0, 0, 0, 1), this;
  }
  makeRotationX(t) {
    const s = Math.cos(t), o = Math.sin(t);
    return this.set(1, 0, 0, 0, 0, s, -o, 0, 0, o, s, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(t) {
    const s = Math.cos(t), o = Math.sin(t);
    return this.set(s, 0, o, 0, 0, 1, 0, 0, -o, 0, s, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(t) {
    const s = Math.cos(t), o = Math.sin(t);
    return this.set(s, -o, 0, 0, o, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(t, s) {
    const o = Math.cos(s), h = Math.sin(s), c = 1 - o, m = t.x, x = t.y, b = t.z, g = c * m, w = c * x;
    return this.set(g * m + o, g * x - h * b, g * b + h * x, 0, g * x + h * b, w * x + o, w * b - h * m, 0, g * b - h * x, w * b + h * m, c * b * b + o, 0, 0, 0, 0, 1), this;
  }
  makeScale(t, s, o) {
    return this.set(t, 0, 0, 0, 0, s, 0, 0, 0, 0, o, 0, 0, 0, 0, 1), this;
  }
  makeShear(t, s, o, h, c, m) {
    return this.set(1, o, c, 0, t, 1, m, 0, s, h, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t, s, o) {
    const h = this.elements, c = s._x, m = s._y, x = s._z, b = s._w, g = c + c, w = m + m, T = x + x, A = c * g, v = c * w, E = c * T, B = m * w, G = m * T, V = x * T, q = b * g, Y = b * w, Q = b * T, st = o.x, j = o.y, X = o.z;
    return h[0] = (1 - (B + V)) * st, h[1] = (v + Q) * st, h[2] = (E - Y) * st, h[3] = 0, h[4] = (v - Q) * j, h[5] = (1 - (A + V)) * j, h[6] = (G + q) * j, h[7] = 0, h[8] = (E + Y) * X, h[9] = (G - q) * X, h[10] = (1 - (A + B)) * X, h[11] = 0, h[12] = t.x, h[13] = t.y, h[14] = t.z, h[15] = 1, this;
  }
  decompose(t, s, o) {
    const h = this.elements;
    t.x = h[12], t.y = h[13], t.z = h[14];
    const c = this.determinant();
    if (c === 0) return o.set(1, 1, 1), s.identity(), this;
    let m = Ne.set(h[0], h[1], h[2]).length();
    const x = Ne.set(h[4], h[5], h[6]).length(), b = Ne.set(h[8], h[9], h[10]).length();
    c < 0 && (m = -m), Vt.copy(this);
    const g = 1 / m, w = 1 / x, T = 1 / b;
    return Vt.elements[0] *= g, Vt.elements[1] *= g, Vt.elements[2] *= g, Vt.elements[4] *= w, Vt.elements[5] *= w, Vt.elements[6] *= w, Vt.elements[8] *= T, Vt.elements[9] *= T, Vt.elements[10] *= T, s.setFromRotationMatrix(Vt), o.x = m, o.y = x, o.z = b, this;
  }
  makePerspective(t, s, o, h, c, m, x = Fi, b = false) {
    const g = this.elements, w = 2 * c / (s - t), T = 2 * c / (o - h), A = (s + t) / (s - t), v = (o + h) / (o - h);
    let E, B;
    if (b) E = c / (m - c), B = m * c / (m - c);
    else if (x === Fi) E = -(m + c) / (m - c), B = -2 * m * c / (m - c);
    else if (x === Xr) E = -m / (m - c), B = -m * c / (m - c);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + x);
    return g[0] = w, g[4] = 0, g[8] = A, g[12] = 0, g[1] = 0, g[5] = T, g[9] = v, g[13] = 0, g[2] = 0, g[6] = 0, g[10] = E, g[14] = B, g[3] = 0, g[7] = 0, g[11] = -1, g[15] = 0, this;
  }
  makeOrthographic(t, s, o, h, c, m, x = Fi, b = false) {
    const g = this.elements, w = 2 / (s - t), T = 2 / (o - h), A = -(s + t) / (s - t), v = -(o + h) / (o - h);
    let E, B;
    if (b) E = 1 / (m - c), B = m / (m - c);
    else if (x === Fi) E = -2 / (m - c), B = -(m + c) / (m - c);
    else if (x === Xr) E = -1 / (m - c), B = -c / (m - c);
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + x);
    return g[0] = w, g[4] = 0, g[8] = 0, g[12] = A, g[1] = 0, g[5] = T, g[9] = 0, g[13] = v, g[2] = 0, g[6] = 0, g[10] = E, g[14] = B, g[3] = 0, g[7] = 0, g[11] = 0, g[15] = 1, this;
  }
  equals(t) {
    const s = this.elements, o = t.elements;
    for (let h = 0; h < 16; h++) if (s[h] !== o[h]) return false;
    return true;
  }
  fromArray(t, s = 0) {
    for (let o = 0; o < 16; o++) this.elements[o] = t[o + s];
    return this;
  }
  toArray(t = [], s = 0) {
    const o = this.elements;
    return t[s] = o[0], t[s + 1] = o[1], t[s + 2] = o[2], t[s + 3] = o[3], t[s + 4] = o[4], t[s + 5] = o[5], t[s + 6] = o[6], t[s + 7] = o[7], t[s + 8] = o[8], t[s + 9] = o[9], t[s + 10] = o[10], t[s + 11] = o[11], t[s + 12] = o[12], t[s + 13] = o[13], t[s + 14] = o[14], t[s + 15] = o[15], t;
  }
}
const Ne = new dt(), Vt = new Kt(), ao = new dt(0, 0, 0), oo = new dt(1, 1, 1), ue = new dt(), ki = new dt(), Dt = new dt(), $r = new Kt(), Kr = new ci();
class Oi {
  constructor(t = 0, s = 0, o = 0, h = Oi.DEFAULT_ORDER) {
    this.isEuler = true, this._x = t, this._y = s, this._z = o, this._order = h;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, s, o, h = this._order) {
    return this._x = t, this._y = s, this._z = o, this._order = h, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, s = this._order, o = true) {
    const h = t.elements, c = h[0], m = h[4], x = h[8], b = h[1], g = h[5], w = h[9], T = h[2], A = h[6], v = h[10];
    switch (s) {
      case "XYZ":
        this._y = Math.asin(it(x, -1, 1)), Math.abs(x) < 0.9999999 ? (this._x = Math.atan2(-w, v), this._z = Math.atan2(-m, c)) : (this._x = Math.atan2(A, g), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-it(w, -1, 1)), Math.abs(w) < 0.9999999 ? (this._y = Math.atan2(x, v), this._z = Math.atan2(b, g)) : (this._y = Math.atan2(-T, c), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(it(A, -1, 1)), Math.abs(A) < 0.9999999 ? (this._y = Math.atan2(-T, v), this._z = Math.atan2(-m, g)) : (this._y = 0, this._z = Math.atan2(b, c));
        break;
      case "ZYX":
        this._y = Math.asin(-it(T, -1, 1)), Math.abs(T) < 0.9999999 ? (this._x = Math.atan2(A, v), this._z = Math.atan2(b, c)) : (this._x = 0, this._z = Math.atan2(-m, g));
        break;
      case "YZX":
        this._z = Math.asin(it(b, -1, 1)), Math.abs(b) < 0.9999999 ? (this._x = Math.atan2(-w, g), this._y = Math.atan2(-T, c)) : (this._x = 0, this._y = Math.atan2(x, v));
        break;
      case "XZY":
        this._z = Math.asin(-it(m, -1, 1)), Math.abs(m) < 0.9999999 ? (this._x = Math.atan2(A, g), this._y = Math.atan2(x, c)) : (this._x = Math.atan2(-w, v), this._y = 0);
        break;
      default:
        Bt("Euler: .setFromRotationMatrix() encountered an unknown order: " + s);
    }
    return this._order = s, o === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, s, o) {
    return $r.makeRotationFromQuaternion(t), this.setFromRotationMatrix($r, s, o);
  }
  setFromVector3(t, s = this._order) {
    return this.set(t.x, t.y, t.z, s);
  }
  reorder(t) {
    return Kr.setFromEuler(this), this.setFromQuaternion(Kr, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], s = 0) {
    return t[s] = this._x, t[s + 1] = this._y, t[s + 2] = this._z, t[s + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Oi.DEFAULT_ORDER = "XYZ";
class ho {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = (1 << t | 0) >>> 0;
  }
  enable(t) {
    this.mask |= 1 << t | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= 1 << t | 0;
  }
  disable(t) {
    this.mask &= ~(1 << t | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  isEnabled(t) {
    return (this.mask & (1 << t | 0)) !== 0;
  }
}
let lo = 0;
const tn = new dt(), We = new ci(), Qt = new Kt(), zi = new dt(), hi = new dt(), uo = new dt(), co = new ci(), en = new dt(1, 0, 0), sn = new dt(0, 1, 0), rn = new dt(0, 0, 1), nn = { type: "added" }, fo = { type: "removed" }, Ve = { type: "childadded", child: null }, Ms = { type: "childremoved", child: null };
class Se extends dn {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: lo++ }), this.uuid = ks(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Se.DEFAULT_UP.clone();
    const t = new dt(), s = new Oi(), o = new ci(), h = new dt(1, 1, 1);
    function c() {
      o.setFromEuler(s, false);
    }
    function m() {
      s.setFromQuaternion(o, void 0, false);
    }
    s._onChange(c), o._onChange(m), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: t }, rotation: { configurable: true, enumerable: true, value: s }, quaternion: { configurable: true, enumerable: true, value: o }, scale: { configurable: true, enumerable: true, value: h }, modelViewMatrix: { value: new Kt() }, normalMatrix: { value: new ve() } }), this.matrix = new Kt(), this.matrixWorld = new Kt(), this.matrixAutoUpdate = Se.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new ho(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = false, this.userData = {}, this.pivot = null;
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, s) {
    this.quaternion.setFromAxisAngle(t, s);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, true);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, s) {
    return We.setFromAxisAngle(t, s), this.quaternion.multiply(We), this;
  }
  rotateOnWorldAxis(t, s) {
    return We.setFromAxisAngle(t, s), this.quaternion.premultiply(We), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(en, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(sn, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(rn, t);
  }
  translateOnAxis(t, s) {
    return tn.copy(t).applyQuaternion(this.quaternion), this.position.add(tn.multiplyScalar(s)), this;
  }
  translateX(t) {
    return this.translateOnAxis(en, t);
  }
  translateY(t) {
    return this.translateOnAxis(sn, t);
  }
  translateZ(t) {
    return this.translateOnAxis(rn, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(true, false), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(true, false), t.applyMatrix4(Qt.copy(this.matrixWorld).invert());
  }
  lookAt(t, s, o) {
    t.isVector3 ? zi.copy(t) : zi.set(t, s, o);
    const h = this.parent;
    this.updateWorldMatrix(true, false), hi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Qt.lookAt(hi, zi, this.up) : Qt.lookAt(zi, hi, this.up), this.quaternion.setFromRotationMatrix(Qt), h && (Qt.extractRotation(h.matrixWorld), We.setFromRotationMatrix(Qt), this.quaternion.premultiply(We.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let s = 0; s < arguments.length; s++) this.add(arguments[s]);
      return this;
    }
    return t === this ? (Gr("Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(nn), Ve.child = t, this.dispatchEvent(Ve), Ve.child = null) : Gr("Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let o = 0; o < arguments.length; o++) this.remove(arguments[o]);
      return this;
    }
    const s = this.children.indexOf(t);
    return s !== -1 && (t.parent = null, this.children.splice(s, 1), t.dispatchEvent(fo), Ms.child = t, this.dispatchEvent(Ms), Ms.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(true, false), Qt.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(true, false), Qt.multiply(t.parent.matrixWorld)), t.applyMatrix4(Qt), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(false, true), t.dispatchEvent(nn), Ve.child = t, this.dispatchEvent(Ve), Ve.child = null, this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, s) {
    if (this[t] === s) return this;
    for (let o = 0, h = this.children.length; o < h; o++) {
      const m = this.children[o].getObjectByProperty(t, s);
      if (m !== void 0) return m;
    }
  }
  getObjectsByProperty(t, s, o = []) {
    this[t] === s && o.push(this);
    const h = this.children;
    for (let c = 0, m = h.length; c < m; c++) h[c].getObjectsByProperty(t, s, o);
    return o;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(true, false), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(hi, t, uo), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(hi, co, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(true, false);
    const s = this.matrixWorld.elements;
    return t.set(s[8], s[9], s[10]).normalize();
  }
  raycast() {
  }
  traverse(t) {
    t(this);
    const s = this.children;
    for (let o = 0, h = s.length; o < h; o++) s[o].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === false) return;
    t(this);
    const s = this.children;
    for (let o = 0, h = s.length; o < h; o++) s[o].traverseVisible(t);
  }
  traverseAncestors(t) {
    const s = this.parent;
    s !== null && (t(s), s.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    const t = this.pivot;
    if (t !== null) {
      const s = t.x, o = t.y, h = t.z, c = this.matrix.elements;
      c[12] += s - c[0] * s - c[4] * o - c[8] * h, c[13] += o - c[1] * s - c[5] * o - c[9] * h, c[14] += h - c[2] * s - c[6] * o - c[10] * h;
    }
    this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, t = true);
    const s = this.children;
    for (let o = 0, h = s.length; o < h; o++) s[o].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, s) {
    const o = this.parent;
    if (t === true && o !== null && o.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), s === true) {
      const h = this.children;
      for (let c = 0, m = h.length; c < m; c++) h[c].updateWorldMatrix(false, true);
    }
  }
  toJSON(t) {
    const s = t === void 0 || typeof t == "string", o = {};
    s && (t = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, o.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" });
    const h = {};
    h.uuid = this.uuid, h.type = this.type, this.name !== "" && (h.name = this.name), this.castShadow === true && (h.castShadow = true), this.receiveShadow === true && (h.receiveShadow = true), this.visible === false && (h.visible = false), this.frustumCulled === false && (h.frustumCulled = false), this.renderOrder !== 0 && (h.renderOrder = this.renderOrder), this.static !== false && (h.static = this.static), Object.keys(this.userData).length > 0 && (h.userData = this.userData), h.layers = this.layers.mask, h.matrix = this.matrix.toArray(), h.up = this.up.toArray(), this.pivot !== null && (h.pivot = this.pivot.toArray()), this.matrixAutoUpdate === false && (h.matrixAutoUpdate = false), this.morphTargetDictionary !== void 0 && (h.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (h.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (h.type = "InstancedMesh", h.count = this.count, h.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (h.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (h.type = "BatchedMesh", h.perObjectFrustumCulled = this.perObjectFrustumCulled, h.sortObjects = this.sortObjects, h.drawRanges = this._drawRanges, h.reservedRanges = this._reservedRanges, h.geometryInfo = this._geometryInfo.map((x) => ({ ...x, boundingBox: x.boundingBox ? x.boundingBox.toJSON() : void 0, boundingSphere: x.boundingSphere ? x.boundingSphere.toJSON() : void 0 })), h.instanceInfo = this._instanceInfo.map((x) => ({ ...x })), h.availableInstanceIds = this._availableInstanceIds.slice(), h.availableGeometryIds = this._availableGeometryIds.slice(), h.nextIndexStart = this._nextIndexStart, h.nextVertexStart = this._nextVertexStart, h.geometryCount = this._geometryCount, h.maxInstanceCount = this._maxInstanceCount, h.maxVertexCount = this._maxVertexCount, h.maxIndexCount = this._maxIndexCount, h.geometryInitialized = this._geometryInitialized, h.matricesTexture = this._matricesTexture.toJSON(t), h.indirectTexture = this._indirectTexture.toJSON(t), this._colorsTexture !== null && (h.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (h.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (h.boundingBox = this.boundingBox.toJSON()));
    function c(x, b) {
      return x[b.uuid] === void 0 && (x[b.uuid] = b.toJSON(t)), b.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? h.background = this.background.toJSON() : this.background.isTexture && (h.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (h.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      h.geometry = c(t.geometries, this.geometry);
      const x = this.geometry.parameters;
      if (x !== void 0 && x.shapes !== void 0) {
        const b = x.shapes;
        if (Array.isArray(b)) for (let g = 0, w = b.length; g < w; g++) {
          const T = b[g];
          c(t.shapes, T);
        }
        else c(t.shapes, b);
      }
    }
    if (this.isSkinnedMesh && (h.bindMode = this.bindMode, h.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (c(t.skeletons, this.skeleton), h.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const x = [];
      for (let b = 0, g = this.material.length; b < g; b++) x.push(c(t.materials, this.material[b]));
      h.material = x;
    } else h.material = c(t.materials, this.material);
    if (this.children.length > 0) {
      h.children = [];
      for (let x = 0; x < this.children.length; x++) h.children.push(this.children[x].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      h.animations = [];
      for (let x = 0; x < this.animations.length; x++) {
        const b = this.animations[x];
        h.animations.push(c(t.animations, b));
      }
    }
    if (s) {
      const x = m(t.geometries), b = m(t.materials), g = m(t.textures), w = m(t.images), T = m(t.shapes), A = m(t.skeletons), v = m(t.animations), E = m(t.nodes);
      x.length > 0 && (o.geometries = x), b.length > 0 && (o.materials = b), g.length > 0 && (o.textures = g), w.length > 0 && (o.images = w), T.length > 0 && (o.shapes = T), A.length > 0 && (o.skeletons = A), v.length > 0 && (o.animations = v), E.length > 0 && (o.nodes = E);
    }
    return o.object = h, o;
    function m(x) {
      const b = [];
      for (const g in x) {
        const w = x[g];
        delete w.metadata, b.push(w);
      }
      return b;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, s = true) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), t.pivot !== null && (this.pivot = t.pivot.clone()), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.static = t.static, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), s === true) for (let o = 0; o < t.children.length; o++) {
      const h = t.children[o];
      this.add(h.clone());
    }
    return this;
  }
}
Se.DEFAULT_UP = new dt(0, 1, 0);
Se.DEFAULT_MATRIX_AUTO_UPDATE = true;
Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const pn = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, ce = { h: 0, s: 0, l: 0 }, Ai = { h: 0, s: 0, l: 0 };
function Ts(F, t, s) {
  return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? F + (t - F) * 6 * s : s < 1 / 2 ? t : s < 2 / 3 ? F + (t - F) * 6 * (2 / 3 - s) : F;
}
class zs {
  constructor(t, s, o) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(t, s, o);
  }
  set(t, s, o) {
    if (s === void 0 && o === void 0) {
      const h = t;
      h && h.isColor ? this.copy(h) : typeof h == "number" ? this.setHex(h) : typeof h == "string" && this.setStyle(h);
    } else this.setRGB(t, s, o);
    return this;
  }
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  setHex(t, s = bt) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Wt.colorSpaceToWorking(this, s), this;
  }
  setRGB(t, s, o, h = Wt.workingColorSpace) {
    return this.r = t, this.g = s, this.b = o, Wt.colorSpaceToWorking(this, h), this;
  }
  setHSL(t, s, o, h = Wt.workingColorSpace) {
    if (t = to(t, 1), s = it(s, 0, 1), o = it(o, 0, 1), s === 0) this.r = this.g = this.b = o;
    else {
      const c = o <= 0.5 ? o * (1 + s) : o + s - o * s, m = 2 * o - c;
      this.r = Ts(m, c, t + 1 / 3), this.g = Ts(m, c, t), this.b = Ts(m, c, t - 1 / 3);
    }
    return Wt.colorSpaceToWorking(this, h), this;
  }
  setStyle(t, s = bt) {
    function o(c) {
      c !== void 0 && parseFloat(c) < 1 && Bt("Color: Alpha component of " + t + " will be ignored.");
    }
    let h;
    if (h = /^(\w+)\(([^\)]*)\)/.exec(t)) {
      let c;
      const m = h[1], x = h[2];
      switch (m) {
        case "rgb":
        case "rgba":
          if (c = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(x)) return o(c[4]), this.setRGB(Math.min(255, parseInt(c[1], 10)) / 255, Math.min(255, parseInt(c[2], 10)) / 255, Math.min(255, parseInt(c[3], 10)) / 255, s);
          if (c = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(x)) return o(c[4]), this.setRGB(Math.min(100, parseInt(c[1], 10)) / 100, Math.min(100, parseInt(c[2], 10)) / 100, Math.min(100, parseInt(c[3], 10)) / 100, s);
          break;
        case "hsl":
        case "hsla":
          if (c = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(x)) return o(c[4]), this.setHSL(parseFloat(c[1]) / 360, parseFloat(c[2]) / 100, parseFloat(c[3]) / 100, s);
          break;
        default:
          Bt("Color: Unknown color model " + t);
      }
    } else if (h = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const c = h[1], m = c.length;
      if (m === 3) return this.setRGB(parseInt(c.charAt(0), 16) / 15, parseInt(c.charAt(1), 16) / 15, parseInt(c.charAt(2), 16) / 15, s);
      if (m === 6) return this.setHex(parseInt(c, 16), s);
      Bt("Color: Invalid hex color " + t);
    } else if (t && t.length > 0) return this.setColorName(t, s);
    return this;
  }
  setColorName(t, s = bt) {
    const o = pn[t.toLowerCase()];
    return o !== void 0 ? this.setHex(o, s) : Bt("Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = $t(t.r), this.g = $t(t.g), this.b = $t(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = Xe(t.r), this.g = Xe(t.g), this.b = Xe(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = bt) {
    return Wt.workingToColorSpace(xt.copy(this), t), Math.round(it(xt.r * 255, 0, 255)) * 65536 + Math.round(it(xt.g * 255, 0, 255)) * 256 + Math.round(it(xt.b * 255, 0, 255));
  }
  getHexString(t = bt) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, s = Wt.workingColorSpace) {
    Wt.workingToColorSpace(xt.copy(this), s);
    const o = xt.r, h = xt.g, c = xt.b, m = Math.max(o, h, c), x = Math.min(o, h, c);
    let b, g;
    const w = (x + m) / 2;
    if (x === m) b = 0, g = 0;
    else {
      const T = m - x;
      switch (g = w <= 0.5 ? T / (m + x) : T / (2 - m - x), m) {
        case o:
          b = (h - c) / T + (h < c ? 6 : 0);
          break;
        case h:
          b = (c - o) / T + 2;
          break;
        case c:
          b = (o - h) / T + 4;
          break;
      }
      b /= 6;
    }
    return t.h = b, t.s = g, t.l = w, t;
  }
  getRGB(t, s = Wt.workingColorSpace) {
    return Wt.workingToColorSpace(xt.copy(this), s), t.r = xt.r, t.g = xt.g, t.b = xt.b, t;
  }
  getStyle(t = bt) {
    Wt.workingToColorSpace(xt.copy(this), t);
    const s = xt.r, o = xt.g, h = xt.b;
    return t !== bt ? `color(${t} ${s.toFixed(3)} ${o.toFixed(3)} ${h.toFixed(3)})` : `rgb(${Math.round(s * 255)},${Math.round(o * 255)},${Math.round(h * 255)})`;
  }
  offsetHSL(t, s, o) {
    return this.getHSL(ce), this.setHSL(ce.h + t, ce.s + s, ce.l + o);
  }
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  addColors(t, s) {
    return this.r = t.r + s.r, this.g = t.g + s.g, this.b = t.b + s.b, this;
  }
  addScalar(t) {
    return this.r += t, this.g += t, this.b += t, this;
  }
  sub(t) {
    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
  }
  multiply(t) {
    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
  }
  multiplyScalar(t) {
    return this.r *= t, this.g *= t, this.b *= t, this;
  }
  lerp(t, s) {
    return this.r += (t.r - this.r) * s, this.g += (t.g - this.g) * s, this.b += (t.b - this.b) * s, this;
  }
  lerpColors(t, s, o) {
    return this.r = t.r + (s.r - t.r) * o, this.g = t.g + (s.g - t.g) * o, this.b = t.b + (s.b - t.b) * o, this;
  }
  lerpHSL(t, s) {
    this.getHSL(ce), t.getHSL(Ai);
    const o = gs(ce.h, Ai.h, s), h = gs(ce.s, Ai.s, s), c = gs(ce.l, Ai.l, s);
    return this.setHSL(o, h, c), this;
  }
  setFromVector3(t) {
    return this.r = t.x, this.g = t.y, this.b = t.z, this;
  }
  applyMatrix3(t) {
    const s = this.r, o = this.g, h = this.b, c = t.elements;
    return this.r = c[0] * s + c[3] * o + c[6] * h, this.g = c[1] * s + c[4] * o + c[7] * h, this.b = c[2] * s + c[5] * o + c[8] * h, this;
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, s = 0) {
    return this.r = t[s], this.g = t[s + 1], this.b = t[s + 2], this;
  }
  toArray(t = [], s = 0) {
    return t[s] = this.r, t[s + 1] = this.g, t[s + 2] = this.b, t;
  }
  fromBufferAttribute(t, s) {
    return this.r = t.getX(s), this.g = t.getY(s), this.b = t.getZ(s), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const xt = new zs();
zs.NAMES = pn;
const Cs = { enabled: false, files: {}, add: function(F, t) {
  this.enabled !== false && (an(F) || (this.files[F] = t));
}, get: function(F) {
  if (this.enabled !== false && !an(F)) return this.files[F];
}, remove: function(F) {
  delete this.files[F];
}, clear: function() {
  this.files = {};
} };
function an(F) {
  try {
    const t = F.slice(F.indexOf(":") + 1);
    return new URL(t).protocol === "blob:";
  } catch {
    return false;
  }
}
class _o {
  constructor(t, s, o) {
    const h = this;
    let c = false, m = 0, x = 0, b;
    const g = [];
    this.onStart = void 0, this.onLoad = t, this.onProgress = s, this.onError = o, this._abortController = null, this.itemStart = function(w) {
      x++, c === false && h.onStart !== void 0 && h.onStart(w, m, x), c = true;
    }, this.itemEnd = function(w) {
      m++, h.onProgress !== void 0 && h.onProgress(w, m, x), m === x && (c = false, h.onLoad !== void 0 && h.onLoad());
    }, this.itemError = function(w) {
      h.onError !== void 0 && h.onError(w);
    }, this.resolveURL = function(w) {
      return b ? b(w) : w;
    }, this.setURLModifier = function(w) {
      return b = w, this;
    }, this.addHandler = function(w, T) {
      return g.push(w, T), this;
    }, this.removeHandler = function(w) {
      const T = g.indexOf(w);
      return T !== -1 && g.splice(T, 2), this;
    }, this.getHandler = function(w) {
      for (let T = 0, A = g.length; T < A; T += 2) {
        const v = g[T], E = g[T + 1];
        if (v.global && (v.lastIndex = 0), v.test(w)) return E;
      }
      return null;
    }, this.abort = function() {
      return this.abortController.abort(), this._abortController = null, this;
    };
  }
  get abortController() {
    return this._abortController || (this._abortController = new AbortController()), this._abortController;
  }
}
const po = new _o();
class As {
  constructor(t) {
    this.manager = t !== void 0 ? t : po, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  load() {
  }
  loadAsync(t, s) {
    const o = this;
    return new Promise(function(h, c) {
      o.load(t, h, s, c);
    });
  }
  parse() {
  }
  setCrossOrigin(t) {
    return this.crossOrigin = t, this;
  }
  setWithCredentials(t) {
    return this.withCredentials = t, this;
  }
  setPath(t) {
    return this.path = t, this;
  }
  setResourcePath(t) {
    return this.resourcePath = t, this;
  }
  setRequestHeader(t) {
    return this.requestHeader = t, this;
  }
  abort() {
    return this;
  }
}
As.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const qe = /* @__PURE__ */ new WeakMap();
class mo extends As {
  constructor(t) {
    super(t);
  }
  load(t, s, o, h) {
    this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    const c = this, m = Cs.get(`image:${t}`);
    if (m !== void 0) {
      if (m.complete === true) c.manager.itemStart(t), setTimeout(function() {
        s && s(m), c.manager.itemEnd(t);
      }, 0);
      else {
        let T = qe.get(m);
        T === void 0 && (T = [], qe.set(m, T)), T.push({ onLoad: s, onError: h });
      }
      return m;
    }
    const x = Fs("img");
    function b() {
      w(), s && s(this);
      const T = qe.get(this) || [];
      for (let A = 0; A < T.length; A++) {
        const v = T[A];
        v.onLoad && v.onLoad(this);
      }
      qe.delete(this), c.manager.itemEnd(t);
    }
    function g(T) {
      w(), h && h(T), Cs.remove(`image:${t}`);
      const A = qe.get(this) || [];
      for (let v = 0; v < A.length; v++) {
        const E = A[v];
        E.onError && E.onError(T);
      }
      qe.delete(this), c.manager.itemError(t), c.manager.itemEnd(t);
    }
    function w() {
      x.removeEventListener("load", b, false), x.removeEventListener("error", g, false);
    }
    return x.addEventListener("load", b, false), x.addEventListener("error", g, false), t.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (x.crossOrigin = this.crossOrigin), Cs.add(`image:${t}`, x), c.manager.itemStart(t), x.src = t, x;
  }
}
class mn extends As {
  constructor(t) {
    super(t);
  }
  load(t, s, o, h) {
    const c = new fe(), m = new mo(this.manager);
    return m.setCrossOrigin(this.crossOrigin), m.setPath(this.path), m.load(t, function(x) {
      c.image = x, c.needsUpdate = true, s !== void 0 && s(c);
    }, o, h), c;
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: ln } }));
typeof window < "u" && (window.__THREE__ ? Bt("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = ln);
var li = { exports: {} }, go = li.exports, on;
function xo() {
  return on || (on = 1, (function(F, t) {
    (function(s, o) {
      o(t);
    })(go, (function(s) {
      function o(d, e) {
        d.prototype = Object.create(e.prototype), d.prototype.constructor = d, d.__proto__ = e;
      }
      function h(d) {
        if (d === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return d;
      }
      var c = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } }, m = { duration: 0.5, overwrite: false, delay: 0 }, x, b, g, w = 1e8, T = 1 / w, A = Math.PI * 2, v = A / 4, E = 0, B = Math.sqrt, G = Math.cos, V = Math.sin, q = function(e) {
        return typeof e == "string";
      }, Y = function(e) {
        return typeof e == "function";
      }, Q = function(e) {
        return typeof e == "number";
      }, st = function(e) {
        return typeof e > "u";
      }, j = function(e) {
        return typeof e == "object";
      }, X = function(e) {
        return e !== false;
      }, wt = function() {
        return typeof window < "u";
      }, yt = function(e) {
        return Y(e) || q(e);
      }, vt = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
      }, $ = Array.isArray, Pt = /random\([^)]+\)/g, Rt = /,\s*/g, qt = /(?:-?\.?\d|\.)+/gi, rt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Ut = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, te = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, de = /[+-]=-?[.\d]+/, Fe = /[^,'"\[\]\s]+/gi, ke = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, J, Yt, Di, Pi, Ft = {}, fi = {}, Es, Os = function(e) {
        return (fi = Ae(e, Ft)) && Ct;
      }, Ri = function(e, i) {
        return console.warn("Invalid property", e, "set to", i, "Missing plugin? gsap.registerPlugin()");
      }, He = function(e, i) {
        return !i && console.warn(e);
      }, Ds = function(e, i) {
        return e && (Ft[e] = i) && fi && (fi[e] = i) || Ft;
      }, Ge = function() {
        return 0;
      }, wn = { suppressEvents: true, isStart: true, kill: false }, di = { suppressEvents: true, kill: false }, Mn = { suppressEvents: true }, Li = {}, ee = [], Ii = {}, Ps, kt = {}, Bi = {}, Rs = 30, _i = [], Ui = "", Ni = function(e) {
        var i = e[0], r, n;
        if (j(i) || Y(i) || (e = [e]), !(r = (i._gsap || {}).harness)) {
          for (n = _i.length; n-- && !_i[n].targetTest(i); ) ;
          r = _i[n];
        }
        for (n = e.length; n--; ) e[n] && (e[n]._gsap || (e[n]._gsap = new ur(e[n], r))) || e.splice(n, 1);
        return e;
      }, _e = function(e) {
        return e._gsap || Ni(It(e))[0]._gsap;
      }, Ls = function(e, i, r) {
        return (r = e[i]) && Y(r) ? e[i]() : st(r) && e.getAttribute && e.getAttribute(i) || r;
      }, Mt = function(e, i) {
        return (e = e.split(",")).forEach(i) || e;
      }, ht = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0;
      }, at = function(e) {
        return Math.round(e * 1e7) / 1e7 || 0;
      }, ze = function(e, i) {
        var r = i.charAt(0), n = parseFloat(i.substr(2));
        return e = parseFloat(e), r === "+" ? e + n : r === "-" ? e - n : r === "*" ? e * n : e / n;
      }, Tn = function(e, i) {
        for (var r = i.length, n = 0; e.indexOf(i[n]) < 0 && ++n < r; ) ;
        return n < r;
      }, pi = function() {
        var e = ee.length, i = ee.slice(0), r, n;
        for (Ii = {}, ee.length = 0, r = 0; r < e; r++) n = i[r], n && n._lazy && (n.render(n._lazy[0], n._lazy[1], true)._lazy = 0);
      }, Wi = function(e) {
        return !!(e._initted || e._startAt || e.add);
      }, Is = function(e, i, r, n) {
        ee.length && !b && pi(), e.render(i, r, !!(b && i < 0 && Wi(e))), ee.length && !b && pi();
      }, Bs = function(e) {
        var i = parseFloat(e);
        return (i || i === 0) && (e + "").match(Fe).length < 2 ? i : q(e) ? e.trim() : e;
      }, Us = function(e) {
        return e;
      }, zt = function(e, i) {
        for (var r in i) r in e || (e[r] = i[r]);
        return e;
      }, Cn = function(e) {
        return function(i, r) {
          for (var n in r) n in i || n === "duration" && e || n === "ease" || (i[n] = r[n]);
        };
      }, Ae = function(e, i) {
        for (var r in i) e[r] = i[r];
        return e;
      }, Ns = function d(e, i) {
        for (var r in i) r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = j(i[r]) ? d(e[r] || (e[r] = {}), i[r]) : i[r]);
        return e;
      }, mi = function(e, i) {
        var r = {}, n;
        for (n in e) n in i || (r[n] = e[n]);
        return r;
      }, Ze = function(e) {
        var i = e.parent || J, r = e.keyframes ? Cn($(e.keyframes)) : zt;
        if (X(e.inherit)) for (; i; ) r(e, i.vars.defaults), i = i.parent || i._dp;
        return e;
      }, Sn = function(e, i) {
        for (var r = e.length, n = r === i.length; n && r-- && e[r] === i[r]; ) ;
        return r < 0;
      }, Ws = function(e, i, r, n, a) {
        var l = e[n], u;
        if (a) for (u = i[a]; l && l[a] > u; ) l = l._prev;
        return l ? (i._next = l._next, l._next = i) : (i._next = e[r], e[r] = i), i._next ? i._next._prev = i : e[n] = i, i._prev = l, i.parent = i._dp = e, i;
      }, gi = function(e, i, r, n) {
        r === void 0 && (r = "_first"), n === void 0 && (n = "_last");
        var a = i._prev, l = i._next;
        a ? a._next = l : e[r] === i && (e[r] = l), l ? l._prev = a : e[n] === i && (e[n] = a), i._next = i._prev = i.parent = null;
      }, ie = function(e, i) {
        e.parent && (!i || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
      }, pe = function(e, i) {
        if (e && (!i || i._end > e._dur || i._start < 0)) for (var r = e; r; ) r._dirty = 1, r = r.parent;
        return e;
      }, vn = function(e) {
        for (var i = e.parent; i && i.parent; ) i._dirty = 1, i.totalDuration(), i = i.parent;
        return e;
      }, Vi = function(e, i, r, n) {
        return e._startAt && (b ? e._startAt.revert(di) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(i, true, n));
      }, Fn = function d(e) {
        return !e || e._ts && d(e.parent);
      }, Vs = function(e) {
        return e._repeat ? Ee(e._tTime, e = e.duration() + e._rDelay) * e : 0;
      }, Ee = function(e, i) {
        var r = Math.floor(e = at(e / i));
        return e && r === e ? r - 1 : r;
      }, xi = function(e, i) {
        return (e - i._start) * i._ts + (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur);
      }, yi = function(e) {
        return e._end = at(e._start + (e._tDur / Math.abs(e._ts || e._rts || T) || 0));
      }, bi = function(e, i) {
        var r = e._dp;
        return r && r.smoothChildTiming && e._ts && (e._start = at(r._time - (e._ts > 0 ? i / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - i) / -e._ts)), yi(e), r._dirty || pe(r, e)), e;
      }, qs = function(e, i) {
        var r;
        if ((i._time || !i._dur && i._initted || i._start < e._time && (i._dur || !i.add)) && (r = xi(e.rawTime(), i), (!i._dur || Qe(0, i.totalDuration(), r) - i._tTime > T) && i.render(r, true)), pe(e, i)._dp && e._initted && e._time >= e._dur && e._ts) {
          if (e._dur < e.duration()) for (r = e; r._dp; ) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
          e._zTime = -T;
        }
      }, Xt = function(e, i, r, n) {
        return i.parent && ie(i), i._start = at((Q(r) ? r : r || e !== J ? Lt(e, r, i) : e._time) + i._delay), i._end = at(i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0)), Ws(e, i, "_first", "_last", e._sort ? "_start" : 0), qi(i) || (e._recent = i), n || qs(e, i), e._ts < 0 && bi(e, e._tTime), e;
      }, Ys = function(e, i) {
        return (Ft.ScrollTrigger || Ri("scrollTrigger", i)) && Ft.ScrollTrigger.create(i, e);
      }, Xs = function(e, i, r, n, a) {
        if ($i(e, i, a), !e._initted) return 1;
        if (!r && e._pt && !b && (e._dur && e.vars.lazy !== false || !e._dur && e.vars.lazy) && Ps !== Et.frame) return ee.push(e), e._lazy = [a, n], 1;
      }, kn = function d(e) {
        var i = e.parent;
        return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || d(i));
      }, qi = function(e) {
        var i = e.data;
        return i === "isFromStart" || i === "isStart";
      }, zn = function(e, i, r, n) {
        var a = e.ratio, l = i < 0 || !i && (!e._start && kn(e) && !(!e._initted && qi(e)) || (e._ts < 0 || e._dp._ts < 0) && !qi(e)) ? 0 : 1, u = e._rDelay, f = 0, _, p, M;
        if (u && e._repeat && (f = Qe(0, e._tDur, i), p = Ee(f, u), e._yoyo && p & 1 && (l = 1 - l), p !== Ee(e._tTime, u) && (a = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== a || b || n || e._zTime === T || !i && e._zTime) {
          if (!e._initted && Xs(e, i, n, r, f)) return;
          for (M = e._zTime, e._zTime = i || (r ? T : 0), r || (r = i && !M), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = f, _ = e._pt; _; ) _.r(l, _.d), _ = _._next;
          i < 0 && Vi(e, i, r, true), e._onUpdate && !r && At(e, "onUpdate"), f && e._repeat && !r && e.parent && At(e, "onRepeat"), (i >= e._tDur || i < 0) && e.ratio === l && (l && ie(e, 1), !r && !b && (At(e, l ? "onComplete" : "onReverseComplete", true), e._prom && e._prom()));
        } else e._zTime || (e._zTime = i);
      }, An = function(e, i, r) {
        var n;
        if (r > i) for (n = e._first; n && n._start <= r; ) {
          if (n.data === "isPause" && n._start > i) return n;
          n = n._next;
        }
        else for (n = e._last; n && n._start >= r; ) {
          if (n.data === "isPause" && n._start < i) return n;
          n = n._prev;
        }
      }, Oe = function(e, i, r, n) {
        var a = e._repeat, l = at(i) || 0, u = e._tTime / e._tDur;
        return u && !n && (e._time *= l / e._dur), e._dur = l, e._tDur = a ? a < 0 ? 1e10 : at(l * (a + 1) + e._rDelay * a) : l, u > 0 && !n && bi(e, e._tTime = e._tDur * u), e.parent && yi(e), r || pe(e.parent, e), e;
      }, Hs = function(e) {
        return e instanceof _t ? pe(e) : Oe(e, e._dur);
      }, En = { _start: 0, endTime: Ge, totalDuration: Ge }, Lt = function d(e, i, r) {
        var n = e.labels, a = e._recent || En, l = e.duration() >= w ? a.endTime(false) : e._dur, u, f, _;
        return q(i) && (isNaN(i) || i in n) ? (f = i.charAt(0), _ = i.substr(-1) === "%", u = i.indexOf("="), f === "<" || f === ">" ? (u >= 0 && (i = i.replace(/=/, "")), (f === "<" ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (_ ? (u < 0 ? a : r).totalDuration() / 100 : 1)) : u < 0 ? (i in n || (n[i] = l), n[i]) : (f = parseFloat(i.charAt(u - 1) + i.substr(u + 1)), _ && r && (f = f / 100 * ($(r) ? r[0] : r).totalDuration()), u > 1 ? d(e, i.substr(0, u - 1), r) + f : l + f)) : i == null ? l : +i;
      }, je = function(e, i, r) {
        var n = Q(i[1]), a = (n ? 2 : 1) + (e < 2 ? 0 : 1), l = i[a], u, f;
        if (n && (l.duration = i[1]), l.parent = r, e) {
          for (u = l, f = r; f && !("immediateRender" in u); ) u = f.vars.defaults || {}, f = X(f.vars.inherit) && f.parent;
          l.immediateRender = X(u.immediateRender), e < 2 ? l.runBackwards = 1 : l.startAt = i[a - 1];
        }
        return new lt(i[0], l, i[a + 1]);
      }, se = function(e, i) {
        return e || e === 0 ? i(e) : i;
      }, Qe = function(e, i, r) {
        return r < e ? e : r > i ? i : r;
      }, mt = function(e, i) {
        return !q(e) || !(i = ke.exec(e)) ? "" : i[1];
      }, On = function(e, i, r) {
        return se(r, function(n) {
          return Qe(e, i, n);
        });
      }, Yi = [].slice, Gs = function(e, i) {
        return e && j(e) && "length" in e && (!i && !e.length || e.length - 1 in e && j(e[0])) && !e.nodeType && e !== Yt;
      }, Dn = function(e, i, r) {
        return r === void 0 && (r = []), e.forEach(function(n) {
          var a;
          return q(n) && !i || Gs(n, 1) ? (a = r).push.apply(a, It(n)) : r.push(n);
        }) || r;
      }, It = function(e, i, r) {
        return g && !i && g.selector ? g.selector(e) : q(e) && !r && (Di || !Pe()) ? Yi.call((i || Pi).querySelectorAll(e), 0) : $(e) ? Dn(e, r) : Gs(e) ? Yi.call(e, 0) : e ? [e] : [];
      }, Xi = function(e) {
        return e = It(e)[0] || He("Invalid scope") || {}, function(i) {
          var r = e.current || e.nativeElement || e;
          return It(i, r.querySelectorAll ? r : r === e ? He("Invalid scope") || Pi.createElement("div") : e);
        };
      }, Zs = function(e) {
        return e.sort(function() {
          return 0.5 - Math.random();
        });
      }, js = function(e) {
        if (Y(e)) return e;
        var i = j(e) ? e : { each: e }, r = me(i.ease), n = i.from || 0, a = parseFloat(i.base) || 0, l = {}, u = n > 0 && n < 1, f = isNaN(n) || u, _ = i.axis, p = n, M = n;
        return q(n) ? p = M = { center: 0.5, edges: 0.5, end: 1 }[n] || 0 : !u && f && (p = n[0], M = n[1]), function(C, S, k) {
          var y = (k || i).length, z = l[y], D, P, L, I, O, U, N, W, R;
          if (!z) {
            if (R = i.grid === "auto" ? 0 : (i.grid || [1, w])[1], !R) {
              for (N = -w; N < (N = k[R++].getBoundingClientRect().left) && R < y; ) ;
              R < y && R--;
            }
            for (z = l[y] = [], D = f ? Math.min(R, y) * p - 0.5 : n % R, P = R === w ? 0 : f ? y * M / R - 0.5 : n / R | 0, N = 0, W = w, U = 0; U < y; U++) L = U % R - D, I = P - (U / R | 0), z[U] = O = _ ? Math.abs(_ === "y" ? I : L) : B(L * L + I * I), O > N && (N = O), O < W && (W = O);
            n === "random" && Zs(z), z.max = N - W, z.min = W, z.v = y = (parseFloat(i.amount) || parseFloat(i.each) * (R > y ? y - 1 : _ ? _ === "y" ? y / R : R : Math.max(R, y / R)) || 0) * (n === "edges" ? -1 : 1), z.b = y < 0 ? a - y : a, z.u = mt(i.amount || i.each) || 0, r = r && y < 0 ? or(r) : r;
          }
          return y = (z[C] - z.min) / z.max || 0, at(z.b + (r ? r(y) : y) * z.v) + z.u;
        };
      }, Hi = function(e) {
        var i = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function(r) {
          var n = at(Math.round(parseFloat(r) / e) * e * i);
          return (n - n % 1) / i + (Q(r) ? 0 : mt(r));
        };
      }, Qs = function(e, i) {
        var r = $(e), n, a;
        return !r && j(e) && (n = r = e.radius || w, e.values ? (e = It(e.values), (a = !Q(e[0])) && (n *= n)) : e = Hi(e.increment)), se(i, r ? Y(e) ? function(l) {
          return a = e(l), Math.abs(a - l) <= n ? a : l;
        } : function(l) {
          for (var u = parseFloat(a ? l.x : l), f = parseFloat(a ? l.y : 0), _ = w, p = 0, M = e.length, C, S; M--; ) a ? (C = e[M].x - u, S = e[M].y - f, C = C * C + S * S) : C = Math.abs(e[M] - u), C < _ && (_ = C, p = M);
          return p = !n || _ <= n ? e[p] : l, a || p === l || Q(l) ? p : p + mt(l);
        } : Hi(e));
      }, Js = function(e, i, r, n) {
        return se($(e) ? !i : r === true ? !!(r = 0) : !n, function() {
          return $(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (i - e + r * 0.99)) / r) * r * n) / n;
        });
      }, Pn = function() {
        for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++) i[r] = arguments[r];
        return function(n) {
          return i.reduce(function(a, l) {
            return l(a);
          }, n);
        };
      }, Rn = function(e, i) {
        return function(r) {
          return e(parseFloat(r)) + (i || mt(r));
        };
      }, Ln = function(e, i, r) {
        return Ks(e, i, 0, 1, r);
      }, $s = function(e, i, r) {
        return se(r, function(n) {
          return e[~~i(n)];
        });
      }, In = function d(e, i, r) {
        var n = i - e;
        return $(e) ? $s(e, d(0, e.length), i) : se(r, function(a) {
          return (n + (a - e) % n) % n + e;
        });
      }, Bn = function d(e, i, r) {
        var n = i - e, a = n * 2;
        return $(e) ? $s(e, d(0, e.length - 1), i) : se(r, function(l) {
          return l = (a + (l - e) % a) % a || 0, e + (l > n ? a - l : l);
        });
      }, Je = function(e) {
        return e.replace(Pt, function(i) {
          var r = i.indexOf("[") + 1, n = i.substring(r || 7, r ? i.indexOf("]") : i.length - 1).split(Rt);
          return Js(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5);
        });
      }, Ks = function(e, i, r, n, a) {
        var l = i - e, u = n - r;
        return se(a, function(f) {
          return r + ((f - e) / l * u || 0);
        });
      }, Un = function d(e, i, r, n) {
        var a = isNaN(e + i) ? 0 : function(S) {
          return (1 - S) * e + S * i;
        };
        if (!a) {
          var l = q(e), u = {}, f, _, p, M, C;
          if (r === true && (n = 1) && (r = null), l) e = { p: e }, i = { p: i };
          else if ($(e) && !$(i)) {
            for (p = [], M = e.length, C = M - 2, _ = 1; _ < M; _++) p.push(d(e[_ - 1], e[_]));
            M--, a = function(k) {
              k *= M;
              var y = Math.min(C, ~~k);
              return p[y](k - y);
            }, r = i;
          } else n || (e = Ae($(e) ? [] : {}, e));
          if (!p) {
            for (f in i) Qi.call(u, e, f, "get", i[f]);
            a = function(k) {
              return es(k, u) || (l ? e.p : e);
            };
          }
        }
        return se(r, a);
      }, tr = function(e, i, r) {
        var n = e.labels, a = w, l, u, f;
        for (l in n) u = n[l] - i, u < 0 == !!r && u && a > (u = Math.abs(u)) && (f = l, a = u);
        return f;
      }, At = function(e, i, r) {
        var n = e.vars, a = n[i], l = g, u = e._ctx, f, _, p;
        if (a) return f = n[i + "Params"], _ = n.callbackScope || e, r && ee.length && pi(), u && (g = u), p = f ? a.apply(_, f) : a.call(_), g = l, p;
      }, $e = function(e) {
        return ie(e), e.scrollTrigger && e.scrollTrigger.kill(!!b), e.progress() < 1 && At(e, "onInterrupt"), e;
      }, De, er = [], ir = function(e) {
        if (e) if (e = !e.name && e.default || e, wt() || e.headless) {
          var i = e.name, r = Y(e), n = i && !r && e.init ? function() {
            this._props = [];
          } : e, a = { init: Ge, render: es, add: Qi, kill: ea, modifier: ta, rawVars: 0 }, l = { targetTest: 0, get: 0, getSetter: ts, aliases: {}, register: 0 };
          if (Pe(), e !== n) {
            if (kt[i]) return;
            zt(n, zt(mi(e, a), l)), Ae(n.prototype, Ae(a, mi(e, l))), kt[n.prop = i] = n, e.targetTest && (_i.push(n), Li[i] = 1), i = (i === "css" ? "CSS" : i.charAt(0).toUpperCase() + i.substr(1)) + "Plugin";
          }
          Ds(i, n), e.register && e.register(Ct, n, Tt);
        } else er.push(e);
      }, K = 255, Ke = { aqua: [0, K, K], lime: [0, K, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, K], navy: [0, 0, 128], white: [K, K, K], olive: [128, 128, 0], yellow: [K, K, 0], orange: [K, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [K, 0, 0], pink: [K, 192, 203], cyan: [0, K, K], transparent: [K, K, K, 0] }, Gi = function(e, i, r) {
        return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? i + (r - i) * e * 6 : e < 0.5 ? r : e * 3 < 2 ? i + (r - i) * (2 / 3 - e) * 6 : i) * K + 0.5 | 0;
      }, sr = function(e, i, r) {
        var n = e ? Q(e) ? [e >> 16, e >> 8 & K, e & K] : 0 : Ke.black, a, l, u, f, _, p, M, C, S, k;
        if (!n) {
          if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Ke[e]) n = Ke[e];
          else if (e.charAt(0) === "#") {
            if (e.length < 6 && (a = e.charAt(1), l = e.charAt(2), u = e.charAt(3), e = "#" + a + a + l + l + u + u + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return n = parseInt(e.substr(1, 6), 16), [n >> 16, n >> 8 & K, n & K, parseInt(e.substr(7), 16) / 255];
            e = parseInt(e.substr(1), 16), n = [e >> 16, e >> 8 & K, e & K];
          } else if (e.substr(0, 3) === "hsl") {
            if (n = k = e.match(qt), !i) f = +n[0] % 360 / 360, _ = +n[1] / 100, p = +n[2] / 100, l = p <= 0.5 ? p * (_ + 1) : p + _ - p * _, a = p * 2 - l, n.length > 3 && (n[3] *= 1), n[0] = Gi(f + 1 / 3, a, l), n[1] = Gi(f, a, l), n[2] = Gi(f - 1 / 3, a, l);
            else if (~e.indexOf("=")) return n = e.match(rt), r && n.length < 4 && (n[3] = 1), n;
          } else n = e.match(qt) || Ke.transparent;
          n = n.map(Number);
        }
        return i && !k && (a = n[0] / K, l = n[1] / K, u = n[2] / K, M = Math.max(a, l, u), C = Math.min(a, l, u), p = (M + C) / 2, M === C ? f = _ = 0 : (S = M - C, _ = p > 0.5 ? S / (2 - M - C) : S / (M + C), f = M === a ? (l - u) / S + (l < u ? 6 : 0) : M === l ? (u - a) / S + 2 : (a - l) / S + 4, f *= 60), n[0] = ~~(f + 0.5), n[1] = ~~(_ * 100 + 0.5), n[2] = ~~(p * 100 + 0.5)), r && n.length < 4 && (n[3] = 1), n;
      }, rr = function(e) {
        var i = [], r = [], n = -1;
        return e.split(re).forEach(function(a) {
          var l = a.match(Ut) || [];
          i.push.apply(i, l), r.push(n += l.length + 1);
        }), i.c = r, i;
      }, nr = function(e, i, r) {
        var n = "", a = (e + n).match(re), l = i ? "hsla(" : "rgba(", u = 0, f, _, p, M;
        if (!a) return e;
        if (a = a.map(function(C) {
          return (C = sr(C, i, 1)) && l + (i ? C[0] + "," + C[1] + "%," + C[2] + "%," + C[3] : C.join(",")) + ")";
        }), r && (p = rr(e), f = r.c, f.join(n) !== p.c.join(n))) for (_ = e.replace(re, "1").split(Ut), M = _.length - 1; u < M; u++) n += _[u] + (~f.indexOf(u) ? a.shift() || l + "0,0,0,0)" : (p.length ? p : a.length ? a : r).shift());
        if (!_) for (_ = e.split(re), M = _.length - 1; u < M; u++) n += _[u] + a[u];
        return n + _[M];
      }, re = (function() {
        var d = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
        for (e in Ke) d += "|" + e + "\\b";
        return new RegExp(d + ")", "gi");
      })(), Nn = /hsl[a]?\(/, ar = function(e) {
        var i = e.join(" "), r;
        if (re.lastIndex = 0, re.test(i)) return r = Nn.test(i), e[1] = nr(e[1], r), e[0] = nr(e[0], r, rr(e[1])), true;
      }, ti, Et = (function() {
        var d = Date.now, e = 500, i = 33, r = d(), n = r, a = 1e3 / 240, l = a, u = [], f, _, p, M, C, S, k = function y(z) {
          var D = d() - n, P = z === true, L, I, O, U;
          if ((D > e || D < 0) && (r += D - i), n += D, O = n - r, L = O - l, (L > 0 || P) && (U = ++M.frame, C = O - M.time * 1e3, M.time = O = O / 1e3, l += L + (L >= a ? 4 : a - L), I = 1), P || (f = _(y)), I) for (S = 0; S < u.length; S++) u[S](O, C, U, z);
        };
        return M = { time: 0, frame: 0, tick: function() {
          k(true);
        }, deltaRatio: function(z) {
          return C / (1e3 / (z || 60));
        }, wake: function() {
          Es && (!Di && wt() && (Yt = Di = window, Pi = Yt.document || {}, Ft.gsap = Ct, (Yt.gsapVersions || (Yt.gsapVersions = [])).push(Ct.version), Os(fi || Yt.GreenSockGlobals || !Yt.gsap && Yt || {}), er.forEach(ir)), p = typeof requestAnimationFrame < "u" && requestAnimationFrame, f && M.sleep(), _ = p || function(z) {
            return setTimeout(z, l - M.time * 1e3 + 1 | 0);
          }, ti = 1, k(2));
        }, sleep: function() {
          (p ? cancelAnimationFrame : clearTimeout)(f), ti = 0, _ = Ge;
        }, lagSmoothing: function(z, D) {
          e = z || 1 / 0, i = Math.min(D || 33, e);
        }, fps: function(z) {
          a = 1e3 / (z || 240), l = M.time * 1e3 + a;
        }, add: function(z, D, P) {
          var L = D ? function(I, O, U, N) {
            z(I, O, U, N), M.remove(L);
          } : z;
          return M.remove(z), u[P ? "unshift" : "push"](L), Pe(), L;
        }, remove: function(z, D) {
          ~(D = u.indexOf(z)) && u.splice(D, 1) && S >= D && S--;
        }, _listeners: u }, M;
      })(), Pe = function() {
        return !ti && Et.wake();
      }, H = {}, Wn = /^[\d.\-M][\d.\-,\s]/, Vn = /["']/g, qn = function(e) {
        for (var i = {}, r = e.substr(1, e.length - 3).split(":"), n = r[0], a = 1, l = r.length, u, f, _; a < l; a++) f = r[a], u = a !== l - 1 ? f.lastIndexOf(",") : f.length, _ = f.substr(0, u), i[n] = isNaN(_) ? _.replace(Vn, "").trim() : +_, n = f.substr(u + 1).trim();
        return i;
      }, Yn = function(e) {
        var i = e.indexOf("(") + 1, r = e.indexOf(")"), n = e.indexOf("(", i);
        return e.substring(i, ~n && n < r ? e.indexOf(")", r + 1) : r);
      }, Xn = function(e) {
        var i = (e + "").split("("), r = H[i[0]];
        return r && i.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [qn(i[1])] : Yn(e).split(",").map(Bs)) : H._CE && Wn.test(e) ? H._CE("", e) : r;
      }, or = function(e) {
        return function(i) {
          return 1 - e(1 - i);
        };
      }, hr = function d(e, i) {
        for (var r = e._first, n; r; ) r instanceof _t ? d(r, i) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== i && (r.timeline ? d(r.timeline, i) : (n = r._ease, r._ease = r._yEase, r._yEase = n, r._yoyo = i)), r = r._next;
      }, me = function(e, i) {
        return e && (Y(e) ? e : H[e] || Xn(e)) || i;
      }, ge = function(e, i, r, n) {
        r === void 0 && (r = function(f) {
          return 1 - i(1 - f);
        }), n === void 0 && (n = function(f) {
          return f < 0.5 ? i(f * 2) / 2 : 1 - i((1 - f) * 2) / 2;
        });
        var a = { easeIn: i, easeOut: r, easeInOut: n }, l;
        return Mt(e, function(u) {
          H[u] = Ft[u] = a, H[l = u.toLowerCase()] = r;
          for (var f in a) H[l + (f === "easeIn" ? ".in" : f === "easeOut" ? ".out" : ".inOut")] = H[u + "." + f] = a[f];
        }), a;
      }, lr = function(e) {
        return function(i) {
          return i < 0.5 ? (1 - e(1 - i * 2)) / 2 : 0.5 + e((i - 0.5) * 2) / 2;
        };
      }, Zi = function d(e, i, r) {
        var n = i >= 1 ? i : 1, a = (r || (e ? 0.3 : 0.45)) / (i < 1 ? i : 1), l = a / A * (Math.asin(1 / n) || 0), u = function(p) {
          return p === 1 ? 1 : n * Math.pow(2, -10 * p) * V((p - l) * a) + 1;
        }, f = e === "out" ? u : e === "in" ? function(_) {
          return 1 - u(1 - _);
        } : lr(u);
        return a = A / a, f.config = function(_, p) {
          return d(e, _, p);
        }, f;
      }, ji = function d(e, i) {
        i === void 0 && (i = 1.70158);
        var r = function(l) {
          return l ? --l * l * ((i + 1) * l + i) + 1 : 0;
        }, n = e === "out" ? r : e === "in" ? function(a) {
          return 1 - r(1 - a);
        } : lr(r);
        return n.config = function(a) {
          return d(e, a);
        }, n;
      };
      Mt("Linear,Quad,Cubic,Quart,Quint,Strong", function(d, e) {
        var i = e < 5 ? e + 1 : e;
        ge(d + ",Power" + (i - 1), e ? function(r) {
          return Math.pow(r, i);
        } : function(r) {
          return r;
        }, function(r) {
          return 1 - Math.pow(1 - r, i);
        }, function(r) {
          return r < 0.5 ? Math.pow(r * 2, i) / 2 : 1 - Math.pow((1 - r) * 2, i) / 2;
        });
      }), H.Linear.easeNone = H.none = H.Linear.easeIn, ge("Elastic", Zi("in"), Zi("out"), Zi()), (function(d, e) {
        var i = 1 / e, r = 2 * i, n = 2.5 * i, a = function(u) {
          return u < i ? d * u * u : u < r ? d * Math.pow(u - 1.5 / e, 2) + 0.75 : u < n ? d * (u -= 2.25 / e) * u + 0.9375 : d * Math.pow(u - 2.625 / e, 2) + 0.984375;
        };
        ge("Bounce", function(l) {
          return 1 - a(1 - l);
        }, a);
      })(7.5625, 2.75), ge("Expo", function(d) {
        return Math.pow(2, 10 * (d - 1)) * d + d * d * d * d * d * d * (1 - d);
      }), ge("Circ", function(d) {
        return -(B(1 - d * d) - 1);
      }), ge("Sine", function(d) {
        return d === 1 ? 1 : -G(d * v) + 1;
      }), ge("Back", ji("in"), ji("out"), ji()), H.SteppedEase = H.steps = Ft.SteppedEase = { config: function(e, i) {
        e === void 0 && (e = 1);
        var r = 1 / e, n = e + (i ? 0 : 1), a = i ? 1 : 0, l = 1 - T;
        return function(u) {
          return ((n * Qe(0, l, u) | 0) + a) * r;
        };
      } }, m.ease = H["quad.out"], Mt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(d) {
        return Ui += d + "," + d + "Params,";
      });
      var ur = function(e, i) {
        this.id = E++, e._gsap = this, this.target = e, this.harness = i, this.get = i ? i.get : Ls, this.set = i ? i.getSetter : ts;
      }, ei = (function() {
        function d(i) {
          this.vars = i, this._delay = +i.delay || 0, (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) && (this._rDelay = i.repeatDelay || 0, this._yoyo = !!i.yoyo || !!i.yoyoEase), this._ts = 1, Oe(this, +i.duration, 1, 1), this.data = i.data, g && (this._ctx = g, g.data.push(this)), ti || Et.wake();
        }
        var e = d.prototype;
        return e.delay = function(r) {
          return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
        }, e.duration = function(r) {
          return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
        }, e.totalDuration = function(r) {
          return arguments.length ? (this._dirty = 0, Oe(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
        }, e.totalTime = function(r, n) {
          if (Pe(), !arguments.length) return this._tTime;
          var a = this._dp;
          if (a && a.smoothChildTiming && this._ts) {
            for (bi(this, r), !a._dp || a.parent || qs(a, this); a && a.parent; ) a.parent._time !== a._start + (a._ts >= 0 ? a._tTime / a._ts : (a.totalDuration() - a._tTime) / -a._ts) && a.totalTime(a._tTime, true), a = a.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Xt(this._dp, this, this._start - this._delay);
          }
          return (this._tTime !== r || !this._dur && !n || this._initted && Math.abs(this._zTime) === T || !this._initted && this._dur && r || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), Is(this, r, n)), this;
        }, e.time = function(r, n) {
          return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + Vs(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), n) : this._time;
        }, e.totalProgress = function(r, n) {
          return arguments.length ? this.totalTime(this.totalDuration() * r, n) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
        }, e.progress = function(r, n) {
          return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Vs(this), n) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
        }, e.iteration = function(r, n) {
          var a = this.duration() + this._rDelay;
          return arguments.length ? this.totalTime(this._time + (r - 1) * a, n) : this._repeat ? Ee(this._tTime, a) + 1 : 1;
        }, e.timeScale = function(r, n) {
          if (!arguments.length) return this._rts === -T ? 0 : this._rts;
          if (this._rts === r) return this;
          var a = this.parent && this._ts ? xi(this.parent._time, this) : this._tTime;
          return this._rts = +r || 0, this._ts = this._ps || r === -T ? 0 : this._rts, this.totalTime(Qe(-Math.abs(this._delay), this.totalDuration(), a), n !== false), yi(this), vn(this);
        }, e.paused = function(r) {
          return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Pe(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== T && (this._tTime -= T)))), this) : this._ps;
        }, e.startTime = function(r) {
          if (arguments.length) {
            this._start = at(r);
            var n = this.parent || this._dp;
            return n && (n._sort || !this.parent) && Xt(n, this, this._start - this._delay), this;
          }
          return this._start;
        }, e.endTime = function(r) {
          return this._start + (X(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
        }, e.rawTime = function(r) {
          var n = this.parent || this._dp;
          return n ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? xi(n.rawTime(r), this) : this._tTime : this._tTime;
        }, e.revert = function(r) {
          r === void 0 && (r = Mn);
          var n = b;
          return b = r, Wi(this) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== false && this.kill(), b = n, this;
        }, e.globalTime = function(r) {
          for (var n = this, a = arguments.length ? r : n.rawTime(); n; ) a = n._start + a / (Math.abs(n._ts) || 1), n = n._dp;
          return !this.parent && this._sat ? this._sat.globalTime(r) : a;
        }, e.repeat = function(r) {
          return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, Hs(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
        }, e.repeatDelay = function(r) {
          if (arguments.length) {
            var n = this._time;
            return this._rDelay = r, Hs(this), n ? this.time(n) : this;
          }
          return this._rDelay;
        }, e.yoyo = function(r) {
          return arguments.length ? (this._yoyo = r, this) : this._yoyo;
        }, e.seek = function(r, n) {
          return this.totalTime(Lt(this, r), X(n));
        }, e.restart = function(r, n) {
          return this.play().totalTime(r ? -this._delay : 0, X(n)), this._dur || (this._zTime = -T), this;
        }, e.play = function(r, n) {
          return r != null && this.seek(r, n), this.reversed(false).paused(false);
        }, e.reverse = function(r, n) {
          return r != null && this.seek(r || this.totalDuration(), n), this.reversed(true).paused(false);
        }, e.pause = function(r, n) {
          return r != null && this.seek(r, n), this.paused(true);
        }, e.resume = function() {
          return this.paused(false);
        }, e.reversed = function(r) {
          return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -T : 0)), this) : this._rts < 0;
        }, e.invalidate = function() {
          return this._initted = this._act = 0, this._zTime = -T, this;
        }, e.isActive = function() {
          var r = this.parent || this._dp, n = this._start, a;
          return !!(!r || this._ts && this._initted && r.isActive() && (a = r.rawTime(true)) >= n && a < this.endTime(true) - T);
        }, e.eventCallback = function(r, n, a) {
          var l = this.vars;
          return arguments.length > 1 ? (n ? (l[r] = n, a && (l[r + "Params"] = a), r === "onUpdate" && (this._onUpdate = n)) : delete l[r], this) : l[r];
        }, e.then = function(r) {
          var n = this, a = n._prom;
          return new Promise(function(l) {
            var u = Y(r) ? r : Us, f = function() {
              var p = n.then;
              n.then = null, a && a(), Y(u) && (u = u(n)) && (u.then || u === n) && (n.then = p), l(u), n.then = p;
            };
            n._initted && n.totalProgress() === 1 && n._ts >= 0 || !n._tTime && n._ts < 0 ? f() : n._prom = f;
          });
        }, e.kill = function() {
          $e(this);
        }, d;
      })();
      zt(ei.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: false, parent: null, _initted: false, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -T, _prom: 0, _ps: false, _rts: 1 });
      var _t = (function(d) {
        o(e, d);
        function e(r, n) {
          var a;
          return r === void 0 && (r = {}), a = d.call(this, r) || this, a.labels = {}, a.smoothChildTiming = !!r.smoothChildTiming, a.autoRemoveChildren = !!r.autoRemoveChildren, a._sort = X(r.sortChildren), J && Xt(r.parent || J, h(a), n), r.reversed && a.reverse(), r.paused && a.paused(true), r.scrollTrigger && Ys(h(a), r.scrollTrigger), a;
        }
        var i = e.prototype;
        return i.to = function(n, a, l) {
          return je(0, arguments, this), this;
        }, i.from = function(n, a, l) {
          return je(1, arguments, this), this;
        }, i.fromTo = function(n, a, l, u) {
          return je(2, arguments, this), this;
        }, i.set = function(n, a, l) {
          return a.duration = 0, a.parent = this, Ze(a).repeatDelay || (a.repeat = 0), a.immediateRender = !!a.immediateRender, new lt(n, a, Lt(this, l), 1), this;
        }, i.call = function(n, a, l) {
          return Xt(this, lt.delayedCall(0, n, a), l);
        }, i.staggerTo = function(n, a, l, u, f, _, p) {
          return l.duration = a, l.stagger = l.stagger || u, l.onComplete = _, l.onCompleteParams = p, l.parent = this, new lt(n, l, Lt(this, f)), this;
        }, i.staggerFrom = function(n, a, l, u, f, _, p) {
          return l.runBackwards = 1, Ze(l).immediateRender = X(l.immediateRender), this.staggerTo(n, a, l, u, f, _, p);
        }, i.staggerFromTo = function(n, a, l, u, f, _, p, M) {
          return u.startAt = l, Ze(u).immediateRender = X(u.immediateRender), this.staggerTo(n, a, u, f, _, p, M);
        }, i.render = function(n, a, l) {
          var u = this._time, f = this._dirty ? this.totalDuration() : this._tDur, _ = this._dur, p = n <= 0 ? 0 : at(n), M = this._zTime < 0 != n < 0 && (this._initted || !_), C, S, k, y, z, D, P, L, I, O, U, N;
          if (this !== J && p > f && n >= 0 && (p = f), p !== this._tTime || l || M) {
            if (u !== this._time && _ && (p += this._time - u, n += this._time - u), C = p, I = this._start, L = this._ts, D = !L, M && (_ || (u = this._zTime), (n || !a) && (this._zTime = n)), this._repeat) {
              if (U = this._yoyo, z = _ + this._rDelay, this._repeat < -1 && n < 0) return this.totalTime(z * 100 + n, a, l);
              if (C = at(p % z), p === f ? (y = this._repeat, C = _) : (O = at(p / z), y = ~~O, y && y === O && (C = _, y--), C > _ && (C = _)), O = Ee(this._tTime, z), !u && this._tTime && O !== y && this._tTime - O * z - this._dur <= 0 && (O = y), U && y & 1 && (C = _ - C, N = 1), y !== O && !this._lock) {
                var W = U && O & 1, R = W === (U && y & 1);
                if (y < O && (W = !W), u = W ? 0 : p % _ ? _ : p, this._lock = 1, this.render(u || (N ? 0 : at(y * z)), a, !_)._lock = 0, this._tTime = p, !a && this.parent && At(this, "onRepeat"), this.vars.repeatRefresh && !N && (this.invalidate()._lock = 1, O = y), u && u !== this._time || D !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (_ = this._dur, f = this._tDur, R && (this._lock = 2, u = W ? _ : -1e-4, this.render(u, true), this.vars.repeatRefresh && !N && this.invalidate()), this._lock = 0, !this._ts && !D) return this;
                hr(this, N);
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (P = An(this, at(u), at(C)), P && (p -= C - (C = P._start))), this._tTime = p, this._time = C, this._act = !L, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = n, u = 0), !u && p && _ && !a && !O && (At(this, "onStart"), this._tTime !== p)) return this;
            if (C >= u && n >= 0) for (S = this._first; S; ) {
              if (k = S._next, (S._act || C >= S._start) && S._ts && P !== S) {
                if (S.parent !== this) return this.render(n, a, l);
                if (S.render(S._ts > 0 ? (C - S._start) * S._ts : (S._dirty ? S.totalDuration() : S._tDur) + (C - S._start) * S._ts, a, l), C !== this._time || !this._ts && !D) {
                  P = 0, k && (p += this._zTime = -T);
                  break;
                }
              }
              S = k;
            }
            else {
              S = this._last;
              for (var Z = n < 0 ? n : C; S; ) {
                if (k = S._prev, (S._act || Z <= S._end) && S._ts && P !== S) {
                  if (S.parent !== this) return this.render(n, a, l);
                  if (S.render(S._ts > 0 ? (Z - S._start) * S._ts : (S._dirty ? S.totalDuration() : S._tDur) + (Z - S._start) * S._ts, a, l || b && Wi(S)), C !== this._time || !this._ts && !D) {
                    P = 0, k && (p += this._zTime = Z ? -T : T);
                    break;
                  }
                }
                S = k;
              }
            }
            if (P && !a && (this.pause(), P.render(C >= u ? 0 : -T)._zTime = C >= u ? 1 : -1, this._ts)) return this._start = I, yi(this), this.render(n, a, l);
            this._onUpdate && !a && At(this, "onUpdate", true), (p === f && this._tTime >= this.totalDuration() || !p && u) && (I === this._start || Math.abs(L) !== Math.abs(this._ts)) && (this._lock || ((n || !_) && (p === f && this._ts > 0 || !p && this._ts < 0) && ie(this, 1), !a && !(n < 0 && !u) && (p || u || !f) && (At(this, p === f && n >= 0 ? "onComplete" : "onReverseComplete", true), this._prom && !(p < f && this.timeScale() > 0) && this._prom())));
          }
          return this;
        }, i.add = function(n, a) {
          var l = this;
          if (Q(a) || (a = Lt(this, a, n)), !(n instanceof ei)) {
            if ($(n)) return n.forEach(function(u) {
              return l.add(u, a);
            }), this;
            if (q(n)) return this.addLabel(n, a);
            if (Y(n)) n = lt.delayedCall(0, n);
            else return this;
          }
          return this !== n ? Xt(this, n, a) : this;
        }, i.getChildren = function(n, a, l, u) {
          n === void 0 && (n = true), a === void 0 && (a = true), l === void 0 && (l = true), u === void 0 && (u = -w);
          for (var f = [], _ = this._first; _; ) _._start >= u && (_ instanceof lt ? a && f.push(_) : (l && f.push(_), n && f.push.apply(f, _.getChildren(true, a, l)))), _ = _._next;
          return f;
        }, i.getById = function(n) {
          for (var a = this.getChildren(1, 1, 1), l = a.length; l--; ) if (a[l].vars.id === n) return a[l];
        }, i.remove = function(n) {
          return q(n) ? this.removeLabel(n) : Y(n) ? this.killTweensOf(n) : (n.parent === this && gi(this, n), n === this._recent && (this._recent = this._last), pe(this));
        }, i.totalTime = function(n, a) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = at(Et.time - (this._ts > 0 ? n / this._ts : (this.totalDuration() - n) / -this._ts))), d.prototype.totalTime.call(this, n, a), this._forcing = 0, this) : this._tTime;
        }, i.addLabel = function(n, a) {
          return this.labels[n] = Lt(this, a), this;
        }, i.removeLabel = function(n) {
          return delete this.labels[n], this;
        }, i.addPause = function(n, a, l) {
          var u = lt.delayedCall(0, a || Ge, l);
          return u.data = "isPause", this._hasPause = 1, Xt(this, u, Lt(this, n));
        }, i.removePause = function(n) {
          var a = this._first;
          for (n = Lt(this, n); a; ) a._start === n && a.data === "isPause" && ie(a), a = a._next;
        }, i.killTweensOf = function(n, a, l) {
          for (var u = this.getTweensOf(n, l), f = u.length; f--; ) ne !== u[f] && u[f].kill(n, a);
          return this;
        }, i.getTweensOf = function(n, a) {
          for (var l = [], u = It(n), f = this._first, _ = Q(a), p; f; ) f instanceof lt ? Tn(f._targets, u) && (_ ? (!ne || f._initted && f._ts) && f.globalTime(0) <= a && f.globalTime(f.totalDuration()) > a : !a || f.isActive()) && l.push(f) : (p = f.getTweensOf(u, a)).length && l.push.apply(l, p), f = f._next;
          return l;
        }, i.tweenTo = function(n, a) {
          a = a || {};
          var l = this, u = Lt(l, n), f = a, _ = f.startAt, p = f.onStart, M = f.onStartParams, C = f.immediateRender, S, k = lt.to(l, zt({ ease: a.ease || "none", lazy: false, immediateRender: false, time: u, overwrite: "auto", duration: a.duration || Math.abs((u - (_ && "time" in _ ? _.time : l._time)) / l.timeScale()) || T, onStart: function() {
            if (l.pause(), !S) {
              var z = a.duration || Math.abs((u - (_ && "time" in _ ? _.time : l._time)) / l.timeScale());
              k._dur !== z && Oe(k, z, 0, 1).render(k._time, true, true), S = 1;
            }
            p && p.apply(k, M || []);
          } }, a));
          return C ? k.render(0) : k;
        }, i.tweenFromTo = function(n, a, l) {
          return this.tweenTo(a, zt({ startAt: { time: Lt(this, n) } }, l));
        }, i.recent = function() {
          return this._recent;
        }, i.nextLabel = function(n) {
          return n === void 0 && (n = this._time), tr(this, Lt(this, n));
        }, i.previousLabel = function(n) {
          return n === void 0 && (n = this._time), tr(this, Lt(this, n), 1);
        }, i.currentLabel = function(n) {
          return arguments.length ? this.seek(n, true) : this.previousLabel(this._time + T);
        }, i.shiftChildren = function(n, a, l) {
          l === void 0 && (l = 0);
          var u = this._first, f = this.labels, _;
          for (n = at(n); u; ) u._start >= l && (u._start += n, u._end += n), u = u._next;
          if (a) for (_ in f) f[_] >= l && (f[_] += n);
          return pe(this);
        }, i.invalidate = function(n) {
          var a = this._first;
          for (this._lock = 0; a; ) a.invalidate(n), a = a._next;
          return d.prototype.invalidate.call(this, n);
        }, i.clear = function(n) {
          n === void 0 && (n = true);
          for (var a = this._first, l; a; ) l = a._next, this.remove(a), a = l;
          return this._dp && (this._time = this._tTime = this._pTime = 0), n && (this.labels = {}), pe(this);
        }, i.totalDuration = function(n) {
          var a = 0, l = this, u = l._last, f = w, _, p, M;
          if (arguments.length) return l.timeScale((l._repeat < 0 ? l.duration() : l.totalDuration()) / (l.reversed() ? -n : n));
          if (l._dirty) {
            for (M = l.parent; u; ) _ = u._prev, u._dirty && u.totalDuration(), p = u._start, p > f && l._sort && u._ts && !l._lock ? (l._lock = 1, Xt(l, u, p - u._delay, 1)._lock = 0) : f = p, p < 0 && u._ts && (a -= p, (!M && !l._dp || M && M.smoothChildTiming) && (l._start += at(p / l._ts), l._time -= p, l._tTime -= p), l.shiftChildren(-p, false, -1 / 0), f = 0), u._end > a && u._ts && (a = u._end), u = _;
            Oe(l, l === J && l._time > a ? l._time : a, 1, 1), l._dirty = 0;
          }
          return l._tDur;
        }, e.updateRoot = function(n) {
          if (J._ts && (Is(J, xi(n, J)), Ps = Et.frame), Et.frame >= Rs) {
            Rs += c.autoSleep || 120;
            var a = J._first;
            if ((!a || !a._ts) && c.autoSleep && Et._listeners.length < 2) {
              for (; a && !a._ts; ) a = a._next;
              a || Et.sleep();
            }
          }
        }, e;
      })(ei);
      zt(_t.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var Hn = function(e, i, r, n, a, l, u) {
        var f = new Tt(this._pt, e, i, 0, 1, mr, null, a), _ = 0, p = 0, M, C, S, k, y, z, D, P;
        for (f.b = r, f.e = n, r += "", n += "", (D = ~n.indexOf("random(")) && (n = Je(n)), l && (P = [r, n], l(P, e, i), r = P[0], n = P[1]), C = r.match(te) || []; M = te.exec(n); ) k = M[0], y = n.substring(_, M.index), S ? S = (S + 1) % 5 : y.substr(-5) === "rgba(" && (S = 1), k !== C[p++] && (z = parseFloat(C[p - 1]) || 0, f._pt = { _next: f._pt, p: y || p === 1 ? y : ",", s: z, c: k.charAt(1) === "=" ? ze(z, k) - z : parseFloat(k) - z, m: S && S < 4 ? Math.round : 0 }, _ = te.lastIndex);
        return f.c = _ < n.length ? n.substring(_, n.length) : "", f.fp = u, (de.test(n) || D) && (f.e = 0), this._pt = f, f;
      }, Qi = function(e, i, r, n, a, l, u, f, _, p) {
        Y(n) && (n = n(a || 0, e, l));
        var M = e[i], C = r !== "get" ? r : Y(M) ? _ ? e[i.indexOf("set") || !Y(e["get" + i.substr(3)]) ? i : "get" + i.substr(3)](_) : e[i]() : M, S = Y(M) ? _ ? Jn : _r : Ki, k;
        if (q(n) && (~n.indexOf("random(") && (n = Je(n)), n.charAt(1) === "=" && (k = ze(C, n) + (mt(C) || 0), (k || k === 0) && (n = k))), !p || C !== n || Ji) return !isNaN(C * n) && n !== "" ? (k = new Tt(this._pt, e, i, +C || 0, n - (C || 0), typeof M == "boolean" ? Kn : pr, 0, S), _ && (k.fp = _), u && k.modifier(u, this, e), this._pt = k) : (!M && !(i in e) && Ri(i, n), Hn.call(this, e, i, C, n, S, f || c.stringFilter, _));
      }, Gn = function(e, i, r, n, a) {
        if (Y(e) && (e = ii(e, a, i, r, n)), !j(e) || e.style && e.nodeType || $(e) || vt(e)) return q(e) ? ii(e, a, i, r, n) : e;
        var l = {}, u;
        for (u in e) l[u] = ii(e[u], a, i, r, n);
        return l;
      }, cr = function(e, i, r, n, a, l) {
        var u, f, _, p;
        if (kt[e] && (u = new kt[e]()).init(a, u.rawVars ? i[e] : Gn(i[e], n, a, l, r), r, n, l) !== false && (r._pt = f = new Tt(r._pt, a, e, 0, 1, u.render, u, 0, u.priority), r !== De)) for (_ = r._ptLookup[r._targets.indexOf(a)], p = u._props.length; p--; ) _[u._props[p]] = f;
        return u;
      }, ne, Ji, $i = function d(e, i, r) {
        var n = e.vars, a = n.ease, l = n.startAt, u = n.immediateRender, f = n.lazy, _ = n.onUpdate, p = n.runBackwards, M = n.yoyoEase, C = n.keyframes, S = n.autoRevert, k = e._dur, y = e._startAt, z = e._targets, D = e.parent, P = D && D.data === "nested" ? D.vars.targets : z, L = e._overwrite === "auto" && !x, I = e.timeline, O, U, N, W, R, Z, nt, tt, et, pt, ct, ut, ft;
        if (I && (!C || !a) && (a = "none"), e._ease = me(a, m.ease), e._yEase = M ? or(me(M === true ? a : M, m.ease)) : 0, M && e._yoyo && !e._repeat && (M = e._yEase, e._yEase = e._ease, e._ease = M), e._from = !I && !!n.runBackwards, !I || C && !n.stagger) {
          if (tt = z[0] ? _e(z[0]).harness : 0, ut = tt && n[tt.prop], O = mi(n, Li), y && (y._zTime < 0 && y.progress(1), i < 0 && p && u && !S ? y.render(-1, true) : y.revert(p && k ? di : wn), y._lazy = 0), l) {
            if (ie(e._startAt = lt.set(z, zt({ data: "isStart", overwrite: false, parent: D, immediateRender: true, lazy: !y && X(f), startAt: null, delay: 0, onUpdate: _ && function() {
              return At(e, "onUpdate");
            }, stagger: 0 }, l))), e._startAt._dp = 0, e._startAt._sat = e, i < 0 && (b || !u && !S) && e._startAt.revert(di), u && k && i <= 0 && r <= 0) {
              i && (e._zTime = i);
              return;
            }
          } else if (p && k && !y) {
            if (i && (u = false), N = zt({ overwrite: false, data: "isFromStart", lazy: u && !y && X(f), immediateRender: u, stagger: 0, parent: D }, O), ut && (N[tt.prop] = ut), ie(e._startAt = lt.set(z, N)), e._startAt._dp = 0, e._startAt._sat = e, i < 0 && (b ? e._startAt.revert(di) : e._startAt.render(-1, true)), e._zTime = i, !u) d(e._startAt, T, T);
            else if (!i) return;
          }
          for (e._pt = e._ptCache = 0, f = k && X(f) || f && !k, U = 0; U < z.length; U++) {
            if (R = z[U], nt = R._gsap || Ni(z)[U]._gsap, e._ptLookup[U] = pt = {}, Ii[nt.id] && ee.length && pi(), ct = P === z ? U : P.indexOf(R), tt && (et = new tt()).init(R, ut || O, e, ct, P) !== false && (e._pt = W = new Tt(e._pt, R, et.name, 0, 1, et.render, et, 0, et.priority), et._props.forEach(function(Nt) {
              pt[Nt] = W;
            }), et.priority && (Z = 1)), !tt || ut) for (N in O) kt[N] && (et = cr(N, O, e, ct, R, P)) ? et.priority && (Z = 1) : pt[N] = W = Qi.call(e, R, N, "get", O[N], ct, P, 0, n.stringFilter);
            e._op && e._op[U] && e.kill(R, e._op[U]), L && e._pt && (ne = e, J.killTweensOf(R, pt, e.globalTime(i)), ft = !e.parent, ne = 0), e._pt && f && (Ii[nt.id] = 1);
          }
          Z && gr(e), e._onInit && e._onInit(e);
        }
        e._onUpdate = _, e._initted = (!e._op || e._pt) && !ft, C && i <= 0 && I.render(w, true, true);
      }, Zn = function(e, i, r, n, a, l, u, f) {
        var _ = (e._pt && e._ptCache || (e._ptCache = {}))[i], p, M, C, S;
        if (!_) for (_ = e._ptCache[i] = [], C = e._ptLookup, S = e._targets.length; S--; ) {
          if (p = C[S][i], p && p.d && p.d._pt) for (p = p.d._pt; p && p.p !== i && p.fp !== i; ) p = p._next;
          if (!p) return Ji = 1, e.vars[i] = "+=0", $i(e, u), Ji = 0, f ? He(i + " not eligible for reset") : 1;
          _.push(p);
        }
        for (S = _.length; S--; ) M = _[S], p = M._pt || M, p.s = (n || n === 0) && !a ? n : p.s + (n || 0) + l * p.c, p.c = r - p.s, M.e && (M.e = ht(r) + mt(M.e)), M.b && (M.b = p.s + mt(M.b));
      }, jn = function(e, i) {
        var r = e[0] ? _e(e[0]).harness : 0, n = r && r.aliases, a, l, u, f;
        if (!n) return i;
        a = Ae({}, i);
        for (l in n) if (l in a) for (f = n[l].split(","), u = f.length; u--; ) a[f[u]] = a[l];
        return a;
      }, Qn = function(e, i, r, n) {
        var a = i.ease || n || "power1.inOut", l, u;
        if ($(i)) u = r[e] || (r[e] = []), i.forEach(function(f, _) {
          return u.push({ t: _ / (i.length - 1) * 100, v: f, e: a });
        });
        else for (l in i) u = r[l] || (r[l] = []), l === "ease" || u.push({ t: parseFloat(e), v: i[l], e: a });
      }, ii = function(e, i, r, n, a) {
        return Y(e) ? e.call(i, r, n, a) : q(e) && ~e.indexOf("random(") ? Je(e) : e;
      }, fr = Ui + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", dr = {};
      Mt(fr + ",id,stagger,delay,duration,paused,scrollTrigger", function(d) {
        return dr[d] = 1;
      });
      var lt = (function(d) {
        o(e, d);
        function e(r, n, a, l) {
          var u;
          typeof n == "number" && (a.duration = n, n = a, a = null), u = d.call(this, l ? n : Ze(n)) || this;
          var f = u.vars, _ = f.duration, p = f.delay, M = f.immediateRender, C = f.stagger, S = f.overwrite, k = f.keyframes, y = f.defaults, z = f.scrollTrigger, D = f.yoyoEase, P = n.parent || J, L = ($(r) || vt(r) ? Q(r[0]) : "length" in n) ? [r] : It(r), I, O, U, N, W, R, Z, nt;
          if (u._targets = L.length ? Ni(L) : He("GSAP target " + r + " not found. https://gsap.com", !c.nullTargetWarn) || [], u._ptLookup = [], u._overwrite = S, k || C || yt(_) || yt(p)) {
            if (n = u.vars, I = u.timeline = new _t({ data: "nested", defaults: y || {}, targets: P && P.data === "nested" ? P.vars.targets : L }), I.kill(), I.parent = I._dp = h(u), I._start = 0, C || yt(_) || yt(p)) {
              if (N = L.length, Z = C && js(C), j(C)) for (W in C) ~fr.indexOf(W) && (nt || (nt = {}), nt[W] = C[W]);
              for (O = 0; O < N; O++) U = mi(n, dr), U.stagger = 0, D && (U.yoyoEase = D), nt && Ae(U, nt), R = L[O], U.duration = +ii(_, h(u), O, R, L), U.delay = (+ii(p, h(u), O, R, L) || 0) - u._delay, !C && N === 1 && U.delay && (u._delay = p = U.delay, u._start += p, U.delay = 0), I.to(R, U, Z ? Z(O, R, L) : 0), I._ease = H.none;
              I.duration() ? _ = p = 0 : u.timeline = 0;
            } else if (k) {
              Ze(zt(I.vars.defaults, { ease: "none" })), I._ease = me(k.ease || n.ease || "none");
              var tt = 0, et, pt, ct;
              if ($(k)) k.forEach(function(ut) {
                return I.to(L, ut, ">");
              }), I.duration();
              else {
                U = {};
                for (W in k) W === "ease" || W === "easeEach" || Qn(W, k[W], U, k.easeEach);
                for (W in U) for (et = U[W].sort(function(ut, ft) {
                  return ut.t - ft.t;
                }), tt = 0, O = 0; O < et.length; O++) pt = et[O], ct = { ease: pt.e, duration: (pt.t - (O ? et[O - 1].t : 0)) / 100 * _ }, ct[W] = pt.v, I.to(L, ct, tt), tt += ct.duration;
                I.duration() < _ && I.to({}, { duration: _ - I.duration() });
              }
            }
            _ || u.duration(_ = I.duration());
          } else u.timeline = 0;
          return S === true && !x && (ne = h(u), J.killTweensOf(L), ne = 0), Xt(P, h(u), a), n.reversed && u.reverse(), n.paused && u.paused(true), (M || !_ && !k && u._start === at(P._time) && X(M) && Fn(h(u)) && P.data !== "nested") && (u._tTime = -T, u.render(Math.max(0, -p) || 0)), z && Ys(h(u), z), u;
        }
        var i = e.prototype;
        return i.render = function(n, a, l) {
          var u = this._time, f = this._tDur, _ = this._dur, p = n < 0, M = n > f - T && !p ? f : n < T ? 0 : n, C, S, k, y, z, D, P, L, I;
          if (!_) zn(this, n, a, l);
          else if (M !== this._tTime || !n || l || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== p || this._lazy) {
            if (C = M, L = this.timeline, this._repeat) {
              if (y = _ + this._rDelay, this._repeat < -1 && p) return this.totalTime(y * 100 + n, a, l);
              if (C = at(M % y), M === f ? (k = this._repeat, C = _) : (z = at(M / y), k = ~~z, k && k === z ? (C = _, k--) : C > _ && (C = _)), D = this._yoyo && k & 1, D && (I = this._yEase, C = _ - C), z = Ee(this._tTime, y), C === u && !l && this._initted && k === z) return this._tTime = M, this;
              k !== z && (L && this._yEase && hr(L, D), this.vars.repeatRefresh && !D && !this._lock && C !== y && this._initted && (this._lock = l = 1, this.render(at(y * k), true).invalidate()._lock = 0));
            }
            if (!this._initted) {
              if (Xs(this, p ? n : C, l, a, M)) return this._tTime = 0, this;
              if (u !== this._time && !(l && this.vars.repeatRefresh && k !== z)) return this;
              if (_ !== this._dur) return this.render(n, a, l);
            }
            if (this._tTime = M, this._time = C, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = P = (I || this._ease)(C / _), this._from && (this.ratio = P = 1 - P), !u && M && !a && !z && (At(this, "onStart"), this._tTime !== M)) return this;
            for (S = this._pt; S; ) S.r(P, S.d), S = S._next;
            L && L.render(n < 0 ? n : L._dur * L._ease(C / this._dur), a, l) || this._startAt && (this._zTime = n), this._onUpdate && !a && (p && Vi(this, n, a, l), At(this, "onUpdate")), this._repeat && k !== z && this.vars.onRepeat && !a && this.parent && At(this, "onRepeat"), (M === this._tDur || !M) && this._tTime === M && (p && !this._onUpdate && Vi(this, n, true, true), (n || !_) && (M === this._tDur && this._ts > 0 || !M && this._ts < 0) && ie(this, 1), !a && !(p && !u) && (M || u || D) && (At(this, M === f ? "onComplete" : "onReverseComplete", true), this._prom && !(M < f && this.timeScale() > 0) && this._prom()));
          }
          return this;
        }, i.targets = function() {
          return this._targets;
        }, i.invalidate = function(n) {
          return (!n || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(n), d.prototype.invalidate.call(this, n);
        }, i.resetTo = function(n, a, l, u, f) {
          ti || Et.wake(), this._ts || this.play();
          var _ = Math.min(this._dur, (this._dp._time - this._start) * this._ts), p;
          return this._initted || $i(this, _), p = this._ease(_ / this._dur), Zn(this, n, a, l, u, p, _, f) ? this.resetTo(n, a, l, u, 1) : (bi(this, 0), this.parent || Ws(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
        }, i.kill = function(n, a) {
          if (a === void 0 && (a = "all"), !n && (!a || a === "all")) return this._lazy = this._pt = 0, this.parent ? $e(this) : this.scrollTrigger && this.scrollTrigger.kill(!!b), this;
          if (this.timeline) {
            var l = this.timeline.totalDuration();
            return this.timeline.killTweensOf(n, a, ne && ne.vars.overwrite !== true)._first || $e(this), this.parent && l !== this.timeline.totalDuration() && Oe(this, this._dur * this.timeline._tDur / l, 0, 1), this;
          }
          var u = this._targets, f = n ? It(n) : u, _ = this._ptLookup, p = this._pt, M, C, S, k, y, z, D;
          if ((!a || a === "all") && Sn(u, f)) return a === "all" && (this._pt = 0), $e(this);
          for (M = this._op = this._op || [], a !== "all" && (q(a) && (y = {}, Mt(a, function(P) {
            return y[P] = 1;
          }), a = y), a = jn(u, a)), D = u.length; D--; ) if (~f.indexOf(u[D])) {
            C = _[D], a === "all" ? (M[D] = a, k = C, S = {}) : (S = M[D] = M[D] || {}, k = a);
            for (y in k) z = C && C[y], z && ((!("kill" in z.d) || z.d.kill(y) === true) && gi(this, z, "_pt"), delete C[y]), S !== "all" && (S[y] = 1);
          }
          return this._initted && !this._pt && p && $e(this), this;
        }, e.to = function(n, a) {
          return new e(n, a, arguments[2]);
        }, e.from = function(n, a) {
          return je(1, arguments);
        }, e.delayedCall = function(n, a, l, u) {
          return new e(a, 0, { immediateRender: false, lazy: false, overwrite: false, delay: n, onComplete: a, onReverseComplete: a, onCompleteParams: l, onReverseCompleteParams: l, callbackScope: u });
        }, e.fromTo = function(n, a, l) {
          return je(2, arguments);
        }, e.set = function(n, a) {
          return a.duration = 0, a.repeatDelay || (a.repeat = 0), new e(n, a);
        }, e.killTweensOf = function(n, a, l) {
          return J.killTweensOf(n, a, l);
        }, e;
      })(ei);
      zt(lt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }), Mt("staggerTo,staggerFrom,staggerFromTo", function(d) {
        lt[d] = function() {
          var e = new _t(), i = Yi.call(arguments, 0);
          return i.splice(d === "staggerFromTo" ? 5 : 4, 0, 0), e[d].apply(e, i);
        };
      });
      var Ki = function(e, i, r) {
        return e[i] = r;
      }, _r = function(e, i, r) {
        return e[i](r);
      }, Jn = function(e, i, r, n) {
        return e[i](n.fp, r);
      }, $n = function(e, i, r) {
        return e.setAttribute(i, r);
      }, ts = function(e, i) {
        return Y(e[i]) ? _r : st(e[i]) && e.setAttribute ? $n : Ki;
      }, pr = function(e, i) {
        return i.set(i.t, i.p, Math.round((i.s + i.c * e) * 1e6) / 1e6, i);
      }, Kn = function(e, i) {
        return i.set(i.t, i.p, !!(i.s + i.c * e), i);
      }, mr = function(e, i) {
        var r = i._pt, n = "";
        if (!e && i.b) n = i.b;
        else if (e === 1 && i.e) n = i.e;
        else {
          for (; r; ) n = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + n, r = r._next;
          n += i.c;
        }
        i.set(i.t, i.p, n, i);
      }, es = function(e, i) {
        for (var r = i._pt; r; ) r.r(e, r.d), r = r._next;
      }, ta = function(e, i, r, n) {
        for (var a = this._pt, l; a; ) l = a._next, a.p === n && a.modifier(e, i, r), a = l;
      }, ea = function(e) {
        for (var i = this._pt, r, n; i; ) n = i._next, i.p === e && !i.op || i.op === e ? gi(this, i, "_pt") : i.dep || (r = 1), i = n;
        return !r;
      }, ia = function(e, i, r, n) {
        n.mSet(e, i, n.m.call(n.tween, r, n.mt), n);
      }, gr = function(e) {
        for (var i = e._pt, r, n, a, l; i; ) {
          for (r = i._next, n = a; n && n.pr > i.pr; ) n = n._next;
          (i._prev = n ? n._prev : l) ? i._prev._next = i : a = i, (i._next = n) ? n._prev = i : l = i, i = r;
        }
        e._pt = a;
      }, Tt = (function() {
        function d(i, r, n, a, l, u, f, _, p) {
          this.t = r, this.s = a, this.c = l, this.p = n, this.r = u || pr, this.d = f || this, this.set = _ || Ki, this.pr = p || 0, this._next = i, i && (i._prev = this);
        }
        var e = d.prototype;
        return e.modifier = function(r, n, a) {
          this.mSet = this.mSet || this.set, this.set = ia, this.m = r, this.mt = a, this.tween = n;
        }, d;
      })();
      Mt(Ui + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(d) {
        return Li[d] = 1;
      }), Ft.TweenMax = Ft.TweenLite = lt, Ft.TimelineLite = Ft.TimelineMax = _t, J = new _t({ sortChildren: false, defaults: m, autoRemoveChildren: true, id: "root", smoothChildTiming: true }), c.stringFilter = ar;
      var xe = [], wi = {}, sa = [], xr = 0, ra = 0, is = function(e) {
        return (wi[e] || sa).map(function(i) {
          return i();
        });
      }, ss = function() {
        var e = Date.now(), i = [];
        e - xr > 2 && (is("matchMediaInit"), xe.forEach(function(r) {
          var n = r.queries, a = r.conditions, l, u, f, _;
          for (u in n) l = Yt.matchMedia(n[u]).matches, l && (f = 1), l !== a[u] && (a[u] = l, _ = 1);
          _ && (r.revert(), f && i.push(r));
        }), is("matchMediaRevert"), i.forEach(function(r) {
          return r.onMatch(r, function(n) {
            return r.add(null, n);
          });
        }), xr = e, is("matchMedia"));
      }, yr = (function() {
        function d(i, r) {
          this.selector = r && Xi(r), this.data = [], this._r = [], this.isReverted = false, this.id = ra++, i && this.add(i);
        }
        var e = d.prototype;
        return e.add = function(r, n, a) {
          Y(r) && (a = n, n = r, r = Y);
          var l = this, u = function() {
            var _ = g, p = l.selector, M;
            return _ && _ !== l && _.data.push(l), a && (l.selector = Xi(a)), g = l, M = n.apply(l, arguments), Y(M) && l._r.push(M), g = _, l.selector = p, l.isReverted = false, M;
          };
          return l.last = u, r === Y ? u(l, function(f) {
            return l.add(null, f);
          }) : r ? l[r] = u : u;
        }, e.ignore = function(r) {
          var n = g;
          g = null, r(this), g = n;
        }, e.getTweens = function() {
          var r = [];
          return this.data.forEach(function(n) {
            return n instanceof d ? r.push.apply(r, n.getTweens()) : n instanceof lt && !(n.parent && n.parent.data === "nested") && r.push(n);
          }), r;
        }, e.clear = function() {
          this._r.length = this.data.length = 0;
        }, e.kill = function(r, n) {
          var a = this;
          if (r ? (function() {
            for (var u = a.getTweens(), f = a.data.length, _; f--; ) _ = a.data[f], _.data === "isFlip" && (_.revert(), _.getChildren(true, true, false).forEach(function(p) {
              return u.splice(u.indexOf(p), 1);
            }));
            for (u.map(function(p) {
              return { g: p._dur || p._delay || p._sat && !p._sat.vars.immediateRender ? p.globalTime(0) : -1 / 0, t: p };
            }).sort(function(p, M) {
              return M.g - p.g || -1 / 0;
            }).forEach(function(p) {
              return p.t.revert(r);
            }), f = a.data.length; f--; ) _ = a.data[f], _ instanceof _t ? _.data !== "nested" && (_.scrollTrigger && _.scrollTrigger.revert(), _.kill()) : !(_ instanceof lt) && _.revert && _.revert(r);
            a._r.forEach(function(p) {
              return p(r, a);
            }), a.isReverted = true;
          })() : this.data.forEach(function(u) {
            return u.kill && u.kill();
          }), this.clear(), n) for (var l = xe.length; l--; ) xe[l].id === this.id && xe.splice(l, 1);
        }, e.revert = function(r) {
          this.kill(r || {});
        }, d;
      })(), na = (function() {
        function d(i) {
          this.contexts = [], this.scope = i, g && g.data.push(this);
        }
        var e = d.prototype;
        return e.add = function(r, n, a) {
          j(r) || (r = { matches: r });
          var l = new yr(0, a || this.scope), u = l.conditions = {}, f, _, p;
          g && !l.selector && (l.selector = g.selector), this.contexts.push(l), n = l.add("onMatch", n), l.queries = r;
          for (_ in r) _ === "all" ? p = 1 : (f = Yt.matchMedia(r[_]), f && (xe.indexOf(l) < 0 && xe.push(l), (u[_] = f.matches) && (p = 1), f.addListener ? f.addListener(ss) : f.addEventListener("change", ss)));
          return p && n(l, function(M) {
            return l.add(null, M);
          }), this;
        }, e.revert = function(r) {
          this.kill(r || {});
        }, e.kill = function(r) {
          this.contexts.forEach(function(n) {
            return n.kill(r, true);
          });
        }, d;
      })(), Mi = { registerPlugin: function() {
        for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++) i[r] = arguments[r];
        i.forEach(function(n) {
          return ir(n);
        });
      }, timeline: function(e) {
        return new _t(e);
      }, getTweensOf: function(e, i) {
        return J.getTweensOf(e, i);
      }, getProperty: function(e, i, r, n) {
        q(e) && (e = It(e)[0]);
        var a = _e(e || {}).get, l = r ? Us : Bs;
        return r === "native" && (r = ""), e && (i ? l((kt[i] && kt[i].get || a)(e, i, r, n)) : function(u, f, _) {
          return l((kt[u] && kt[u].get || a)(e, u, f, _));
        });
      }, quickSetter: function(e, i, r) {
        if (e = It(e), e.length > 1) {
          var n = e.map(function(p) {
            return Ct.quickSetter(p, i, r);
          }), a = n.length;
          return function(p) {
            for (var M = a; M--; ) n[M](p);
          };
        }
        e = e[0] || {};
        var l = kt[i], u = _e(e), f = u.harness && (u.harness.aliases || {})[i] || i, _ = l ? function(p) {
          var M = new l();
          De._pt = 0, M.init(e, r ? p + r : p, De, 0, [e]), M.render(1, M), De._pt && es(1, De);
        } : u.set(e, f);
        return l ? _ : function(p) {
          return _(e, f, r ? p + r : p, u, 1);
        };
      }, quickTo: function(e, i, r) {
        var n, a = Ct.to(e, zt((n = {}, n[i] = "+=0.1", n.paused = true, n.stagger = 0, n), r || {})), l = function(f, _, p) {
          return a.resetTo(i, f, _, p);
        };
        return l.tween = a, l;
      }, isTweening: function(e) {
        return J.getTweensOf(e, true).length > 0;
      }, defaults: function(e) {
        return e && e.ease && (e.ease = me(e.ease, m.ease)), Ns(m, e || {});
      }, config: function(e) {
        return Ns(c, e || {});
      }, registerEffect: function(e) {
        var i = e.name, r = e.effect, n = e.plugins, a = e.defaults, l = e.extendTimeline;
        (n || "").split(",").forEach(function(u) {
          return u && !kt[u] && !Ft[u] && He(i + " effect requires " + u + " plugin.");
        }), Bi[i] = function(u, f, _) {
          return r(It(u), zt(f || {}, a), _);
        }, l && (_t.prototype[i] = function(u, f, _) {
          return this.add(Bi[i](u, j(f) ? f : (_ = f) && {}, this), _);
        });
      }, registerEase: function(e, i) {
        H[e] = me(i);
      }, parseEase: function(e, i) {
        return arguments.length ? me(e, i) : H;
      }, getById: function(e) {
        return J.getById(e);
      }, exportRoot: function(e, i) {
        e === void 0 && (e = {});
        var r = new _t(e), n, a;
        for (r.smoothChildTiming = X(e.smoothChildTiming), J.remove(r), r._dp = 0, r._time = r._tTime = J._time, n = J._first; n; ) a = n._next, (i || !(!n._dur && n instanceof lt && n.vars.onComplete === n._targets[0])) && Xt(r, n, n._start - n._delay), n = a;
        return Xt(J, r, 0), r;
      }, context: function(e, i) {
        return e ? new yr(e, i) : g;
      }, matchMedia: function(e) {
        return new na(e);
      }, matchMediaRefresh: function() {
        return xe.forEach(function(e) {
          var i = e.conditions, r, n;
          for (n in i) i[n] && (i[n] = false, r = 1);
          r && e.revert();
        }) || ss();
      }, addEventListener: function(e, i) {
        var r = wi[e] || (wi[e] = []);
        ~r.indexOf(i) || r.push(i);
      }, removeEventListener: function(e, i) {
        var r = wi[e], n = r && r.indexOf(i);
        n >= 0 && r.splice(n, 1);
      }, utils: { wrap: In, wrapYoyo: Bn, distribute: js, random: Js, snap: Qs, normalize: Ln, getUnit: mt, clamp: On, splitColor: sr, toArray: It, selector: Xi, mapRange: Ks, pipe: Pn, unitize: Rn, interpolate: Un, shuffle: Zs }, install: Os, effects: Bi, ticker: Et, updateRoot: _t.updateRoot, plugins: kt, globalTimeline: J, core: { PropTween: Tt, globals: Ds, Tween: lt, Timeline: _t, Animation: ei, getCache: _e, _removeLinkedListItem: gi, reverting: function() {
        return b;
      }, context: function(e) {
        return e && g && (g.data.push(e), e._ctx = g), g;
      }, suppressOverwrites: function(e) {
        return x = e;
      } } };
      Mt("to,from,fromTo,delayedCall,set,killTweensOf", function(d) {
        return Mi[d] = lt[d];
      }), Et.add(_t.updateRoot), De = Mi.to({}, { duration: 0 });
      var aa = function(e, i) {
        for (var r = e._pt; r && r.p !== i && r.op !== i && r.fp !== i; ) r = r._next;
        return r;
      }, oa = function(e, i) {
        var r = e._targets, n, a, l;
        for (n in i) for (a = r.length; a--; ) l = e._ptLookup[a][n], l && (l = l.d) && (l._pt && (l = aa(l, n)), l && l.modifier && l.modifier(i[n], e, r[a], n));
      }, rs = function(e, i) {
        return { name: e, headless: 1, rawVars: 1, init: function(n, a, l) {
          l._onInit = function(u) {
            var f, _;
            if (q(a) && (f = {}, Mt(a, function(p) {
              return f[p] = 1;
            }), a = f), i) {
              f = {};
              for (_ in a) f[_] = i(a[_]);
              a = f;
            }
            oa(u, a);
          };
        } };
      }, Ct = Mi.registerPlugin({ name: "attr", init: function(e, i, r, n, a) {
        var l, u, f;
        this.tween = r;
        for (l in i) f = e.getAttribute(l) || "", u = this.add(e, "setAttribute", (f || 0) + "", i[l], n, a, 0, 0, l), u.op = l, u.b = f, this._props.push(l);
      }, render: function(e, i) {
        for (var r = i._pt; r; ) b ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next;
      } }, { name: "endArray", headless: 1, init: function(e, i) {
        for (var r = i.length; r--; ) this.add(e, r, e[r] || 0, i[r], 0, 0, 0, 0, 0, 1);
      } }, rs("roundProps", Hi), rs("modifiers"), rs("snap", Qs)) || Mi;
      lt.version = _t.version = Ct.version = "3.14.2", Es = 1, wt() && Pe();
      var ha = H.Power0, la = H.Power1, ua = H.Power2, ca = H.Power3, fa = H.Power4, da = H.Linear, _a = H.Quad, pa = H.Cubic, ma = H.Quart, ga = H.Quint, xa = H.Strong, ya = H.Elastic, ba = H.Back, wa = H.SteppedEase, Ma = H.Bounce, Ta = H.Sine, Ca = H.Expo, Sa = H.Circ, br, ae, Re, ns, ye, wr, as, va = function() {
        return typeof window < "u";
      }, Gt = {}, be = 180 / Math.PI, Le = Math.PI / 180, Ie = Math.atan2, Mr = 1e8, os = /([A-Z])/g, Fa = /(left|right|width|margin|padding|x)/i, ka = /[\s,\(]\S/, Ht = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" }, hs = function(e, i) {
        return i.set(i.t, i.p, Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u, i);
      }, za = function(e, i) {
        return i.set(i.t, i.p, e === 1 ? i.e : Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u, i);
      }, Aa = function(e, i) {
        return i.set(i.t, i.p, e ? Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u : i.b, i);
      }, Ea = function(e, i) {
        return i.set(i.t, i.p, e === 1 ? i.e : e ? Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u : i.b, i);
      }, Oa = function(e, i) {
        var r = i.s + i.c * e;
        i.set(i.t, i.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + i.u, i);
      }, Tr = function(e, i) {
        return i.set(i.t, i.p, e ? i.e : i.b, i);
      }, Cr = function(e, i) {
        return i.set(i.t, i.p, e !== 1 ? i.b : i.e, i);
      }, Da = function(e, i, r) {
        return e.style[i] = r;
      }, Pa = function(e, i, r) {
        return e.style.setProperty(i, r);
      }, Ra = function(e, i, r) {
        return e._gsap[i] = r;
      }, La = function(e, i, r) {
        return e._gsap.scaleX = e._gsap.scaleY = r;
      }, Ia = function(e, i, r, n, a) {
        var l = e._gsap;
        l.scaleX = l.scaleY = r, l.renderTransform(a, l);
      }, Ba = function(e, i, r, n, a) {
        var l = e._gsap;
        l[i] = r, l.renderTransform(a, l);
      }, ot = "transform", St = ot + "Origin", Ua = function d(e, i) {
        var r = this, n = this.target, a = n.style, l = n._gsap;
        if (e in Gt && a) {
          if (this.tfm = this.tfm || {}, e !== "transform") e = Ht[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(u) {
            return r.tfm[u] = Zt(n, u);
          }) : this.tfm[e] = l.x ? l[e] : Zt(n, e), e === St && (this.tfm.zOrigin = l.zOrigin);
          else return Ht.transform.split(",").forEach(function(u) {
            return d.call(r, u, i);
          });
          if (this.props.indexOf(ot) >= 0) return;
          l.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(St, i, "")), e = ot;
        }
        (a || i) && this.props.push(e, i, a[e]);
      }, Sr = function(e) {
        e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
      }, Na = function() {
        var e = this.props, i = this.target, r = i.style, n = i._gsap, a, l;
        for (a = 0; a < e.length; a += 3) e[a + 1] ? e[a + 1] === 2 ? i[e[a]](e[a + 2]) : i[e[a]] = e[a + 2] : e[a + 2] ? r[e[a]] = e[a + 2] : r.removeProperty(e[a].substr(0, 2) === "--" ? e[a] : e[a].replace(os, "-$1").toLowerCase());
        if (this.tfm) {
          for (l in this.tfm) n[l] = this.tfm[l];
          n.svg && (n.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), a = as(), (!a || !a.isStart) && !r[ot] && (Sr(r), n.zOrigin && r[St] && (r[St] += " " + n.zOrigin + "px", n.zOrigin = 0, n.renderTransform()), n.uncache = 1);
        }
      }, vr = function(e, i) {
        var r = { target: e, props: [], revert: Na, save: Ua };
        return e._gsap || Ct.core.getCache(e), i && e.style && e.nodeType && i.split(",").forEach(function(n) {
          return r.save(n);
        }), r;
      }, Fr, ls = function(e, i) {
        var r = ae.createElementNS ? ae.createElementNS((i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : ae.createElement(e);
        return r && r.style ? r : ae.createElement(e);
      }, Ot = function d(e, i, r) {
        var n = getComputedStyle(e);
        return n[i] || n.getPropertyValue(i.replace(os, "-$1").toLowerCase()) || n.getPropertyValue(i) || !r && d(e, Be(i) || i, 1) || "";
      }, kr = "O,Moz,ms,Ms,Webkit".split(","), Be = function(e, i, r) {
        var n = i || ye, a = n.style, l = 5;
        if (e in a && !r) return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); l-- && !(kr[l] + e in a); ) ;
        return l < 0 ? null : (l === 3 ? "ms" : l >= 0 ? kr[l] : "") + e;
      }, us = function() {
        va() && window.document && (br = window, ae = br.document, Re = ae.documentElement, ye = ls("div") || { style: {} }, ls("div"), ot = Be(ot), St = ot + "Origin", ye.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Fr = !!Be("perspective"), as = Ct.core.reverting, ns = 1);
      }, zr = function(e) {
        var i = e.ownerSVGElement, r = ls("svg", i && i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = e.cloneNode(true), a;
        n.style.display = "block", r.appendChild(n), Re.appendChild(r);
        try {
          a = n.getBBox();
        } catch {
        }
        return r.removeChild(n), Re.removeChild(r), a;
      }, Ar = function(e, i) {
        for (var r = i.length; r--; ) if (e.hasAttribute(i[r])) return e.getAttribute(i[r]);
      }, Er = function(e) {
        var i, r;
        try {
          i = e.getBBox();
        } catch {
          i = zr(e), r = 1;
        }
        return i && (i.width || i.height) || r || (i = zr(e)), i && !i.width && !i.x && !i.y ? { x: +Ar(e, ["x", "cx", "x1"]) || 0, y: +Ar(e, ["y", "cy", "y1"]) || 0, width: 0, height: 0 } : i;
      }, Or = function(e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Er(e));
      }, oe = function(e, i) {
        if (i) {
          var r = e.style, n;
          i in Gt && i !== St && (i = ot), r.removeProperty ? (n = i.substr(0, 2), (n === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i), r.removeProperty(n === "--" ? i : i.replace(os, "-$1").toLowerCase())) : r.removeAttribute(i);
        }
      }, he = function(e, i, r, n, a, l) {
        var u = new Tt(e._pt, i, r, 0, 1, l ? Cr : Tr);
        return e._pt = u, u.b = n, u.e = a, e._props.push(r), u;
      }, Dr = { deg: 1, rad: 1, turn: 1 }, Wa = { grid: 1, flex: 1 }, le = function d(e, i, r, n) {
        var a = parseFloat(r) || 0, l = (r + "").trim().substr((a + "").length) || "px", u = ye.style, f = Fa.test(i), _ = e.tagName.toLowerCase() === "svg", p = (_ ? "client" : "offset") + (f ? "Width" : "Height"), M = 100, C = n === "px", S = n === "%", k, y, z, D;
        if (n === l || !a || Dr[n] || Dr[l]) return a;
        if (l !== "px" && !C && (a = d(e, i, r, "px")), D = e.getCTM && Or(e), (S || l === "%") && (Gt[i] || ~i.indexOf("adius"))) return k = D ? e.getBBox()[f ? "width" : "height"] : e[p], ht(S ? a / k * M : a / 100 * k);
        if (u[f ? "width" : "height"] = M + (C ? l : n), y = n !== "rem" && ~i.indexOf("adius") || n === "em" && e.appendChild && !_ ? e : e.parentNode, D && (y = (e.ownerSVGElement || {}).parentNode), (!y || y === ae || !y.appendChild) && (y = ae.body), z = y._gsap, z && S && z.width && f && z.time === Et.time && !z.uncache) return ht(a / z.width * M);
        if (S && (i === "height" || i === "width")) {
          var P = e.style[i];
          e.style[i] = M + n, k = e[p], P ? e.style[i] = P : oe(e, i);
        } else (S || l === "%") && !Wa[Ot(y, "display")] && (u.position = Ot(e, "position")), y === e && (u.position = "static"), y.appendChild(ye), k = ye[p], y.removeChild(ye), u.position = "absolute";
        return f && S && (z = _e(y), z.time = Et.time, z.width = y[p]), ht(C ? k * a / M : k && a ? M / k * a : 0);
      }, Zt = function(e, i, r, n) {
        var a;
        return ns || us(), i in Ht && i !== "transform" && (i = Ht[i], ~i.indexOf(",") && (i = i.split(",")[0])), Gt[i] && i !== "transform" ? (a = ri(e, n), a = i !== "transformOrigin" ? a[i] : a.svg ? a.origin : Ci(Ot(e, St)) + " " + a.zOrigin + "px") : (a = e.style[i], (!a || a === "auto" || n || ~(a + "").indexOf("calc(")) && (a = Ti[i] && Ti[i](e, i, r) || Ot(e, i) || Ls(e, i) || (i === "opacity" ? 1 : 0))), r && !~(a + "").trim().indexOf(" ") ? le(e, i, a, r) + r : a;
      }, Va = function(e, i, r, n) {
        if (!r || r === "none") {
          var a = Be(i, e, 1), l = a && Ot(e, a, 1);
          l && l !== r ? (i = a, r = l) : i === "borderColor" && (r = Ot(e, "borderTopColor"));
        }
        var u = new Tt(this._pt, e.style, i, 0, 1, mr), f = 0, _ = 0, p, M, C, S, k, y, z, D, P, L, I, O;
        if (u.b = r, u.e = n, r += "", n += "", n.substring(0, 6) === "var(--" && (n = Ot(e, n.substring(4, n.indexOf(")")))), n === "auto" && (y = e.style[i], e.style[i] = n, n = Ot(e, i) || n, y ? e.style[i] = y : oe(e, i)), p = [r, n], ar(p), r = p[0], n = p[1], C = r.match(Ut) || [], O = n.match(Ut) || [], O.length) {
          for (; M = Ut.exec(n); ) z = M[0], P = n.substring(f, M.index), k ? k = (k + 1) % 5 : (P.substr(-5) === "rgba(" || P.substr(-5) === "hsla(") && (k = 1), z !== (y = C[_++] || "") && (S = parseFloat(y) || 0, I = y.substr((S + "").length), z.charAt(1) === "=" && (z = ze(S, z) + I), D = parseFloat(z), L = z.substr((D + "").length), f = Ut.lastIndex - L.length, L || (L = L || c.units[i] || I, f === n.length && (n += L, u.e += L)), I !== L && (S = le(e, i, y, L) || 0), u._pt = { _next: u._pt, p: P || _ === 1 ? P : ",", s: S, c: D - S, m: k && k < 4 || i === "zIndex" ? Math.round : 0 });
          u.c = f < n.length ? n.substring(f, n.length) : "";
        } else u.r = i === "display" && n === "none" ? Cr : Tr;
        return de.test(n) && (u.e = 0), this._pt = u, u;
      }, Pr = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" }, qa = function(e) {
        var i = e.split(" "), r = i[0], n = i[1] || "50%";
        return (r === "top" || r === "bottom" || n === "left" || n === "right") && (e = r, r = n, n = e), i[0] = Pr[r] || r, i[1] = Pr[n] || n, i.join(" ");
      }, Ya = function(e, i) {
        if (i.tween && i.tween._time === i.tween._dur) {
          var r = i.t, n = r.style, a = i.u, l = r._gsap, u, f, _;
          if (a === "all" || a === true) n.cssText = "", f = 1;
          else for (a = a.split(","), _ = a.length; --_ > -1; ) u = a[_], Gt[u] && (f = 1, u = u === "transformOrigin" ? St : ot), oe(r, u);
          f && (oe(r, ot), l && (l.svg && r.removeAttribute("transform"), n.scale = n.rotate = n.translate = "none", ri(r, 1), l.uncache = 1, Sr(n)));
        }
      }, Ti = { clearProps: function(e, i, r, n, a) {
        if (a.data !== "isFromStart") {
          var l = e._pt = new Tt(e._pt, i, r, 0, 0, Ya);
          return l.u = n, l.pr = -10, l.tween = a, e._props.push(r), 1;
        }
      } }, si = [1, 0, 0, 1, 0, 0], Rr = {}, Lr = function(e) {
        return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
      }, Ir = function(e) {
        var i = Ot(e, ot);
        return Lr(i) ? si : i.substr(7).match(rt).map(ht);
      }, cs = function(e, i) {
        var r = e._gsap || _e(e), n = e.style, a = Ir(e), l, u, f, _;
        return r.svg && e.getAttribute("transform") ? (f = e.transform.baseVal.consolidate().matrix, a = [f.a, f.b, f.c, f.d, f.e, f.f], a.join(",") === "1,0,0,1,0,0" ? si : a) : (a === si && !e.offsetParent && e !== Re && !r.svg && (f = n.display, n.display = "block", l = e.parentNode, (!l || !e.offsetParent && !e.getBoundingClientRect().width) && (_ = 1, u = e.nextElementSibling, Re.appendChild(e)), a = Ir(e), f ? n.display = f : oe(e, "display"), _ && (u ? l.insertBefore(e, u) : l ? l.appendChild(e) : Re.removeChild(e))), i && a.length > 6 ? [a[0], a[1], a[4], a[5], a[12], a[13]] : a);
      }, fs = function(e, i, r, n, a, l) {
        var u = e._gsap, f = a || cs(e, true), _ = u.xOrigin || 0, p = u.yOrigin || 0, M = u.xOffset || 0, C = u.yOffset || 0, S = f[0], k = f[1], y = f[2], z = f[3], D = f[4], P = f[5], L = i.split(" "), I = parseFloat(L[0]) || 0, O = parseFloat(L[1]) || 0, U, N, W, R;
        r ? f !== si && (N = S * z - k * y) && (W = I * (z / N) + O * (-y / N) + (y * P - z * D) / N, R = I * (-k / N) + O * (S / N) - (S * P - k * D) / N, I = W, O = R) : (U = Er(e), I = U.x + (~L[0].indexOf("%") ? I / 100 * U.width : I), O = U.y + (~(L[1] || L[0]).indexOf("%") ? O / 100 * U.height : O)), n || n !== false && u.smooth ? (D = I - _, P = O - p, u.xOffset = M + (D * S + P * y) - D, u.yOffset = C + (D * k + P * z) - P) : u.xOffset = u.yOffset = 0, u.xOrigin = I, u.yOrigin = O, u.smooth = !!n, u.origin = i, u.originIsAbsolute = !!r, e.style[St] = "0px 0px", l && (he(l, u, "xOrigin", _, I), he(l, u, "yOrigin", p, O), he(l, u, "xOffset", M, u.xOffset), he(l, u, "yOffset", C, u.yOffset)), e.setAttribute("data-svg-origin", I + " " + O);
      }, ri = function(e, i) {
        var r = e._gsap || new ur(e);
        if ("x" in r && !i && !r.uncache) return r;
        var n = e.style, a = r.scaleX < 0, l = "px", u = "deg", f = getComputedStyle(e), _ = Ot(e, St) || "0", p, M, C, S, k, y, z, D, P, L, I, O, U, N, W, R, Z, nt, tt, et, pt, ct, ut, ft, Nt, Si, ai, oi, Te, Nr, jt, Ce;
        return p = M = C = y = z = D = P = L = I = 0, S = k = 1, r.svg = !!(e.getCTM && Or(e)), f.translate && ((f.translate !== "none" || f.scale !== "none" || f.rotate !== "none") && (n[ot] = (f.translate !== "none" ? "translate3d(" + (f.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (f.rotate !== "none" ? "rotate(" + f.rotate + ") " : "") + (f.scale !== "none" ? "scale(" + f.scale.split(" ").join(",") + ") " : "") + (f[ot] !== "none" ? f[ot] : "")), n.scale = n.rotate = n.translate = "none"), N = cs(e, r.svg), r.svg && (r.uncache ? (Nt = e.getBBox(), _ = r.xOrigin - Nt.x + "px " + (r.yOrigin - Nt.y) + "px", ft = "") : ft = !i && e.getAttribute("data-svg-origin"), fs(e, ft || _, !!ft || r.originIsAbsolute, r.smooth !== false, N)), O = r.xOrigin || 0, U = r.yOrigin || 0, N !== si && (nt = N[0], tt = N[1], et = N[2], pt = N[3], p = ct = N[4], M = ut = N[5], N.length === 6 ? (S = Math.sqrt(nt * nt + tt * tt), k = Math.sqrt(pt * pt + et * et), y = nt || tt ? Ie(tt, nt) * be : 0, P = et || pt ? Ie(et, pt) * be + y : 0, P && (k *= Math.abs(Math.cos(P * Le))), r.svg && (p -= O - (O * nt + U * et), M -= U - (O * tt + U * pt))) : (Ce = N[6], Nr = N[7], ai = N[8], oi = N[9], Te = N[10], jt = N[11], p = N[12], M = N[13], C = N[14], W = Ie(Ce, Te), z = W * be, W && (R = Math.cos(-W), Z = Math.sin(-W), ft = ct * R + ai * Z, Nt = ut * R + oi * Z, Si = Ce * R + Te * Z, ai = ct * -Z + ai * R, oi = ut * -Z + oi * R, Te = Ce * -Z + Te * R, jt = Nr * -Z + jt * R, ct = ft, ut = Nt, Ce = Si), W = Ie(-et, Te), D = W * be, W && (R = Math.cos(-W), Z = Math.sin(-W), ft = nt * R - ai * Z, Nt = tt * R - oi * Z, Si = et * R - Te * Z, jt = pt * Z + jt * R, nt = ft, tt = Nt, et = Si), W = Ie(tt, nt), y = W * be, W && (R = Math.cos(W), Z = Math.sin(W), ft = nt * R + tt * Z, Nt = ct * R + ut * Z, tt = tt * R - nt * Z, ut = ut * R - ct * Z, nt = ft, ct = Nt), z && Math.abs(z) + Math.abs(y) > 359.9 && (z = y = 0, D = 180 - D), S = ht(Math.sqrt(nt * nt + tt * tt + et * et)), k = ht(Math.sqrt(ut * ut + Ce * Ce)), W = Ie(ct, ut), P = Math.abs(W) > 2e-4 ? W * be : 0, I = jt ? 1 / (jt < 0 ? -jt : jt) : 0), r.svg && (ft = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !Lr(Ot(e, ot)), ft && e.setAttribute("transform", ft))), Math.abs(P) > 90 && Math.abs(P) < 270 && (a ? (S *= -1, P += y <= 0 ? 180 : -180, y += y <= 0 ? 180 : -180) : (k *= -1, P += P <= 0 ? 180 : -180)), i = i || r.uncache, r.x = p - ((r.xPercent = p && (!i && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-p) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + l, r.y = M - ((r.yPercent = M && (!i && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-M) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + l, r.z = C + l, r.scaleX = ht(S), r.scaleY = ht(k), r.rotation = ht(y) + u, r.rotationX = ht(z) + u, r.rotationY = ht(D) + u, r.skewX = P + u, r.skewY = L + u, r.transformPerspective = I + l, (r.zOrigin = parseFloat(_.split(" ")[2]) || !i && r.zOrigin || 0) && (n[St] = Ci(_)), r.xOffset = r.yOffset = 0, r.force3D = c.force3D, r.renderTransform = r.svg ? Ha : Fr ? Br : Xa, r.uncache = 0, r;
      }, Ci = function(e) {
        return (e = e.split(" "))[0] + " " + e[1];
      }, ds = function(e, i, r) {
        var n = mt(i);
        return ht(parseFloat(i) + parseFloat(le(e, "x", r + "px", n))) + n;
      }, Xa = function(e, i) {
        i.z = "0px", i.rotationY = i.rotationX = "0deg", i.force3D = 0, Br(e, i);
      }, we = "0deg", ni = "0px", Me = ") ", Br = function(e, i) {
        var r = i || this, n = r.xPercent, a = r.yPercent, l = r.x, u = r.y, f = r.z, _ = r.rotation, p = r.rotationY, M = r.rotationX, C = r.skewX, S = r.skewY, k = r.scaleX, y = r.scaleY, z = r.transformPerspective, D = r.force3D, P = r.target, L = r.zOrigin, I = "", O = D === "auto" && e && e !== 1 || D === true;
        if (L && (M !== we || p !== we)) {
          var U = parseFloat(p) * Le, N = Math.sin(U), W = Math.cos(U), R;
          U = parseFloat(M) * Le, R = Math.cos(U), l = ds(P, l, N * R * -L), u = ds(P, u, -Math.sin(U) * -L), f = ds(P, f, W * R * -L + L);
        }
        z !== ni && (I += "perspective(" + z + Me), (n || a) && (I += "translate(" + n + "%, " + a + "%) "), (O || l !== ni || u !== ni || f !== ni) && (I += f !== ni || O ? "translate3d(" + l + ", " + u + ", " + f + ") " : "translate(" + l + ", " + u + Me), _ !== we && (I += "rotate(" + _ + Me), p !== we && (I += "rotateY(" + p + Me), M !== we && (I += "rotateX(" + M + Me), (C !== we || S !== we) && (I += "skew(" + C + ", " + S + Me), (k !== 1 || y !== 1) && (I += "scale(" + k + ", " + y + Me), P.style[ot] = I || "translate(0, 0)";
      }, Ha = function(e, i) {
        var r = i || this, n = r.xPercent, a = r.yPercent, l = r.x, u = r.y, f = r.rotation, _ = r.skewX, p = r.skewY, M = r.scaleX, C = r.scaleY, S = r.target, k = r.xOrigin, y = r.yOrigin, z = r.xOffset, D = r.yOffset, P = r.forceCSS, L = parseFloat(l), I = parseFloat(u), O, U, N, W, R;
        f = parseFloat(f), _ = parseFloat(_), p = parseFloat(p), p && (p = parseFloat(p), _ += p, f += p), f || _ ? (f *= Le, _ *= Le, O = Math.cos(f) * M, U = Math.sin(f) * M, N = Math.sin(f - _) * -C, W = Math.cos(f - _) * C, _ && (p *= Le, R = Math.tan(_ - p), R = Math.sqrt(1 + R * R), N *= R, W *= R, p && (R = Math.tan(p), R = Math.sqrt(1 + R * R), O *= R, U *= R)), O = ht(O), U = ht(U), N = ht(N), W = ht(W)) : (O = M, W = C, U = N = 0), (L && !~(l + "").indexOf("px") || I && !~(u + "").indexOf("px")) && (L = le(S, "x", l, "px"), I = le(S, "y", u, "px")), (k || y || z || D) && (L = ht(L + k - (k * O + y * N) + z), I = ht(I + y - (k * U + y * W) + D)), (n || a) && (R = S.getBBox(), L = ht(L + n / 100 * R.width), I = ht(I + a / 100 * R.height)), R = "matrix(" + O + "," + U + "," + N + "," + W + "," + L + "," + I + ")", S.setAttribute("transform", R), P && (S.style[ot] = R);
      }, Ga = function(e, i, r, n, a) {
        var l = 360, u = q(a), f = parseFloat(a) * (u && ~a.indexOf("rad") ? be : 1), _ = f - n, p = n + _ + "deg", M, C;
        return u && (M = a.split("_")[1], M === "short" && (_ %= l, _ !== _ % (l / 2) && (_ += _ < 0 ? l : -l)), M === "cw" && _ < 0 ? _ = (_ + l * Mr) % l - ~~(_ / l) * l : M === "ccw" && _ > 0 && (_ = (_ - l * Mr) % l - ~~(_ / l) * l)), e._pt = C = new Tt(e._pt, i, r, n, _, za), C.e = p, C.u = "deg", e._props.push(r), C;
      }, Ur = function(e, i) {
        for (var r in i) e[r] = i[r];
        return e;
      }, Za = function(e, i, r) {
        var n = Ur({}, r._gsap), a = "perspective,force3D,transformOrigin,svgOrigin", l = r.style, u, f, _, p, M, C, S, k;
        n.svg ? (_ = r.getAttribute("transform"), r.setAttribute("transform", ""), l[ot] = i, u = ri(r, 1), oe(r, ot), r.setAttribute("transform", _)) : (_ = getComputedStyle(r)[ot], l[ot] = i, u = ri(r, 1), l[ot] = _);
        for (f in Gt) _ = n[f], p = u[f], _ !== p && a.indexOf(f) < 0 && (S = mt(_), k = mt(p), M = S !== k ? le(r, f, _, k) : parseFloat(_), C = parseFloat(p), e._pt = new Tt(e._pt, u, f, M, C - M, hs), e._pt.u = k || 0, e._props.push(f));
        Ur(u, n);
      };
      Mt("padding,margin,Width,Radius", function(d, e) {
        var i = "Top", r = "Right", n = "Bottom", a = "Left", l = (e < 3 ? [i, r, n, a] : [i + a, i + r, n + r, n + a]).map(function(u) {
          return e < 2 ? d + u : "border" + u + d;
        });
        Ti[e > 1 ? "border" + d : d] = function(u, f, _, p, M) {
          var C, S;
          if (arguments.length < 4) return C = l.map(function(k) {
            return Zt(u, k, _);
          }), S = C.join(" "), S.split(C[0]).length === 5 ? C[0] : S;
          C = (p + "").split(" "), S = {}, l.forEach(function(k, y) {
            return S[k] = C[y] = C[y] || C[(y - 1) / 2 | 0];
          }), u.init(f, S, M);
        };
      });
      var _s = { name: "css", register: us, targetTest: function(e) {
        return e.style && e.nodeType;
      }, init: function(e, i, r, n, a) {
        var l = this._props, u = e.style, f = r.vars.startAt, _, p, M, C, S, k, y, z, D, P, L, I, O, U, N, W, R;
        ns || us(), this.styles = this.styles || vr(e), W = this.styles.props, this.tween = r;
        for (y in i) if (y !== "autoRound" && (p = i[y], !(kt[y] && cr(y, i, r, n, e, a)))) {
          if (S = typeof p, k = Ti[y], S === "function" && (p = p.call(r, n, e, a), S = typeof p), S === "string" && ~p.indexOf("random(") && (p = Je(p)), k) k(this, e, y, p, r) && (N = 1);
          else if (y.substr(0, 2) === "--") _ = (getComputedStyle(e).getPropertyValue(y) + "").trim(), p += "", re.lastIndex = 0, re.test(_) || (z = mt(_), D = mt(p), D ? z !== D && (_ = le(e, y, _, D) + D) : z && (p += z)), this.add(u, "setProperty", _, p, n, a, 0, 0, y), l.push(y), W.push(y, 0, u[y]);
          else if (S !== "undefined") {
            if (f && y in f ? (_ = typeof f[y] == "function" ? f[y].call(r, n, e, a) : f[y], q(_) && ~_.indexOf("random(") && (_ = Je(_)), mt(_ + "") || _ === "auto" || (_ += c.units[y] || mt(Zt(e, y)) || ""), (_ + "").charAt(1) === "=" && (_ = Zt(e, y))) : _ = Zt(e, y), C = parseFloat(_), P = S === "string" && p.charAt(1) === "=" && p.substr(0, 2), P && (p = p.substr(2)), M = parseFloat(p), y in Ht && (y === "autoAlpha" && (C === 1 && Zt(e, "visibility") === "hidden" && M && (C = 0), W.push("visibility", 0, u.visibility), he(this, u, "visibility", C ? "inherit" : "hidden", M ? "inherit" : "hidden", !M)), y !== "scale" && y !== "transform" && (y = Ht[y], ~y.indexOf(",") && (y = y.split(",")[0]))), L = y in Gt, L) {
              if (this.styles.save(y), R = p, S === "string" && p.substring(0, 6) === "var(--") {
                if (p = Ot(e, p.substring(4, p.indexOf(")"))), p.substring(0, 5) === "calc(") {
                  var Z = e.style.perspective;
                  e.style.perspective = p, p = Ot(e, "perspective"), Z ? e.style.perspective = Z : oe(e, "perspective");
                }
                M = parseFloat(p);
              }
              if (I || (O = e._gsap, O.renderTransform && !i.parseTransform || ri(e, i.parseTransform), U = i.smoothOrigin !== false && O.smooth, I = this._pt = new Tt(this._pt, u, ot, 0, 1, O.renderTransform, O, 0, -1), I.dep = 1), y === "scale") this._pt = new Tt(this._pt, O, "scaleY", O.scaleY, (P ? ze(O.scaleY, P + M) : M) - O.scaleY || 0, hs), this._pt.u = 0, l.push("scaleY", y), y += "X";
              else if (y === "transformOrigin") {
                W.push(St, 0, u[St]), p = qa(p), O.svg ? fs(e, p, 0, U, 0, this) : (D = parseFloat(p.split(" ")[2]) || 0, D !== O.zOrigin && he(this, O, "zOrigin", O.zOrigin, D), he(this, u, y, Ci(_), Ci(p)));
                continue;
              } else if (y === "svgOrigin") {
                fs(e, p, 1, U, 0, this);
                continue;
              } else if (y in Rr) {
                Ga(this, O, y, C, P ? ze(C, P + p) : p);
                continue;
              } else if (y === "smoothOrigin") {
                he(this, O, "smooth", O.smooth, p);
                continue;
              } else if (y === "force3D") {
                O[y] = p;
                continue;
              } else if (y === "transform") {
                Za(this, p, e);
                continue;
              }
            } else y in u || (y = Be(y) || y);
            if (L || (M || M === 0) && (C || C === 0) && !ka.test(p) && y in u) z = (_ + "").substr((C + "").length), M || (M = 0), D = mt(p) || (y in c.units ? c.units[y] : z), z !== D && (C = le(e, y, _, D)), this._pt = new Tt(this._pt, L ? O : u, y, C, (P ? ze(C, P + M) : M) - C, !L && (D === "px" || y === "zIndex") && i.autoRound !== false ? Oa : hs), this._pt.u = D || 0, L && R !== p ? (this._pt.b = _, this._pt.e = R, this._pt.r = Ea) : z !== D && D !== "%" && (this._pt.b = _, this._pt.r = Aa);
            else if (y in u) Va.call(this, e, y, _, P ? P + p : p);
            else if (y in e) this.add(e, y, _ || e[y], P ? P + p : p, n, a);
            else if (y !== "parseTransform") {
              Ri(y, p);
              continue;
            }
            L || (y in u ? W.push(y, 0, u[y]) : typeof e[y] == "function" ? W.push(y, 2, e[y]()) : W.push(y, 1, _ || e[y])), l.push(y);
          }
        }
        N && gr(this);
      }, render: function(e, i) {
        if (i.tween._time || !as()) for (var r = i._pt; r; ) r.r(e, r.d), r = r._next;
        else i.styles.revert();
      }, get: Zt, aliases: Ht, getSetter: function(e, i, r) {
        var n = Ht[i];
        return n && n.indexOf(",") < 0 && (i = n), i in Gt && i !== St && (e._gsap.x || Zt(e, "x")) ? r && wr === r ? i === "scale" ? La : Ra : (wr = r || {}) && (i === "scale" ? Ia : Ba) : e.style && !st(e.style[i]) ? Da : ~i.indexOf("-") ? Pa : ts(e, i);
      }, core: { _removeProperty: oe, _getMatrix: cs } };
      Ct.utils.checkPrefix = Be, Ct.core.getStyleSaver = vr, (function(d, e, i, r) {
        var n = Mt(d + "," + e + "," + i, function(a) {
          Gt[a] = 1;
        });
        Mt(e, function(a) {
          c.units[a] = "deg", Rr[a] = 1;
        }), Ht[n[13]] = d + "," + e, Mt(r, function(a) {
          var l = a.split(":");
          Ht[l[1]] = n[l[0]];
        });
      })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"), Mt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(d) {
        c.units[d] = "px";
      }), Ct.registerPlugin(_s);
      var ps = Ct.registerPlugin(_s) || Ct, ja = ps.core.Tween;
      s.Back = ba, s.Bounce = Ma, s.CSSPlugin = _s, s.Circ = Sa, s.Cubic = pa, s.Elastic = ya, s.Expo = Ca, s.Linear = da, s.Power0 = ha, s.Power1 = la, s.Power2 = ua, s.Power3 = ca, s.Power4 = fa, s.Quad = _a, s.Quart = ma, s.Quint = ga, s.Sine = Ta, s.SteppedEase = wa, s.Strong = xa, s.TimelineLite = _t, s.TimelineMax = _t, s.TweenLite = lt, s.TweenMax = ja, s.default = ps, s.gsap = ps, typeof window > "u" || window !== s ? Object.defineProperty(s, "__esModule", { value: true }) : delete window.default;
    }));
  })(li, li.exports)), li.exports;
}
var yo = xo();
let Ye = 0;
const Ei = document.querySelectorAll(".slide");
function gn() {
  Ei.forEach((F) => {
    F.classList.remove("active");
  }), Ye >= Ei.length ? Ye = 0 : Ye < 0 && (Ye = Ei.length - 1), Ei[Ye].classList.add("active");
}
function bo(F) {
  Ye += F, gn();
}
gn();
const wo = "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", Mo = "https://openrouter.ai/api/v1/chat/completions", Ss = [{ role: "system", content: "Your Name is AVA. You are a helpful, bubbly AI daily assistant. You are here to answer your users questions and help them with what they need to the best of your abilities." }];
async function To(F) {
  Ss.push({ role: "user", content: F });
  const s = await (await fetch(Mo, { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${wo}`, "HTTP-Referer": window.location.href, "X-Title": "My Chatbot" }, body: JSON.stringify({ model: "openai/gpt-oss-120b", messages: Ss, temperature: 0.7 }) })).json();
  if (s.error) throw new Error(s.error.message);
  const o = s.choices[0].message.content;
  return Ss.push({ role: "assistant", content: o }), o;
}
function vs(F, t) {
  const s = document.getElementById("chatMessages"), o = document.createElement("div");
  o.className = `message ${t}`, o.textContent = F, s.appendChild(o), s.scrollTop = s.scrollHeight;
}
function Co() {
  const F = document.getElementById("chatMessages"), t = document.createElement("div");
  t.className = "message bot typing", t.id = "typingIndicator", t.textContent = "Ava is thinking...", F.appendChild(t), F.scrollTop = F.scrollHeight;
}
function hn() {
  const F = document.getElementById("typingIndicator");
  F && F.remove();
}
async function xn() {
  const F = document.getElementById("userInput"), t = F.value.trim();
  if (t) {
    vs(t, "user"), F.value = "", F.disabled = true, Co();
    try {
      const s = await To(t);
      hn(), vs(s, "bot");
    } catch (s) {
      hn(), vs(`Error: ${s.message}`, "bot"), console.error("Error:", s);
    } finally {
      F.disabled = false, F.focus();
    }
  }
}
document.getElementById("userInput").addEventListener("keypress", function(F) {
  F.key === "Enter" && xn();
});
const Jt = new CoreViewerApp({ canvas: document.getElementById("webgi-canvas") });
Jt.initialize({ caching: true, ground: false, bloom: true, enableDrop: false }).then((F) => {
  F.renderManager.displayCanvasScaling = window.devicePixelRatio;
  const t = F.getPlugin(LoadingScreenPlugin);
  t.loadingTextHeader = "Loading Custom 3D Experience", t.showFileNames = false, F.setEnvironmentMap("/WebsiteAssets/3DScene/pav_studio_03_4k.exr");
  const s = "/WebsiteAssets/3DScene/Gayva.glb";
  F.scene.background = new zs("#708090"), F.scene.activeCamera.position = new Vector3(0, 4, 20), F.scene.activeCamera.target = new Vector3(0, 4, 0), F.load(s), console.log(F);
});
const So = ["/WebsiteAssets/3DScene/Textures/Ava.png", "/WebsiteAssets/3DScene/Textures/Gaia.png", "/WebsiteAssets/3DScene/Textures/Zelda.png"];
function vo(F) {
  var _a, _b;
  const t = Jt.scene.modelRoot;
  let s = null, o = null, h = null;
  t.traverse((c) => {
    var _a2, _b2;
    if (c.material !== void 0 && c.material.name === "lambert11") {
      console.log("=== MESH ==="), console.log("Mesh name:", c.name), console.log("Material:", c.material), console.log("Material type:", (_a2 = c.material) == null ? void 0 : _a2.type), console.log("Material name:", (_b2 = c.material) == null ? void 0 : _b2.name), s = c;
      return;
    }
  }), o = new mn(), h = o.load(So[F]), h.flipY = false, h.colorSpace = bt, h.needsUpdate = true, (_b = (_a = Jt.scene).setDirty) == null ? void 0 : _b.call(_a), s.material.map = h, console.log(s.material), Jt.setDirty();
}
function Fo(F) {
  const t = Jt.scene.modelRoot;
  let s = null, o = null, h = null, c = null;
  s = new mn(), o = s.load(`WebsiteAssets/3DScene/Textures/Top_Color${F + 1}.png`), h = s.load(`WebsiteAssets/3DScene/Textures/Bottom_Color${F + 1}.png`), c = s.load(`WebsiteAssets/3DScene/Textures/legs_Color${F + 1}.png`), t.traverse((m) => {
    var _a, _b, _c, _d, _e, _f;
    m.material !== void 0 && (m.material.name === "lambert7" && (o.flipY = false, o.colorSpace = bt, o.needsUpdate = true, (_b = (_a = Jt.scene).setDirty) == null ? void 0 : _b.call(_a), m.material.map = o), m.material.name === "lambert8" && (h.flipY = false, h.colorSpace = bt, h.needsUpdate = true, (_d = (_c = Jt.scene).setDirty) == null ? void 0 : _d.call(_c), m.material.map = h), m.material.name === "lambert10" && (c.flipY = false, c.colorSpace = bt, c.needsUpdate = true, (_f = (_e = Jt.scene).setDirty) == null ? void 0 : _f.call(_e), m.material.map = c));
  }), Jt.setDirty();
}
const yn = document.getElementById("features-and-details");
console.log(yn);
function ko(F) {
  const t = F.getBoundingClientRect();
  return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth);
}
function bn() {
  ko(yn) && (console.log("Condition met!"), yo.gsap.to(".features-and-details .text", { duration: 0.5, y: 0 })), setTimeout(bn, 50);
}
bn();
window.changeSlide = bo;
window.ChangeAssistant = vo;
window.sendMessage = xn;
window.ChangeColor = Fo;
