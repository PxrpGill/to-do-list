import { Home } from '@/views/home';
import { getAllTodos } from '@/widgets/todos-main-list/api/get-all-todos';

const HomePage = async () => {
	const initialTodos = await getAllTodos();

	return <Home todos={initialTodos} />;
};

export default HomePage;
