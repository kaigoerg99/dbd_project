package com.example.springtemplate.movies.repositories;

import com.example.springtemplate.movies.models.MovieUser;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MovieUserRepository extends CrudRepository<MovieUser, Integer> {

}
