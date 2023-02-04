package com.ums.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ums.entities.User;

public interface UserRepo extends JpaRepository<User, Integer> {

}
