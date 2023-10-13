import { useState } from "react"

const UsePaymentForm = () => {
	const [paymentFormData, setPaymentFormData] = useState({
		email: '',
		cardNumber: '',
		expirationDate: '',
		cvcNumber:''
	})

	const handlePaymentInput = (event) => {
		const { name, value } = event.target
		setPaymentFormData({...paymentFormData, [name]: value})
	}
	return {
		paymentFormData,
		handlePaymentInput
	}
}

export default UsePaymentForm