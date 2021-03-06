
// ================== CONSTANTS ====================

const OPERATORS     = [ "*", "/", "%", "+", "-" ];
const OPERANDS      = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];
const OPERATOR_PATT = /[\+\-\*\/]/g;
const OPERAND_PATT  = /[0-9]+(?:[.][0-9]+){0,1}/g;

// ================== AUXILIARY FUNCTIONS ==============

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

function _parseNumber(numString)
{
  return numString.contains(".") ? parseFloat(numString) : parseInt(numString);
}

function _replaceFirst(str, former, next)
{
	var formerStartIndex = str.indexOf(former);
	if (formerStartIndex === -1) return str;
	var formerEndIndex = formerStartIndex + former.length;
	return str.substring(0, formerStartIndex) + next + str.substring(formerEndIndex);
}

// ==== MAIN FUNCTION (evalvate) + auxiliary evalv.functions  ======

function evalvate(str)
{ 
  str = _removeWhitespace(str);
  var operators = _getOperators(str);
  var operands  = _getOperands(str);
  
  for (opIndex in OPERATORS)
  {
		for (foundOpIndex in operators)
		{
			var result = _evalPair(operators[foundOpIndex],
							 operands[foundOpIndex], operands[foundOpIndex + 1]);					
		}  
  }
}

function _evalPair(operator, operand1, operand2)
{
    var num1 = _parseNumber(operand1);
    var num2 = _parseNumber(operand2);
	       
    var result;
    switch(operator)
    {
      case "*":
	result = num1 * num2;
	break;
      case "/":
	result = num1 / num2;
	break;
      case "%":
	result = num1 % num2;
	break;
      case "+":
	result = num1 + num2;
	break;
      case "-":
	result = num1 - num2;
	break;
    }
    
    return result;	       
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

function _evalPair_test()
{
  alert(_evalPair("+", "8", "4"));
  alert(_evalPair("*", "52.4", "3"));
  alert(_evalPair("/", "8.369", "41"));
  alert(_evalPair("%", "2", "3"));
}

function _replaceFirst_test()
{
	alert(_replaceFirst("sanotacianoa", "ano", "zum"));
	alert(_replaceFirst("cna", "ano", "zum"));
	alert(_replaceFirst("jjjjj", "j", "k"));
	alert(_replaceFirst("chnao", "ch", ""));	
}