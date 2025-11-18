package com.example.ACM_CRUD_demo;

import com.example.ACM_CRUD_demo.Model.TaskModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<TaskModel, String> {
}
