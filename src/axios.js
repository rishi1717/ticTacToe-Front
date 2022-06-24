import axios from 'axios'
import dotenv from "dotenv"
dotenv.config()

const instance = axios.create({
	baseURL: `${process.env.REACT_APP_SERVER}/api`,
	timeout: 10000,
})

export default instance