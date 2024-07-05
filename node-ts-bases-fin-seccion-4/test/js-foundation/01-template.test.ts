/*
para ejecutar el siguiente archivo

npm run test:watch
*/



import { emailTemplate } from '../../src/js-foundation/01-template';
describe('js-foundation/01-template.test.ts ', () => {
    test('emailTemplate should contain a greeting' , () => {
        //aqui adentro es lo que la prueba va a ejecutar

        //////////////////////////////////////////////////////////
        expect(emailTemplate).toContain('Hi,')
        //ahora vamos hacerlo con el orderId
        expect(emailTemplate).toContain('{{orderId}}')

//lession 58  vamos con el destructuring

    });




})