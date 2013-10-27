// ================== CONSTANTS ====================
const OPERATORS = [ "+", "-", "*", "/" ];

// Our expression MUST BE without whitespace because of simplicity
function _removeWhitespace(str)
{
  return str.replace(/\s+/g, ""); 
}

function _getFoundOperatorsList(str)
{
   var foundOps = [];
   for ( index in str )
     if ( OPERATORS.indexOf(str[index]) != -1 )
       foundOps.push( str[index] );
   return foundOps;
}

// Main evalvating function
function evalvate(str)
{ 
  _removeWhitespace(str);  
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
