let validResults = [];

// results for table structure
document.write("<table>");
document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");

while (true) {
    // prompt
    let inputX = prompt("Enter the first number (x):");
    if (inputX === null) break;

    let op = prompt("Enter an arithmetic operator (+, -, *, /, %):");
    if (op === null) break;

    let inputY = prompt("Enter the second number (y):");
    if (inputY === null) break;

    let result;
    let isError = false;

    let x = Number(inputX);
    let y = Number(inputY);

    // input and calculation verification 
    if (inputX.trim() === "" || inputY.trim() === "" || isNaN(x) || isNaN(y)) {
        result = "wrong input number";
        isError = true;
    } else if (!["+", "-", "*", "/", "%"].includes(op)) {
        result = "computation error";
        isError = true;
    } else {
        switch (op) {
            case "+":
                result = x + y;
                break;
            case "-":
                result = x - y;
                break;
            case "*":
                result = x * y;
                break;
            case "/":
                result = y !== 0 ? x / y : "computation error";
                if (result === "computation error") isError = true;
                break;
            case "%":
                result = y !== 0 ? x % y : "computation error";
                if (result === "computation error") isError = true;
                break;
        }
    }

    // collect total for the summary table
    if (!isError && typeof result === "number") {
        validResults.push(result);
    }

    
    document.write("<tr><td>" + inputX + "</td><td>" + op + "</td><td>" + inputY + "</td><td>" + result + "</td></tr>");

    // ask user if they wish to continue
    let continueLoop = confirm("Do you want to perform another calculation?");
    if (!continueLoop) {
        break;
    }
}

document.write("</table>");


document.write("<table>");
document.write("<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>");

if (validResults.length > 0) {
    let min = Math.min(...validResults);
    let max = Math.max(...validResults);
    let total = validResults.reduce((acc, curr) => acc + curr, 0);
    let avg = total / validResults.length;

    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
} else {
    document.write("<tr><td>N/A</td><td>N/A</td><td>N/A</td><td>N/A</td></tr>");
}

document.write("</table>");
