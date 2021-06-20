import React from 'react'
import { IState as IProps } from '../App'

const List: React.FC<IProps> = ({students}) => {

    const renderList = (): JSX.Element[] => {
        return students.map(student => 
            <li className="List">
                <div className="List-header">
                    <img className="List-img" src={student.url} alt="" />
                    <h2>{student.name}</h2>
                </div>
                <p>{student.age} years old</p>
                <p>{student.note}</p>
            </li> 
        )
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List
