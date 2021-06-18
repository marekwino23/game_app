import React,{useState} from 'react';


    const Words = (e) => {
    const[password,setPassword] = useState("banan")
    let index = ''
    let array = []
    for(let i = 0;i<password.length;i++){
        array = array + " _| "
    }
    const[place,setPlace] = useState("") ;
    const[word,setWord] = useState("");
    const[hidden,setHidden] = useState()
    let[die,setDie] = useState("")

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const clickPassword = (e) => {
        let btn = document.getElementById("button")
        let code = document.getElementById("but")
        setPassword(e.target.value)
        setHidden(code)
        setPlace([array])
        code.style.visibility = "hidden"
        btn.style.visibility = "hidden"
        }
    const newGame = () => {
        let btn = document.getElementById("button")
        var code = document.getElementById("but")
        code.style.visibility = "visible"
        btn.style.visibility = "visible"
        }
    const onClick = (e) => {
        for(let i = 0;i<password.length + 1;i++){
                 index = password.indexOf(e.target.value)
                    if(index === -1){
                    setDie(die +  "|")
                    setWord( "bad words" + "-" + e.target.value)
                    }
                    else if(password.charAt(i) === e.target.value){
                    place[i] = e.target.value
                    }}}
    return(
        <div>
<div>
<button style={{marginTop:"5px"}} onClick={newGame}>New game</button>
</div>
  <div className="board">
      <h1>{password}</h1>
      <h2>{place}</h2>
      {word}
      <input id="but" value={password} onChange={handlePassword} type="text"></input>
      <div>
      <button style={{marginTop:"5px", visibility: "hidden"}} value={password} id="button" onClick={clickPassword}>change password</button> 
      </div>  
  </div>
  <div id="wrong">{die}</div>
  <button onClick={onClick} value="q">q</button>
  <button onClick={onClick} value="w">w</button>
  <button onClick={onClick} value="e">e</button>
  <button onClick={onClick} value="r">r</button>
  <button onClick={onClick} value="t">t</button>
  <button onClick={onClick} value="y">y</button>
  <button onClick={onClick} value="u">u</button>
  <button onClick={onClick} value="i">i</button>
  <button onClick={onClick} value="o">o</button>
  <button onClick={onClick} value="p">p</button>
  <button onClick={onClick} value="a">a</button>
  <button onClick={onClick} value="s">s</button>
  <button onClick={onClick} value="d">d</button>
  <button onClick={onClick} value="f">f</button>
  <button onClick={onClick} value="g">g</button>
  <button onClick={onClick} value="h">h</button>
  <button onClick={onClick} value="j">j</button>
  <button onClick={onClick} value="k">k</button>
  <button onClick={onClick} value="l">l</button>
  <button onClick={onClick} value="z">z</button>
  <button onClick={onClick} value="x">x</button>
  <button onClick={onClick} value="c">c</button>
  <button onClick={onClick} value="v">v</button>
  <button onClick={onClick} value="b">b</button>
  <button onClick={onClick} value="n">n</button>
  <button onClick={onClick} value="m">m</button>
</div>
      
    )
}

export default Words;