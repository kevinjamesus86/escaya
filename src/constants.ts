export const enum Constants {
  IdentfierName = 0b00000000010000011100000000000000,
  IdentifierAfterModifier = 0b00000010010000011100000000000000,
  AwaitOrModule = 0b00000000010000000000001000000000,
  IdentifierOrKeyword = 0b00000000010000001100000000000000,
  IdentifierOrFutureKeyword = 0b00000000010000010100000000000000,
  IdentifierOrPattern = 0b110000011100000000000000,
  StatementList = 0b110000011111000000000000,
  BlockStatement = 0b110111011111000000000000,
  NextTokenIsNotALetDeclaration = 0b110000011100000000000000,
  SwitchClauce = 0b10000110111000110000000000000,
  DelimitedList = 0b00100000110111011110000000000000,
  RootLeafs = 0b00100000110010011111000000000000,
  ReturnOrGlobalReturn = 0b0010000000001000,
  ClassElementList = 0b00010010110000011100000000000000,
  NextTokenIsLetAsIdentifierOrPattern = 0b00000000110000011100000000000000,
  LabelIdentifier = 0b00000000010000011100000000000000,

  // Context
  StrictOrDisabledWebCompat = 0b0000000100000100,

  // BindingType

  AssignmentOrPattern = 0b0000000000000101,
  LetOrConst = 0b0000000000001101
}