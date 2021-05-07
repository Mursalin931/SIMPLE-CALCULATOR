//alert("hello")

let input = document.getElementById("input");
let output = document.getElementById("output")

function calcy(value) {

    switch (value) {
        case 'AC':
            input.innerHTML = "";
            output.innerHTML = "";
            break;
        case 'C':
            input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length - 1);
            output.innerHTML = math.evaluate(input.innerHTML);
            break;

        case '=':
            input.innerHTML = math.evaluate(input.innerHTML);
            break;

        default:
            output.innerHTML += value;
            input.innerHTML += value;


    }

}