import axios from 'axios'
const BACKEND_URL =
    process.env.BACKEND_URL || 'http://localhost:8055'

class Services{
    async getCoupons() {
        const res = await axios.get(`${BACKEND_URL}/coupon_oper/coupons`)
        console.log(res)
        return res
      }
}

const services = new Services()
export default services