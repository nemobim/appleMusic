const Layout = ({ children }: IChildren) => {
  return (
    <div className=" flexCenter h-[100vh] w-[100%] bg-slate-200 p-[1rem]">
      {children}
    </div>
  );
};

export default Layout;
