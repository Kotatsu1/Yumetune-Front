import { Nav, Logo } from "@/widgets/LayoutHeader/ui/components";

const Border = () => {
  return (
    <>
      <div className="">
        <div className="bg-base-200 w-56 h-screen">
          <Logo />
          <div className="m-4">
            <Nav />
          </div>
        </div>
      </div>
    </>
  );
};

export default Border;
