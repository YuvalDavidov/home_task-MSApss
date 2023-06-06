
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'car'

export const carService = {
    query,
    getById,
    remove,
    getEmptyCar,
}
window.cs = carService


async function query(filterBy = { txt: '', price: 0 }) {
    var cars = await storageService.query(STORAGE_KEY)
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        cars = cars.filter(car => regex.test(car.vendor) || regex.test(car.description))
    }
    if (filterBy.price) {
        cars = cars.filter(car => car.price <= filterBy.price)
    }
    return cars
}

function getById(carId) {
    return storageService.get(STORAGE_KEY, carId)
}

async function remove(carId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, carId)
}



function getEmptyCar() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}


// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




