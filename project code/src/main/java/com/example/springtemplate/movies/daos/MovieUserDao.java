package com.example.springtemplate.movies.daos;

import com.example.springtemplate.movies.models.MovieUser;
import com.example.springtemplate.movies.repositories.MovieUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class MovieUserDao {
  @Autowired
  MovieUserRepository repository;

  @PostMapping("/api/movieUsers")
  public MovieUser createUser(@RequestBody MovieUser user) {
    return repository.save(user);
  }

  @GetMapping("/api/movieUsers")
  public List<MovieUser> findAllUsers() {
    return (List<MovieUser>) repository.findAll();
  }

  @GetMapping("/api/movieUsers/{userId}")
  public MovieUser findUserById(
          @PathVariable("userId") Integer id) {
    return repository.findById(id).get();
  }

  @PutMapping("/api/movieUsers/{userId}")
  public MovieUser updateUser(
          @PathVariable("userId") Integer id,
          @RequestBody() MovieUser newUser) {
    MovieUser user = this.findUserById(id);
    user.setFirstName(newUser.getFirstName());
    user.setLastName(newUser.getLastName());
    user.setUsername(newUser.getUsername());
    user.setPassword(newUser.getPassword());
    user.setEmail(newUser.getEmail());
    user.setDateOfBirth(newUser.getDateOfBirth());
    return repository.save(user);
  }

  @DeleteMapping("/api/movieUsers/{userId}")
  public void deleteUser(
          @PathVariable("userId") Integer id) {
    repository.deleteById(id);
  }
}
