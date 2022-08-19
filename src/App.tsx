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
  const deleteContact = () => {};

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
                {todos.map((todos) => (
                  <tr key={todos.id}>
                    <td>{todos.task}</td>
                    <td>
                      <i className="fa-solid fa-pen-to-square"></i>
                      <i
                        className="fa-solid fa-delete-left"
                        onClick={deleteContact}
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
    margin-left: 90%;
   }
   
  .main {
    padding: 1rem;

    input {
      width: 70%;
      outline: none;
      border: none;
      padding: 1rem;
      background: rgb(189, 183, 170);
      margin: 1rem 0rem;
    }

    table {
      text-align: center;
      padding: 1rem;
      width: 100%;
      background: rgb(189, 183, 170);

        & th,td {
           @extend table;
           background: rgb(102, 99, 92);
           color: white;
           padding: 0.4rem;

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
      margin-left: 40%;
      padding: 1rem;
      font-size: 1rem;
        }
`;

const Dark = styled.body`
  .dark {
    color: white;

    .container {
      background: black;

      nav {
        background: rgb(45, 44, 44);

        .fa-moon {
          color: yellow;
        }
      }
    }
  }
`;
