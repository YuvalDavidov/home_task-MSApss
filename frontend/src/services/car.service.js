
// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'


const STORAGE_KEY = 'car'

export const carService = {
    query,
}
window.cs = carService


async function query(filterBy = { txt: '', price: 0 }) {
    return httpService.get(STORAGE_KEY, filterBy)
}


