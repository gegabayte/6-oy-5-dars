import { useState } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState('Xasanboy');
  const [surName, setsurName] = useState('Muhammaddinov');
  const [age, setAge] = useState(15);
  const [select, setSelect] = useState(1);
  const [desc, setDesc] = useState('SENIOR');
  const [nat, setNat] = useState('');
  const [todos, setTodo] = useState(JSON.parse(localStorage.getItem('todos')))



  function handleClickBtn(e) {
    e.preventDefault();

    const obj = {
      id: Date.now(),
      name: name,
      surName: surName,
      age: age,
      desc: desc
    }

    function getDeta() {
      let data = [];
      if (localStorage.getItem("todos")) {
        data = JSON.parse(localStorage.getItem("todos"))
      }
      return data;
    }

    let old = getDeta();
    old.push(obj);
    localStorage.setItem('todos', JSON.stringify(old));
    setName('');
    setsurName('');
    setAge('');
    setDesc('');
    select(0);
    let copy = JSON.parse(JSON.stringify(todos));
    copy.push(obj);
    setTodo(copy)

  }

  function handleDelite (ell) {
    console.log(ell);
    let copy = JSON.parse(JSON.stringify(todos));

  }



  return (
    <>
      <div className="hero">
        <div className="container hero__container">
          <h1 style={{ textAlign: 'center' }}>Todo</h1>
          <form>
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              placeholder='Enter Name'
              value={name}
              onChange={(e) => { setName(e.target.value) }}
            />

            <label htmlFor="surname">Surname*</label>
            <input
              type="text"
              id="surname"
              placeholder='Enter Surname'
              value={surName}
              onChange={(e) => { setsurName(e.target.value) }}
            />

            <label htmlFor="age">Age*</label>
            <input
              type="number"
              id="age"
              placeholder='Enter Age'
              value={age}
              onChange={(e) => { setAge(e.target.value) }}
            />

            <label htmlFor="select">Open the Select</label>
            <select
              id='select'
              value={select}
              onChange={(e) => { setSelect(e.target.value) }}
            >
              <option hidden value="0">Choose the car you like</option>
              <option value="1">BWM</option>
              <option value="2">Jentra</option>
              <option value="3">Nexi 2</option>
              <option value="4">Matiz</option>
              <option value="5">Fura</option>
              <option value="6">Toyato</option>
              <option value="7">Bugati</option>
              <option value="8">Lombargini</option>
              <option value="9">Jeep</option>
            </select>

            <label htmlFor="deck">Description</label>
            <textarea
              style={{ resize: 'none' }}
              id="deck"
              cols="20"
              rows="5"
              placeholder='Enter Description'
              value={desc}
              onChange={(e) => { setDesc(e.target.value) }}
            ></textarea>

            <div
              className="nat">

              <input
                type="checkbox"
                id="uzbek" />

              <label
                htmlFor="uzbek">Uzbek</label>

              <br />

              <input
                type="checkbox"
                id="engilish" />

              <label
                htmlFor="engilish">Engilish</label>

              <br />

              <input
                type="checkbox"
                id="russion" />

              <label
                htmlFor="russion">Russion</label>

              <br />

              <input
                type="checkbox"
                id="arabic" />

              <label
                htmlFor="arabic">Arabic</label>

              <br />

            </div>

            <input className='resetBTn' type="reset" value="Reset" />
            <button onClick={handleClickBtn}>Sand</button>
          </form>
        </div>
      </div>
      <div className="main container">
          {
            todos && todos.map((v, i) => {
              return (
                <div key={i} className="cards">
                  <h1 className="task">{v.name}</h1>
                  <h1 className="task">{v.surName}</h1>
                  <h1 className="task">{v.age}</h1>
                  <h1 className="task">{v.select}</h1>
                  <h1 className="task">{v.desc}</h1>
                  <h1 className="task">{v.Nation}</h1>
                  <button onClick={handleDelite}>Delite</button>
                </div>
              )
            })
          }
      </div>
    </>
  )
}

export default App
