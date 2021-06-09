import React,{useState,useEffect,useRef} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import "./Searchbar.css";
import { useDispatch, useSelector } from 'react-redux';
import { searchTodo } from '../actions';

const Searchbar = () => {
    const dispatch = useDispatch();
    const handleSearchText=(e)=>{
        dispatch(searchTodo({message : e.target.value}))
          }  
const taskobj = useSelector((state) => state.todos.data);
  const [tasksFiltData, setTasksFiltData]=useState([]);
  const searchText = useSelector((state) => state.searchReducer.searchData);
  useEffect(()=>{
    if(taskobj){
    const filtData= taskobj.filter(item=>item.task.indexOf(searchText) !==-1)
    setTasksFiltData([...filtData])
    console.log("Seatch Text:", searchText, filtData, taskobj)
    }
  },[searchText])

  return (
        <div >
        <input className="searchbar-style"
        onChange={handleSearchText}
         placeholder={"search Box "}/>         
         </div>   
  );
}

export default Searchbar