import add_fn from './export'
// The above will import default from export file, thus the addition function will be imported
// into the const add_fn

import {baseData} from './export'
import {add} from './export'
// the above syntax is used for importing any object that is being exported by './export'.js
// or :
// import {baseData, add} from './export'
// or we can alias as :
// import { baseData as data, add as add_fn } from './export'
// or:
// import * as exported from './export'