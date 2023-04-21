import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PersonaService } from './persona.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';

@Controller('persona')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @Get()
  getAllPersonas() {
    return this.personaService.getAllPersonas();
  }

  @Get(':id')
  getPersonaById(@Param('id', ParseUUIDPipe) id: string) {
    console.log(id);
    return this.personaService.getPersonaById(id);
  }

  @Post()
  // @UsePipes(ValidationPipe)
  createPersona(@Body() createPersonaDto: CreatePersonaDto) {
    return this.personaService.createPersona(createPersonaDto);
  }

  @Patch(':id')
  updatePersona(@Param('id', ParseUUIDPipe) id: string, 
  @Body() updatePersonaDto: UpdatePersonaDto) {
    return this.personaService.updatePersona(id, updatePersonaDto);
  }

  @Delete(':id')
  deletePersona(@Param('id', ParseUUIDPipe) id: string) {
    return this.personaService.deletePersona(id)
  }
}
