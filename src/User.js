import React from 'react';
import PropTypes, { array } from 'prop-types';


 function User(props) {
    console.log(typeof(props.age))
  return (
    <div>
   Name: {props.name} Age:{props.age}
   <ul>
    {props.array.map((item,index)=>(
        <li key={index}>{item}</li>
    ))}
   </ul>
   {props.arrayOfObjects.map((item,index)=>(
    <>
     <li key={index}>{item.name} {item.marks}</li>
    
     </>
       
   ))}
    </div>
  )
}
User.prototype={
    age:PropTypes.number.isRequired,
    array:PropTypes.arrayOf(PropTypes.string),
    arrayOfObjects:PropTypes.arrayOf(PropTypes.shape({
        name:PropTypes.string,
        marks:PropTypes.number
    })),
    height:PropTypes.oneOfType(PropTypes.number,PropTypes.string)
 }
 export default  User;
 
