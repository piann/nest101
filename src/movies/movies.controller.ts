import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movies.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService){}

    @Get()
    getAll(): Movie[]{
        return this.moviesService.getAll();
    }

    @Get("search")
    search(@Query('year') searchingYear:string){
        return `We r searching movie in Year:${searchingYear}`
    }

    @Get(":id")
    getOne(@Param('id') id: string){
        return this.moviesService.getOne(id);
    }

    @Post()
    createMovie(@Body() movieData){
        return this.moviesService.createOne(movieData)
    }

    @Delete(":id")
    removeMovie(@Param('id') id: string){
        return this.moviesService.removeOne(id)
    }

    @Patch(":id")
    updateMovie(@Param('id') id: string, @Body() updateData){
        return this.moviesService.updateOne(id, updateData);
    }

}
