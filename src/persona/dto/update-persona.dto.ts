import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdatePersonaDto {

  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;
  @IsString({ message: 'ojo esta mal el nombre del dato' })
  @IsOptional()
  readonly nombre?: string;
  @IsString({ message: `ojo esta mal el nombre del dato` })
  @IsOptional()
  readonly edad?: number;
  @IsString({ message: `ojo esta mal el nombre del dato` }) //garantiza que este dato se enviado
  @MinLength(10, { message: 'el telefono minimo 10 caracteres' })
  @IsOptional()
  readonly telefono?: number;
}
