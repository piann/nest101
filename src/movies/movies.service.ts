import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movies.entity';


@Injectable()
export class MoviesService {
    private movies:Movie[] = [];

    getAll(): Movie[]{
        return this.movies;
    }

    getOne(id:string): Movie{
        const movie = this.movies.find(movie => movie.id === parseInt(id));
        if(!movie){
            throw new NotFoundException(`${id} Movie doesn't exist`)
        }
        return movie
    }

    removeOne(id:string){
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== parseInt(id));
        
    }

    createOne(movieData){
        this.movies.push({
            id: this.movies.length+1,
            ...movieData
        })
    }

    updateOne(id:string, updateData){
        const movie = this.getOne(id);
        this.removeOne(id);
        this.movies.push({...movie, ...updateData});
    }
}
