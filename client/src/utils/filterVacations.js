// import { useSelector } from 'react-redux'

// const userData = useSelector((state) => state.userData)

export function previousVacations(userData) {
    return userData.filter(vacation => !vacation.current)
}

export function currentVacation(userData) {
    return userData.filter(vacation => vacation.current)
}