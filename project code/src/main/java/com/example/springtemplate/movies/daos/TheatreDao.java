package com.example.springtemplate.movies.daos;

import com.example.springtemplate.movies.models.Movie;
import com.example.springtemplate.movies.models.Theatre;
import com.example.springtemplate.movies.repositories.MovieRepository;
import com.example.springtemplate.movies.repositories.TheatreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TheatreDao {
  @Autowired
  TheatreRepository repository;

  @PostMapping("/api/theatres")
  public Theatre createTheatre(@RequestBody Theatre theatre) {
    return repository.save(theatre);
  }

  @GetMapping("/api/theatres")
  public List<Theatre> findAllTheatres() {
    return (List<Theatre>) repository.findAll();
  }

  @GetMapping("/api/theatres/{theatreId}")
  public Theatre findTheatreById(
          @PathVariable("theatreId") Integer id) {
    return repository.findById(id).get();
  }

  @PutMapping("/api/theatres/{theatreId}")
  public Theatre updateTheatre(
          @PathVariable("theatreId") Integer id,
          @RequestBody() Theatre newTheatre) {
    Theatre theatre = this.findTheatreById(id);
    theatre.setName(newTheatre.getName());
    theatre.setAddress(newTheatre.getAddress());
    return repository.save(theatre);
  }

  @DeleteMapping("/api/theatres/{theatreId}")
  public void deleteTheatre(
          @PathVariable("theatreId") Integer id) {
    repository.deleteById(id);
  }
}
