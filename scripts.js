function makeRed(p,q)
{    
      const classRed = `ind-${p}-${q}`;
      const redCell = document.querySelector(`.${classRed}`);
      redCell.classList.add("red-box");
}

function Clicked(e) {

  const plainCell = document.querySelectorAll(".red-box");

  if(plainCell.length != 0) {
    console.log(plainCell);
    plainCell.forEach( (plain)=> {
      plain.classList.remove("red-box");
    })
  }

  let str = e.target.className.split('-');
  let p,q;
  let tarx = parseInt(str[2]);
  let tary = parseInt(str[3]);

  for(let i = 0; i<8; i++)
  {
    for( let j = 0; j<8 ;j++)
    {   
      let a =  i == tarx+1 && j == tary+1;
      let b =  i == tarx+1 && j == tary-1;
      let c =  i == tarx-1 && j == tary+1;
      let d =  i == tarx-1 && j == tary-1;
      let e =  i == tarx && j == tary;
      if(a)
        { 
          p = tarx+1;
          q = tary+1;
          while(p < 8 && q <8){
            console.log(`${p}  ${q}`);
            makeRed(p,q);
            p++;
            q++;
          }
        }
      else if(b)
        { 
          p = tarx+1;
          q = tary-1;
          while(p < 8 && q >=0){
            console.log(`${p}  ${q}`);
            makeRed(p,q);
            p++;
            q--;
          }
        }
      else if(c)
        {
          p = tarx-1;
          q = tary+1;
          while(p >= 0 && q < 8){
            console.log(`${p}  ${q}`);
            makeRed(p,q);
            p--;
            q++;
          }
        }
      else if(d)
        { 
          p = tarx-1;
          q = tary-1;
          while(p >= 0 && q >=0){
            console.log(`${p}  ${q}`);
            makeRed(p,q);
            p--;
            q--;
          }
        }
      else if(e)
      { 
        console.log(`${tarx}  ${tary}`);
        makeRed(tarx,tary);
      }
    }
  }
}
const body = document.body;

var tbl = document.createElement("table");
var tblBody = document.createElement("tbody");

tbl.classList.add("table");

var flag = false;
for (var i = 0; i < 8; i++) {
  flag = !flag;
  var row = document.createElement("tr");
  row.classList.add("row");

  for (var j = 0; j < 8; j++) {
    flag = !flag;
    var cell = document.createElement("td");
    var cellDiv = document.createElement("div");
    if(flag)
      cellDiv.classList.add("black-box");
    else
    cellDiv.classList.add("white-box");
    cell.classList.add("cell");
    let s = `ind-${i}-${j}`;
    cellDiv.classList.add(s);
    cell.appendChild(cellDiv);
    row.appendChild(cell);
    cellDiv.addEventListener('click',Clicked);
  }
  tblBody.appendChild(row);
}

tbl.appendChild(tblBody);
body.appendChild(tbl);