import Footer from "./Footer";
import NavBar from "./NavBar";

const Page = (props) => {
  const { children } = props;

  return (
    <div className="h-screen  flex flex-col  ">
      <NavBar />

      <article className="grow">{children}</article>

      <Footer />
    </div>
  );
};
export default Page;
