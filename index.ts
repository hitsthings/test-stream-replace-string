import {config} from 'dotenv'
import replace from 'stream-replace-string'
import { one } from './local.js'

config()
replace("BOOM", String(one))
