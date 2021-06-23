import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return "This will return all"
    }

    @Get("search")
    search(@Query('year') searchingYear:string){
        return `We r searching movie in Year:${searchingYear}`
    }

    @Get(":id")
    getOne(@Param('id') id: string){
        return `This will return ${id}`
    }

    @Post()
    createMovie(@Body() movieData){
        return movieData
    }

    @Delete(":id")
    removeMovie(@Param('id') id: string){
        return `This will remove ${id}`
    }

    @Patch(":id")
    updateMovie(@Param('id') id: string, @Body() updateData){
        return {
            updatedMovieId:id,
            ...updateData
        }
    }



}
