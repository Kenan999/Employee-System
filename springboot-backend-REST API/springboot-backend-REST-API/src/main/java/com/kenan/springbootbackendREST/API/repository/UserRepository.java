package com.kenan.springbootbackendREST.API.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kenan.springbootbackendREST.API.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
