import * as t from 'assert';
import { recovery } from '../../../src/escaya';

describe('Recovery - For in', () => {
  it('missing parenthesis', () => {
    t.deepEqual(recovery('for (x in y', 'recovery.js'), {
      kind: 209,
      directives: [],
      leafs: [
        {
          type: 'ForInStatement',
          initializer: {
            type: 'IdentifierReference',
            name: 'x',
            start: 5,
            end: 6,
            kind: 13,
            flags: 0
          },
          expression: {
            type: 'IdentifierReference',
            name: 'y',
            start: 9,
            end: 11,
            kind: 13,
            flags: 0
          },
          statement: {
            type: 'ExpressionStatement',
            expression: {
              type: 'IdentifierReference',
              name: '',
              start: 11,
              end: 11,
              kind: 13,
              flags: 2
            },
            start: 11,
            end: 11,
            kind: 122,
            flags: 0
          },
          start: 0,
          end: 11,
          kind: 130,
          flags: 0
        }
      ],
      text: 'for (x in y',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`)` expected',
          code: 5,
          start: 10,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 11,
      end: 11
    });
  });

  it('for (5 in []) {}', () => {
    t.deepEqual(recovery('for (5 in []) {}', 'recovery.js'), {
      kind: 209,
      directives: [],
      leafs: [
        {
          type: 'ForInStatement',
          initializer: {
            type: 'NumericLiteral',
            value: 5,
            start: 5,
            end: 6,
            kind: 10,
            flags: 0
          },
          expression: {
            type: 'ArrayLiteral',
            kind: 178,
            elements: [],
            start: 9,
            end: 12,
            flags: 0
          },
          statement: {
            type: 'BlockStatement',
            leafs: [],
            start: 13,
            end: 16,
            kind: 123,
            flags: 0
          },
          start: 0,
          end: 16,
          kind: 130,
          flags: 0
        }
      ],
      text: 'for (5 in []) {}',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          code: 104,
          kind: 3,
          length: 1,
          message: 'Invalid left-hand side in for-loop',
          source: 2,
          start: 10
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 16,
      end: 16
    });
  });

  it('for(x in', () => {
    t.deepEqual(recovery('for(x in', 'recovery.js'), {
      kind: 209,
      directives: [],
      leafs: [
        {
          type: 'ForInStatement',
          initializer: {
            type: 'IdentifierReference',
            name: 'x',
            start: 4,
            end: 5,
            kind: 13,
            flags: 0
          },
          expression: {
            type: 'IdentifierReference',
            name: '',
            start: 8,
            end: 8,
            kind: 13,
            flags: 2
          },
          statement: {
            type: 'ExpressionStatement',
            expression: {
              type: 'IdentifierReference',
              name: '',
              start: 8,
              end: 8,
              kind: 13,
              flags: 2
            },
            start: 8,
            end: 8,
            kind: 122,
            flags: 0
          },
          start: 0,
          end: 8,
          kind: 130,
          flags: 0
        }
      ],
      text: 'for(x in',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 6,
          length: 2
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
});
