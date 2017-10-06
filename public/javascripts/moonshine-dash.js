var socket = io();

y_data = ['Trade Return [%]']
x_data = ['x']
y2_data = ['Portfolio Returns [%]']
x2_data = ['x2']

array_sorter = (arr, list, type) => {
    arr.forEach((i)=> {
        if (type === 'date') {
            var date = new Date(i)
            var EST_date = new Date(date.setTime(date.getTime() + 1000 * 3600 * 3)) //Bc Heroku is on PCT server
            list.push(EST_date)
        } else if ( type === 'number') {
            list.push(Number(i))
        }
    })
}

socket.on('dataSet', (data)=>{
    // console.log(data)
    array_sorter(data.x, x_data, 'date')
    array_sorter(data.x2, x2_data, 'date')
    array_sorter(data.y, y_data, 'number')
    array_sorter(data.y2, y2_data, 'number')

    // ADD IN THE MAIN DASH RESULTS
    document.getElementById("return").innerHTML = 100*Number(y2_data.slice(-1)[0])/1000
    document.getElementById("time").innerHTML = x_data.slice(-1)[0]

    chart_generator(x_data, y_data, y2_data)

})

function add(a,b) {
	return a+b
}

// cumulative_y = ['Total Return [%]']
// for (var i=0; i<y.length; i++) {
// 	tmp_slice = y_data.slice(1, i+2);
// 	// console.log(tmp_slice)
// 	cumulative_y.push(tmp_slice.reduce(add, 0))
// }




// var dataset = [{
// 	data: y_data
// }]

function chart_generator(x_data, y_data, y2_data) {
    //MAKE "TODAY" DATE
    var now = new Date()
    var day = now.getDate()
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    var today = new Date(year + "-" + month + "-" + day + " 09:30:00.00")


    //MAKE PLOT
    var chart = c3.generate({
    	bindto: '#chart',
    	data: {
    		x: 'x',
    		columns: [
    			x_data,
    			y_data,
    			y2_data
    			
    		],
    		type: 'line'
    	},
    	axis: {
    		x: { 
    			
    			show: true,
    			min: today,
    			type: 'timeseries',
    			tick: {
    				format: '%H:%M',
    				count: y_data.length - 1
    			}

    		},
    		y: {
    			max: 5,
    			min: -5,
    			show: true,
    			label: {
    				// position: 'outer-middle',
    				// text: 'Returns',
    				// color: 'white'
    			},
    		y2: {
    			show: true
    		}
    		}
    	},
    	color: {
    		pattern: ['#6be759', 'red']
    	}
    });
}