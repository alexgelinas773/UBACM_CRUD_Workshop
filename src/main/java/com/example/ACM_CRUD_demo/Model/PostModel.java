package com.example.ACM_CRUD_demo.Model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Tasks")
public class PostModel {
    private String _id;
    private String Name;
    private String Class;
    private String DueDate;
    private String Status;

    public PostModel(){

    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getClassName() {
            return Class;
    }

    public void setClassName(String aClass) {
        Class = aClass;
    }

    public String getDueDate() {
        return DueDate;
    }

    public void setDueDate(String dueDate) {
        DueDate = dueDate;
    }

    public String getName(){
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getStatus(){
        return Status;
    }

    public void setStatus(String status) {
        Status = status;
    }

    @Override
    public String toString() {
        String toreturn =  "Name: " + Name + "\n";
        toreturn += "Class: " + Class + "\n";
        toreturn += "Due Date: " + DueDate + "\n";
        toreturn += "Status: " + Status + "\n";
        return toreturn;
    }
}
