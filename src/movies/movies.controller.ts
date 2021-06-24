import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
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
    search(@Query('year') searchingYear:number){
        return `We r searching movie in Year:${searchingYear}`
    }

    @Get(":id")
    getOne(@Param('id') id: number){
        return this.moviesService.getOne(id);
    }

    @Post()
    createMovie(@Body() movieData: CreateMovieDto){
        return this.moviesService.createOne(movieData)
    }

    @Delete(":id")
    removeMovie(@Param('id') id: number){
        return this.moviesService.removeOne(id)
    }

    @Patch(":id")
    updateMovie(@Param('id') id: number, @Body() updateData:UpdateMovieDto){
        return this.moviesService.updateOne(id, updateData);
    }

}
