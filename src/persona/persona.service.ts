import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Persona } from './interface/Persona.interface';
import { v4 as uuid } from 'uuid';
// import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto, CreatePersonaDto } from './dto';

@Injectable()
export class PersonaService {
  private perso: Persona[] = [
    {
      id: uuid(),
      nombre: 'maria',
      edad: 23,
      telefono: 324145252,
    },
    {
      id: uuid(),
      nombre: 'jose',
      edad: 26,
      telefono: 32452,
    },
    {
      id: uuid(),
      nombre: 'ramirin',
      edad: 54,
      telefono: 3241,
    },
  ];

  getAllPersonas() {
    return this.perso;
  }

  getPersonaById(id: string) {
    const per = this.perso.find((persona) => persona.id === id);
    if (!per) throw new NotFoundException(`persona con id: ${id} no existe`);

    return per;
  }

  createPersona(createPersonaDto: CreatePersonaDto) {
    const persona: Persona = {
      id: uuid(),
      ...createPersonaDto,
      // nombre: createPersonaDto.nombre,
      // edad: createPersonaDto.edad,
      // telefono: createPersonaDto.telefono,
    };
    this.perso.push(persona);
    return persona;
  }

  updatePersona(id: string, updatePersonaDto: UpdatePersonaDto) {
    const persona = this.getPersonaById(id);
    if ( updatePersonaDto.id && updatePersonaDto.id !== id)
      throw new BadRequestException(`el id no puede ser modificado`);
    this.perso = this.perso.map(per =>{
      if(per.id === id){
        return {...per, ...updatePersonaDto}
      }
      return per
    })
    return persona;
  }

  deletePersona(id: string){
    const persona = this.getPersonaById(id);
    this.perso = this.perso.filter(per => per.id !== id)
    return persona;
    
  }
}
