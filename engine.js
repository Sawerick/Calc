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


