import { UserEmptySalesCard, UserFullSalesCard } from "../MypageCard"

const UserSaleItemsContent = () => {
	const salesProductData = []
	if(salesProductData.length === 0) return <UserEmptySalesCard/>
	return <UserFullSalesCard/>
}

export default UserSaleItemsContent