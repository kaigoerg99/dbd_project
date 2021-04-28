package com.example.springtemplate.movies.repositories;

import com.example.springtemplate.movies.models.Theatre;
import org.springframework.data.repository.CrudRepository;

public interface TheatreRepository extends CrudRepository<Theatre, Integer> {
}
