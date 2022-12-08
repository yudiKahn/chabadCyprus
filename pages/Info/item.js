import { useRouter } from 'next/router';
import React from 'react';
import { connect } from 'react-redux';
import {ImgTop} from '../../components';
// import {Info} from '../../assets/text';


function Item({lang}) {

    return <h1>Hello</h1>
    // const {query} = useRouter();
    // const id = query.id;
    // const item = Info.find(v=>v.id.toString() === id?.toString());

    // return (<>
    //     <ImgTop title={{en:"Info",he:"מידע"}[lang]}/>
    //     <div className="container py-3 text-center">
    //         <div className="row mx-0 my-2">
    //             <div className="col mb-3" style={{width:'50%',maxWidth:500, minWidth:250}}>
    //                 <h1 className={lang=='he'?'text-right':''}>{item?.title[lang]}</h1>
    //                 <p className={lang=='he'?'text-right':''}>
    //                     {item?.categories?.map((v,i)=> <i key={i} className={`${v.i} btn btn-blue mx-2 my-1`}></i>)}
    //                     <a href={item?.link} className="fa fa-link btn btn-blue mx-2 my-1"></a>
    //                 </p>
    //                 <p>
    //                     {item?.text[lang]}
    //                 </p> 
    //             </div>
    //             <div className="col text-center mb-3" style={{width:'50%',maxWidth:500, minWidth:250}}>
    //                 <img
    //                     src={item?.imgUrl}
    //                     alt="item"
    //                     className="item-image"
    //                 />
    //             </div>
    //         </div>
    //     </div>
    //         {/* <div className="row mx-0 my-3">
                
                
    //         </div> */}
    // </>)
}

export default connect(s=>({lang:s.lang}))(Item);
