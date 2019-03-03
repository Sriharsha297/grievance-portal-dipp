import React from 'react';
import {Pie,Doughnut,Bar} from 'react-chartjs-2';


function graphClickEvent(event, array){
    if(array[0]){
	   console.log("haha",array[0]);
	   console.log("xxxx",array[0]._model.label)
    }
}


const BarChart = (props) =>{
	console.log(props);
	const data = {
		labels: [
			'submitted',
			'scrutinized',
			'resolved',
			'rejected',
			'inProgress',
			'cancelled'
		],
		datasets: [{
			data: [props.cardData.submittedCount,props.cardData.scrutinizedCount,props.cardData.resolvedCount,props.cardData.rejectedCount,props.cardData.inProgressCount,props.cardData.cancelledCount],
			label: 'Total',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
		}]
	};
	return(
		<div>
			<h2>Bar Graph for grivance status</h2>
			<Bar 
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

export default BarChart; 