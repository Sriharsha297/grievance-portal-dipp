import React from 'react';
import {Pie,Doughnut} from 'react-chartjs-2';


function graphClickEvent(event, array){
    if(array[0]){
	   console.log("haha",array[0]);
	   console.log("xxxx",array[0]._model.label)
    }
}


const PieChart = (props) =>{
	console.log(props);
	const data = {
		labels: [
			'Submitted',
			'Inprogress',
			'Resolved',
			'Rejected'
		],
		datasets: [{
			data: [props.piechartData[0], props.piechartData[2],props.piechartData[3],props.piechartData[4]],
			backgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
			],
			hoverBackgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
			]
		}]
	};
	return(
		<div>
			<h2>Pie Chart for grievance status</h2>
			<Pie 
				height={400}
				weigth={400}
				data={data}
				options={{
					maintainAspectRatio: false,
					responsive:true,
					onClick:graphClickEvent,
				}}
			/>
			
      	</div>
	)
}

export default PieChart; 