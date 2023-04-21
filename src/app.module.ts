import { Module } from '@nestjs/common';
import { PersonaModule } from './persona/persona.module';
import { PersonaService } from './persona/persona.service';
import { RutasModule } from './rutas/rutas.module';

@Module({
  imports: [PersonaModule, RutasModule],
  controllers: [],
  providers: [PersonaService],
  exports: [],
})
export class AppModule {}
