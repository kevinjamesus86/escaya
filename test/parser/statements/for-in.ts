import * as t from 'assert';
import { parseScript, recovery } from '../../../src/escaya';

describe('Statements - For in', () => {
  // Invalid cases
  for (const arg of [
    'for (x+b in y);',
    'for (b++ in y);',
    'for ([x + y] in obj);',
    'for ([x.y] = z in obj);',
    'for ([...x,] in [[]]);',
    'for ({} = y in y);',
    'for (x in a>c;;) x',
    'for (true ? 0 : 0 in {}; false; ) ',
    'for (...x in y){}',
    'for (const ...x in y){}',
    'for ({x=y}=x in x) ;',
    'for ((x = y) in z) ;',
    'for (x = y in z) ;',
    'for ({x} = y in z);',
    'for ({} = y in y);',
    'for ([{x = y}] ;;);',
    'for ({x=y};;);',
    'for ([...[a]] = 0 in {});',
    'for ({a: x, {b: x}} in obj);',
    'function *f(){   for (yield x in y in z);   }',
    'for ({ x: { set y(val) { }}?.y = 42} in [{x: 42}]) ;',
    'for ({ x: { set y(val) {} }?.y} in [{x: 42}]) ;',
    'for(delete(x in y) in z)x',
    'for (((a,b)) in c);',
    'for ((a,b) in c);',
    'for ((a?b:c) in y)z;',
    'for(delete((1)?y:x in y) in z)x',
    'for ([] = x in y);',
    'for (x = y in z) ;',
    'for (++a().b in c);',
    'for ({x} = z in obj);',
    'for ({a: x.y} = z in obj);',
    'for ({a: x + y} = z in obj);',
    'for (let [let] in obj);',
    'for (const [let] in obj);',
    'for ({a: x + y} in obj);',
    'for ([].bar = x in obj);',
    'for ({}.bar = x in obj);',
    'for ("foo".bar = x in obj);',
    'for (++a()[b] in c);',
    'for (a = b in c) {}',
    'for (var {,,x} in obj);',
    'for (var {x:y=z} = obj, {a:b=c});',
    'for (var {x:y=z}, {a:b=c} in obj);',
    'for (var {,} in obj);',
    'for (var x, {y});',
    'for (let {,x} in obj);',
    'for (a ? b : c in x);',
    'for ([x + y] = z in obj);',
    'for (let[x].foo in x);',
    'for (let [...foo,] in obj);',
    'for (let [.x] in obj);',
    'for (let [foo], bar);',
    'for (let foo, [bar]);',
    'for (let [..x] in obj);',
    'for (let [... ...foo] in obj);',
    'for (let [...[foo, bar],,] in obj);',
    'for (let [...foo, bar] in obj);',
    //'for (let foo, [bar] in arr);',
    //'for (let x, {y} in obj);',
    'for (let {x});',
    'for (x in { x : ++y } = {});',
    'for (x in { get x() {} } = {});',
    'for (x in { x: y() } = {});',
    //'for (let a, b, c in d){}',
    'for (let a = b in c; ;);',
    `for (a+b in c) d;`,
    `for (let + in y);`,
    //'for (let i = 20 in b) { }',
    //'for (const i = 20 in b) { }',
    'for (const {i} = 20 in b) { }',
    'for (let [foo]);',
    'for ([x] = z in obj);',
    'for (var a += 5 in b) break',
    'for (var (a) in b) { }',
    "for(var a,b '",
    'for (let [foo], bar in arr);',
    //'for (let [foo] = arr, [bar] in arr);',
    'for (()=>x in y);',
    'for ("foo".x += z in y);',
    'for ("foo".x = z in y);',
    'for (a++ in b) break',
    'for ((a++) in b) break',
    'for (++a in b) break',
    'for ((++a) in b) break',
    'for (a, b in c) break',
    'for (var a = 5 += 6 in b) break',
    'for ((++a) in b) break',
    'for (a, b in c) break',
    'for (new a in b in c in d) break',
    'function f() { for (new a in b in c in d) break }',
    'for (new new new a in b) break',
    'function f() { for (new new new a in b) break }',
    'for (delete new a() in b) break',
    'for (var a = (b in c in d) break',
    'for (/x/g + b in obj);',
    'for (a + b of obj);',
    'for ([] + b of obj);',
    'for ("abc" + b in obj);',
    'for (2 + b in obj);',
    'for ({} + b in obj);',
    'for ([] + b in obj);',
    'for (a + b in obj);',
    //'for (var {a: []} = 2 in []) { }',
    //'for (var [x] = [] in null);',
    //'for (var [x] = x in y) var x;',
    //    'for (var i, i2 in {});',
    'for (x in { x: new.target } = {});',
    'for (x in { import.meta } = {});',
    'for (x in [x()] = {});',
    'for (x in [--x = 1] = {});',
    'for (x in [x--] = {});',
    'for (x in [new.target] = {});',
    'for (x in [super = 1] = {});',
    'for (x in [function* f() {}] = {});',
    'for (x in [(50)] = {});',
    'for (x in [(async function() {})] = {});',
    'for (x in [(foo())] = {});',
    'for (x in { x: 50 } = {});',
    'for (x in { x: (foo()) } = {});',
    'for (x in { x: async function() {} } = {});',
    'for (x in { x: y } = "str" = {});',
    //'for (x in [(x,y) => z] = {});',
    //'for (x in [async x => z] = {});',
    //'for (x in {x: (y) => z} = {});',
    //'for (x in {x: (y,w) => z} = {});',
    //'for (x in {x: async (y,w) => z} = {});',
    //    'for (x in {x: async (y) => z} = {});',
    'for (--a()[b] in c);',
    'for (void a in c);',
    'for (void a[b] in c);',
    'for (x = 0 in {});',
    'for(o[0] = 0 in {});',
    'for ((a++) in c);',
    'for (+a().b in c);',
    'for (void a.b in c);',
    'for([] = 0 in {});',
    'for([,] = 0 in {});',
    'for([a = 0] = 0 in {});',
    'for([...a] = 0 in {});',
    'for([...[]] = 0 in {});',
    'for([...[a]] = 0 in {});',
    'for({} = 0 in {});',
    'for({p: x} = 0 in {});',
    'for({p: x = 0} = 0 in {});',
    'for({x} = 0 in {});',
    'for({x = 0} = 0 in {});',
    `for ("foo".x = y in y) {}`,
    `for ({}.x = y in y) {}`,
    'for ("foo".x in y',
    `for ([].x = y in y) {}`,
    'for (a() in b) break',
    'for(f() = 0 in {});',
    'for(({a}) in 0);',
    'for({x} = 0 in {});',
    'for ({p: x = 0} = 0 in {});',
    'for(([a]) in 0);',
    //'for(var [] = 0 in {});',
    //'for(var [,] = 0 in {});',
    //'for(var [a] = 0 in {});',
    //'for(var [a = 0] = 0 in {});',
    //'for(var [...a] = 0 in {});',
    'for (let() of y);',
    'for({}/=y in a)x',
    'for(let {p: x} = 0 in {});',
    'for(let {p: x = 0} = 0 in {});',
    'for(let {x} = 0 in {});',
    'for({a: 0} of 0);',
    'for (let {x}.y of x);',
    'for(let.a of 0);',
    'for(o[0] = 0 in {});',
    'for ((x=a?b:c) in y)z;',
    'for (5 in {});',
    "for ('x' in {});",
    'for (true in {});',
    'for (false in {});',
    'for (null in {});',
    'for (x in y of) ;',
    'for (let[a+b] in x);',
    //'for (let() in x);',
    'for (let [...{ x } = []] in [[]]) {}',
    'for(let a of b, c);',
    'for (let {x:y});',
    'for (const a,b,c;;);',
    'for (+a().b of c);',
    'for ([] = y in y);',
    'for ([x] = y in z);',
    'for ([x] = y of z);',
    'for (void a.b of c);',
    'for (let + in y);',
    'for (/foo/ in {});',
    `for ("foo".x = z in y);`,
    `for ("foo" in y);`,
    'for ([...[a]] = 0 in   {});',
    'for ([] = 0 in {});',
    'for ([...[a]] = 0 in {});',
    'for ({x} = 0 in {});',
    'for ({p: x = 0} = 0 in {});',
    'for([0] in 0);',
    'for({a: 0} in 0);',
    `for ({}.x);`,
    'for((0) in 0);',
    'for(([0]) in 0);',
    'for(({a: 0}) in 0);',
    'for(0 in 0);',
    'for (const [...,] = obj;;);',
    'for ([].x);',
    'for ([x] = y);',
    'for (var [foo]);',
    //'for (let i, j in {}) {}',
    'for (let {x}, {y} in z);',
    //'for (let i, j in [1, 2, 3]) {}',
    'for (x in [x, y, ...z = 1] = {});',
    'for (x in [...z = 1] = {});',
    'for (x in [x, y, ...[z] = [1]] = {});',
    'for (x in [...++x] = {});',
    'for (x in [...x--] = {});',
    'for (x in [...!x] = {});',
    'for (x in [...x + y] = {});',
    'for (x in (({ x: x4, x: (x+=1e4) })) = {});',
    'for (x in ({ x: x4, x: (x+=1e4) } = {}) = {});',
    'for (x in (({ x: x4, x: (x+=1e4) } = {})) = {});',
    'for (x in (({ x: x4, x: (x+=1e4) }) = {}) = {});',
    'for (x in ({ x: y } = {}) = {});',
    'for (x in (({ x: y } = {})) = {});',
    'for (x in (({ x: y }) = {}) = {});',
    'for (x in ([a]) = {});',
    'for (x in (([a])) = {});',
    'for (x in ([a] = []) = {});',
    'for (x in (([a] = [])) = {});',
    'for (x in (([a]) = []) = {});',
    'for (x in { x: ([y]) } = {});',
    'for (x in { x: ([y] = []) } = {});',
    'for (x in { x: ({y} = {}) } = {});',
    'for (x in [ ...([a]) ] = {});',
    'for (x in [ ...([a] = []) = {});',
    'for (x in [ ...[ ( [ a ] ) ] ] = {});',
    'for (x in [ ([a]) ] = {});',
    'for (x in [ (...[a]) ] = {});',
    'for (x in [ ([a] = []) ] = {});',
    'for (x in [ (++y) ] = {});',
    'for (x in [ ...(++y) ] = {});',
    'for (x in [ x += x ] = {});',
    // 'for (x in { foo: x += x } = {});',
    'for ((x)=>{}.x in y);',
    'for (((x)=>{}) in y);',
    'for ((x)=>{} in y);',
    'for (x=>{}.x in y);',
    'for (+a in c);',
    'for (+a.b in c);',
    'for (+a[b] in c);',
    'for (+a().b in c);',
    'for (+a()[b] in c);',
    'for (--a in c);',
    'for (--a.b in c);',
    'for (--a[b] in c);',
    'for (--a().b in c);',
    'for( in y);',
    'for(* in y);',
    'for(x* in y);',
    'for(a?b:x* in y);',
    'for(a?b:* in y);',
    'for(var x=a* in y);',
    'for(var x=u?i:a* in y);',
    'for(*;;);',
    'for(x*;;);',
    'for(a?b:x*;;);',
    'for(a?b:*;;);',
    'for(var x=u?i:a*;;);',
    'for(=x;;);',
    'for (var foo, /bar/ in x);',
    'for (a?b:(c in y))z;',
    'for ((c in y))z;',
    'for (x=0 in y);',
    'for ({ x: [(x, y)] } in [{ x: [] }]) ;',
    'for ({ x: { get x() {} } } in [{ x: {} }]) ;',
    'for (var key on bar);',
    'for (var key ik bar);',
    'for (var key inhere bar);',
    'for (var key instanceof bar);',
    'for (delete new a() in b) break',
    'for (a * a in b) break',
    'for ((a * a) in b) break',
    //'for (const x = 0 in y){}',
    'for (const let in y);',
    'for (let let in x);',
    //'for (let x = 0 in y){}',
    'do while',
    'do catch while',
    'do let {} = y',
    // 'do debugger while(x) x',
    // 'do x: function s(){}while(y)',
    // 'do foo while (bar);',
    'do async \n f(){}; while (y)',
    'do let x = 1; while (false)',
    'do async \n f(){}; while (y)',
    // 'do x, y while (z)',
    //'do foo while (bar);',
    //'do ()=>x while(c)',
    'do(x) { case y: {...x} } while',
    'do(x) { case y: foo /a/ while }',
    'do(x) { case y:{ class { x() {} } while }}',
    'do({x=y}) { case y: [...a]  while}'
  ]) {
    it(`${arg}`, () => {
      t.throws(() => {
        parseScript(`${arg}`, { loc: true });
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
    'for(x in y);',
    'for (x in [1,2,3]) {}',
    'for (x in {a: 1}) {}',
    'for ({j} in x) { let [foo] = [j] }',
    'for ([x] in [[1],[2],[3]]) {}',
    'for ([x] in {ab: 1}) {}',
    'for ([...x] in {ab: 1}) {}',
    'for (x in { x : foo().y } = {});',
    'for (x in { x : foo()[y] } = {});',
    'for (x in { x : y.z } = {});',
    'for (x in { x : y[z] } = {});',
    'for (x in { x : { y } } = {});',
    'for (x in { x : { foo: y } } = {});',
    'for (x in { x : { foo: foo().y } } = {});',
    'for (x in { x : { foo: foo()[y] } } = {});',
    'for (x in { x : { foo: y.z } } = {});',
    'for (x in { x : { foo: y[z] } } = {});',
    'for (yield in x);',
    'for (x in let) {}',
    'for (x in { x : [ y ] } = {});',
    'for (var {x, y = z} in obj);',
    'for (x in { x : [ foo().y ] } = {});',
    'for (x in { x : [ foo()[y] ] } = {});',
    'for (x in { x : [ y.z ] } = {});',
    'for (x in { x : [ y[z] ] } = {});',
    'for (x in { x : y = 10 } = {});',
    'for (x in { x : foo().y = 10 } = {});',
    `for ({a: b.c} in d) e`,
    `for ([a.b] of c) d`,
    `for (a in b=c);`,
    'for (x in { x : foo()[y] = 10 } = {});',
    'for (x in { x : y.z = 10 } = {});',
    'for (x in { x : y[z] = 10 } = {});',
    'for (x.y in { attr: null }) {}',
    'for ({}.x in y) {}',
    'for ([].bar in obj);',
    'for ((x) in { attr: null }) {}',
    'for (/foo/g[x] in c) d;',
    'for ("foo".x in y);',
    'for (/foo/g.x in c) d;',
    'for ({ eval = 0 } in [{}]) ;',
    'for (/foo/.x in c) d;',
    'for ("foo"[x] in c) d;',
    'for ("foo".x in c) d;',
    'for (true.x in c) d;',
    'for (456[x] in c) d;',
    'for (456..x in c) d;',
    'for (/foo/[x] in c) d;',
    'for ({}.b in c) d;',
    'for (var a in b);',
    'for (let in x) y',
    'for (var i = 1 in {}) {}',
    'for (var i = void 0 in [1, 2, 3]) {}',
    'for (var i = yield in [1, 2, 3]) {}',
    'for ({x=y} in a) b',
    'for ({x=y} of a) b',
    'for (let [,,foo] in arr);',
    'for (let [foo,,] in arr);',
    'for (let [,] in x);',
    `for (r in ((false))) {}`,
    'for ([x.y] in obj);',
    'for ([x] in obj);',
    'for ((let)[x] in x);',
    'for ([x] = y;;);',
    'for (let[x] in x);',
    'for ((let)[x].foo in x);',
    'for (let [...foo] in obj);',
    'for (x in { x : { y = 10 } = {} } = {});',
    'for (x in { x : { foo: y = 10 } = {} } = {});',
    'for (x in { x : { foo: foo().y = 10 } = {} } = {});',
    'for (x in { x : { foo: foo()[y] = 10 } = {} } = {});',
    'for (x in { x : { foo: y.z = 10 } = {} } = {});',
    'for (x in { x : { foo: y[z] = 10 } = {} } = {});',
    'for (x in { x : [ y = 10 ] = {} } = {});',
    'for (x in [ x.y ] = {});',
    'for (x in [ x[y] ] = {});',
    'for (let {x : y} in obj);',
    'for (let {x : y = z} in obj);',
    'for ("foo".bar in obj);',
    'for(let [a = 1, ...b] in []) {}',
    'for({a=0} in b);',
    'for(ind in (hash={2:"b",1:"a",4:"d",3:"c"}))__str+=hash[ind]',
    'for ([arguments] in [[]]) ;',
    'for (let x in null, { key: 0 }) {}',
    'for(let [a=b in c] in null);',
    'for(var a = 0 in b, c);',
    'for ([][b] in c) d;',
    'for ([].b in c) d;',
    'for ([] in y);',
    'for (x in [ { x : foo().y = 10 } = {} ] = z = {});',
    'for (x in { x : x, y : y = 42 } = z = {});',
    'for (x in [{x:x, y:y}, [,x,z,]] = z = {});',
    'for (x in [x,y,...z] = z = {});',
    'for (x in [(({ x } = { x: 1 }) => x).a] = z = {});',
    'for (x in [ (foo.bar) ] = z = {});',
    'for (x in {[1+1] : z} = z = {});',
    'for (x in {[1+1] : (z)} = z = {});',
    'for (x in {[foo()] : z} = z = {});',
    'for (x in {[foo()] : (z)} = z = {});',
    'for (var [,,foo] in arr);',
    'for (var [,foo] in arr);',
    'for ([a.b].foo in c) d',
    'for ({a: b.c}.foo in d) e',
    'for (x.y in [23]) {}',
    'for ((x.y) in [23]) {}',
    'for ([x.y] in [23]) {}',
    'for ([x].y in z);',
    'for ([(x), y] in [x = y]) {}',
    'for ([z, (y), z] in [x = y]) {}',
    'for ([z, (y), z.y] in [x = y]) {}',
    'for ((a in b).x in {});',
    'for (yield[g]--;;);',
    'for (x--;;);',
    'for(a in b);',
    'for (x in null, { key: 0 }) {}',
    'for (x.y in { attr: null }) {}',
    'for ({}.x in y) {}',
    'for ((x) in { attr: null }) {}',
    'for(let in 0);',
    'for (function(){ }[x in y] in x);',
    'for (function(){ if (a in b); }.prop in x);',
    'for (function(){ a in b; }.prop in x);',
    'for (let a = (b in c && d in e); ;);',
    'for (let a = (b in c); ;);',
    'for (let a = (b in c && d); ;);',
    'for (let a = (b in c); ;);',
    'for (let a = ((b in c) && (d in e)); ;);',
    'for (let().x in y);',
    'var s = 0; for (let key in a) { s += a[key] };',
    'for (var a in b in c) break',
    'for (var a = (b in c) in d) break',
    'for (let f in { key: 0 }) {}',
    'for (() => { this in null };;);',
    'for(var a in b);',
    'for (var k in { a:1 }) {}',
    'for (var {x = y} in obj);',
    'for (var let in {}) {}',
    'for (a in b) break',
    'for (a().l[4] in b) break',
    'for (class x { [a in b](){} }.x in c);',
    'for (class x { [a](){} }.x in c);',
    'for ((foo = []).bar in {}) {}',
    'for (var {a, b} in c);',
    'for (of of of){}',
    'for (of; of; of){}',
    'for (var of of of){}',
    'for (var of; of; of){}',
    'for (of.of of of){}',
    'for (of[of] of of){}',
    'for (var [of] of of){}',
    'for (var {of} of of){}',
    'for (of in of){}',
    'for (var of in of){}',
    'for (var [of] in of){}',
    'for (var {of} in of){}',
    'for ([of] in of){}',
    'for ({of} in of){}',
    'for ([].x in y);',
    `for ([a,b] in c);
    for ([a,b] of c);
    for ([a,b];;);
    for (var [a,b] in c);
    for (var [a,b] of c);
    for (var [a,b] = c;;);
    for (let [a,b] in c);
    for (let [a,b] of c);
    for (let [a,b] = c;;);
    for (const [a,b] in c);
    for (const [a,b] of c);
    for (const [a,b] = c;;);`,
    'for(var a = 0 in b);',
    'for (var {x : y} in obj);',
    'for (function* y() { new.target in /(?:()|[]|(?!))/iuy };; (null))  {}',
    'for (var [] in x);',
    'for (var [foo,] in arr);',
    'for (var a = b in c);',
    'for (var [foo,,] in arr);',
    'for (var [,] in x);',
    'for (var [...foo] in obj);',
    'for (var {} in obj);',
    'for (let {x,} in obj);',
    'for (var {x, y} in obj);',
    'for ([a,b] in x) a;',
    'for ({a,b} in x) a;',
    'for (const [...x] in y){}',
    'for (const {...x} in y){}',
    'for ([...{ x = yield }] in [[{}]]) ;',
    'for (var x = 1 in []) {}',
    'for (x of { x : [ foo().y ] } = {});',
    'for (x of { x : [ foo()[y] ] } = {});',
    'for (x of { x : [ y.z ] } = {});',
    'for(var a in b, c);',
    'for ({x}.y in z);',
    '2; for (var b in { x: 0 }) { 3; }',
    'for(x in list) y(z);',
    'for (var x in list) y(z);',
    'for (var x = 42 in list) y(z);',
    'for (var x = y = z in q);',
    'for (a.in in a);',
    'for([a,b[a],{c,d=e,[f]:[g,h().a,(0).k,...i[0]]}] in 0);',
    'for (a[b in c] in d);',
    'for (var i = function() { return 10 in [] } in list) process(x);',
    'for (var a = b = c = (d in e) in z);',
    'for(x of "foo" in {}) {}',
    'for (x in {a: b}) {}',
    'for(const x in [1,2,3]) {}',
    'for ({ x: [ x ] } in [{ x: null }]) {}',
    'for ({x} = obj;;);',
    'for (let x in a,b) c',
    'for (x in [ { x } ] = {});',
    'for (let [foo=a] in arr);',
    'for (let [foo,] in arr);',
    'for (let [foo=a, bar] in arr);',
    'for (let [foo, bar=b] in arr);',
    'for (let [foo] in arr);',
    'for (x in [ { x : y } ] = {});',
    'for (x in [ { x : foo().y } ] = {});',
    'for (x in [ { x : foo()[y] } ] = {});',
    'for (x in [ { x : x.y } ] = {});',
    'for (x in [ { x : x[y] } ] = {});',
    'for (x in [ [ x ] ] = {});',
    'for (x in [ [ foo().x ] ] = {});',
    'for (x in [ [ foo()[x] ] ] = {});',
    'for (x in [ [ x.y ] ] = {});',
    'for (const foo in x);',
    'for (x in [ [ x[y] ] ] = {});',
    'for (x in [ x = 10 ] = {});',
    'for (x in [ { x : x.y = 10 } = {} ] = {});',
    'for (let {x = y, z = a} in obj);',
    'for (let {x, y = z} in obj);',
    'for (let {x, y : z} in obj);',
    'for (let {x, y} in obj);',
    'for (let {} in obj);',
    'for (x in [ [ x = 10 ] = {} ] = {});',
    'for (x in [{x:x = 1, y:y = 2}, [z = 3, z = 4, z = 5]] = {});',
    'for (x in [x,,y] = {});',
    'for (x in [x, y = 42, z] = {});',
    'for (x in { x : x, y : y } = {});',
    'for (x in [(x),,(y)] = {});',
    'for (x in [(x)] = {});',
    'for (x in {42 : x} = {});',
    'for (x in {[foo()] : z} = {});',
    'for (x in {[foo()] : (z)} = {});',
    'for (x in {[foo()] : foo().bar} = {});',
    'for (x in [x,y,...z] = {});',
    'for (x in [x,,...z] = {});',
    'for (x in [((x, y) => z).x] = {});',
    'for (let.x in {}) {}',
    'for (x in { ...d.x } = {});',
    'for (x in { ...c[0]} = {});',
    'for (x in { x: (y) } = {});',
    'for (x in { x: (foo.bar) } = {});',
    'for (x in [ ...(a) ] = {});',
    'for (x in [ ...(foo.bar) ] = {});',
    'for (x in [ (y) ] = {});',
    'for (a in b=c);',
    'for (var a = (++effects, -1) in x);',
    'for ({a: b.c} in d) e',
    'for (x in { z : { __proto__: x, __proto__: y } = z } = {});',
    'for (x in { x : [ y[z] = 10 ] = {} } = {});',
    'for (x in { x : [ y.z = 10 ] = {} } = {});',
    'for (x in { x : [ foo()[y] = 10 ] = {} } = {});',
    'for (x in { x : [ foo().y = 10 ] = {} } = {});',
    'for (x in [ x ] = {});',
    'for (var [foo, bar=b] in arr);',
    'for (var [foo=a, bar=b] in arr);',
    'for (x in [ foo().x ] = {});',
    'for (x in [ foo()[x] ] = {});',
    'for ({x: a.b} in obj);',
    'for ({x} in obj);',
    'for (var [] in {b, y, [.4]: h -= 2e308}) for (; ((this() ? 2e308.m ++ : eval[/B^B=/gim])); (() => class {})(null, ...arguments, ...true, ..."9Â]CÕ")) try {} finally {}',
    'for(`${x in y}`;;);',
    `for (var i = 0; i < 40000; i++) { src = { ...i, x: -9007199254740991 }; clone = { ...src }; }`,
    `for ([{__proto__: 1, __proto__: 2}];;);`,
    `for ([a];;);`,
    `for ({a};;);`,
    `for (let.foo;;);`,
    `for (let , x;;);`,
    `for (let.x;;);`,
    `for ([], x;;);`,
    `for(x, y;;);`,
    `for (var [[] = function() { a += 1; }()] = [[23]]; b < 1; ) {}`,
    `for (const [ x, ] =  z; a < 1; ) {};`,
    `for (((x)=>{}).x of y);`,
    `for (x(x in t);;) x`,
    `for (const [a=[...b], ...c] of obj);`,
    `for (let [x] in y);`,
    `for ([] + x;;);`,
    `for (let x;;);`,
    `for (let=10;;);`,
    `for (const {a, [x]: y} in obj);`,
    `for (const {[x]: y} = z;;);`,
    `for (const {x : y, z, a : b = c} = obj;;);`,
    `for ({x};;);`,
    `for ({x: a.b};;);`,
    `for (const [[x]] = [null]; ; ) {}`,
    `for (let {...x} = { get v() { count++; return 2; } }; a < 1; ) {}`,
    `for ((x)=>{};;);`,
    `for (((x)=>{}).x ;;);`,
    `for (((x)=>{}).x of y);`,
    `for (() => { this in null };;);`,
    `for (let [foo, ...bar] = obj;;);`,
    `for (let {x} = obj;;);`,
    `for ({x = y} = (z);;) {}`,
    `for (a = b;;);`,
    `for ("foo".bar = x ;;);`,
    `for (let [...foo] = obj;;);`,
    `for (a * b + c * d;b;c);`,
    `for ([a.b] in c) d`,
    `for ({a: b.c} in d) e`,
    `for ([a.b] of c) d`,
    `for ({a: b.c} of d) e`,
    `for ({a: b.c}.foo of d) e`,
    `for (let [foo] = arr, [bar] = arr2;;);`,
    `for (let a, { b } = {};;) { let a, { b } = {}; { let a, { b } = {}; }}`,
    `for(function(){};;)x`,
    'for(function(){if(x in 3);};;)x',
    `for (2 + b;;);`,
    `for ({} + b;;);`,
    `for ([x];;);`,
    `for ("foo".bar;;);`,
    `for ({__proto__: 1, __proto__: 2};;);`,
    `for (((x)=>{}) ;;);`,
    `for(function(){while(x in y)t};;)x`,
    `for(function(){do;while(x in t)};;)x`,
    `for (function(){};;);`,
    `for (function(){ }[foo];;);`,
    `for (function(){ if (a in b); };;);`,
    `for (function(){ a in b; };;);`,
    `for ({x,...x}=x ;;) ;`,
    `for ({x=y}=x ;;) ;`,
    `for (x[a in b] ;;);`,
    `for (a;b;c);`,
    `for (a;b;);`,
    `for (a;;c);`,
    `for (;b;);`,
    `for (x--;;);`,
    `for (true ? a in b : {}; false; ) ;`,
    `for (var a;;) { let a; }`,
    `for (var x of obj) { const x = 1 }`,
    `for (const foo = bar, zoo = boo;;);`,
    `for (let foo = arr, [bar] = arr2;;);`,
    `for (let {x} = a, y = obj;;);`,
    `for (let {x} = a, obj;;);`,
    `for (const a = x;;) { let a; }`,
    `for (const {x} = a, {y} = obj;;);`,
    `for (let a;;) { let a; }`,
    `var x; for (;;) { let x; }`,
    `for (var x;;) { let x; }`,
    `for ((a * b + c) * d;b;c);`,
    `for (a + b * c * d;b;c);`,
    `for (a;;);`,
    'for ({x, a: x} in obj);',
    'for ({x, "foo": x} in obj);',
    'for ({x, 15: x} in obj);',
    'for ({x, a: {x}} in obj);',
    'for ({x, a: {b: x}} in obj);',
    'for ({a: x, b: x} in obj);',
    'for ({[a]: x, b: x} in obj);',
    'for ({[a]: x, [b]: x} in obj);',
    'for ({a: x, c: {b: x}} in obj);',
    `for (12 instanceof obj;;);`,
    'for ([{x = y}] in y);',
    `for (const x = a, {y} = obj;;);`,
    `for ([] instanceof obj;;);`,
    `for (a instanceof b;;);`,
    `for (a.b in c) d;`,
    `for (a()[b] in c) d;`,
    `for ([][b] in c) d;`,
    'for(delete(x in y);;)x',
    'for(delete((1)?y:x in y);;)x',
    `for (a in b=c);`,
    `for (let [,,] = x;;);`,
    `for (var a in stored = a, {a: 0, b: 1, c: 2});`,
    `for (const {...x} in y){}`,
    `for ({x = y} = (z);;) {}`,
    `for (let [foo, bar=b] in arr);`,
    `for (let [foo=a, bar=b] in arr);`,
    `for (let [foo] = arr, bar;;);`,
    `for (let [,] = x;;);`,
    `for(()=>{a in b};;);`,
    `for (let foo of bar) { let foo = 1; }`,
    `for (let foo in bar) { let foo = 1; }`,
    `for (((x)=>{}).x in y);`,
    `for ({}.bar = x ;;);`,
    `for ([].bar = x ;;);`,
    `for (var o in ((false)) ^ 2.7262799875259632e293) do ; while ((((eval))))`,
    `for (let [,] = a(); b < 1; ) {}`
  ]) {
    it(`${arg}`, () => {
      t.doesNotThrow(() => {
        parseScript(`${arg}`, { loc: true });
      });
    });
    it(`${arg}`, () => {
      t.doesNotThrow(() => {
        recovery(`${arg}`, 'recovery.js');
      });
    });
  }

  it('simple block', () => {
    t.deepEqual(parseScript('{}', { loc: true }), {
      type: 'Script',
      directives: [],
      leafs: [
        {
          type: 'BlockStatement',
          leafs: [],
          start: 0,
          end: 2
        }
      ],
      start: 0,
      end: 2
    });
  });

  it('block with lexical', () => {
    t.deepEqual(parseScript('{let foo = bar;}', { loc: true }), {
      type: 'Script',
      directives: [],
      leafs: [
        {
          type: 'BlockStatement',
          leafs: [
            {
              type: 'LexicalDeclaration',
              isConst: false,
              declarations: [
                {
                  type: 'LexicalBinding',
                  binding: {
                    type: 'BindingIdentifier',
                    name: 'foo',
                    start: 5,
                    end: 8
                  },
                  initializer: {
                    type: 'IdentifierReference',

                    name: 'bar',
                    start: 11,
                    end: 14
                  },
                  start: 5,
                  end: 14
                }
              ],
              start: 1,
              end: 15
            }
          ],
          start: 0,
          end: 16
        }
      ],
      start: 0,
      end: 16
    });
  });

  it('block wrapped in paren', () => {
    t.deepEqual(parseScript('({})', { loc: true }), {
      type: 'Script',
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'ObjectLiteral',
              properties: [],
              start: 1,
              end: 3
            },
            start: 0,
            end: 4
          },
          start: 0,
          end: 4
        }
      ],
      start: 0,
      end: 4
    });
  });

  it('with ; separation', () => {
    t.deepEqual(parseScript('{};{};;;;{};', { loc: true }), {
      directives: [],
      end: 12,
      start: 0,
      leafs: [
        {
          end: 2,
          start: 0,
          leafs: [],
          type: 'BlockStatement'
        },
        {
          end: 3,
          start: 2,
          type: 'EmptyStatement'
        },
        {
          end: 5,
          start: 3,
          leafs: [],
          type: 'BlockStatement'
        },
        {
          end: 6,
          start: 5,
          type: 'EmptyStatement'
        },
        {
          end: 7,
          start: 6,
          type: 'EmptyStatement'
        },
        {
          end: 8,
          start: 7,
          type: 'EmptyStatement'
        },
        {
          end: 9,
          start: 8,
          type: 'EmptyStatement'
        },
        {
          end: 11,
          start: 9,
          leafs: [],
          type: 'BlockStatement'
        },
        {
          end: 12,
          start: 11,
          type: 'EmptyStatement'
        }
      ],
      type: 'Script'
    });
  });

  it('same level', () => {
    t.deepEqual(parseScript('{}{}{}', { loc: true }), {
      directives: [],
      end: 6,
      start: 0,
      leafs: [
        {
          end: 2,
          start: 0,
          leafs: [],
          type: 'BlockStatement'
        },
        {
          end: 4,
          start: 2,
          leafs: [],
          type: 'BlockStatement'
        },
        {
          end: 6,
          start: 4,
          leafs: [],
          type: 'BlockStatement'
        }
      ],
      type: 'Script'
    });
  });

  it('nested', () => {
    t.deepEqual(parseScript('{{}}', { loc: true }), {
      directives: [],
      end: 4,
      start: 0,
      leafs: [
        {
          end: 4,
          start: 0,
          leafs: [
            {
              end: 3,
              start: 1,
              leafs: [],
              type: 'BlockStatement'
            }
          ],
          type: 'BlockStatement'
        }
      ],
      type: 'Script'
    });
  });
});
