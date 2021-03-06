import { SyntaxKind, SyntaxNode, SyntaxNodeFlags } from './syntax-node';
import { Diagnostic } from '../diagnostic';
import { Flags, Context } from '../common';
import { ImportExport } from './module';

/**
 * A top level node which contains the list of statements in a program,
 * and some information about the file which the statements came from.
 */
export interface RootNode extends SyntaxNode {
  readonly kind: SyntaxKind.RootNode;
  readonly directives: string[];
  readonly leafs: ImportExport[];
  readonly text: string;
  readonly fileName: string;
  readonly context: Context;
  readonly mutualFlags: Flags;
  readonly diagnostics: Diagnostic[];
  readonly parent?: Node | null;
  readonly length?: number;
  readonly children: any[] | null;
  readonly start: number;
  readonly end: number;
  detached: boolean;
  incremental: boolean;
}

export function createRootNode(
  directives: string[],
  leafs: ImportExport[],
  text: string,
  fileName: string,
  diagnostics: Diagnostic[]
): RootNode {
  return {
    kind: SyntaxKind.RootNode | SyntaxNodeFlags.None,
    directives,
    leafs,
    text,
    fileName,
    context: Context.Empty,
    mutualFlags: Flags.Empty,
    diagnostics,
    detached: false,
    incremental: false,
    parent: null,
    children: [],
    start: 0,
    length: text.length,
    end: text.length
  };
}
