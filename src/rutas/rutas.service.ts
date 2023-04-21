import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRutaDto } from './dto/create-ruta.dto';
import { UpdateRutaDto } from './dto/update-ruta.dto';
import { Ruta } from './entities/ruta.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class RutasService {

  private rutas: Ruta[] =[
    {
      id: uuid(),
      nombre: 'Norte',
      descripcion: 'Ruta Norte',
    }
    
  ]
  create(createRutaDto: CreateRutaDto) {
    const { nombre, descripcion } = createRutaDto;
    const ruta: Ruta={
      id: uuid(),
      nombre: nombre.toLocaleLowerCase(),
      descripcion,
    }

    this.rutas.push(ruta);
    return 
  }

  findAll() {
    return this.rutas
  }

  findOne(id: string) {
    const ruta = this.rutas.find(ruta => ruta.id === id);
      if (!ruta) throw new NotFoundException('no se encontro esta ruta')
    return ruta
  }

  update(id: string, updateRutaDto: UpdateRutaDto) {
    let rutaDB = this.findOne(id);
    this.rutas = this.rutas.map(ruta => {
      if(ruta.id === id){
        rutaDB = {...rutaDB, ...updateRutaDto}
        return rutaDB
      }
    return  ruta
    })
    
  }

  remove(id: string) {
    this.rutas = this.rutas.filter(ruta => ruta.id !== id)
    // return this.rutas
  }
}
