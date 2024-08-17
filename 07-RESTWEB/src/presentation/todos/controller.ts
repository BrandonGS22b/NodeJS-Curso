import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';




export class TodosController {

  //* DI
  constructor() { }


  public getTodos =async ( req: Request, res: Response ) => {
    const todos = await prisma.todo.findMany();
    return res.json( todos );
  };

  public getTodoById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const todo = await prisma.todo.findFirst({ where: { id } });
   

    ( todo )
      ? res.json( todo )
      : res.status( 404 ).json( { error: `TODO with id ${ id } not found` } );
  };

  //crear 
  public createTodo =async( req: Request, res: Response ) => {
    const { text } = req.body;
    if ( !text ) return res.status( 400 ).json( { error: 'Text property is required' } );
    const todo = await prisma.todo.create({
      data: {
        text
      }
    });
   
    
    

    res.json( todo );

  };


  ///actualizar
  public updateTodo =async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );
    
    //llamamos a todo para bucar el id o objeto en la base de datos
    const todo = await prisma.todo.findFirst({ where: { id } });

    if ( !todo ) return res.status( 404 ).json( { error: `Todo with id ${ id } not found` } );
    
    const { text, completedAt } = req.body;
    
    //para actualizar los datos los datos en la base de datos
    const updatedTodo = prisma.todo.update({
      where: { id },
      data: {
        text,
        completedAt: completedAt === 'null'? null : new Date(completedAt)
      }
    })
    

    res.json( todo );

  }

//controlador para eliminar
  public deleteTodo = async(req:Request, res: Response) => {
    const id = +req.params.id;
    //eliminamos este para bucar el id
    //const todo = todos.find(todo => todo.id === id );
    //ponemos el siguiente para hacer la busqueda en el mdelo todo en la base de datos 
    const todo = await prisma.todo.findFirst({ where: { id } });
    if ( !todo ) return res.status(404).json({ error: `Todo with id ${ id } not found` });

    const deleted=await prisma.todo.delete({ where: { id } });
    res.json(deleted );

  }
  


}