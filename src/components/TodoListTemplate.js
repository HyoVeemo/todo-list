import React from 'react';
import './TodoListTemplate.css';
const TodoListTemplate = ({form,  children}) =>{
    return (
        <main className = "todo-list-template">
            <div className = "title">
                오늘 할 일
            </div>
            <selection className="form-wrapper">
                { form }
            </selection>
            <selection className="todos-wrapper">
                { children }
            </selection>
        </main>
    );
};

export default TodoListTemplate;
