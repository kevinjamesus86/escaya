# The EScaya AST specification

Escaya's own `AST` represents the structure of an ECMAScript program as a tree and conforms to the [ECMAScript® 2021 specs](https://tc39.es/ecma262/index.html). The AST have been designed for performance, and it nearly eliminates the chance of accidentally creating an AST that does not represent an ECMAScript program while also requiring fewer bytes than the AST produced by ESTree and Babel.

## Script and Module

 A javaScript program can be either [a script or a module](https://tc39.github.io/ecma262/index.html#sec-ecmascript-language-scripts-and-modules) as
 defined in the `ES2015` specs and later.


```js
interface Script {
    type: string;
    directives: [ Directives ];
    leafs: [ Statement | ModuleDeclaration ];
    start: number;
    end: number;
}
```

## Module

```js
interface Module {
    type: string;
    directives: [ Directives ];
    leafs: [ Statement | ModuleDeclaration ];
    start: number;
    end: number;
}
```

'leafs' are used for every new block scope.

## SyntaxNode

```js
interface SyntaxNode {
    type: string;
    start?: number;
    end?: number;
}
```

The `SyntaxNode` is equal to `Node` in `ESTree` and contains all AST nodes represented as
`Node` object, which may have any prototype inheritance.

The `type` field is a string representing the AST variant type, and the `start` and `end`
are optional properties representing the start and end values of each `AST node`.


## RootNode

This ASt node is for `error recovery mode` and represent both `Module` and `Script`.
The current `mutualFlags` property keeps track of which context you are currently parsing in,
and it's property contains a serie of bit masks that can be parsed by reference. This
information isn't known from outside, or exposed through any API.

```js
interface RootNode {
    kind: SyntaxKind;
    directives: [ Directives ];
    leafs: [ Statement | ModuleDeclaration ];
    text: string;
    filename: string;
    mutualFlags: Flags,
    diagnostics [ Diagnostics ];
    parent: Script | Module | null;
    children: [ Statement | ModuleDeclaration ];
    length: number;
    end: number;
}
```
