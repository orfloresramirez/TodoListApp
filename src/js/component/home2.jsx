import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark}  from '@fortawesome/free-solid-svg-icons';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home2 = () => {
	let [tarea,setTarea] = useState("");
	let [listaTareas,setlistaTareas] = useState([]);
	
	// function capturarTarea(event) {
	// 	setTarea(event.target.value);
	// 	
		


	// }

	function insertarTarea(event) {
		if (event.key === 'Enter') {

			
			setlistaTareas(listaTareas.concat(tarea));
			setTarea("");	
			
		}
	}	

	function eliminarTarea(index) {
	 let newlista =listaTareas.concat();	
	newlista.splice(index,1)
	setlistaTareas(newlista);
		
	}
		
	

	return (
		<div className="text-center mt-5">
			<div className="container w-50 m-auto bg-light m-3 rounded-2 shadow-lg ">
				<div className="row"> 
					<div className="container my-4 py-4">
						<div className="col-12"><input type="text" name="" id="" onChange={(e)=>setTarea(e.target.value)} onKeyDown={insertarTarea} value={tarea} placeholder="Escriba aqui, luego 'Enter'" /></div>
						<div>
						<ul className="text-start-between">													       {/*()=> para que no se renderice todo con cada map */}
							{listaTareas.map((item,index)=> (<li className="d-flex justify-content-between my-3 border-white border-opacity-10" key={index}>{item} <button type="button" onClick={()=>eliminarTarea(index)} className="text-end position-relative border-0" ><FontAwesomeIcon icon={faCircleXmark} /></button> </li>))}
							
						</ul>
						
						</div>
					</div>
					<p className="text-start text-secondary">{listaTareas.length+" tareas"}</p>	
				</div>
			</div>
		</div>
	);
};

export default Home2;