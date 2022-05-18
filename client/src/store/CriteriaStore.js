import {makeAutoObservable} from "mobx";

export default class CriteriaStore {
    constructor() {
        this._criterias = [
            {id: 1, name: "Waterfull Model"}, 
            {id:2, name: "V-model"}, 
            {id:3, name: "Spiral Model"}
        ]
        this._methodology = [
            {id: 1, name: "Waterfull Model"}, 
            {id:2, name: "V-model"}, 
            {id:3, name: "Spiral Model"}
        ]
        this._devices = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setCriterias(criterias) {
        this._criterias = criterias
    }
    setBrands(methodology) {
        this._methodology = methodology
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get criterias() {
        return this._criterias
    }
    get methodology() {
        return this.methodology
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}