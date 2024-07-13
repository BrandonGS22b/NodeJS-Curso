import { SaveFile } from './save-file.use-case';
import fs from 'fs';

describe('saveFileuseCase', () => {

    test('should save a multiplication table to a file', async () => {
        //Arrange (Preparar):
        const saveFile= new SaveFile();
        const filePath = 'output/table.txt ';
        const options = {
            fileContent:'test content',

        };
        /*
Act (Actuar):

Llama al método execute con las opciones definidas.
Verifica si el archivo se creó.
Lee el contenido del archivo. */
        const result = saveFile.execute(options);
        const fileExists = fs.existsSync(filePath); //ojo esto valida que el archivo existe p alla sido creado
        const fileContent = fs.readFileSync(filePath, 'utf8');

       /*Assert (Afirmar):

Asegura que execute devolvió true.
Asegura que el archivo existe.
Asegura que el contenido del archivo es el esperado. */
        


        expect(result).toBe(true);
        expect(fileExists).toBe(true);
        expect(fileContent).toBe(options.fileContent);

    });

    test('should save file with custom values',()=>{

        const options = {
            fileContent:'Custom content',
            fileName:'custom-Table-name',
            fileDestination:'custom-outputs/file-destination',

        }   

         //Arrange (Preparar):
         const saveFile= new SaveFile();
         const filePath = `${options.fileDestination}/${options.fileName}.txt`;
         const result = saveFile.execute(options);
         const fileExists = fs.existsSync(filePath); //ojo esto valida que el archivo existe p alla sido creado
         const fileContent = fs.readFileSync(filePath, 'utf8');	
         

         /*
Act (Actuar):
Llama al método execute con las opciones definidas.
Verifica si el archivo se creó.
Lee el contenido del archivo. */
        

        expect(result).toBe(true);
        expect(fileExists).toBe(true);
        expect(fileContent).toBe(options.fileContent);




 /*Assert (Afirmar):

Asegura que execute devolvió true.
Asegura que el archivo existe.
Asegura que el contenido del archivo es el esperado. */




    } )


});