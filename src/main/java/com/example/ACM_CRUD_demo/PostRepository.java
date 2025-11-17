package com.example.ACM_CRUD_demo;

import com.example.ACM_CRUD_demo.Model.PostModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<PostModel, String> {
}
