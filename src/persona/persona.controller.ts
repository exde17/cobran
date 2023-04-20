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
} from '@nestjs/common';
import { PersonaService } from './persona.service';
import { CreatePersonaDto } from './dto/create-persona.dto';

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
  @UsePipes(ValidationPipe)
  createPersona(@Body() createPersonaDto: CreatePersonaDto) {
    return createPersonaDto;
  }

  @Patch(':id')
  updatePersona(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  deletePersona(@Param('id', ParseIntPipe) id: number) {
    return {
      message: `persona con id: ${id} eliminada`,
      id: id,
    };
  }
}
