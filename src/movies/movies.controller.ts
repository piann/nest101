import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return "This will return all"
    }

    @Get(":id")
    getOne(@Param('id') id: string){
        return `This will return ${id}`
    }

    @Post()
    createMovie(){
        return "Create movie"
    }

    @Delete(":id")
    removeMovie(@Param('id') id: string){
        return `This will remove ${id}`
    }

    @Patch(":id")
    updateMovie(@Param('id') id: string){
        return `This will update ${id}`
    }
}
