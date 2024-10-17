import { Controller, Get, Param, Query} from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'http';
import { Student } from './entidades/Student.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
//ENDPOINT : METODO QUE SE EJECUTA CUANDO SE INVOCA DETERMINADA 
//url DESDE EL CLIENTE HTTP(bruno)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //endpoint;
  //1.Metodo (verbo) HTTP a utilizar(junto con la ruta)
  //2. Firma del metodo a invocar
  //3. Instrucciones a ejecutar
  @Get("/prueba1")
  mensaje():string {
    return "mensaje de prueba1"
  }

  @Get("/bootcamps/:id/curso/:cursoId")
  mensajeBootcampPorId(@Param("id") id:string, 
                       @Param("cursoId") cursoId:string ): string{
    return `mostrando bootcamp con id: ${id} y el curso: ${cursoId}`
  }
  @Get("identificacion/:id")
  getIdentificacion(@Query("nombre") nombre:string,
                    @Query("edad") edad:number,
                    @Param("id") id:number,
                    @Query("ciudad") ciudad:string ): Student {
    return new Student (id, nombre, edad, ciudad)

  }

}
