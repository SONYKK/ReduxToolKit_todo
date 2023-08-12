import {FC, memo} from 'react'
import './NewToDo.css'

interface NewToDoProps {
  text: string,
  handleInput: (str: string)=>void,
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>)=>void
}


const NewToDo: FC<NewToDoProps> = ({text, handleInput, handleSubmit}) => {
  
  return (
    <label>
      <input
        type="text"
        value={text}
        onChange={(e) => handleInput(e.target.value)}
        className='input'
      />
      <button
          className='button'
          onClick={
        text.trim().length ? handleSubmit : undefined
      }>Add ToDo
      </button>
    </label>
  );
}

export default memo(NewToDo);
