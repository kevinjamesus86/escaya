# 13 ECMAScript Language: Statements and Declarations

```js
interface Statements <: SyntaxNode { }
```

## BlockStatement

```js
interface BlockStatement <: Statements {
    type: 'BlockStatement';
    leafs: [ Statement ];
}
```

### BreakStatement

```js
interface BreakStatement <: Statements {
    type: 'BreakStatement';
    label: IdentifierReference | null;
}
```

### ContinueStatement

```js
interface ContinueStatement <: Statements {
    type: 'ContinueStatement';
    label: IdentifierReference | null;
}
```

### SwitchStatement

```js
interface SwitchStatement <: Statements {
    type: 'SwitchStatement';
    expression: Expression;
    clauses: [ CaseClause | DefaultClause ];
}
```

A `switch` statement.

### CaseClause

```js
interface CaseClause <: Statements {
    type: 'CaseClause';
    expression: Expression | null;
    leafs: [ Statement ];
}
```

### DefaultClause

```js
interface DefaultClause <: Statements {
    type: 'DefaultClause';
    leafs: [ Statement ];
}
```

### ThrowStatement

```js
interface ThrowStatement <: Statements {
    type: 'ThrowStatement';
    expression: Expression;
}
```

A `throw` statement.

### TryStatement

```js
interface TryStatement <: Statements {
    type: 'TryStatement';
    block: BlockStatement;
    catchClause: CatchClause | null;
    finalizer: BlockStatement | null;
}
```

A `try` statement. If `handler` is `null` then `finalizer` must be a `BlockStatement`.

### CatchClause

```js
interface CatchClause <: Statements {
    type: 'CatchClause';
    binding: BindingIdentifier | ObjectBindingPattern | ArrayBindingPattern | null;
    body: BlockStatement;
}
```

### WhileStatement

```js
interface WhileStatement <: Statements {
    type: 'WhileStatement';
    expression: Expression;
    statement: Statement;
}
```

### WithStatement

```js
interface WithStatement <: Statements {
    type: 'WithStatement';
    expression: Expression;
    statement: Statement;
}
```

### DoWhileStatement

```js
interface DoWhileStatement <: Statements {
    type: 'DoWhileStatement';
    statement: Statement;
    expression: Expression;
}
```

### ForStatement

```js
interface ForStatement <: Statements {
    type: 'ForStatement';
    initializer: ForDeclaration | Expression | null;
    condition: Expression | null;
    incrementor: Expression | null;
    statement: Statement;
}
```

### ForOfStatement

```js
interface ForOfStatement <: Statements {
    type: 'ForOfStatement';
    initializer: ForDeclaration | ObjectAssignmentPattern | ArrayAssignmentPattern | Expression;
    expression: Expression;
    statement: Statement;
}
```

### ForAwaitOfStatement

```js
interface ForAwaitOfStatement <: Statements {
    type: 'ForAwaitOfStatement';
    initializer: ForDeclaration | ObjectAssignmentPattern | ArrayAssignmentPattern | Expression;
    expression: Expression;
    statement: Statement;
}
```

### ForInStatement

```js
interface ForInStatement <: Statements {
    type: 'ForInStatement';
    initializer: ForDeclaration | ObjectAssignmentPattern | ArrayAssignmentPattern | Expression;
    expression: Expression;
    statement: Statement;
}
```

### VariableDeclaration

```js
interface VariableStatement <: Declaration {
    type: 'VariableDeclaration';
    declarations: [ VariableDeclaration ];
}
```

### ReturnStatement

```js
interface ReturnStatement <: Statements {
    type: 'ReturnStatement';
    expression: Expression | null;
}
```

### LabeledStatement

```js
interface LabeledStatement <: Statements {
    type: 'LabeledStatement';
    label: LabelIdentifier;
    labelledItem: Statement;
}
```

### DebuggerStatement

```js
interface DebuggerStatement <: Statements {
    type: 'DebuggerStatement';
}
```

### ExpressionStatement

```js
interface ExpressionStatement <: Statements {
    type: 'ExpressionStatement';
    expression: Expression;
}
```

### EmptyStatement

```js
interface EmptyStatement <: Statements {
    type: 'EmptyStatement';
}
```


### LexicalBinding

```js
interface LexicalBinding <: Statements {
    type: 'LexicalBinding';
    binding: BindingPattern | BindingIdentifier;
    initializer: Expression | null;
}
```
