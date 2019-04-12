import React,{useState} from 'react'
import withStyle from 'react-jss'

const styles = {
    root:{
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}
function TodoPage(props){
    const [newTodo, setNewTodo] = useState('')
    const [todos, setTodos] = useState([])
    const {classes} = props

    function handleNewTodoChange(e){
        e.preventDefault()
        setNewTodo(e.target.value)
    }

    function handleNewTodo(e){
        e.preventDefault()
        if(newTodo !== '')
        setTodos([...todos,{id:Date.now, description:newTodo, complete:false}])
        setNewTodo('')
        e.target.reset()
    }

    return (
        <div className={classes.root}>
            <div>
                <h1>Today</h1>
            </div>
            <div>
                <form onSubmit={handleNewTodo}>
                    <input value={newTodo} placeholder={'Add Todo'} onChange={handleNewTodoChange}/>
                </form>
            </div>
            <div>
                <ul>
                    {
                        todos.map(todo=>(
                            <li>{todo.description}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default withStyle(styles)(TodoPage)