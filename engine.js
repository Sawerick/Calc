// ================== CONSTANTS ====================
const OPERATORS     = [ "+", "-", "*", "/" ];
const OPERANDS      = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];
const OPERATOR_PATT = /[+-*/]/g;
const OPERAND_PATT  = /[0-9]+(?:[.][0-9]+){,1}/g;

// Our expression MUST BE without whitespace because of simplicity
function _removeWhitespace(str)
{
  return str.replace(/\s+/g, ""); 
}

function __getCharacterGroup(RGX_PATTERN, str)
{
   return str.match(RGX_PATTERN);
}

function _getOperators(str)
{
    return __getCharacterGroup(OPERATOR_PATT, str);
}

function _getOperands(str)
{
    return __getCharacterGroup(OPERAND_PATT, str);
}

// Main evalvating function
function evalvate(str)
{ 
  str = _removeWhitespace(str);
  var operators = _getOperators(str);
  var operands  = _getOperands(str);
}


// ================== TESTS ======================
function _removeWhitespace_test()
{ 
  alert(_removeWhitespace("j an    o") === "jano");
  alert(_removeWhitespace("") === "");
  alert(_removeWhitespace("  a ja a no  ") === "ajaano");
  alert(_removeWhitespace("chnaa") === "chnaa");
}

function _getFoundOperatorsList_test()
{
  alert(_getFoundOperatorsList("jan+o-"));   
  alert(_getFoundOperatorsList("ja"));
  alert(_getFoundOperatorsList("jan+o*--"));
  alert(_getFoundOperatorsList("+++"));
}
