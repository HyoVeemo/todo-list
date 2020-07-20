import React, {Component} from 'react';
import TodoItem from './TodoItem'

// Todo item 컴포넌트 여러개를 랜더링해준다. 

class TodoItemList extends Component{

    shouldComponentUpdate(nextProps,nextState){
        return this.props.todos !== nextProps.todos;
    }
 

    render(){
        const { todos, onToggle, onRemove } = this.props;
        // todo : todo 객체들이 들어있는 배열
        // onToggle : 체크박스를 키고 끄는 함수 
        // onRemove : 아이템을 삭제시키는 함수
    
        const todoList  = todos.map(
            ({id, text, checked})=>(
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );




        return(
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;