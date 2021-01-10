import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

function ShabbatMeals({adminHeader, state: {admin} }) {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('/api/shabbat', {method:'GET', headers: adminHeader})
        .then(res=> res.json())
        .then(data=> setUsers(data.data));

        if(!admin){
            window.location.replace(window.location.href.replace('ShabbatMeals',''))
        }
    },[]);

    return (<Layout title="Admin">
        <div className="container" style={{minHeight:'100vh'}}>
            <table className="table table-striped table-dark table-bordered">
                <thead>
                    <tr>
                        <th style={{width:10}}>#</th>
                        <th className="resize">Parasha <div className="resize" onMouseDown={e=>setListeners(e.target)}></div></th>
                        <th className="resize">Name <div className="resize" onMouseDown={e=>setListeners(e.target)}></div></th>
                        <th className="resize">Email <div className="resize" onMouseDown={e=>setListeners(e.target)}></div></th>
                        <th className="resize">Phone <div className="resize" onMouseDown={e=>setListeners(e.target)}></div></th>
                        <th className="resize" style={{width:20}}>Night <div className="resize" onMouseDown={e=>setListeners(e.target)}></div></th>
                        <th className="resize" style={{width:20}}>Day <div className="resize" onMouseDown={e=>setListeners(e.target)}></div></th>
                        <th style={{width:30}}>Donation</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map((v,i)=> <tr key={i}>
                        <td>{i+1}</td>
                        <td>{v.shabbat.split(' ')[1]}</td>
                        <td>{v.name}</td>
                        <td>{v.email}</td>
                        <td>{v.phone}</td>
                        <td>{v.night}</td>
                        <td>{v.day}</td>
                        <td>{v.donation}</td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    </Layout>)
}

export default ShabbatMeals;

function setListeners(div){
    var pageX,curCol,nxtCol,curColWidth,nxtColWidth;
    div.addEventListener('mousedown', function (e) {
     curCol = e.target.parentElement;
     nxtCol = curCol.nextElementSibling;
     pageX = e.pageX;
     curColWidth = curCol.offsetWidth
     if (nxtCol)
      nxtColWidth = nxtCol.offsetWidth
    });
   
    document.addEventListener('mousemove', function (e) {
     if (curCol) {
      var diffX = e.pageX - pageX;
    
      if (nxtCol)
       nxtCol.style.width = (nxtColWidth - (diffX))+'px';
   
      curCol.style.width = (curColWidth + diffX)+'px';
     }
    });
   
   document.addEventListener('mouseup', function (e) { 
    curCol = undefined;
    nxtCol = undefined;
    pageX = undefined;
    nxtColWidth = undefined;
    curColWidth = undefined;
    });
}