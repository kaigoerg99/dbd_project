package com.example.springtemplate.movies.daos;

import com.example.springtemplate.movies.models.Movie;
import com.example.springtemplate.movies.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class MovieDao {
  @Autowired
  MovieRepository repository;

  @PostMapping("/api/movies")
  public Movie createMovie(@RequestBody Movie movie) {
    return repository.save(movie);
  }

  @GetMapping("/api/movies")
  public List<Movie> findAllMovies() {
    return (List<Movie>) repository.findAll();
  }

  @GetMapping("/api/movies/{movieId}")
  public Movie findMovieById(
          @PathVariable("movieId") Integer id) {
    return repository.findById(id).get();
  }

  @PutMapping("/api/movies/{movieId}")
  public Movie updateMovie(
          @PathVariable("movieId") Integer id,
          @RequestBody() Movie newMovie) {
    Movie movie = this.findMovieById(id);
    movie.setTitle(newMovie.getTitle());
    movie.setDate(newMovie.getDate());
    movie.setGenre(newMovie.getGenre());
    return repository.save(movie);
  }

  @DeleteMapping("/api/movies/{movieId}")
  public void deleteMovie(
          @PathVariable("movieId") Integer id) {
    repository.deleteById(id);
  }


}
