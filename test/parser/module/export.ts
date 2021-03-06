import * as t from 'assert';
import { parseModule, recovery } from '../../../src/escaya';

// Valid cases. Testing random cases to verify we have no issues with bit masks
for (const arg of [
  'export let x = 0;',
  'export var y = 0;',
  'export const z = 0;',
  'export default async function() {}',
  'export default async function f() {}',
  'export default x;',
  'export const foo = async function() { }',
  'export function async() { }',
  'export function func() { };',
  'export class C { };',
  'export class A extends B {};',
  'export default class A extends B {};',
  'export { };',
  'export let a3 = 3;',
  'export function set(x) { value = x };',
  'export let value = 0;',
  'export default function*() {}',
  'export function foo() { return 42 }',
  'export default 42;',
  'export let a = 1;',
  'export function set_a(x) { a = x };',
  'export function get_a() { return a };',
  'export {get}; function get() {};',
  'export default x;',
  'export function* v() { return 40 }',
  'export var w = 41;',
  'export let x = 42;',
  'export class y {};',
  'export const z = "hello world";',
  'function f() {}; f(); export { f };',
  'export let x = 0;',
  "export { a as b } from 'm.js';",
  "export * from 'p.js';",
  'export var foo;',
  'export default class cName { valueOf() { return 45; } }',
  'export function goo() {};',
  'export let hoo;',
  'export const joo = 42;',
  'export default (function koo() {});',
  'export var y = 0;',
  'export const z = 0;',
  'export function func() { };',
  'export class C { };',
  'export { };',
  'export function foo () { return "foo"; }',
  'export const boo = 5;',
  'import {ns} from "three";',
  'export let x = 0;',
  'export var y = 0;',
  'export const z = 0;',
  'export default x;',
  'export function func() { };',
  'export class C { };',
  'export var j = 42;',
  'export let k = 42;',
  'export function l() {}',
  'export default function () {}',
  'export default class extends C {}',
  'export default 42',
  'var x; export default x = 7',
  "export { Q } from 'somemodule.js';",
  "export * from 'somemodule.js';",
  'var foo; export { foo as for };',
  "export { arguments } from 'm.js';",
  "export { for } from 'm.js';",
  "export { yield } from 'm.js'",
  "export { static } from 'm.js'",
  "export { let } from 'm.js'",
  "export * as arguments from 'm.js'",
  "export * as await from 'm.js'",
  "export * as default from 'm.js'",
  "export * as foo from 'm.js'",
  "export * as for from 'm.js'",
  "export * as let from 'm.js'",
  "export * as static from 'm.js'",
  "export * as yield from 'm.js'",
  'export default [];',
  'export default 42;',
  'export default { foo: 1 };',
  'export * from "foo";',
  'export * as A from "test";',
  'export {default} from "foo";',
  'export {foo as bar} from "foo";',
  'export function *foo () {}',
  'export function x(){}; export let [z] = y;',
  'export var a = x, b = y;',
  'export var foo = 1;',
  'var a; export { a as b, a as c };',
  'var a; export { a as await };',
  'var a; export { a as enum };',
  "export {thing}; import thing from 'a.js';",
  "export {thing}; import {thing} from 'a.js';",
  "export {thing}; import * as thing from 'a.js';",
  "export { a as b } from 'm.js';",
  "export * from 'p.js';",
  'export var foo;',
  'export function goo() {};',
  'export let hoo;',
  `export default class { constructor() {	foo() } a() {	bar()	}	}`,
  'export const joo = 42;',
  'export default (function koo() {});',
  'export { };',
  'export {get}; function get() {};',
  'function f() {}; f(); export { f };',
  'var a, b, c; export { a, b as baz, c };',
  'var d, e; export { d as dreary, e, };',
  'export default function f() {}',
  'export default function *a() {}',
  'export var foo = function () {};',
  'var a, b, c; export { a, b as baz, c };',
  'var d, e; export { d as dreary, e, };',
  'export default function*() {}',
  'export default class C {}',
  'export default class {}',
  'export default class extends C {}',
  'export default 42',
  `export var x;
  x = 'Pass';`,
  'var x; export default x = 7',
  "export { Q } from 'somemodule.js';",
  "export * from 'somemodule.js';",
  'var foo; export { foo as for };',
  "export { arguments } from 'm.js';",
  "export { for } from 'm.js';",
  "export { yield } from 'm.js'",
  "export { static } from 'm.js'",
  "export { let } from 'm.js'",
  'var a; export { a as b, a as c };',
  'var a; export { a as await };',
  'var a; export { a as enum };',
  'var a, b, c; export { a, b as baz, c };',
  'var d, e; export { d as dreary, e, };',
  'export default function *a() {}',
  'export let x = 0;',
  'export var y = 0;',
  'export const z = 0;',
  'export function func() { };',
  'export class C { };',
  'export { };',
  'function f() {}; f(); export { f };',
  'var a, b, c; export { a, b as baz, c };',
  'var d, e; export { d as dreary, e, };',
  'export default function f() {}',
  'export default class {}',
  'export default class extends C {}',
  'export default 42',
  'var x; export default x = 7',
  "export * from 'somemodule.js';",
  'var foo; export { foo as for };',
  "export { arguments } from 'm.js';",
  "export { yield } from 'm.js'",
  'export default function f(){}; export {f};',
  'export default async function f(){}; export {f};',
  "export { static } from 'm.js'",
  "export { let } from 'm.js'",
  'var a; export { a as b, a as c };',
  'var a; export { a as await };',
  'var a; export { a as enum };',
  'export var document',
  'export var document = {}',
  'export var document',
  'export default 42',
  'export default class A {}',
  'export default (class{});',
  'export default /foo/',
  'export var namedOther = null;',
  'export var starAsVarDecl;',
  'export let starAsLetDecl;',
  'export const starAsConstDecl = null;',
  'export function starAsFuncDecl() {}',
  'export function* starAsGenDecl() {}',
  'export class starAsClassDecl {}',
  'export default class Foo {}++x',
  "export { x as y } from './y.js';\nexport { x as z } from './z.js';",
  "export { default as y } from './y.js';\nexport default 42;",
  'export default function(x) {};',
  'export default function () { };',
  'export default function _fn2 () { }',
  'class c { }; export default c',
  "var _ = { method: function() { return 'method_result'; }, method2: function() { return 'method2_result'; } }; export default _",
  'var a; export default a = 10;',
  'export default () => 3',
  'function _default() { }; export default _default',
  'export let a, [...x] = y',
  'export let [...x] = y',
  // Named generator function statement
  'function* g() { }; export default g',
  'class c { }; export default c',
  "var _ = { method: function() { return 'method_result'; }, method2: function() { return 'method2_result'; } }; export default _",
  'export default async \nfunction f(){}',
  "export const const2 = 'str';",
  'export const const3 = 3, const4 = 4;',
  'export const const5 = { }',
  'export const const6 = [ ]',
  'export {};',
  "export var var1 = 'string';",
  "export default 'default';",
  'export var var2;',
  'export var var3 = 5, var4',
  'export var var5, var6, var7',
  'export default 1;',
  'var a; export default a = 10;',
  'function _default() { }; export default _default',
  'function* g() { }; export default g',
  'export function *g() { } if (true) { }',
  'export class c1 { } if (true) { }',
  'export default function* _gn2 () { } if (true) { }',
  'export default class _cl2 { } if (true) { }',
  'export default function _fn2 () { } if (true) { }',
  'class c { }; export default c',
  'export async function f(){}; const z = foo;',
  'const f = foo; export async function z(){};',
  'export let x = y, {...z} = y;',
  'export let x = y, [...z] = y;',
  'export let [x] = y; export function z(){};',
  'export function x(){}; export let [z] = y;',
  'export class f {}; export function y() {}',
  'export class f {}; export function y() {}',
  'export default function () {}',
  'export default class {}',
  'export var a = x, b = y;',
  'export let [x, z] = y;',
  "var _ = { method: function() { return 'method_result'; }, method2: function() { return 'method2_result'; } }; export default _",
  `export{};
    export {};
    export {}
    export { };
    export
    {
    };
    export//-
    {//-
    //-
    };
    export/**/{/**/};`,
  `import {} from 'a';
    import 'b';
    import * as ns1 from 'c';
    import dflt1 from 'd';
    export {} from 'e';
    import dflt2, {} from 'f';
    export * from 'g';
    import dflt3, * as ns2 from 'h';`,
  'var a; export { a as b };',
  'export default 1',
  'export var {x} = a, {y} = obj;',
  'export var {x} = a, y = obj;',
  'export default () => {}',
  'export { encrypt }\nvar encrypt',
  'function encrypt() {} let decrypt; export { encrypt, decrypt }',
  `export const foo = async function() { }`,
  `export class A extends B {};`,
  `export let a3 = 3;`,
  `export function set(x) { value = x };`,
  `export let value = 0;`,
  `export default function*() {}`,
  `export let x = 42;`,
  `function f() {}; f(); export { f };`,
  `export { a as b } from 'm.js';`,
  `export default class cName { valueOf() { return 45; } }`,
  `export default (function koo() {});`,
  `export * as arguments from 'm.js'`,
  `export * as default from 'm.js'`,
  `export default { foo: 1 };`,
  `var a; export { a as b, a as c };`,
  `export {thing}; import {thing} from 'a.js';`,
  `export default class { constructor() {	foo() } a() {	bar()	}	}`,
  `export const joo = 42;`,
  `var a, b, c; export { a, b as baz, c };`,
  `export default async function f(){}; export {f};`,
  `export const const6 = [ ]`,
  `function* baz() { }`,
  `function _default() { }; export default _default`,
  `class c { }; export default c`,
  `export let [x] = y; export function z(){};`,
  `export default async function() {}`,
  `export default () => x`,
  `export default async function(){} foo`,
  `export default async function f(){} foo`,
  `export default class {} foo`,
  `export default class {} foo`,
  `export default function f(){} foo`,
  `export class x {} foo`,
  `export * as foo from 'bar';`,
  `export * from 'bar';`,
  `export * from 'bar';`,
  `export let {...x} = y`,
  `export let a, [...x] = y`,
  `export default function* f(){}`,
  `export default function(){}`,
  `export default a in b`,
  `export {}`,
  `export const x = 10, y = 20`,
  `export default x
  /y`,
  `export let x, y`,
  `export default null;`,
  `export default 15;`,
  `export {}
  /foo/`,
  `export {x}; var x;`,
  `var x; export {x as a}`,
  `var x; export {x as a,}`,
  `export default "foo";`,
  `var x,y; export {x, y}`,
  `var x,y; export {x as a, y as b}`,
  `var x,y; export {x as a, y as b,}`,
  `export var x`,
  `export var x = 10, y = 20`,
  `export default {x, y} = x`,
  `export * from 'foo'`,
  'export {x} from "foo"',
  `export {x,} from "foo"`,
  `export default x;`,
  `export let x, y`,
  `export var y = 0;`,
  `var x; export default x = 7`,
  `export {thing}; import * as thing from 'a.js';`,
  `export default class extends C {}`,
  `export let x = y, {...z} = y;`,
  `export default foo => bar`,
  `export default async = 1;`,
  `export * from 'bar';`,
  `export default (class{});`,
  `export default /foo/`,
  `export class Class {}`,
  `export default () => 3`,
  `export const const2 = 'str';`,
  `export { static } from 'm.js'`
]) {
  it(`${arg}`, () => {
    t.doesNotThrow(() => {
      parseModule(`${arg}`);
    });
  });
  it(`${arg}`, () => {
    t.doesNotThrow(() => {
      recovery(`${arg}`, 'recovery.js', { module: true });
    });
  });
}

describe('Module - Export', () => {
  it('export let x = 0;', () => {
    t.deepEqual(parseModule('export let x = 0;', { loc: true }), {
      type: 'Module',
      directives: [],
      leafs: [
        {
          type: 'ExportDeclaration',
          declaration: {
            type: 'LexicalDeclaration',
            isConst: false,
            declarations: [
              {
                type: 'LexicalBinding',
                binding: {
                  type: 'BindingIdentifier',
                  name: 'x',
                  start: 11,
                  end: 12
                },
                initializer: {
                  type: 'NumericLiteral',
                  value: 0,
                  start: 15,
                  end: 16
                },
                start: 11,
                end: 16
              }
            ],
            start: 7,
            end: 17
          },
          namedExports: [],
          namedBinding: null,
          fromClause: null,
          start: 0,
          end: 17
        }
      ],
      start: 0,
      end: 17
    });
  });

  it('export const z = 0;', () => {
    t.deepEqual(parseModule('export const z = 0;', { loc: true }), {
      type: 'Module',
      directives: [],
      leafs: [
        {
          type: 'ExportDeclaration',
          declaration: {
            type: 'LexicalDeclaration',
            isConst: true,
            declarations: [
              {
                type: 'LexicalBinding',
                binding: {
                  type: 'BindingIdentifier',
                  name: 'z',
                  start: 13,
                  end: 14
                },
                initializer: {
                  type: 'NumericLiteral',
                  value: 0,
                  start: 17,
                  end: 18
                },
                start: 13,
                end: 18
              }
            ],
            start: 7,
            end: 19
          },
          namedExports: [],
          namedBinding: null,
          fromClause: null,
          start: 0,
          end: 19
        }
      ],
      start: 0,
      end: 19
    });
  });

  // it('export default async function() {}', () => {
  // t.deepEqual(parseModule('export default async function() {}', { loc: true}), {});
  // });

  it('export default x;', () => {
    t.deepEqual(parseModule('export default x;', { loc: true }), {
      type: 'Module',
      directives: [],
      leafs: [
        {
          type: 'ExportDefault',
          declaration: {
            type: 'IdentifierReference',
            name: 'x',
            start: 15,
            end: 16
          },
          start: 0,
          end: 17
        }
      ],
      start: 0,
      end: 17
    });
  });

  it('export class C { };', () => {
    t.deepEqual(parseModule('export class C { };', { loc: true }), {
      type: 'Module',
      directives: [],
      leafs: [
        {
          type: 'ExportDeclaration',
          declaration: {
            type: 'ClassDeclaration',
            name: {
              type: 'BindingIdentifier',
              name: 'C',
              start: 13,
              end: 14
            },
            heritage: null,
            elements: [],
            start: 7,
            end: 18
          },
          namedExports: [],
          namedBinding: null,
          fromClause: null,
          start: 0,
          end: 18
        },
        {
          type: 'EmptyStatement',
          start: 18,
          end: 19
        }
      ],
      start: 0,
      end: 19
    });
  });

  it('export { };', () => {
    t.deepEqual(parseModule('export { };', { loc: true }), {
      type: 'Module',
      directives: [],
      leafs: [
        {
          type: 'ExportDeclaration',
          declaration: null,
          namedExports: [],
          namedBinding: null,
          fromClause: null,
          start: 0,
          end: 10
        },
        {
          type: 'EmptyStatement',
          start: 10,
          end: 11
        }
      ],
      start: 0,
      end: 11
    });
  });

  it('export {get};', () => {
    t.deepEqual(parseModule('export {get};', { loc: true }), {
      type: 'Module',
      directives: [],
      leafs: [
        {
          type: 'ExportDeclaration',
          declaration: null,
          namedExports: [
            {
              type: 'ExportSpecifier',
              name: {
                type: 'IdentifierName',
                name: 'get',
                start: 8,
                end: 11
              },
              binding: null,
              start: 8,
              end: 11
            }
          ],
          namedBinding: null,
          fromClause: null,
          start: 0,
          end: 12
        },
        {
          type: 'EmptyStatement',
          start: 12,
          end: 13
        }
      ],
      start: 0,
      end: 13
    });
  });

  it('export class y {};', () => {
    t.deepEqual(parseModule('export class y {};', { loc: true }), {
      type: 'Module',
      directives: [],
      leafs: [
        {
          type: 'ExportDeclaration',
          declaration: {
            type: 'ClassDeclaration',
            name: {
              type: 'BindingIdentifier',
              name: 'y',
              start: 13,
              end: 14
            },
            heritage: null,
            elements: [],
            start: 7,
            end: 17
          },
          namedExports: [],
          namedBinding: null,
          fromClause: null,
          start: 0,
          end: 17
        },
        {
          type: 'EmptyStatement',
          start: 17,
          end: 18
        }
      ],
      start: 0,
      end: 18
    });
  });

  it('export { a as b } from "x";', () => {
    t.deepEqual(parseModule('export { a as b } from "x";', { loc: true }), {
      type: 'Module',
      directives: [],
      leafs: [
        {
          type: 'ExportDeclaration',
          declaration: null,
          namedExports: [
            {
              type: 'ExportSpecifier',
              name: {
                type: 'IdentifierName',
                name: 'a',
                start: 9,
                end: 10
              },
              binding: {
                type: 'IdentifierName',
                name: 'b',
                start: 14,
                end: 15
              },
              start: 9,
              end: 15
            }
          ],
          namedBinding: null,
          fromClause: {
            type: 'StringLiteral',
            value: 'x',
            start: 23,
            end: 26
          },
          start: 0,
          end: 26
        },
        {
          type: 'EmptyStatement',
          start: 26,
          end: 27
        }
      ],
      start: 0,
      end: 27
    });
  });

  it('export const joo = 42;', () => {
    t.deepEqual(parseModule('export const joo = 42;', { loc: true }), {
      type: 'Module',
      directives: [],
      leafs: [
        {
          type: 'ExportDeclaration',
          declaration: {
            type: 'LexicalDeclaration',
            isConst: true,
            declarations: [
              {
                type: 'LexicalBinding',
                binding: {
                  type: 'BindingIdentifier',
                  name: 'joo',
                  start: 13,
                  end: 16
                },
                initializer: {
                  type: 'NumericLiteral',
                  value: 42,
                  start: 19,
                  end: 21
                },
                start: 13,
                end: 21
              }
            ],
            start: 7,
            end: 22
          },
          namedExports: [],
          namedBinding: null,
          fromClause: null,
          start: 0,
          end: 22
        }
      ],
      start: 0,
      end: 22
    });
  });

  it('export * from "x"', () => {
    t.deepEqual(parseModule('export * from "x"', { loc: true }), {
      type: 'Module',
      directives: [],
      leafs: [
        {
          type: 'ExportDeclaration',
          declaration: null,
          namedExports: [],
          namedBinding: null,
          fromClause: {
            type: 'StringLiteral',
            value: 'x',
            start: 14,
            end: 17
          },
          start: 0,
          end: 17
        }
      ],
      start: 0,
      end: 17
    });
  });
});
