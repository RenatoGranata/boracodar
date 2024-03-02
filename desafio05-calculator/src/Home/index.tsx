import { useState } from "react";
import { CalculationContainer, CalculatorContainer, KeyboardContainer } from "./styles";



interface ValuesDefinition {
    val: string;
    type: string;
}


export function Home(){
    

    const [calculation, setCalculation] = useState("0")
    const [calc, setCalc] = useState("")

    const [isEqual, setIsEqual] = useState(false)

    const BtnCalculator = [
        {
            val: "CE",
            type: "Operator"

        },
        {
            val: "C",
            type: "Operator"

        },
        {
            val: "%",
            type: "Signal"

        },
        {
            val: "/",
            type: "Signal"

        },
        {
            val: "7",
            type: "Number"

        },
        {
            val: "8",
            type: "Number"

        },
        {
            val: "9",
            type: "Number"

        },
        {
            val: "*",
            type: "Signal"

        },
        {
            val: "4",
            type: "Number"

        },
        {
            val: "5",
            type: "Number"

        },
        {
            val: "6",
            type: "Number"

        },
        {
            val: "-",
            type: "Signal"

        },
        {
            val: "1",
            type: "Number"

        },
        {
            val: "2",
            type: "Number"

        },
        {
            val: "3",
            type: "Number"

        },
        {
            val: "+",
            type: "Signal"

        },
        {
            val: "+/-",
            type: "OperatorSignal"

        },
        {
            val: "0",
            type: "Number"

        },
        {
            val: ".",
            type: "Dot"

        },
        {
            val: "=",
            type: "OperatorEqual"

        },
    ]

    let clickUpdate = false;

    function Calculator(btnvalues: ValuesDefinition){
        switch (btnvalues.type) {
            case "Number":
                // setIsEqual(false)
                if(calculation === "0"){
                    setCalculation(btnvalues.val)
                    clickUpdate = true

                    setIsEqual(false)
                    
                } else if(isEqual === true){
                    setCalc("")
                    setCalculation(btnvalues.val)

                    setIsEqual(false)
                }
                else
                    setCalculation(calculation + btnvalues.val)
                    clickUpdate = true
                    setIsEqual(false)
                    
                break;
            
            case "Operator":
                if(btnvalues.val == "CE"){
                    setCalculation("0")
                } else if(btnvalues.val == "C"){
                    setCalculation("0")
                    setCalc("")
                }
                break;

            case "Dot":
                if(isEqual === true){
                    setCalc("")
                    setCalculation("0" + btnvalues.val)

                    setIsEqual(false)
                }else if(!calculation.includes(btnvalues.val)){
                    setCalculation(calculation + btnvalues.val)
                }
                else
                    break;
                break;

            case "OperatorSignal":

                

                // alert(calculation)
                if(isNaN(Number(calculation[0])) == false){
                    // alert("alou")
                    setCalculation("-" + calculation)
                }
                
                else{
                    

                    setCalculation(calculation.replace("-", ""))
                }
                
                break;

            case "Signal":
                if(isEqual === true){
                    setCalc("")
                    setCalc(calculation + btnvalues.val)
                    setCalculation("0")

                    setIsEqual(false)
                }
                
                

                

                else if(isNaN(Number(calculation[calculation.length - 1])) == true){

                    setCalculation(calculation.slice(0, -1))
                    setCalc(calc + calculation.slice(0, -1) + btnvalues.val)
                    setCalculation("0")
                    
                    clickUpdate = false
                }
                else if(clickUpdate === false && calculation === "0"){
                    if(calc === ""){
                        setCalc(calc + calculation + btnvalues.val)
                    }
                    else{

                        setCalc(calc.slice(0, -1) + btnvalues.val)
                    }
                }else if(btnvalues.val === "%"){
                    const porcent = Number(calc.slice(0, -1)) * Number(calculation) / 100
                    setCalc(calc + calculation + btnvalues.val + "=")
                    setCalculation(String(porcent))

                    setIsEqual(true)
                }else{
                    
                    
                    
                    setCalc(calc + calculation + btnvalues.val)
                    setCalculation("0")
                    
                    clickUpdate = false

                    
                }
                
                break;

            case "OperatorEqual":
                
                if(calc[calc.length - 1] !== "="){
                    setCalc(calc + calculation + btnvalues.val)
                    setCalculation(String(eval(calc + calculation)))

                    setIsEqual(true)

                }
                

                

                break;

        
            default:
                break;
        }
        
    } 

    return(
        <CalculatorContainer>
            <CalculationContainer>
                <p>{calc}</p>
                <span>
                    <p>=</p>
                    <div>
                        <strong>{calculation}</strong>
                    </div>
                </span>

            </CalculationContainer>

            <KeyboardContainer>
                

                {BtnCalculator.map(btnvalues => {
                    return(
                        <button onClick={()=> Calculator(btnvalues)}>{btnvalues.val}</button>
                    )
                })}
            </KeyboardContainer>
        </CalculatorContainer>
    )
}