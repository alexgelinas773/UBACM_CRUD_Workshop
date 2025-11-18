package com.example.ACM_CRUD_demo;

import com.example.ACM_CRUD_demo.Model.TaskModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Controller {

    @Autowired
    PostRepository repo;

    @GetMapping("/allTasks")
    public List<TaskModel> getAllPosts(){
        return repo.findAll();
    }

    @PostMapping("/addTask")
    public TaskModel addPost(@RequestBody TaskModel toAdd){
        return repo.save(toAdd);
    }

    @DeleteMapping("/deleteTask/{id}")
    public void deleteTask(@PathVariable String id){
        repo.deleteById(id);
    }





}
