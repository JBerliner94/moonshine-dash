y = document.getElementById("y").innerHTML
x = document.getElementById("x").innerHTML
y2 = document.getElementById("y2").innerHTML
x2 = document.getElementById("x2").innerHTML

y_data = ['Trade Return [%]']
x_data = ['x']
y2_data = ['Portfolio Returns [%]']
x2_data = ['x2']

sort_into_list = (str, list, type) => {
	str.split(',').forEach((i) => {
		if (type === 'date') {
			list.push(new Date(i))
		} else if ( type === 'number') {
			list.push(Number(i))
		}
		
	})
}

sort_into_list(y, y_data, 'number')
sort_into_list(x, x_data, 'date')
sort_into_list(y2, y2_data, 'number')
sort_into_list(x2, x2_data, 'date')

function add(a,b) {
	return a+b
}

// cumulative_y = ['Total Return [%]']
// for (var i=0; i<y.length; i++) {
// 	tmp_slice = y_data.slice(1, i+2);
// 	// console.log(tmp_slice)
// 	cumulative_y.push(tmp_slice.reduce(add, 0))
// }


// ADD IN THE MAIN DASH RESULTS
document.getElementById("return").innerHTML = 100*Number(y2_data.slice(-1)[0])/1000
document.getElementById("time").innerHTML = x_data.slice(-1)[0]

// var dataset = [{
// 	data: y_data
// }]


//MAKE "TODAY" DATE
var now = new Date()
var day = now.getDate()
var month = now.getMonth() + 1;
var year = now.getFullYear();
var today = new Date(year + "-" + month + "-" + day + " 14:30:00.00")


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