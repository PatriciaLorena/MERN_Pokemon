function lanzarMoneda() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function cincoVeces() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        
        const voltearMoneda = () => {
            attempts++;
            let result = lanzarMoneda();
            console.log(`${result} was flipped`);
            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
            
            if (headsCount === 5) {
                resolve(`It took ${attempts} tries to flip five "heads"`);
            } else if (attempts > 100) { 
                reject("Se excedió el límite de intentos");
            } else {
                setTimeout(voltearMoneda, 0); 
            }
        };
        
        voltearMoneda();
    });
}

cincoVeces()
    .then(result => {
        console.log(result);
        console.log("This is run after the fiveHeads function completes");
    })
    .catch(error => {
        console.error(error);
    });
