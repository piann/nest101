import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movies.entity';


@Injectable()
export class MoviesService {
    private movies:Movie[] = [];

    getAll(): Movie[]{
        return this.movies;
    }

    getOne(id:number): Movie{
        const movie = this.movies.find(movie => movie.id === id);
        if(!movie){
            throw new NotFoundException(`${id} Movie doesn't exist`)
        }
        return movie
    }

    removeOne(id:number){
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== id);
        
    }

    createOne(movieData: CreateMovieDto){
        this.movies.push({
            id: this.movies.length+1,
            ...movieData
        })
    }

    updateOne(id:number, updateData: UpdateMovieDto){
        const movie = this.getOne(id);
        this.removeOne(id);
        this.movies.push({...movie, ...updateData});
    }
}
