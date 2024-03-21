let q = 0;

function dischargeCalc(cell_width, water_depth, point_velocity_type, point_velocity) {

if(point_velocity === null){

return null;

} else if (point_velocity_type === "point_six"){

q = cell_width*water_depth*Number(point_velocity);

return q.toFixed(4)

} else if (point_velocity_type === "both") {

let v_arr = point_velocity.split(/,|;|:/);

let v_avg = (Number(v_arr[0])+Number(v_arr[1]))/2;

q = cell_width*water_depth*v_avg;

return q.toFixed(4)

} else {

q = cell_width*water_depth*Number(point_velocity);

return q.toFixed(4)

}

};

function typeMessage(type) {

if(type === "point_six"){

} else if (type === "both") {

return "Enter data like this: 2,3 or 1.22;2.33 or 1.24:3.46 please :)"

} else {


}


}


function lastValue(station_vals, questionName) {
    if (Array.isArray(station_vals) && station_vals.length > 1) {
        return station_vals[station_vals.length - 1][questionName]-station_vals[station_vals.length - 2][questionName];
    }
    return station_vals[station_vals.length - 1][questionName];
}



