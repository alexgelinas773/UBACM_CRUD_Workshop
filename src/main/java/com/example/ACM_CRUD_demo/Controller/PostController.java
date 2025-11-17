package com.example.ACM_CRUD_demo.Controller;

import com.example.ACM_CRUD_demo.Model.PostModel;
import com.example.ACM_CRUD_demo.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PostController {

    @Autowired
    PostRepository repo;

    @GetMapping("/allTasks")
    public List<PostModel> getAllPosts(){
        return repo.findAll();
    }

    @PostMapping("/addTask")
    public PostModel addPost(@RequestBody PostModel toAdd){
        return repo.save(toAdd);
    }
}
