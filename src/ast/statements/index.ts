import { ExpressionStatement } from './expression-stmt';
import { BlockStatement } from './block-stmt';
import { DebuggerStatement } from './debugger-stmt';
import { WhileStatement } from './while-stmt';
import { WithStatement } from './with-stmt';
import { BreakStatement } from './break-stmt';
import { ContinueStatement } from './continue-stmt';
import { LabelledStatement } from './labelled-stmt';
import { DoWhileStatement } from './do-stmt';
import { ForOfStatement, ForAwaitStatement } from './for-of-stmt';
import { ForInStatement } from './for-in-stmt';
import { ForStatement } from './for-stmt';
import { ReturnStatement } from './return-stmt';
import { ThrowStatement } from './throw-stmt';
import { TryStatement } from './try-stmt';
import { IfStatement } from './if-stmt';
import { EmptyStatement } from './empty-stmt';
import { VariableDeclaration } from '../declarations/variable-declaration';
import { VariableStatement } from './variable-stmt';
import { LexicalDeclaration } from '../declarations/lexical-declaration';
import { LexicalBinding } from './lexical-binding';
import { CaseClause, DefaultClause } from './case-clause';
import { SwitchStatement } from './switch-stmt';
import { FunctionDeclaration } from '../declarations/function-declaration';
import { ClassDeclaration } from '../declarations/class-declaration';
import { ForDeclaration } from '../declarations/for-declaration';

export type CaseBlock = DefaultClause | CaseClause;

/**
 * The set of all syntax items which are statements.
 */
export type Statement =
  | ExpressionStatement
  | BlockStatement
  | DebuggerStatement
  | WhileStatement
  | WithStatement
  | BreakStatement
  | ContinueStatement
  | LabelledStatement
  | DoWhileStatement
  | ForAwaitStatement
  | IfStatement
  | ForOfStatement
  | ForInStatement
  | ForStatement
  | ReturnStatement
  | SwitchStatement
  | CaseClause
  | DefaultClause
  | EmptyStatement
  | ThrowStatement
  | TryStatement
  | VariableStatement
  | VariableDeclaration
  | LexicalDeclaration
  | LexicalBinding
  | FunctionDeclaration
  | ForDeclaration
  | ClassDeclaration;
