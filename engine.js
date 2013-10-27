// ================== CONSTANTS ====================
const OPERATORS = [ "+", "-", "*", "/" ];
const OPERANDS = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];

// Our expression MUST BE without whitespace because of simplicity
function _removeWhitespace(str)
{
  return str.replace(/\s+/g, ""); 
}

function __getCharacterGroup(ALLOWABLE_LIST, str)
{
   var found = [];
   for ( index in str )
     if ( ALLOWABLE_LIST.indexOf(str[index]) != -1 )
       found.push( str[index] );
   return found;
}

function _getOperators(str)
{
    return __getCharacterGroup(OPERATORS, str);
}

function _getOperands(str)
{
    return __getCharacterGroup(OPERANDS, str);
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
