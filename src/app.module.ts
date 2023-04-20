import { Module } from '@nestjs/common';
import { PersonaModule } from './persona/persona.module';
import { PersonaService } from './persona/persona.service';

@Module({
  imports: [PersonaModule],
  controllers: [],
  providers: [PersonaService],
  exports: [],
})
export class AppModule {}
