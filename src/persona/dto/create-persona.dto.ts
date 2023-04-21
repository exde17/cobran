import { IsString, MinLength } from 'class-validator';

export class CreatePersonaDto {
  readonly id: string;
  @IsString({ message: 'ojo esta mal el nombre del dato' })
  readonly nombre: string;
  @IsString({ message: `ojo esta mal el nombre del dato` })
  readonly edad: number;
  @IsString({ message: `ojo esta mal el nombre del dato` }) //garantiza que este dato se enviado
  @MinLength(10, { message: 'el telefono minimo 10 caracteres' })
  readonly telefono: number;
}
