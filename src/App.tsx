import  "./App.css"
import React, {useState} from 'react'
import List from "../src/components/List"

export interface IState {
  students : {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

export default function App() {
const [students, setStudents] = useState<IState["students"]>([
  {
    name: "Maudy",
    url:"http://bisnisnews.id/core/images/uploads/gambar-20200914_Jp58ul.jpg",
    age: 25,
    note: "hay hay hay"
  }
])

  return (
    <div className="App">
      <h1>Student List</h1>
      <List students={students}/>
    </div>
  )
}
