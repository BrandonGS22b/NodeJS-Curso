
//para hacer el test de una prueba encerramos en describe y test y ponemos el codigo adentro
describe('Test in the App File', ()=>{
    test('should be 15', ()=>{


        //1. ARRANQE
        const num1=10;
        const num2=5;

        //2.Act
        const sum = num1 + num2;

        //3.Assert
        //expect(sum).toBe(15);    // esta linea nos dice espera que retultado sea 30 
        //tambien podemos pero es mejor la anterior
        if (sum ===15) {
            console.log('La suma es correcta');
        }else{
            throw new Error('La suma no es correcta');
          
        }
    })

})