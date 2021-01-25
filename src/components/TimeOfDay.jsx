import React from "react";

const TimeOfDay = () => {

    const date = new Date(2020, 2, 14, 13);
    const hours = date.getHours();
    let time
    const styles = {
        color: "#FF8C00",
        backgroundColor: "#fff",
        fontSize: 25
    }

    if(hours < 12){
        time = "morning";
        styles.color = "yellow"
    } 
    else if (hours >=12 && hours <= 17){
        time = "afternoon";
        styles.color = "blue"
    } else {
        time = "night"
        styles.color = "pink"
    }

    return(
    <h1 style={styles}>Good {time}</h1>
    )
}

export default TimeOfDay