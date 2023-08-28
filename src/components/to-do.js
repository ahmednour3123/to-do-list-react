import { useState } from "react";

const ToDo = () => {
  const [todos, setTodo] = useState([]);
  const addTodo = (event) => {
    event.preventDefault();
    let task = document.getElementById("form1").value;
    console.log(task);
    const newTodos = {
      id: todos.length + 1,
      task: task,
      status: "pending",
    };
    setTodo([...todos, newTodos]);
  };

  const deleteTodo = (taskId) => {
    setTodo(todos.filter((item) => item.id !== taskId));
  };

  const done = (i) => {
    const stut=[...todos]
    stut[i].status = "done"
    setTodo(stut);
  };
  return (
    <div>
      <section class="vh-100 ">
        <div class="container py-5 h-100 ">
          <div class="row d-flex justify-content-center align-items-center h-100 ">
            <div class="col col-lg-9 col-xl-7">
              <div style={{height:"700px",backgroundColor:"orange"}} class="card rounded-3  ">
                <div class="card-body p-4 ">
                  <h2 class="text-center my-3 pb-3">To Do List</h2>

                  <form class="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2 ">
                    <div class="col-12">
                      <div class="form-outline">
                        <input type="text" id="form1" class="form-control" placeholder=" Enter a task here"/>
                     
                      </div>
                    </div>

                    <div class="col-12">
                      <button onClick={addTodo} class="btn btn-primary">
                        Save
                      </button>
                    </div>

                    <div class="col-12">
                      <button type="submit" class="btn btn-warning">
                      Reset
                      </button>
                    </div>
                  </form>

                  <table class="table mb-4">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Todo item</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {todos.map((todo,i) => (
                        <tr>
                          <th scope="row" key={todo.id}>
                            {todo.id}
                          </th>
                          <td style={{textDecoration:todo.status==="done"?"line-through":""}}>{todo.task}</td>
                          <td>{todo.status}</td>
                          <td>
                            <button onClick={() => deleteTodo(todo.id)} type="submit" class="btn btn-danger me-2">
                              Delete
                            </button>
                            <button onClick={() => done(i)} type="submit" class="btn btn-success">
                              done
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToDo;
