export const enum NodeType {
  // Must be the first power of 2 above the last non-flag member.
  HasErrors = 1 << 10,

  FunctionDeclaration = 0,
  VariableStatement = 1,
  BlockStatement = 2,
  IfStatement = 3,
  ExpressionStatement = 4,
  ThrowStatement = 5,
  ReturnStatement = 6,
  SwitchStatement = 7,
  BreakStatement = 8,
  ContinueStatement = 9,
  ForInStatement = 10,
  ForOfStatement = 11,
  ForStatement = 12,
  ForAwaitStatement = 13,
  WhileStatement = 14,
  WithStatement = 15,
  EmptyStatement = 16,
  TryStatement = 17,
  LabelledStatement = 18,
  DoWhileStatement = 19,
  DebuggerStatement = 20,
  ImportDeclaration = 21,
  ExportDeclaration = 22,
  ClassDeclaration = 23,
  ImportSpecifier = 24,
  ExportSpecifier = 25,
  ImportCall = 26,
  ImportMeta = 27,
  FunctionExpression = 28,
  BindingRestElement = 29,
  BindingPattern = 30,
  SingleNameBinding = 31,
  FunctionBody = 32,
  FormalParameters = 33,
  ArrowFunction = 34,
  ConciseBody = 35,
  CatchClause = 36,
  LexicalDeclaration = 37,
  ForDeclaration = 38,
  ForBinding = 39,
  VariableDeclaration = 40,
  LexicalBinding = 41,
  CaseClause = 42,
  DefaultClause = 43,
  CaseBlock = 44,
  PropertyDefinition = 45,
  AssignmentExpression = 47,
  ObjectLiteral = 48,
  MethodDefinition = 49,
  TemplateLiteral = 50,
  TemplateElement = 51,
  TemplateElementTail = 52,
  ClassExpression = 53,
  ClassTail = 54,
  ClassElement = 55,
  YieldExpression = 56,
  AwaitExpression = 57,
  CommaOperator = 58,
  ConditionalExpression = 59,
  BinaryExpression = 60,
  MemberExpression = 61,
  CallExpression = 62,
  OptionalExpression = 63,
  TemplateExpression = 64,
  MemberChain = 65,
  AssignmentRestElement = 66,
  PostfixUpdateExpression = 67,
  PrefixUpdateExpression = 68,
  UnaryExpression = 69,
  SuperCall = 70,
  SuperProperty = 71,
  NewTarget = 72,
  NewExpression = 73,
  ParenthesizedExpression = 74,
  RegularExpressionLiteral = 75,
  NumericLiteral = 76,
  StringLiteral = 77,
  BigIntLiteral = 78,
  BooleanLiteral = 79,
  ThisExpression = 80,
  Elision = 81,
  ArrayLiteral = 82,
  SpreadElement = 83,
  NullLiteral = 84,
  BindingIdentifier = 85,
  IdentifierName = 86,
  Identifier = 87,
  IdentifierReference = 88,
  LabelIdentifier = 89,
  RootNode = 90,
  Script = 91,
  Module = 92,
  AssignmentPattern = 93,
  ArrayBindingPattern = 94,
  BindingProperty = 95,
  ObjectBindingPattern = 96,
  ArrayAssignmentPattern = 97,
  ArrayObjectPattern = 98,
  ObjectAssignmentPattern = 99,
  CallChain = 100,
  RestElement = 101,
  BindingRestProperty = 102,
  FunctionRestParameter = 103,
  AssignmentProperty = 104,
  BindingElement = 105,
  CoverInitializedName = 106,
  TaggedTemplate = 107,
  AssignmentRestProperty = 108,
  PropertyName = 109
}
