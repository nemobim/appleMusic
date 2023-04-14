import Layout from "../components/elements/Layout";
import Title from "../components/elements/Title";

const NotFound = () => {
  return (
    <Layout>
      <div className="flexCenter h-[100vh] w-[100%] justify-center">
        <div className="flexCenter h-[90%] w-[90%] justify-center rounded-xl bg-slate-100 shadow-lg">
          <Title text="4😥4" />
          <p className="text-size">존재하지 않는 페이지입니다.</p>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
