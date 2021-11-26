let a = '1111110';

function ConverToBinary(binary) {
    let finalValue = 0;
    for (let x = 0; x < binary.length; x++) {
        // Get the digit
        let currentValue = binary[x];

        // If first digit, then just carry down
        if (x === 0) {
            // Convert string to integer
            finalValue += parseInt(currentValue);
        } else {
            // Multiply by 2
            let tempo = finalValue * 2;
            finalValue = tempo + parseInt(currentValue);
        }
    }

    console.log(finalValue);
}

ConverToBinary(a);
