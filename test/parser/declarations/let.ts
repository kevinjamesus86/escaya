import * as t from 'assert';
import { parseScript, recovery } from '../../../src/escaya';

describe('Declarations - Let', () => {
  // Invalid cases
  for (const arg of [
    'let [o.x=1]=[]',
    'let let',
    'const let',
    'let {}',
    'let [a, let, b] = [1, 2, 3];',
    'let ];',
    'let foo, [bar];',
    '"use strict"; let;',
    'let [foo];',
    'let [...,] = obj;',
    'let [...bar = foo] = obj;',
    'let [...foo,,] = obj;',
    //'let {x:o.f=1}={x:1}',
    // 'let [(x) = y] = [];',
    'let []',
    //'let [(x)] = [];',
    'let [({x: 1})] = [];',
    'let {,,} = obj;',
    'if (1) let x = 10;',
    'let a; [a--] = [];',
    'let [...foo,] = obj;',
    'let [...foo,,] = obj;',
    'let [.x] = obj;',
    'let [...[foo, bar],] = obj;',
    'let a; [...a = 1] = [];',
    'let\neval(foo)',
    'let a; [((a)] = [];',
    'let [((a)] = [];',
    'a = { let {x} }',
    'let[x].foo in x;',
    'let in x',
    'function foo() { return {}; }; let [foo().x] = [];',
    'function foo() { return {}; }; [foo()] = [];',
    'let {x:y=z}, {a:b=c} = obj;',
    'let b = async () => []; for (a in await b());',
    'let x = y, {z};',
    'let x, {y};',
    'let await 0',
    'let {x};',
    'let [[(a)], ((((((([b])))))))] = [[],[]];',
    'let [...a = 1] = [];',
    'let a; [...a = 1] = [];',
    'let [a--] = [];',
    'let [++a] = [];',
    'let {[x]} = z;',
    'let {[x]};',
    'let {...obj1,a} = foo',
    'let {...obj1,...obj2} = foo',
    'let {...(obj)} = foo',
    'let {...(a,b)} = foo',
    'let {...{a,b}} = foo',
    'let {...[a,b]} = foo',
    'let {...let} = {a: 1, b: 2};',
    'let obj = {x:x?.1}; [...obj["x"]] = [10];',
    'let [...[...[...x?.a]]] = [x?.[[]]];',
    'let [...[...[...x?.a]]] = [[[]]];',
    'let [...[...[...x]]] = [?.a[[]]];',
    // 'do let [x] = 0; while (false);',
    'let [...x = []] = [];',
    'let {...{}} = {};',
    'let { ...x, y, z } = obj;',
    'for (let\nfoo);',
    'let {...obj1,} = foo',
    'let {...[a,b]} = foo',
    'for (let\nfoo());',
    /*`do let
    [x] = 0
    while (false);`,*/
    // 'for (let\nfoo();;);',
    'class x { foo() { let[foo]; }}',
    'function f(){ let[foo]; }',
    'let {foo: let = y} = x;',
    'let {foo: let} = x;',
    'let [a, let] = x;',
    'let [let = y] = x;',
    'let let;',
    //'let {let = y} = x;',
    `class x { foo() { let
      {foo}; }}`,
    `let
    debugger`,
    `let
    {foo};`,
    `let
    [foo];`,
    'let p/',
    'let foo,)',
    'while (x) let {} = y',
    'let {[x]: y};',
    'label: let x;'
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

  // Valid cases
  for (const arg of [
    'var let;',
    'var foo, let;',
    'let',
    'var {let} = x;',
    `do let
    while(x)`,
    'try { } catch (let) { }',
    'let {let: foo} = x;',
    `while (x) let
    {}`,
    'function let() { }',
    '(function let() { })',
    '(let).foo in x;',
    '(let) in x',
    'function foo(let) { }',
    'function foo(bar, let) { }',
    'let = 1;',
    'let await',
    'let private',
    'let protected',
    'var foo = let = 1;',
    'if (x) ; else let',
    `for (;;) let
    x = 1`,
    '_ => let[foo];',
    `_ => let
    {foo};`,
    'let();',
    'let ℮',
    'let * 2;',
    '++let;',
    'let++;',
    'let: 34',
    'let: while (true) continue let;',
    'let: let;',
    'foo: let: y;',
    'if (x) let: y;',
    '_ => { let: foo; }',
    'function f(){ let: foo; }',
    'let: foo;',
    `for (;;) let
    {}`,
    `if (x) let
    {}`,
    'function let(let) { let: let(let + let(0)); }',
    '({ let: 1 })',
    '({ get let() { 1 } })',
    'let(100)',
    'L: let\nx',
    'L: let\n{x}',
    'let',
    'let = 1',
    'for (let = 1; let < 1; let++) {}',
    'for (let in {}) {}',
    'for (var let = 1; let < 1; let++) {}',
    'for (var let in {}) {}',
    'for (var [let] = 1; let < 1; let++) {}',
    'for (var [let] in {}) {}',
    'var let',
    'let;',
    `let.let = foo`,
    'var [let] = []',
    'let f = /* before */async /* a */ ( /* b */ a /* c */ , /* d */ b /* e */ ) /* f */ => /* g */ { /* h */ ; /* i */ }/* after */;',
    'let g = /* before */async /* a */ ( /* b */ ) /* c */ => /* d */ 0/* after */;',
    'let h = /* before */async /* a */ a /* b */ => /* c */ 0/* after */;',
    'let [ , , ...x] = [1, 2, 3, 4, 5];',
    'let test262id8;',
    'let a1; [a1] = [1]',
    'let [...rest2] = [1, 2, 3, 4, 5];',
    'let [a4, b4, c4, ...rest4] = [1, 2, 3];',
    'let a1; [[a1]] = [[1]];',
    'let a1; [[a1, b1] = [1, 2]] = [];',
    'let a1; [a1, b1, c1, d1, ...rest1] = "testing";',
    'let arrow = () => {};',
    `let x = class x {};
  let y = class {};
  let z = class { static name() {} };`,
    'let [{ a }, { b }, { c = "" }] = [a, b, c];',
    'let [{ x }] = [x];',
    'let [[x]] = [null];',
    'let [x = 23] = [undefined];',
    'let [{ x, y, z } = { x: 44, y: 55, z: 66 }] = [];',
    'let [,] = function* g() { first += 1;  second += 1; };',
    'let [ , , ...x] = [1, 2, 3, 4, 5];',
    'let { arrow = () => {} } = {};',
    'let { w: { x, y, z } = { x: 4, y: 5, z: 6 } } = { w: { x: undefined, z: 7 } };',
    'function foo() { var let = 1, test = 2; }',
    'let [arrow = () => {}] = [];',
    'let [{ x, y, z } = { x: 44, y: 55, z: 66 }] = [{ x: 11, y: 22, z: 33 }];',
    'let [{ x }] = [];',
    'let [...x] = [1, 2, 3];',
    'let z = {...x}',
    'z = {x, ...y}',
    'let { x, } = { x: 23 };',
    'let [a,] = 0;',
    'let [...[x]] = y',
    'let a; [[a]] = [[]];',
    'let [[a]] = [[]];',
    'let [a, [b]] = [1, []];',
    'let a, b; [((((a)))), b] = [];',
    'let [[[...a]]] = [[[]]];',
    'let {} = 0',
    'let x  ;\n',
    'let _a = 5;\n',
    'let {a:{}} = 0',
    'let x = 5, y = 6;',
    'let x = 5, y = fcall();',
    'let x = 5, y = 6, z = 7;',
    'let $ = 5;',
    'let x = 5, a = 6, z = 7;',
    'let x = 5, y = 6, a = 7;',
    'let x = /* bef */5 + 3/* aft */;',
    'let [x, ...[a, b]] = obj;',
    'let x = y + 5;',
    'let x=y + 5;',
    'let [[a]=[1]] = [[2]];',
    'let/foo/g',
    `{ let x = 5; let y = 6; }`,
    'let {a,b=0,c:d,e:f=0,[g]:[h]}=0',
    'let [...a] = 0;',
    'let [a,,]=0',
    'let [{a}] = 0',
    'let { x: y = 33 } = { };',
    'let { x: y } = { x: 23 };',
    'let { x, y, } = obj;',
    'let { w: { x, y, z } = { x: 4, y: 5, z: 6 } } = { w: null };',
    'let {a, b, ...rest} = {x: 1, y: 2, a: 5, b: 3};',
    `let a = "a";
  let b = "b";
  let { x, y, } = obj;
  for (let x = "x", i = 0; i < 1; i++) { let y = "y"; }`,
    '[1 <= 0]',
    'let [1 <= 0] = "foo"',
    'let a; [a] = [];',
    'let a, b; [a, b] = [1];',
    'let [a] = [1, 2];',
    'let a; [a,] = [];',
    'let a; [,,a] = [];',
    'let [a] = [,,];',
    'let a; [...a] = [];',
    'let a; [a = 1] = [];',
    'let [[a]] = [[]];',
    'let a, b; [a, [b]] = [1, []];',
    'let [[[...a]]] = [[[]]];',
    'let b = async () => [];',
    'let [[...a], ...b] = [[],];',
    'let a = {}; [a.x] = [];',
    'let a; [a, a] = [];',
    'let [[...x] = [2, 1, 3]] = [];',
    'let [[] = function() {}()] = [[23]];',
    'let [[] = function() { return function*() {}(); }()] = [];',
    'let [foo] = arr;',
    'let [,] = x;',
    `if (false) {
    L: let // ASI
    x = 1;
  }`,
    `if (false) {
    L: let // ASI
    x = 1;
  }`,
    `if (false) {
    L: let // ASI
    x = 1;
  }`,
    'for (;let;);',
    'let.foo;',
    'let {let: foo} = x;',
    'let {a, let: foo} = x;',
    'let();',
    'let [x, ...[foo, bar]] = obj;',
    'let {} = obj;',
    'let {x} = obj;',
    'let {x, y} = obj;',
    `a = let;
  []`,
    'let [,,] = x;',
    'letarguments',
    'letarguments.length',
    'let\nawait',
    'let\nimplements',
    'let\ninterface',
    'letpackage',
    'letprivate',
    'letyield',
    'let eval',
    'let eval',
    'let implements',
    'let eval',
    'let\nfoo',
    'let\n[foo]\r=\n2\n;',
    'let foo = bar, zoo = boo',
    'let foo = bar',
    'let foo = bar;',
    'let foo, bar',
    'let foo, bar;',
    'let foo;',
    'let {foo} = x, b = y;',
    'let {foo} = x, {bar} = y;',
    'let [foo,bar=b] = x;',
    'let x = y, [foo] = z;',
    'let [foo,bar] = x;',
    `while (x) let
    {}`,
    'let [foo] = x;',
    'let [foo] = arr, [bar] = arr2;',
    'let [foo] = arr, bar;',
    'let [foo] = arr, bar = arr2;',
    'let foo, [bar] = arr2;',
    'let foo = arr, [bar] = arr2;',
    'let [foo=a] = arr;',
    'let [foo=a, bar] = arr;',
    'let [foo, bar=b] = arr;',
    'let [foo=a, bar=b] = arr;',
    'let [foo, ...bar] = obj;',
    'let [...[foo, bar]] = obj;',
    'let [x, ...[foo, bar]] = obj;',
    'let [a=[...b], ...c] = obj;',
    'let {} = obj;',
    'let {x} = obj;',
    'let {x, y} = obj;',
    'let {x} = a, {y} = obj;',
    'let {x} = a, y = obj;',
    'let {x} = a, obj;',
    'let x = a, {y} = obj;',
    'let x, {y} = obj;',
    'let {x = y, z} = obj;',
    'let {x = y} = obj;',
    'let {x, y = z} = obj;',
    'let {x = y, z = a} = obj;',
    'let {x : y} = obj;',
    'let {x : y, z} = obj;',
    'let {x, y : z} = obj;',
    'let {x : y, z : a} = obj;',
    'let {x : y = z} = obj;',
    `let a = b?.c;`,
    'let {x : y, z, a : b = c} = obj;',
    'let {[x]: y} = z;',
    'let {[x]: y} = z;',
    'let {[x]: y = z} = a;',
    'let, lot',
    'let {a, [x]: y} = a;',
    'let [foo,,] = x;',
    'let [foo] = x, b;',
    'let obj = { 1: 1, 2: 2, 3: 3, 4: 4 };',
    'for (let foo = bar, zoo = boo;;);',
    'for (let foo in x);',
    'for (let\nfoo;;);',
    'for (let\nfoo in x);',
    'for (let foo of x);',
    'for (let\nfoo of x);',
    'for (let [] = x;;);',
    'let [] = x;',
    'let [foo,,] = arr;',

    'let x = {y=z} = d',
    'let x = ({y=z}) => d',
    'let x = ({y=z}=e) => d',

    'let { w = a(), x = b(), y = c(), z = d() } = { w: null, x: 0, y: false, z: "" };',
    'let { fn = function () {}, xFn = function x() {} } = {};',
    'switch (true) { case true: let x = 1; }',
    `let a = [];
  for (let i = 0; i < 5; a.push(function () { return i; }), ++i) { }
  for (let k = 0; k < 5; ++k) {
  }`,
    'let { x, } = { x: 23 };',
    'let { w: [x, y, z] = [4, 5, 6] } = {};',
    'let { w: [x, y, z] = [4, 5, 6] } = { w: [7, undefined, ] };',
    'let { x: y = 33 } = { };',
    'let { x: y, } = { x: 23 };',
    'let x',
    'let x = 1',
    'let a, x\\u{E01D5}',
    'let xCls = class x {};',
    'let cls = class {};',
    'let\n{x} = x;',
    `let x = {y=z} = d`,
    'let x = () => ++a;',
    'let x = () => ++\na;',
    'let',
    `let x = ({y=z}) => d`,
    'let {x}\n= x;',
    'let xCls2 = class { static name() {} };',
    'let { s: t = a(), u: v = b(), w: x = c(), y: z = d() } = { s: null, u: 0, w: false, y: "" };',
    'let {} = obj;',
    'let {} = undefined;',
    'let {} = obj;',
    'let {} = undefined;',
    'let [, , ...x] = [1, 2];',
    'let test262id8;',
    'foo: let: y;',
    'let {a, b, c} = {}, e, f;',
    'let {a, b} = {}, c = 0;',
    'let {a, b} = c, d;',
    'let {a, b, c} = {}, e, f;',
    'if (1) let\n{}',
    'let {a, b} = {}, c = 0;'
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

  it('const [foo=a,bar=b] = x;', () => {
    t.deepEqual(parseScript('const [foo=a,bar=b] = x;'), {
      type: 'Script',
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          kind: 'const',
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ArrayBindingPattern',
                leafs: [
                  {
                    type: 'AssignmentPattern',
                    left: {
                      type: 'BindingIdentifier',
                      name: 'foo'
                    },
                    right: {
                      type: 'BindingIdentifier',
                      name: 'a'
                    }
                  },
                  {
                    type: 'AssignmentPattern',
                    left: {
                      type: 'BindingIdentifier',
                      name: 'bar'
                    },
                    right: {
                      type: 'BindingIdentifier',
                      name: 'b'
                    }
                  }
                ]
              },
              initializer: {
                type: 'IdentifierReference',
                name: 'x'
              }
            }
          ]
        }
      ],
      webCompat: true
    });
  });

  it('const x = y, {foo} = z;', () => {
    t.deepEqual(parseScript('const x = y, {foo} = z;'), {
      type: 'Script',
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          kind: 'const',
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'BindingIdentifier',
                name: 'x'
              },
              initializer: {
                type: 'IdentifierReference',
                name: 'y'
              }
            },
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [
                  {
                    type: 'BindingIdentifier',
                    name: 'foo'
                  }
                ]
              },
              initializer: {
                type: 'IdentifierReference',
                name: 'z'
              }
            }
          ]
        }
      ],
      webCompat: true
    });
  });

  it('const { a: { ...bar }, b: { ...baz }, ...foo } = obj;', () => {
    t.deepEqual(parseScript('const { a: { ...bar }, b: { ...baz }, ...foo } = obj;'), {
      type: 'Script',
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          kind: 'const',
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [
                  {
                    type: 'BindingProperty',
                    key: {
                      type: 'BindingIdentifier',
                      name: 'a'
                    },
                    value: {
                      type: 'ObjectBindingPattern',
                      properties: [
                        {
                          type: 'BindingRestProperty',
                          argument: {
                            type: 'BindingIdentifier',
                            name: 'bar'
                          }
                        }
                      ]
                    },
                    computed: false
                  },
                  {
                    type: 'BindingProperty',
                    key: {
                      type: 'BindingIdentifier',
                      name: 'b'
                    },
                    value: {
                      type: 'ObjectBindingPattern',
                      properties: [
                        {
                          type: 'BindingRestProperty',
                          argument: {
                            type: 'BindingIdentifier',
                            name: 'baz'
                          }
                        }
                      ]
                    },
                    computed: false
                  },
                  {
                    type: 'BindingRestProperty',
                    argument: {
                      type: 'BindingIdentifier',
                      name: 'foo'
                    }
                  }
                ]
              },
              initializer: {
                type: 'IdentifierReference',
                name: 'obj'
              }
            }
          ]
        }
      ],
      webCompat: true
    });
  });

  it('const [ a, ...bar ] = foo;', () => {
    t.deepEqual(parseScript('const [ a, ...bar ] = foo;'), {
      type: 'Script',
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          kind: 'const',
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ArrayBindingPattern',
                leafs: [
                  {
                    type: 'BindingIdentifier',
                    name: 'a'
                  },
                  {
                    type: 'BindingRestElement',
                    argument: {
                      type: 'BindingIdentifier',
                      name: 'bar'
                    }
                  }
                ]
              },
              initializer: {
                type: 'IdentifierReference',
                name: 'foo'
              }
            }
          ]
        }
      ],
      webCompat: true
    });
  });

  it('const { [eval]: []} = a;', () => {
    t.deepEqual(parseScript('const { [eval]: []} = a;'), {
      type: 'Script',
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          kind: 'const',
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [
                  {
                    type: 'BindingProperty',
                    key: {
                      type: 'IdentifierReference',
                      name: 'eval'
                    },
                    value: {
                      type: 'ArrayBindingPattern',
                      leafs: []
                    },
                    computed: true
                  }
                ]
              },
              initializer: {
                type: 'IdentifierReference',
                name: 'a'
              }
            }
          ]
        }
      ],
      webCompat: true
    });
  });

  it('const {foo=a,bar=b} = x;', () => {
    t.deepEqual(parseScript('const {foo=a,bar=b} = x;'), {
      type: 'Script',
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          kind: 'const',
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [
                  {
                    type: 'BindingElement',
                    binding: {
                      type: 'BindingIdentifier',
                      name: 'foo'
                    },
                    initializer: {
                      type: 'IdentifierReference',
                      name: 'a'
                    }
                  },
                  {
                    type: 'BindingElement',
                    binding: {
                      type: 'BindingIdentifier',
                      name: 'bar'
                    },
                    initializer: {
                      type: 'IdentifierReference',
                      name: 'b'
                    }
                  }
                ]
              },
              initializer: {
                type: 'IdentifierReference',
                name: 'x'
              }
            }
          ]
        }
      ],
      webCompat: true
    });
  });

  it('const {x} = a, {y} = obj;', () => {
    t.deepEqual(parseScript('const {x} = a, {y} = obj;'), {
      type: 'Script',
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          kind: 'const',
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [
                  {
                    type: 'BindingIdentifier',
                    name: 'x'
                  }
                ]
              },
              initializer: {
                type: 'IdentifierReference',
                name: 'a'
              }
            },
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [
                  {
                    type: 'BindingIdentifier',
                    name: 'y'
                  }
                ]
              },
              initializer: {
                type: 'IdentifierReference',
                name: 'obj'
              }
            }
          ]
        }
      ],
      webCompat: true
    });
  });

  it('const [x, ...[foo, bar]] = obj;', () => {
    t.deepEqual(parseScript('const [x, ...[foo, bar]] = obj;'), {
      type: 'Script',
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          kind: 'const',
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ArrayBindingPattern',
                leafs: [
                  {
                    type: 'BindingIdentifier',
                    name: 'x'
                  },
                  {
                    type: 'BindingRestElement',
                    argument: {
                      type: 'ArrayBindingPattern',
                      leafs: [
                        {
                          type: 'BindingIdentifier',
                          name: 'foo'
                        },
                        {
                          type: 'BindingIdentifier',
                          name: 'bar'
                        }
                      ]
                    }
                  }
                ]
              },
              initializer: {
                type: 'IdentifierReference',
                name: 'obj'
              }
            }
          ]
        }
      ],
      webCompat: true
    });
  });

  it('const {[a.b]: c} = v;', () => {
    t.deepEqual(parseScript('const {[a.b]: c} = v;'), {
      type: 'Script',
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          kind: 'const',
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [
                  {
                    type: 'BindingProperty',
                    key: {
                      type: 'MemberExpression',
                      member: {
                        type: 'IdentifierReference',
                        name: 'a'
                      },
                      expression: {
                        type: 'IdentifierName',
                        name: 'b'
                      },
                      computed: false
                    },
                    value: {
                      type: 'BindingIdentifier',
                      name: 'c'
                    },
                    computed: true
                  }
                ]
              },
              initializer: {
                type: 'IdentifierReference',
                name: 'v'
              }
            }
          ]
        }
      ],
      webCompat: true
    });
  });

  it('const x = class x {};', () => {
    t.deepEqual(parseScript('const x = class x {};'), {
      type: 'Script',
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          kind: 'const',
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'BindingIdentifier',
                name: 'x'
              },
              initializer: {
                type: 'ClassExpression',
                name: {
                  type: 'BindingIdentifier',
                  name: 'x'
                },
                super: null,
                leafs: []
              }
            }
          ]
        }
      ],
      webCompat: true
    });
  });
});