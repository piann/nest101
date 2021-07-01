import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  describe("getAll", ()=>{
    it("should return an array", ()=> {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array)
    }
    )
  })


  describe("getOne", ()=>{
    it("should return an movie", ()=> {

      service.createOne({
        title: 'Test Movie',
        genres: ['action'],
        year:2002
      })

      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);

    })
    it("should throw 404 error", ()=>{
      try{
        service.getOne(999);
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException)
        expect(e.message).toEqual("999 Movie doesn't exist")
      }
    })
  })

  describe("removeOne", ()=>{
    it("removes a movie", ()=> {

      service.createOne({
        title: 'Test Movie',
        genres: ['action'],
        year:2002
      })


      const allMovies = service.getAll();
      service.removeOne(1)
      const allMoviesAfterDelete = service.getAll();
      expect(allMoviesAfterDelete.length).toEqual(allMovies.length - 1);
    }
    )
  })

  describe("createOne", ()=>{
    it("creates a movie", ()=> {

      service.createOne({
        title: 'Test Movie',
        genres: ['action'],
        year:2002
      })


      const movieData = service.getOne(1);
      expect(movieData.year).toEqual(2002);
    }
    )
  })

  // let's add test case for other method
  describe("updateOne", ()=>{
    it("update a movie", ()=>{

      service.createOne({
        title: 'Test Movie',
        genres: ['action'],
        year:2002
      })
      service.updateOne(
        1,
        {
          title: 'Test Movie',
          genres: ['action'],
          year:9999
        }
      )

      const movieData = service.getOne(1);
      expect(movieData.year).toEqual(9999);



    })
  })
});
