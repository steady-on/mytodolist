import Layout from "../components/UI/Layout";
import Header from "../components/UI/Header";
import TodoList from "../components/Todos/TodoList";

const Home = () => {
  return (
    <Layout>
      <Header />
      <TodoList />
    </Layout>
  );
};

export default Home;
