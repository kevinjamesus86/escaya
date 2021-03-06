import * as t from 'assert';
import { parseScript, recovery } from '../../../src/escaya';

describe('Declarations - Class', () => {
  // Invalid cases
  for (const arg of [
    'class x { get constructor() {}}',
    'class x {set constructor() {}}',
    'class x {async constructor() {}}',
    'class x { static prototype() {}}'
  ]) {
    it(`${arg}`, () => {
      t.throws(() => {
        parseScript(`${arg}`);
      });
    });
    it(`${arg}`, () => {
      t.doesNotThrow(() => {
        recovery(`${arg}`, 'recovery.js');
      });
    });
  }

  // Valid cases. Testing random cases to verify we have no issues with bit masks
  for (const arg of [
    'class name  {}',
    'class name {}',
    'class name  extends F {}',
    'class name extends F {}',
    'class x {static *[y](){}}',
    'class A {get [foo](){}}',
    'class X { static async await(){} }',
    'class x { get [y](){}}',
    'class x{*555(){}}',
    'class A {set [foo](x){}}',
    'class x{   *static(){}    }',
    'class A {static get [foo](){}}',
    'class A {static set [foo](x){}}',
    'class A {get "foo"(){}}',
    'class A {"constructor"(){}}',
    'class A {set "foo"(x){}}',
    'class A {static get "foo"(){}}',
    'class X { constructor() { new.target }}',
    'class X { foo() { new.target }}',
    'class X { static foo() { new.target }}',
    'class x{ constructor(){  (super[a]) += 1;  }}',
    'class A {static "x"(){}}',
    'class A {static set "foo"(x){}}',
    'class A {"set"(){} "get"(){} "async"(){}}',
    'class A {[a](){}}',
    'class A {;}',
    '(class {;})',
    'class A {*foo(){}}',
    'class x { *prototype(){} }',
    'class A {async 3(){}}',
    'class x { async prototype(){} }',
    'class x { "prot\\x6ftype"(){} }',
    'class x { async *prot\\u006ftype(){} }',
    'class x { async *prot\\u006ftype(){} }',
    'class x { "prototype"(){} }',
    'class A {get foo(){}}',
    'class A {set foo(x){}}',
    'class A { true(x){}}',
    'class A {static get foo(){}}',
    'class A {static set foo(x){}}',
    'class x{async *foo(a){}}',
    'class x{async *"foo"(a){}}',
    'class x{[x](a=await){}}',
    'class name  extends (F, G) {}',
    'class name extends (F, G) {}',
    'class foo { constructor() {} }',
    'class C { "constructor"(){} ["constructor"](){} }',
    'class C { async method(x, y = x, z = y) {} }',
    'class C { async *gen() {} }',
    'class x { "construct\\u{6f}r"(){} }',
    'class x { async *prototype(){} }',
    'class x { get prototype(){} }',
    'class C { static async *method() {} }',
    'class C { async *method(a, b,) {} }',
    'class x{ constructor(){  (super.a) += 1;  }}',
    'class a extends b { constructor(){      class x extends super() {}    }}',
    'class C { async *method({...rest} = {a: 3, b: 4}) {} }',
    'class C { async *method({ w: [x, y, z] = [4, 5, 6] } = { w: null }) {} }',
    'class C { async *method([, , ...x]) {} }',
    'class x {async await(){}}',
    'class x {async *await(){}}',
    'class x {*await(){}}',
    'class C { async *method({ [function icefapper() {}]: x }) {} }',
    'class C { async *method({ a, b = function c(){}, d = ++icefapper }) {} }',
    'class C { static *constructor() {} }',
    'class C { static async *method([,] = function*() {}) {} }',
    'class C { static async *method([_, x] = []) {} }',
    'class C { static async *method([x]) {} }',
    'class x{[x](await){}}',
    'class x {f(await){}}',
    'class x{*foo(){}}',
    'class x{[yield](a){}}',
    'class x{*"foo"(){}}',
    'class A { 42e2(x){}}',
    'class A { 42e-2(x){}}',
    'class A { const(x){}}',
    'class A { class(x){}}',
    'class A { yield(x){}}',
    'class A { else(x){}}',
    'class A { async class(x){}}',
    'class A { static yield(x){}}',
    'class A { do(x){}}',
    'class A { catch(x){}}',
    'class C { a(){}b(){} }',
    'class C { a(){} }',
    'class C { *[1]() {} }',
    'class C { set "doubleQuote"(a) {} }',
    'class C { set 0(a) {a} }',
    'class C { set "unicod\\u{000065}Escape"(a) {} }',
    'class C { get "character\tescape"() { return "get string"; } }',
    `class foo { constructor() { class bar { constructor() {} }} }`,
    'class foo extends bar {}',
    'class foo extends bar { method() {} get property() { return this._property; }  set property(value) {  this._property = value; }}',
    'class foo { static method(a,) {} }',
    'class foo { static set a(_ = null) {} }',
    'class name extends class {} {}',
    'class name extends class {} {}',
    'class name extends class base {} {}',
    'class name extends class base {} {}',
    'class A {get 5(){}}',
    'class x { a() {}}',
    'class x {;;;;;;;;;;;;;;;;;;;}',
    'class x {;;;; a() {}}',
    'class x {;;;;  a() {} ;;;; b() {};;;  static a() {};;;}',
    'class x {static *bar() { }}',
    'class x {static async method(a, b,) {}}',
    'class x {async method(x, y = x, z = y) {}}',
    'class x {async *method({...rest} = {a: 3, b: 4}) {}}',
    'class x {async *method([, , ...x] = [1, 2]) {}}',
    'class x {async *method({ w: [x, y, z] = [4, 5, 6] } = { w: null }) {}}',
    'class x {async *method([...{ length }]) {}}',
    'class x {async *method([...x]) {}}',
    'class x {async *method([, , ...x]) {}}',
    'class x {static async *method([...{ length }]) {}}',
    'class x {static async *method([...[,]]) {}}',
    'class x { static x(){}}',
    'class x { static [x](){}}',
    'class x { static get 8(){}}',
    'class x { method([[...x] = values]) {}}',
    'class x extends await { }',
    'class a { b(c,) {} }',
    'class C { set 0(a) {a}}',
    'class C { [ID(2)]() { }}',
    'class C { async await() {}}',
    'class C { static* async() {}}',
    'class C { foo() {} static get foo() {} static set foo(x) {}}',
    'class C { static get foo() {} static set foo(x) {} get foo() {} set foo(x) {}}',
    'class C { ;;;;  a() {} ;;;; b() {};;;  static a() {};;;}',
    'class C { async *method([arrow = () => {}] = []) { }}',
    'class C { async *method([{ x, y, z } = { x: 44, y: 55, z: 66 }] = []) {}}',
    'class C { static async await() { }}',
    'class C { static get ["constructor"]() {} }',
    'class C { static get ["prototype"]() {} }',
    'class C { static set ["prototype"](x) {} }',
    'class C { constructor() {} ["constructor"]() {} }',
    'class C { constructor() {} ["constructor"]() {} }',
    'class C { ["constructor"]() {} ["constructor"]() {} }',
    'class C { a() {} [1]() {} c() {}  [ID(2)]() {} }',
    'class C { get ["prototype"]() {} }',
    'class C { static a() {} static ["b"]() {} static c() {} static ["d"]() {} }',
    'class x{ constructor(){} *9(){} }',
    'class x{ constructor(){} 9(){} }',
    'class x { [constructor](){} }',
    'class x { static constructor(){} }',
    'class A extends 1.2 {}',
    'class A extends async {}',
    'class A extends await {}',
    'class A extends fooo {}',
    'class A {async [foo](){}}',
    'class x { async [y](){}}',
    'class A {*[foo](){}}',
    `class C extends (
      a,
      c
    ) {
    }`,
    `class X {
      ''() { }
    }`,
    'class A extends (oh,yes) {}',
    'class x{async *555(a){}}',
    'class x{   static *static(){}    }',
    'class A {*4(){}}',
    'class x { *[expr](){} }',
    'class A {1(){}}',
    'class x {static break(){}}',
    'class x {get break(){}}',
    'class x {get break(){}}',
    'class A extends B { *get() {} }',
    'class A {static 2(){}}',
    'class A {static constructor(){}}',
    'class A { async* f() { await a; yield b; } }',
    'class A { static async* f() { await a; yield b; } }',
    'class x { async *[y](){}}',
    'const o = { C: class {} }; new o?.C();',
    'const o = { C: class {} }; new o?.["C"]();',
    'class C {} new C?.();',
    'class a { a() { } }',
    'class x{   async static(){}    }',
    'class x {[x](){}}',
    'class C { static async() { }}',
    'class C { static async foo() { }}',
    `class X { static await(){} }`,
    `class x {*f(await){}}`,
    'class A { async* f() { await a; yield b; } }',
    'class A { static async* f() { await a; yield b; } }',
    'class x extends feh(await) { }',
    'class x {static static(){}}',
    'class x { [await](){} }',
    'class C { *async() {}}',
    'class x {async foo(){}}',
    'class x {async(){}}',
    'class async {}',
    'class x {static async *method([x]) {}}',
    'class x {async *method({ a, b = function c(){}, d = ++x}) {}}',
    'class x {static get constructor() {}}',
    'class x {static async *method([{ u: v, w: x, y: z } = { u: 444, w: 555, y: 666 }] = []) {}}',
    'class x {static async *method([[] = function() { initCount += 1; }()] = [[23]]) {}}',
    'class x {static async *method([x] = {}) {}}',
    'class x {static async *method([x] = {}) {}}',
    'class x {set x(v) {}}',
    'class x {set "doubleQuote"(a) {}}',
    'class x {static[a](){}; static[b](){}  }',
    'class x {static a(){} static get a(){} static set a(b){}}',
    'class x { static ["prototype"](){}}',
    'class x { async() { }}',
    'class x {*async() { }}',
    'class x {static foo() {} foo() {}}',
    'class x {static foo() {} static foo() {}}',
    'class x {static get foo() {} static get foo() {}}',
    'class x {static set foo(x) {} static set foo(x) {}}',
    'class x {static get foo() {} static set foo(x) {} get foo() {} set foo(x) {}}',
    'class x {static foo() {} get foo() {} set foo(x) {}}',
    'class x {set arguments(_) {}}',
    'class x {static arguments() {}}',
    'class x {static set arguments(_) {}}',
    'class x {static async foo() { }}',
    'class x {async await() {}}',
    'class x {static __proto__(){}; get __proto__(){}}',
    'class v extends.9 {}',
    'class v extends[x] {}',
    'class x {static async await() { }}',
    'class x {constructor() {}; static constructor() {}}',
    'class x {get get() {}}',
    'class x {prototype() {}}',
    'class x {eval() {}}',
    'class x {constructor(a, b, c) {}}',
    'class x {static ["prototype"](){}}',
    'class x {static constructor(){} static constructor(){}}',
    'class x {f(f) { }}',
    'class x {f(x) { function x() {} }}',
    'class x {f(x) { var x; }}',
    'class foo extends class bar {} {}',
    'class foo extends class { constructor() {}} {}',
    'class foo extends class { constructor() {} } { constructor() {} }',
    'class foo { [Symbol.iterator]() {} ["method"]() {} }',
    'class foo { static classMethod() {} method() {} }',
    'class foo { static get property() {} static set property(value) {} }',
    'class foo { async method(a, b = 39,) {} }',
    'class foo { async method(a, b,) {} }',
    'class A {constructor(x=new.target){}}',
    'class A {a(x=new.target){}}',
    'class A {static a(x=new.target){}}',
    `class C {
      a() { }
      static b() { }
      get c() { }
      set c(val) { }
      ''() { }
      static ''() { }
      42() { }
      static 43() { }
      get 44() { }
      set 44(val) { }
      static get constructor() { }
      static set constructor(val) { }
    };`,
    `class C {
      ['']() { }
      static ''() {}
      [a]() { }
      [sym1]() { }
      static [sym2]() { }
      [symNoDescription]() { }

      get [sym3]() { }
      static set [b](val) { }
    }`
  ]) {
    it(`${arg}`, () => {
      t.doesNotThrow(() => {
        parseScript(`${arg}`);
      });
    });
    it(`${arg}`, () => {
      t.doesNotThrow(() => {
        recovery(`${arg}`, 'recovery.js');
      });
    });
  }
});
