// ================== CONSTANTS ====================
const OPERATORS     = [ "+", "-", "*", "/" ];
const OPERANDS      = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];
const OPERATOR_PATT = /[\+\-\*\/]/g;
const OPERAND_PATT  = /[0-9]+(?:[.][0-9]+){0,1}/g;

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

function _getOperators_test()
{
  alert(_getOperators("jan+o-"));   
  alert(_getOperators("ja"));
  alert(_getOperators("jan+o*--"));
  alert(_getOperators("+++"));
}

function _getOperands_test()
{
  alert(_getOperands("75+6"));   
  alert(_getOperands("hmm"));
  alert(_getOperands("-6+54.8*6"));
  alert(_getOperands("+2.00+0.1+35"));
}