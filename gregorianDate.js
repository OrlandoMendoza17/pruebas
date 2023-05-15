import { setDayOfYear, setYear } from "date-fns"

const dates = [ "122151", "122138", "122335" ]

const printDates = (dates) => {
  dates.forEach(julianDate => {
    
    const year = parseInt(`20${julianDate.substring(1, 3)}`)
    const dayOfTheYear = parseInt(julianDate.substring(3, 6))

    const gregorianYear = setYear(new Date(), year)
    const gregorianDate = setDayOfYear(gregorianYear, dayOfTheYear)

    console.log(gregorianDate.toISOString().substring(0, 10))
  })
}

printDates(dates)