package com.example.ACM_CRUD_demo;

import com.example.ACM_CRUD_demo.Model.TaskModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class Controller {

    @Autowired
    PostRepository repo;

    @GetMapping("/allTasks")
    public List<TaskModel> getAllTasks(){
        return repo.findAll();
    }

    @PostMapping("/addTask")
    public TaskModel addPost(@RequestBody TaskModel toAdd){
        return repo.save(toAdd);
    }

    @PutMapping("/updateTask/{id}")
    public TaskModel updateTask(@PathVariable String id, @RequestBody TaskModel updatedTask){
        TaskModel toUpdate = repo.findById(id).orElse(null);
        if (toUpdate != null){
            toUpdate.matchTo(updatedTask);
            return repo.save(toUpdate);
        }
        return null;
    }

    @DeleteMapping("/deleteTask/{id}")
    public void deleteTask(@PathVariable String id){
        repo.deleteById(id);
    }


}
