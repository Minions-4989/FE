import { Outlet } from "react-router-dom";
import Main from "../../components/ui/Main/Main";

const MyPage = () => {

	return (
		<Main>
			<Outlet />
		</Main>
	)
}

export default MyPage