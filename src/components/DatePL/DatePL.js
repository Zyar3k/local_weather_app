import React from 'react'

function DatePL() {
  let months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    let days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

    let day = days[new Date().getDay()];
    let date = new Date().getDate();
    let month = months[new Date().getMonth()];
    let year = new Date().getFullYear();
  return (
    <span>
      {day} {date} {month} {year}
    </span>
  )
}

export default DatePL;