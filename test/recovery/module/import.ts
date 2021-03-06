import * as t from 'assert';
import { recovery } from '../../../src/escaya';

describe('Module - Import', () => {
  it('import export from "s"', () => {
    t.deepEqual(recovery('import export from "s"', 'recovery.js', { module: true }), {
      kind: 209,
      directives: [],
      leafs: [
        {
          type: 'ImportDeclaration',
          fromClause: null,
          moduleSpecifier: null,
          importClause: {
            type: 'ImportClause',
            defaultBinding: null,
            nameSpaceImport: null,
            namedImports: null,
            start: 6,
            end: 6,
            kind: 218,
            flags: 0
          },
          start: 0,
          end: 6,
          kind: 217,
          flags: 0
        },
        {
          type: 'ExportDeclaration',
          declaration: null,
          namedExports: [],
          namedBinding: null,
          fromClause: null,
          start: 6,
          end: 13,
          kind: 223,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'IdentifierReference',
            name: 'from',
            start: 13,
            end: 18,
            kind: 13,
            flags: 0
          },
          start: 13,
          end: 18,
          kind: 122,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'StringLiteral',
            value: 's',
            start: 18,
            end: 22,
            kind: 12,
            flags: 0
          },
          start: 18,
          end: 22,
          kind: 122,
          flags: 0
        }
      ],
      text: 'import export from "s"',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 7,
          length: 6
        },
        {
          kind: 2,
          source: 2,
          message: 'Export declaration expected',
          code: 30,
          start: 14,
          length: 4
        },
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 19,
          length: 3
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 22,
      end: 22
    });
  });
  it('import import from "s"', () => {
    t.deepEqual(recovery('import import from "s"', 'recovery.js', { module: true }), {
      kind: 209,
      directives: [],
      leafs: [
        {
          type: 'ImportDeclaration',
          fromClause: null,
          moduleSpecifier: null,
          importClause: {
            type: 'ImportClause',
            defaultBinding: null,
            nameSpaceImport: null,
            namedImports: null,
            start: 6,
            end: 6,
            kind: 218,
            flags: 0
          },
          start: 0,
          end: 6,
          kind: 217,
          flags: 0
        },
        {
          type: 'ImportDeclaration',
          fromClause: null,
          moduleSpecifier: null,
          importClause: {
            type: 'ImportClause',
            defaultBinding: {
              type: 'BindingIdentifier',
              name: 'from',
              start: 13,
              end: 18,
              kind: 168,
              flags: 0
            },
            nameSpaceImport: null,
            namedImports: null,
            start: 13,
            end: 18,
            kind: 218,
            flags: 0
          },
          start: 6,
          end: 18,
          kind: 217,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'StringLiteral',
            value: 's',
            start: 18,
            end: 22,
            kind: 12,
            flags: 0
          },
          start: 18,
          end: 22,
          kind: 122,
          flags: 0
        }
      ],
      text: 'import import from "s"',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 7,
          length: 6
        },
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 19,
          length: 3
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 22,
      end: 22
    });
  });
  it('import class from "s"', () => {
    t.deepEqual(recovery('import class from "s"', 'recovery.js', { module: true }), {
      kind: 209,
      directives: [],
      leafs: [
        {
          type: 'ImportDeclaration',
          fromClause: null,
          moduleSpecifier: null,
          importClause: {
            type: 'ImportClause',
            defaultBinding: null,
            nameSpaceImport: null,
            namedImports: null,
            start: 6,
            end: 6,
            kind: 218,
            flags: 0
          },
          start: 0,
          end: 6,
          kind: 217,
          flags: 0
        },
        {
          type: 'ClassDeclaration',
          name: {
            type: 'BindingIdentifier',
            name: 'from',
            start: 12,
            end: 17,
            kind: 168,
            flags: 0
          },
          heritage: null,
          elements: [],
          start: 6,
          end: 17,
          kind: 150,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'StringLiteral',
            value: 's',
            start: 17,
            end: 21,
            kind: 12,
            flags: 0
          },
          start: 17,
          end: 21,
          kind: 122,
          flags: 0
        }
      ],
      text: 'import class from "s"',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 7,
          length: 5
        },
        {
          kind: 2,
          source: 2,
          message: '`{` expected',
          code: 5,
          start: 18,
          length: 3
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 21,
      end: 21
    });
  });
  it('import function from "s"', () => {
    t.deepEqual(recovery('import function from "s"', 'recovery.js', { module: true }), {
      kind: 209,
      directives: [],
      leafs: [
        {
          type: 'ImportDeclaration',
          fromClause: null,
          moduleSpecifier: null,
          importClause: {
            type: 'ImportClause',
            defaultBinding: null,
            nameSpaceImport: null,
            namedImports: null,
            start: 6,
            end: 6,
            kind: 218,
            flags: 0
          },
          start: 0,
          end: 6,
          kind: 217,
          flags: 0
        },
        {
          type: 'FunctionDeclaration',
          name: {
            type: 'BindingIdentifier',
            name: 'from',
            start: 15,
            end: 20,
            kind: 168,
            flags: 0
          },
          generator: false,
          async: false,
          params: [],
          contents: {
            type: 'FunctionBody',
            directives: [],
            leafs: [],
            start: 20,
            end: 20,
            kind: 184,
            flags: 0
          },
          start: 6,
          end: 20,
          kind: 186,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'StringLiteral',
            value: 's',
            start: 20,
            end: 24,
            kind: 12,
            flags: 0
          },
          start: 20,
          end: 24,
          kind: 122,
          flags: 0
        }
      ],
      text: 'import function from "s"',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 7,
          length: 8
        },
        {
          kind: 2,
          source: 2,
          message: '`(` expected',
          code: 5,
          start: 21,
          length: 3
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 24,
      end: 24
    });
  });
  it('import !foo from "s"', () => {
    t.deepEqual(recovery('import !foo from "s"', 'recovery.js', { module: true }), {
      kind: 209,
      directives: [],
      leafs: [
        {
          type: 'ImportDeclaration',
          fromClause: null,
          moduleSpecifier: null,
          importClause: {
            type: 'ImportClause',
            defaultBinding: null,
            nameSpaceImport: null,
            namedImports: null,
            start: 6,
            end: 6,
            kind: 218,
            flags: 0
          },
          start: 0,
          end: 6,
          kind: 217,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'UnaryExpression',
            operator: '!',
            operand: {
              type: 'IdentifierReference',
              name: 'foo',
              start: 8,
              end: 11,
              kind: 13,
              flags: 0
            },
            start: 6,
            end: 11,
            kind: 160,
            flags: 0
          },
          start: 6,
          end: 11,
          kind: 122,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'IdentifierReference',
            name: 'from',
            start: 11,
            end: 16,
            kind: 13,
            flags: 0
          },
          start: 11,
          end: 16,
          kind: 122,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'StringLiteral',
            value: 's',
            start: 16,
            end: 20,
            kind: 12,
            flags: 0
          },
          start: 16,
          end: 20,
          kind: 122,
          flags: 0
        }
      ],
      text: 'import !foo from "s"',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 7,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 12,
          length: 4
        },
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 17,
          length: 3
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 20,
      end: 20
    });
  });

  it('import {a,,,,b,,,,,c!', () => {
    t.deepEqual(recovery('import {a,,,,b,,,,,c!', 'recovery.js', { module: true }), {
      kind: 209,
      directives: [],
      leafs: [
        {
          type: 'ImportDeclaration',
          fromClause: null,
          moduleSpecifier: null,
          importClause: {
            type: 'ImportClause',
            defaultBinding: null,
            nameSpaceImport: null,
            namedImports: {
              type: 'NamedImports',
              importsList: [
                {
                  type: 'ImportSpecifier',
                  name: null,
                  binding: {
                    type: 'IdentifierName',
                    name: 'a',
                    start: 8,
                    end: 9,
                    kind: 13,
                    flags: 0
                  },
                  start: 8,
                  end: 9,
                  kind: 222,
                  flags: 0
                }
              ],
              start: 6,
              end: 10,
              kind: 222,
              flags: 0
            },
            start: 6,
            end: 10,
            kind: 218,
            flags: 0
          },
          start: 0,
          end: 10,
          kind: 217,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'CommaOperator',
            expressions: [
              {
                type: 'IdentifierReference',
                name: 'b',
                start: 13,
                end: 14,
                kind: 13,
                flags: 0
              },
              {
                type: 'IdentifierReference',
                name: '',
                start: 15,
                end: 15,
                kind: 13,
                flags: 2
              },
              {
                type: 'IdentifierReference',
                name: '',
                start: 16,
                end: 16,
                kind: 13,
                flags: 2
              },
              {
                type: 'IdentifierReference',
                name: '',
                start: 17,
                end: 17,
                kind: 13,
                flags: 2
              },
              {
                type: 'IdentifierReference',
                name: '',
                start: 18,
                end: 18,
                kind: 13,
                flags: 2
              },
              {
                type: 'IdentifierReference',
                name: 'c',
                start: 19,
                end: 20,
                kind: 13,
                flags: 0
              }
            ],
            start: 13,
            end: 20,
            kind: 147,
            flags: 0
          },
          start: 13,
          end: 20,
          kind: 122,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'UnaryExpression',
            operator: '!',
            operand: {
              type: 'IdentifierReference',
              name: '',
              start: 21,
              end: 21,
              kind: 13,
              flags: 2
            },
            start: 20,
            end: 21,
            kind: 160,
            flags: 0
          },
          start: 20,
          end: 21,
          kind: 122,
          flags: 0
        }
      ],
      text: 'import {a,,,,b,,,,,c!',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`}` expected',
          code: 5,
          start: 10,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 11,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 12,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 15,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 16,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 17,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 18,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 20,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 21,
      end: 21
    });
  });

  it('import ! e45rw', () => {
    t.deepEqual(recovery('import !', 'recovery.js', { module: true }), {
      kind: 209,
      directives: [],
      leafs: [
        {
          type: 'ImportDeclaration',
          fromClause: null,
          moduleSpecifier: null,
          importClause: {
            type: 'ImportClause',
            defaultBinding: null,
            nameSpaceImport: null,
            namedImports: null,
            start: 6,
            end: 6,
            kind: 218,
            flags: 0
          },
          start: 0,
          end: 6,
          kind: 217,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'UnaryExpression',
            operator: '!',
            operand: {
              type: 'IdentifierReference',
              name: '',
              start: 8,
              end: 8,
              kind: 13,
              flags: 2
            },
            start: 6,
            end: 8,
            kind: 160,
            flags: 0
          },
          start: 6,
          end: 8,
          kind: 122,
          flags: 0
        }
      ],
      text: 'import !',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 7,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 8,
      end: 8
    });
  });

  it('import {,,,,,,,,,,,,,,,,, !', () => {
    t.deepEqual(recovery('import {,,,,,,,,,,,,,,,,, !', 'recovery.js', { module: true }), {
      kind: 209,
      directives: [],
      leafs: [
        {
          type: 'ImportDeclaration',
          fromClause: null,
          moduleSpecifier: null,
          importClause: {
            type: 'ImportClause',
            defaultBinding: null,
            nameSpaceImport: null,
            namedImports: {
              type: 'NamedImports',
              importsList: [],
              start: 6,
              end: 8,
              kind: 222,
              flags: 0
            },
            start: 6,
            end: 8,
            kind: 218,
            flags: 0
          },
          start: 0,
          end: 8,
          kind: 217,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'UnaryExpression',
            operator: '!',
            operand: {
              type: 'IdentifierReference',
              name: '',
              start: 27,
              end: 27,
              kind: 13,
              flags: 2
            },
            start: 25,
            end: 27,
            kind: 160,
            flags: 0
          },
          start: 25,
          end: 27,
          kind: 122,
          flags: 0
        }
      ],
      text: 'import {,,,,,,,,,,,,,,,,, !',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`}` expected',
          code: 5,
          start: 8,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 9,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 10,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 11,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 12,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 13,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 14,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 15,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 16,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 17,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 18,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 19,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 20,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 21,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 22,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 23,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 24,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 26,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 27,
      end: 27
    });
  });

  it('crazy long human senence', () => {
    t.deepEqual(
      recovery(
        'import babel parser and experience something slow you can export by default or try while waiting to switch for something fast !',
        'recovery.js',
        { module: true }
      ),
      {
        kind: 209,
        directives: [],
        leafs: [
          {
            type: 'ImportDeclaration',
            fromClause: null,
            moduleSpecifier: null,
            importClause: {
              type: 'ImportClause',
              defaultBinding: {
                type: 'BindingIdentifier',
                name: 'babel',
                start: 6,
                end: 12,
                kind: 168,
                flags: 0
              },
              nameSpaceImport: null,
              namedImports: null,
              start: 6,
              end: 12,
              kind: 218,
              flags: 0
            },
            start: 0,
            end: 12,
            kind: 217,
            flags: 0
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'IdentifierReference',
              name: 'parser',
              start: 12,
              end: 19,
              kind: 13,
              flags: 0
            },
            start: 12,
            end: 19,
            kind: 122,
            flags: 0
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'IdentifierReference',
              name: 'and',
              start: 19,
              end: 23,
              kind: 13,
              flags: 0
            },
            start: 19,
            end: 23,
            kind: 122,
            flags: 0
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'IdentifierReference',
              name: 'experience',
              start: 23,
              end: 34,
              kind: 13,
              flags: 0
            },
            start: 23,
            end: 34,
            kind: 122,
            flags: 0
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'IdentifierReference',
              name: 'something',
              start: 34,
              end: 44,
              kind: 13,
              flags: 0
            },
            start: 34,
            end: 44,
            kind: 122,
            flags: 0
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'IdentifierReference',
              name: 'slow',
              start: 44,
              end: 49,
              kind: 13,
              flags: 0
            },
            start: 44,
            end: 49,
            kind: 122,
            flags: 0
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'IdentifierReference',
              name: 'you',
              start: 49,
              end: 53,
              kind: 13,
              flags: 0
            },
            start: 49,
            end: 53,
            kind: 122,
            flags: 0
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'IdentifierReference',
              name: 'can',
              start: 53,
              end: 57,
              kind: 13,
              flags: 0
            },
            start: 53,
            end: 57,
            kind: 122,
            flags: 0
          },
          {
            type: 'ExportDeclaration',
            declaration: null,
            namedExports: [],
            namedBinding: null,
            fromClause: null,
            start: 57,
            end: 64,
            kind: 223,
            flags: 0
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'IdentifierReference',
              name: 'by',
              start: 64,
              end: 67,
              kind: 13,
              flags: 0
            },
            start: 64,
            end: 67,
            kind: 122,
            flags: 0
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'IdentifierReference',
              name: 'or',
              start: 75,
              end: 78,
              kind: 13,
              flags: 0
            },
            start: 75,
            end: 78,
            kind: 122,
            flags: 0
          },
          {
            type: 'TryStatement',
            block: {
              type: 'BlockStatement',
              leafs: [],
              start: 82,
              end: 82,
              kind: 123,
              flags: 0
            },
            catchClause: null,
            finalizer: null,
            start: 78,
            end: 82,
            kind: 138,
            flags: 0
          },
          {
            type: 'WhileStatement',
            expression: {
              type: 'IdentifierReference',
              name: 'waiting',
              start: 88,
              end: 96,
              kind: 13,
              flags: 0
            },
            statement: {
              type: 'ExpressionStatement',
              expression: {
                type: 'IdentifierReference',
                name: 'to',
                start: 96,
                end: 99,
                kind: 13,
                flags: 0
              },
              start: 96,
              end: 99,
              kind: 122,
              flags: 0
            },
            start: 82,
            end: 99,
            kind: 139,
            flags: 0
          },
          {
            type: 'SwitchStatement',
            expression: {
              type: 'IdentifierReference',
              name: '',
              start: 106,
              end: 106,
              kind: 13,
              flags: 2
            },
            clauses: [],
            start: 99,
            end: 106,
            kind: 136,
            flags: 0
          },
          {
            type: 'ForStatement',
            initializer: {
              type: 'IdentifierReference',
              name: 'something',
              start: 110,
              end: 120,
              kind: 13,
              flags: 0
            },
            condition: {
              type: 'UnaryExpression',
              operator: '!',
              operand: {
                type: 'IdentifierReference',
                name: '',
                start: 127,
                end: 127,
                kind: 13,
                flags: 2
              },
              start: 125,
              end: 127,
              kind: 160,
              flags: 0
            },
            incrementor: {
              type: 'IdentifierReference',
              name: 'fast',
              start: 120,
              end: 125,
              kind: 13,
              flags: 0
            },
            statement: {
              type: 'ExpressionStatement',
              expression: {
                type: 'IdentifierReference',
                name: '',
                start: 127,
                end: 127,
                kind: 13,
                flags: 2
              },
              start: 127,
              end: 127,
              kind: 122,
              flags: 0
            },
            start: 106,
            end: 127,
            kind: 132,
            flags: 0
          }
        ],
        text:
          'import babel parser and experience something slow you can export by default or try while waiting to switch for something fast !',
        fileName: 'recovery.js',
        context: 0,
        mutualFlags: 0,
        diagnostics: [
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 92,
            start: 13,
            length: 6
          },
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 92,
            start: 20,
            length: 3
          },
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 92,
            start: 24,
            length: 10
          },
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 92,
            start: 35,
            length: 9
          },
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 92,
            start: 45,
            length: 4
          },
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 92,
            start: 50,
            length: 3
          },
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 92,
            start: 54,
            length: 3
          },
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 92,
            start: 58,
            length: 6
          },
          {
            kind: 2,
            source: 2,
            message: 'Export declaration expected',
            code: 30,
            start: 65,
            length: 2
          },
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 92,
            start: 68,
            length: 7
          },
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 92,
            start: 79,
            length: 3
          },
          {
            kind: 2,
            source: 2,
            message: '`{` expected',
            code: 5,
            start: 83,
            length: 5
          },
          {
            kind: 2,
            source: 2,
            message: '`(` expected',
            code: 5,
            start: 89,
            length: 7
          },
          {
            kind: 2,
            source: 2,
            message: '`)` expected',
            code: 5,
            start: 97,
            length: 2
          },
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 92,
            start: 100,
            length: 6
          },
          {
            kind: 2,
            source: 2,
            message: '`(` expected',
            code: 5,
            start: 107,
            length: 3
          },
          {
            kind: 2,
            source: 2,
            message: '`(` expected',
            code: 5,
            start: 111,
            length: 9
          },
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 5,
            start: 121,
            length: 4
          },
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 5,
            start: 126,
            length: 1
          }
        ],
        detached: false,
        incremental: false,
        parent: null,
        children: [],
        start: 0,
        length: 127,
        end: 127
      }
    );
  });

  it('import {', () => {
    t.deepEqual(recovery('import {', 'recovery.js', { module: true }), {
      kind: 209,
      directives: [],
      leafs: [
        {
          type: 'ImportDeclaration',
          fromClause: null,
          moduleSpecifier: null,
          importClause: {
            type: 'ImportClause',
            defaultBinding: null,
            nameSpaceImport: null,
            namedImports: {
              type: 'NamedImports',
              importsList: [],
              start: 6,
              end: 8,
              kind: 222,
              flags: 0
            },
            start: 6,
            end: 8,
            kind: 218,
            flags: 0
          },
          start: 0,
          end: 8,
          kind: 217,
          flags: 0
        }
      ],
      text: 'import {',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`}` expected',
          code: 5,
          start: 7,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 8,
      end: 8
    });
  });

  it('import +', () => {
    t.deepEqual(recovery('import *', 'recovery.js', { module: true }), {
      kind: 209,
      directives: [],
      leafs: [
        {
          type: 'ImportDeclaration',
          fromClause: null,
          moduleSpecifier: null,
          importClause: {
            type: 'ImportClause',
            defaultBinding: null,
            nameSpaceImport: {
              type: 'BindingIdentifier',
              name: '',
              start: 8,
              end: 8,
              kind: 168,
              flags: 0
            },
            namedImports: null,
            start: 6,
            end: 8,
            kind: 218,
            flags: 0
          },
          start: 0,
          end: 8,
          kind: 217,
          flags: 0
        }
      ],
      text: 'import *',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`as` expected',
          code: 5,
          start: 7,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 8,
      end: 8
    });
  });

  it('import { import !', () => {
    t.deepEqual(recovery('import { import !', 'recovery.js', { module: true }), {
      kind: 209,
      directives: [],
      leafs: [
        {
          type: 'ImportDeclaration',
          fromClause: null,
          moduleSpecifier: null,
          importClause: {
            type: 'ImportClause',
            defaultBinding: null,
            nameSpaceImport: null,
            namedImports: {
              type: 'NamedImports',
              importsList: [
                {
                  type: 'ImportSpecifier',
                  name: null,
                  binding: {
                    type: 'IdentifierName',
                    name: 'import',
                    start: 8,
                    end: 15,
                    kind: 13,
                    flags: 0
                  },
                  start: 8,
                  end: 15,
                  kind: 222,
                  flags: 0
                },
                {
                  type: 'ImportSpecifier',
                  name: null,
                  binding: {
                    type: 'IdentifierName',
                    name: '',
                    start: 17,
                    end: 17,
                    kind: 13,
                    flags: 0
                  },
                  start: 15,
                  end: 17,
                  kind: 222,
                  flags: 0
                }
              ],
              start: 6,
              end: 17,
              kind: 222,
              flags: 0
            },
            start: 6,
            end: 17,
            kind: 218,
            flags: 0
          },
          start: 0,
          end: 17,
          kind: 217,
          flags: 0
        }
      ],
      text: 'import { import !',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`,` expected',
          code: 5,
          start: 16,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 17,
      end: 17
    });
  });

  it('export import still module code ! script or import', () => {
    t.deepEqual(recovery('export import still module code ! script or import', 'recovery.js', { module: true }), {
      kind: 209,
      directives: [],
      leafs: [
        {
          type: 'ExportDeclaration',
          declaration: null,
          namedExports: [],
          namedBinding: null,
          fromClause: null,
          start: 0,
          end: 6,
          kind: 223,
          flags: 0
        },
        {
          type: 'ImportDeclaration',
          fromClause: null,
          moduleSpecifier: null,
          importClause: {
            type: 'ImportClause',
            defaultBinding: {
              type: 'BindingIdentifier',
              name: 'still',
              start: 13,
              end: 19,
              kind: 168,
              flags: 0
            },
            nameSpaceImport: null,
            namedImports: null,
            start: 13,
            end: 19,
            kind: 218,
            flags: 0
          },
          start: 6,
          end: 19,
          kind: 217,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'IdentifierReference',
            name: 'module',
            start: 19,
            end: 26,
            kind: 13,
            flags: 0
          },
          start: 19,
          end: 26,
          kind: 122,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'IdentifierReference',
            name: 'code',
            start: 26,
            end: 31,
            kind: 13,
            flags: 0
          },
          start: 26,
          end: 31,
          kind: 122,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'UnaryExpression',
            operator: '!',
            operand: {
              type: 'IdentifierReference',
              name: 'script',
              start: 33,
              end: 40,
              kind: 13,
              flags: 0
            },
            start: 31,
            end: 40,
            kind: 160,
            flags: 0
          },
          start: 31,
          end: 40,
          kind: 122,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'IdentifierReference',
            name: 'or',
            start: 40,
            end: 43,
            kind: 13,
            flags: 0
          },
          start: 40,
          end: 43,
          kind: 122,
          flags: 0
        },
        {
          type: 'ImportDeclaration',
          fromClause: null,
          moduleSpecifier: null,
          importClause: {
            type: 'ImportClause',
            defaultBinding: null,
            nameSpaceImport: null,
            namedImports: null,
            start: 50,
            end: 50,
            kind: 218,
            flags: 0
          },
          start: 43,
          end: 50,
          kind: 217,
          flags: 0
        }
      ],
      text: 'export import still module code ! script or import',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Export declaration expected',
          code: 30,
          start: 7,
          length: 6
        },
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 20,
          length: 6
        },
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 27,
          length: 4
        },
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 32,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 41,
          length: 2
        },
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 44,
          length: 6
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 50,
      end: 50
    });
  });

  it('possible to export import ? ! while I try this, I go for a walk', () => {
    t.deepEqual(
      recovery('possible to export import ? ! while I try this, I go for a walk', 'recovery.js', { module: true }),
      {
        kind: 209,
        directives: [],
        leafs: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'IdentifierReference',
              name: 'possible',
              start: 0,
              end: 8,
              kind: 13,
              flags: 0
            },
            start: 0,
            end: 8,
            kind: 122,
            flags: 0
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'IdentifierReference',
              name: 'to',
              start: 8,
              end: 11,
              kind: 13,
              flags: 0
            },
            start: 8,
            end: 11,
            kind: 122,
            flags: 0
          },
          {
            type: 'ExportDeclaration',
            declaration: null,
            namedExports: [],
            namedBinding: null,
            fromClause: null,
            start: 11,
            end: 18,
            kind: 223,
            flags: 0
          },
          {
            type: 'ImportDeclaration',
            fromClause: null,
            moduleSpecifier: null,
            importClause: {
              type: 'ImportClause',
              defaultBinding: null,
              nameSpaceImport: null,
              namedImports: null,
              start: 25,
              end: 25,
              kind: 218,
              flags: 0
            },
            start: 18,
            end: 25,
            kind: 217,
            flags: 0
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'UnaryExpression',
              operator: '!',
              operand: {
                type: 'IdentifierReference',
                name: '',
                start: 29,
                end: 29,
                kind: 13,
                flags: 2
              },
              start: 27,
              end: 29,
              kind: 160,
              flags: 0
            },
            start: 27,
            end: 29,
            kind: 122,
            flags: 0
          },
          {
            type: 'WhileStatement',
            expression: {
              type: 'IdentifierReference',
              name: 'I',
              start: 35,
              end: 37,
              kind: 13,
              flags: 0
            },
            statement: {
              type: 'TryStatement',
              block: {
                type: 'BlockStatement',
                leafs: [],
                start: 41,
                end: 41,
                kind: 123,
                flags: 0
              },
              catchClause: null,
              finalizer: null,
              start: 37,
              end: 41,
              kind: 138,
              flags: 0
            },
            start: 29,
            end: 41,
            kind: 139,
            flags: 0
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'CommaOperator',
              expressions: [
                {
                  type: 'ThisExpression',
                  start: 41,
                  end: 46,
                  kind: 165,
                  flags: 0
                },
                {
                  type: 'IdentifierReference',
                  name: 'I',
                  start: 47,
                  end: 49,
                  kind: 13,
                  flags: 0
                }
              ],
              start: 41,
              end: 49,
              kind: 147,
              flags: 0
            },
            start: 41,
            end: 49,
            kind: 122,
            flags: 0
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'IdentifierReference',
              name: 'go',
              start: 49,
              end: 52,
              kind: 13,
              flags: 0
            },
            start: 49,
            end: 52,
            kind: 122,
            flags: 0
          },
          {
            type: 'ForStatement',
            initializer: {
              type: 'IdentifierReference',
              name: 'a',
              start: 56,
              end: 58,
              kind: 13,
              flags: 0
            },
            condition: {
              type: 'IdentifierReference',
              name: '',
              start: 63,
              end: 63,
              kind: 13,
              flags: 2
            },
            incrementor: {
              type: 'IdentifierReference',
              name: 'walk',
              start: 58,
              end: 63,
              kind: 13,
              flags: 0
            },
            statement: {
              type: 'ExpressionStatement',
              expression: {
                type: 'IdentifierReference',
                name: '',
                start: 63,
                end: 63,
                kind: 13,
                flags: 2
              },
              start: 63,
              end: 63,
              kind: 122,
              flags: 0
            },
            start: 52,
            end: 63,
            kind: 132,
            flags: 0
          }
        ],
        text: 'possible to export import ? ! while I try this, I go for a walk',
        fileName: 'recovery.js',
        context: 0,
        mutualFlags: 0,
        diagnostics: [
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 92,
            start: 9,
            length: 2
          },
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 92,
            start: 12,
            length: 6
          },
          {
            kind: 2,
            source: 2,
            message: 'Export declaration expected',
            code: 30,
            start: 19,
            length: 6
          },
          {
            kind: 2,
            source: 2,
            message: 'Statement expected',
            code: 8,
            start: 26,
            length: 1
          },
          {
            kind: 2,
            source: 2,
            message: 'Expression expected',
            code: 7,
            start: 30,
            length: 5
          },
          {
            kind: 2,
            source: 2,
            message: '`(` expected',
            code: 5,
            start: 36,
            length: 1
          },
          {
            kind: 2,
            source: 2,
            message: '`)` expected',
            code: 5,
            start: 38,
            length: 3
          },
          {
            kind: 2,
            source: 2,
            message: '`{` expected',
            code: 5,
            start: 42,
            length: 4
          },
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 92,
            start: 50,
            length: 2
          },
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 92,
            start: 53,
            length: 3
          },
          {
            kind: 2,
            source: 2,
            message: '`(` expected',
            code: 5,
            start: 57,
            length: 1
          },
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 5,
            start: 59,
            length: 4
          }
        ],
        detached: false,
        incremental: false,
        parent: null,
        children: [],
        start: 0,
        length: 63,
        end: 63
      }
    );
  });

  it('import export || (or) export import? I try while I eat! for 11 time!!', () => {
    t.deepEqual(
      recovery('import export || (or) export import? I try while I eat! for 11 time!!', 'recovery.js', {
        module: true
      }),
      {
        kind: 209,
        directives: [],
        leafs: [
          {
            type: 'ImportDeclaration',
            fromClause: null,
            moduleSpecifier: null,
            importClause: {
              type: 'ImportClause',
              defaultBinding: null,
              nameSpaceImport: null,
              namedImports: null,
              start: 6,
              end: 6,
              kind: 218,
              flags: 0
            },
            start: 0,
            end: 6,
            kind: 217,
            flags: 0
          },
          {
            type: 'ExportDeclaration',
            declaration: null,
            namedExports: [],
            namedBinding: null,
            fromClause: null,
            start: 6,
            end: 13,
            kind: 223,
            flags: 0
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'BinaryExpression',
              left: {
                type: 'IdentifierReference',
                name: '',
                start: 13,
                end: 13,
                kind: 13,
                flags: 2
              },
              operator: '||',
              right: {
                type: 'ParenthesizedExpression',
                expression: {
                  type: 'IdentifierReference',
                  name: 'or',
                  start: 18,
                  end: 20,
                  kind: 13,
                  flags: 0
                },
                start: 16,
                end: 21,
                kind: 189,
                flags: 0
              },
              start: 13,
              end: 21,
              kind: 155,
              flags: 0
            },
            start: 13,
            end: 21,
            kind: 122,
            flags: 0
          },
          {
            type: 'ExportDeclaration',
            declaration: null,
            namedExports: [],
            namedBinding: null,
            fromClause: null,
            start: 21,
            end: 28,
            kind: 223,
            flags: 0
          },
          {
            type: 'ImportDeclaration',
            fromClause: null,
            moduleSpecifier: null,
            importClause: {
              type: 'ImportClause',
              defaultBinding: null,
              nameSpaceImport: null,
              namedImports: null,
              start: 35,
              end: 35,
              kind: 218,
              flags: 0
            },
            start: 28,
            end: 35,
            kind: 217,
            flags: 0
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'IdentifierReference',
              name: 'I',
              start: 36,
              end: 38,
              kind: 13,
              flags: 0
            },
            start: 36,
            end: 38,
            kind: 122,
            flags: 0
          },
          {
            type: 'TryStatement',
            block: {
              type: 'BlockStatement',
              leafs: [],
              start: 42,
              end: 42,
              kind: 123,
              flags: 0
            },
            catchClause: null,
            finalizer: null,
            start: 38,
            end: 42,
            kind: 138,
            flags: 0
          },
          {
            type: 'WhileStatement',
            expression: {
              type: 'IdentifierReference',
              name: 'I',
              start: 48,
              end: 50,
              kind: 13,
              flags: 0
            },
            statement: {
              type: 'ExpressionStatement',
              expression: {
                type: 'IdentifierReference',
                name: 'eat',
                start: 50,
                end: 54,
                kind: 13,
                flags: 0
              },
              start: 50,
              end: 54,
              kind: 122,
              flags: 0
            },
            start: 42,
            end: 54,
            kind: 139,
            flags: 0
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'UnaryExpression',
              operator: '!',
              operand: {
                type: 'IdentifierReference',
                name: '',
                start: 55,
                end: 55,
                kind: 13,
                flags: 2
              },
              start: 54,
              end: 55,
              kind: 160,
              flags: 0
            },
            start: 54,
            end: 55,
            kind: 122,
            flags: 0
          },
          {
            type: 'ForStatement',
            initializer: {
              type: 'NumericLiteral',
              value: 11,
              start: 59,
              end: 62,
              kind: 10,
              flags: 0
            },
            condition: {
              type: 'UnaryExpression',
              operator: '!',
              operand: {
                type: 'UnaryExpression',
                operator: '!',
                operand: {
                  type: 'IdentifierReference',
                  name: '',
                  start: 69,
                  end: 69,
                  kind: 13,
                  flags: 2
                },
                start: 68,
                end: 69,
                kind: 160,
                flags: 0
              },
              start: 67,
              end: 69,
              kind: 160,
              flags: 0
            },
            incrementor: {
              type: 'IdentifierReference',
              name: 'time',
              start: 62,
              end: 67,
              kind: 13,
              flags: 0
            },
            statement: {
              type: 'ExpressionStatement',
              expression: {
                type: 'IdentifierReference',
                name: '',
                start: 69,
                end: 69,
                kind: 13,
                flags: 2
              },
              start: 69,
              end: 69,
              kind: 122,
              flags: 0
            },
            start: 55,
            end: 69,
            kind: 132,
            flags: 0
          }
        ],
        text: 'import export || (or) export import? I try while I eat! for 11 time!!',
        fileName: 'recovery.js',
        context: 0,
        mutualFlags: 0,
        diagnostics: [
          {
            kind: 2,
            source: 2,
            message: 'Statement expected',
            code: 8,
            start: 7,
            length: 6
          },
          {
            kind: 2,
            source: 2,
            message: 'Export declaration expected',
            code: 30,
            start: 14,
            length: 2
          },
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 92,
            start: 22,
            length: 6
          },
          {
            kind: 2,
            source: 2,
            message: 'Export declaration expected',
            code: 30,
            start: 29,
            length: 6
          },
          {
            kind: 2,
            source: 2,
            message: 'Statement expected',
            code: 8,
            start: 35,
            length: 1
          },
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 92,
            start: 39,
            length: 3
          },
          {
            kind: 2,
            source: 2,
            message: '`{` expected',
            code: 5,
            start: 43,
            length: 5
          },
          {
            kind: 2,
            source: 2,
            message: '`(` expected',
            code: 5,
            start: 49,
            length: 1
          },
          {
            kind: 2,
            source: 2,
            message: '`)` expected',
            code: 5,
            start: 51,
            length: 3
          },
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 92,
            start: 54,
            length: 1
          },
          {
            kind: 2,
            source: 2,
            message: 'Expression expected',
            code: 7,
            start: 56,
            length: 3
          },
          {
            kind: 2,
            source: 2,
            message: '`(` expected',
            code: 5,
            start: 60,
            length: 2
          },
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 5,
            start: 63,
            length: 4
          },
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 5,
            start: 67,
            length: 1
          },
          {
            kind: 2,
            source: 2,
            message: 'Expression expected',
            code: 7,
            start: 68,
            length: 1
          }
        ],
        detached: false,
        incremental: false,
        parent: null,
        children: [],
        start: 0,
        length: 69,
        end: 69
      }
    );
  });

  it('i try count! export, import for break what else? ah! while with class function.', () => {
    t.deepEqual(
      recovery('i try count! export, import for break what else? ah! while with class function.', 'recovery.js', {
        module: true
      }),
      {
        kind: 209,
        directives: [],
        leafs: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'IdentifierReference',
              name: 'i',
              start: 0,
              end: 1,
              kind: 13,
              flags: 0
            },
            start: 0,
            end: 1,
            kind: 122,
            flags: 0
          },
          {
            type: 'TryStatement',
            block: {
              type: 'BlockStatement',
              leafs: [],
              start: 5,
              end: 5,
              kind: 123,
              flags: 0
            },
            catchClause: null,
            finalizer: null,
            start: 1,
            end: 5,
            kind: 138,
            flags: 0
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'IdentifierReference',
              name: 'count',
              start: 5,
              end: 11,
              kind: 13,
              flags: 0
            },
            start: 5,
            end: 11,
            kind: 122,
            flags: 0
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'UnaryExpression',
              operator: '!',
              operand: {
                type: 'IdentifierReference',
                name: '',
                start: 12,
                end: 12,
                kind: 13,
                flags: 2
              },
              start: 11,
              end: 12,
              kind: 160,
              flags: 0
            },
            start: 11,
            end: 12,
            kind: 122,
            flags: 0
          },
          {
            type: 'ExportDeclaration',
            declaration: null,
            namedExports: [],
            namedBinding: null,
            fromClause: null,
            start: 12,
            end: 19,
            kind: 223,
            flags: 0
          },
          {
            type: 'ImportDeclaration',
            fromClause: null,
            moduleSpecifier: null,
            importClause: {
              type: 'ImportClause',
              defaultBinding: null,
              nameSpaceImport: null,
              namedImports: null,
              start: 27,
              end: 27,
              kind: 218,
              flags: 0
            },
            start: 20,
            end: 27,
            kind: 217,
            flags: 0
          },
          {
            type: 'ForStatement',
            initializer: {
              type: 'IdentifierReference',
              name: '',
              start: 31,
              end: 31,
              kind: 13,
              flags: 2
            },
            condition: {
              type: 'IdentifierReference',
              name: '',
              start: 31,
              end: 31,
              kind: 13,
              flags: 2
            },
            incrementor: {
              type: 'IdentifierReference',
              name: '',
              start: 31,
              end: 31,
              kind: 13,
              flags: 2
            },
            statement: {
              type: 'BreakStatement',
              label: {
                type: 'IdentifierReference',
                name: 'what',
                start: 37,
                end: 42,
                kind: 13,
                flags: 0
              },
              start: 31,
              end: 42,
              kind: 124,
              flags: 0
            },
            start: 27,
            end: 42,
            kind: 132,
            flags: 0
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'IdentifierReference',
              name: 'ah',
              start: 48,
              end: 51,
              kind: 13,
              flags: 0
            },
            start: 48,
            end: 51,
            kind: 122,
            flags: 0
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'UnaryExpression',
              operator: '!',
              operand: {
                type: 'IdentifierReference',
                name: '',
                start: 52,
                end: 52,
                kind: 13,
                flags: 2
              },
              start: 51,
              end: 52,
              kind: 160,
              flags: 0
            },
            start: 51,
            end: 52,
            kind: 122,
            flags: 0
          },
          {
            type: 'WhileStatement',
            expression: {
              type: 'IdentifierReference',
              name: '',
              start: 58,
              end: 58,
              kind: 13,
              flags: 2
            },
            statement: {
              type: 'WithStatement',
              expression: {
                type: 'ClassExpression',
                name: null,
                heritage: null,
                elements: [],
                start: 63,
                end: 69,
                kind: 149,
                flags: 0
              },
              statement: {
                type: 'FunctionDeclaration',
                name: null,
                generator: false,
                async: false,
                params: [],
                contents: {
                  type: 'FunctionBody',
                  directives: [],
                  leafs: [],
                  start: 78,
                  end: 78,
                  kind: 184,
                  flags: 0
                },
                start: 69,
                end: 78,
                kind: 186,
                flags: 0
              },
              start: 58,
              end: 78,
              kind: 128,
              flags: 0
            },
            start: 52,
            end: 78,
            kind: 139,
            flags: 0
          }
        ],
        text: 'i try count! export, import for break what else? ah! while with class function.',
        fileName: 'recovery.js',
        context: 0,
        mutualFlags: 0,
        diagnostics: [
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 92,
            start: 2,
            length: 3
          },
          {
            kind: 2,
            source: 2,
            message: '`{` expected',
            code: 5,
            start: 6,
            length: 5
          },
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 92,
            start: 11,
            length: 1
          },
          {
            kind: 2,
            source: 2,
            message: 'Expression expected',
            code: 7,
            start: 13,
            length: 6
          },
          {
            kind: 2,
            source: 2,
            message: 'Export declaration expected',
            code: 30,
            start: 19,
            length: 1
          },
          {
            kind: 2,
            source: 2,
            message: 'Statement expected',
            code: 8,
            start: 28,
            length: 3
          },
          {
            kind: 2,
            source: 2,
            message: '`(` expected',
            code: 5,
            start: 32,
            length: 5
          },
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 92,
            start: 43,
            length: 4
          },
          {
            kind: 2,
            source: 2,
            message: 'Statement expected',
            code: 8,
            start: 47,
            length: 1
          },
          {
            kind: 2,
            source: 2,
            message: '`;` expected',
            code: 92,
            start: 51,
            length: 1
          },
          {
            kind: 2,
            source: 2,
            message: 'Expression expected',
            code: 7,
            start: 53,
            length: 5
          },
          {
            kind: 2,
            source: 2,
            message: '`(` expected',
            code: 5,
            start: 59,
            length: 4
          },
          {
            kind: 2,
            source: 2,
            message: '`(` expected',
            code: 5,
            start: 64,
            length: 5
          },
          {
            kind: 2,
            source: 2,
            message: '`{` expected',
            code: 5,
            start: 70,
            length: 8
          },
          {
            kind: 3,
            source: 2,
            message: 'Function declaration require a name in this context',
            code: 10,
            start: 78,
            length: 1
          }
        ],
        detached: false,
        incremental: false,
        parent: null,
        children: [],
        start: 0,
        length: 79,
        end: 79
      }
    );
  });
});
