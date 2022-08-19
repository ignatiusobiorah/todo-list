import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styled from "styled-components";
import { useState } from "react";
import { ITasks } from "./interface";

const App = () => {
  //useStates
  const [view, setView] = useState<boolean>(false);
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ITasks[]>([]);
  const [dark, setDark] = useState<boolean>(false);

  //function to handleSubmit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos([{ task: todo, id: todos.length + 1 }, ...todos]);
    setTodo("");
  };

  //function to deleteContact
  const deleteContact = (id: number) => {
    const filteredTasks = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTasks);
  };

  return (
    <Exp className="container">
      <nav>
        <a href="/">{/* <img src={} alt="logo" /> */}</a>
        <i
          className="fa-solid fa-moon"
          onClick={(e: React.MouseEvent) => setDark(!dark)}
        ></i>
      </nav>
      <button
        className="toggleTasks"
        onClick={(e: React.MouseEvent) => setView(!view)}
      >
        {view ? "Close Tasks" : "Show Tasks"}
      </button>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <input
            value={todo}
            type="text"
            placeholder="Add Todo"
            onChange={(e) => setTodo(e.target.value)}
          />
        </form>
        {view ? (
          <div className="todoList">
            <table>
              <thead>
                <tr>
                  <th>TASK</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo) => (
                  <tr key={todo.id}>
                    <td>{todo.task}</td>
                    <td>
                      <i className="fa-solid fa-pen-to-square"></i>
                      <i
                        className="fa-solid fa-delete-left"
                        onClick={() => deleteContact(todo.id)}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <button
            className="pending"
            onClick={(e: React.MouseEvent) => setView(!view)}
          >
            You Have {todos.length} Pending Tasks !
          </button>
        )}
      </div>
    </Exp>
  );
};

export default App;

//styled-components

const Exp = styled.div`
  width: 1200px;
  height: 100vh;
  max-width: 100%;
  min-height: 400px;
  margin: 0 auto;
  background: rgb(247, 246, 244);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  nav {
    display: flex;
    justify-content: space-between;
    background: rgb(102, 99, 92);
    padding: 1rem;

    .fa-moon {
      padding: 1rem;
      cursor: pointer;
    }
  }
  
   .toggleTasks {
    background: rgb(102, 99, 92);
    color: white;
    padding: 1rem;
    border: none;
    outline: none;
    font-weight: 600;
    cursor: pointer;
    margin-top: 1rem;
    margin-left: 88%;
   }
   
  .main {
    padding: 1rem;
    margin-left: 8rem;

    input {
      width: 67.2%;
      outline: none;
      border: none;
      padding: 1rem;
      background: rgb(189, 183, 170);
      margin: 1rem 0rem;
    }

    table {
      text-align: center;
      padding: 1rem;
      width: 70%;
      background: rgb(189, 183, 170);

        & th,td {
           @extend table;
           background: rgb(102, 99, 92);
           color: white;
           padding: 0.4rem;
           width: 80%;

            i {
                cursor: pointer;
                margin: 0.5rem;
            }
        } 

    }

    .pending{
      background: rgb(102, 99, 92);
      color: white;
      padding: 0.5rem;
      border: none;
      outline: none;
      font-weight: 600;
      cursor: pointer;
      margin-top: 1rem;
      margin-left: 25%;
      padding: 1rem;
      font-size: 1rem;
        }
`;
