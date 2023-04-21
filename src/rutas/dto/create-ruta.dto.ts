import { IsString, MinLength } from "class-validator";

export class CreateRutaDto {
    @IsString()
    readonly id: string;

    @IsString({message: 'el nombre no puede estar vacio y no debe ser numeros'})
    readonly nombre: string;

    @IsString({message: 'la descripcion no debe estar vacia'})
    @MinLength(20,{message: 'minimo 20 caracteres'})
    readonly descripcion: string;

}
