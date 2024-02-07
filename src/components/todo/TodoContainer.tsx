import { clearTodos } from '@/redux/features/todoSlice';
import AddTodoModal from './AddTodoModal';
import TodoCard from './TodoCard';
import TodoFilter from './TodoFilter';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Button } from '../ui/button';

const TodoContainer = () => {
  // const [todos, setTodos] = useState({ data: [] });
  const dispatch = useAppDispatch();

  const { todos } = useAppSelector((state) => state.todos);
  console.log(todos);

  return (
    <div>
      <div className="flex justify-between mb-5 ">
        <Button variant={'destructive'} onClick={() => dispatch(clearTodos())}>
          Clear all
        </Button>
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.map((item) => (
            <TodoCard key={item.id} {...item} />
          ))}
        </div>
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>{' '}
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
