import Image from "next/image";

const GeneralIconCard = ({ item }) => {
  const { icon, iconLight, title, description } = item;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="text-primary mx-auto mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-red-500/10">
          <Image
            src={icon}
            alt={title}
            width={50}
            height={50}
            className="block dark:hidden"
          />
          <Image
            src={iconLight}
            alt={title}
            width={50}
            height={50}
            className="hidden dark:block"
          />
        </div>
        <h3 className="mb-5 text-center text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          {title}
        </h3>
        <p className="text-body-color pr-[10px] text-center text-base leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};

export default GeneralIconCard;
