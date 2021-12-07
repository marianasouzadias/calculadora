function calculadora (num1, num2, operacao) {
    if (operacao == "+"){
     return num1 + num2;
    }else if (operacao == "-"){
       return num1 - num2;
    }else if (operacao == "*") {
       return num1 * num2;
    }else if (operacao == "/") {
         return num1 / num2;
      } else {
       return "Não definido";
     }
    };
    
    
    console.log(calculadora(10, 2, "+"));
     console.log(calculadora(10, 2, "-"));
      console.log(calculadora(10, 2, "*"));
       console.log(calculadora(10, 2, "/"));
        console.log(calculadora(10, 2,));