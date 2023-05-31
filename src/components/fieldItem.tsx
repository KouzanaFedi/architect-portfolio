type Props = {
  title: string;
  description: string;
};

const FieldItem = ({ title, description }: Props) => {
  return (
    <div className="relative element-main">
      <div className="w-screen">
        <div className="container px-4 py-6 flex items-center border-t-2 border-arch-black mx-auto">
          <div className="text-6xl w-1/2 font-medium">{title}</div>
          <div className="w-1/2 text-xl invisible">{description}</div>
        </div>
      </div>
      <div className="w-screen absolute top-0 left-0 element-mask bg-arch-black">
        <div className="container px-4 py-6 flex items-center border-t-2 border-arch-black mx-auto text-white">
          <div className="text-6xl w-1/2 font-medium">{title}</div>
          <div className="w-1/2 text-xl">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default FieldItem;
