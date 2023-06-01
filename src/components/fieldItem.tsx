type Props = {
  title: string;
  description: string;
};

const FieldItem = ({ title, description }: Props) => {
  return (
    <div className="relative element-main">
      <div className="w-screen">
        <div className="relative container px-4 py-6 flex items-center border-t-2 border-arch-black mx-auto">
          <div className="absolute text-6xl w-full font-medium md:w-1/2 md:relative">{title}</div>
          <div className="w-full text-xl invisible md:w-1/2">{description}</div>
        </div>
      </div>
      <div className="w-screen absolute top-0 left-0 element-mask bg-arch-black">
        <div className="relative container px-4 py-6 flex items-center border-t-2 border-arch-black mx-auto text-white">
          <div className="absolute text-6xl w-full invisible font-medium md:visible md:w-1/2 md:relative">{title}</div>
          <div className="w-full text-xl md:w-1/2">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default FieldItem;
