package com.example.backend;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.ArrayList;

@CrossOrigin(origins = "*")
@RestController
public class TodoController {

    private List<Todo> todos = new ArrayList<>();

    public TodoController() {
        todos.add(new Todo(1L, "Do your homework.", false));
        todos.add(new Todo(2L, "Do the shores.", false));
    }

    @GetMapping("/todos")
    public List<Todo> getTodos() {
        return todos;
    }

    @PostMapping("/todos")
    public Todo addTodo(@RequestBody Todo todo) {
        todos.add(todo);
        return todo;
    }

    @DeleteMapping("/todos/{id}")
    public void deleteTodo(@PathVariable Long id) {
    todos.removeIf(todo -> todo.getId().equals(id));
}

}
