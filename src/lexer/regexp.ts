import * as Types from '../types';
import { Char } from './char';
import { Token } from '../ast/token';
import { AsciiCharFlags, AsciiCharTypes } from './asciiChar';
import { isIdentifierPart, fromCodePoint } from './common';
import { Context, ParserState } from '../common';
import { addDiagnostic, DiagnosticSource, DiagnosticKind } from '../diagnostic';
import { DiagnosticCode } from '../diagnostic/diagnostic-code';

export function scanRegExpFlags(state: ParserState, context: Context): any {
  const enum Flags {
    Empty = 0,
    Global = 0x01,
    IgnoreCase = 0x02,
    Multiline = 0x04,
    Unicode = 0x08,
    Sticky = 0x10,
    DotAll = 0x20
  }

  let mask = Flags.Empty;
  let char = state.source.charCodeAt(state.index);

  while (isIdentifierPart(char)) {
    switch (char) {
      case Char.LowerG:
        if (mask & Flags.Global) {
          addDiagnostic(
            state,
            context,
            DiagnosticSource.Lexer,
            DiagnosticCode.DuplicateRegExpFlag,
            DiagnosticKind.Error
          );
        }
        mask |= Flags.Global;
        break;

      case Char.LowerI:
        if (mask & Flags.IgnoreCase) {
          addDiagnostic(
            state,
            context,
            DiagnosticSource.Lexer,
            DiagnosticCode.DuplicateRegExpFlag,
            DiagnosticKind.Error
          );
        }
        mask |= Flags.IgnoreCase;
        break;

      case Char.LowerM:
        if (mask & Flags.Multiline) {
          addDiagnostic(
            state,
            context,
            DiagnosticSource.Lexer,
            DiagnosticCode.DuplicateRegExpFlag,
            DiagnosticKind.Error
          );
        }
        mask |= Flags.Multiline;
        break;

      case Char.LowerU:
        if (mask & Flags.Unicode) {
          addDiagnostic(
            state,
            context,
            DiagnosticSource.Lexer,
            DiagnosticCode.DuplicateRegExpFlag,
            DiagnosticKind.Error
          );
        }
        mask |= Flags.Unicode;
        break;

      case Char.LowerY:
        if (mask & Flags.Sticky) {
          addDiagnostic(
            state,
            context,
            DiagnosticSource.Lexer,
            DiagnosticCode.DuplicateRegExpFlag,
            DiagnosticKind.Error
          );
        }
        mask |= Flags.Sticky;
        break;

      case Char.LowerS:
        if (mask & Flags.DotAll) {
          addDiagnostic(
            state,
            context,
            DiagnosticSource.Lexer,
            DiagnosticCode.DuplicateRegExpFlag,
            DiagnosticKind.Error
          );
        }
        mask |= Flags.DotAll;
        break;

      default:
        addDiagnostic(state, context, DiagnosticSource.Lexer, DiagnosticCode.UnknownRegExpFlag, DiagnosticKind.Error);
    }

    state.index++;
    char = state.source.charCodeAt(state.index);
  }
}

export function scanRegExp(state: ParserState, context: Context): Token {
  const bodyStart = state.index;

  const enum Preparse {
    Empty = 0,
    Escape = 0x1,
    Class = 0x2
  }

  let preparseState = Preparse.Empty;

  while (true) {
    const ch = state.source.charCodeAt(state.index);
    state.index++;

    if (preparseState & Preparse.Escape) {
      preparseState &= ~Preparse.Escape;
    } else {
      if (ch <= 0x5e) {
        if (ch === Char.Slash) {
          if (!preparseState) break;
        } else if (ch === Char.Backslash) {
          preparseState |= Preparse.Escape;
        } else if (ch === Char.LeftBracket) {
          preparseState |= Preparse.Class;
        } else if (ch === Char.RightBracket) {
          preparseState &= Preparse.Escape;
        } else if (AsciiCharTypes[ch] & AsciiCharFlags.IsStringLiteralLineTerminator) {
          addDiagnostic(state, context, DiagnosticSource.Lexer, DiagnosticCode.UnknownRegExpFlag, DiagnosticKind.Error);
          break;
        }
      } else if ((ch & ~1) === Char.LineSeparator) {
        addDiagnostic(state, context, DiagnosticSource.Lexer, DiagnosticCode.UnterminatedRegExp, DiagnosticKind.Error);
        break;
      }
    }
    if (state.index >= state.length) {
      addDiagnostic(state, context, DiagnosticSource.Lexer, DiagnosticCode.UnterminatedRegExp, DiagnosticKind.Error);
      break;
    }
  }

  state.regExpPattern = state.source.slice(bodyStart, state.index - 1);

  const flagsStart = state.index;

  // Scan regexp flags
  scanRegExpFlags(state, context);

  state.regExpFlags = state.source.slice(flagsStart, state.index);

  return Token.RegularExpression;
}
