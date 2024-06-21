import { Link } from 'react-router-dom'
import './BoardList.css'

export const BoardList = () => {
  return (
    <div>
      <ul>
        <li>
          <h1 className="board-1-title">
            <Link to="/boards/board-1">Board 1</Link>
          </h1>
        </li>
      </ul>
    </div>
  )
}
