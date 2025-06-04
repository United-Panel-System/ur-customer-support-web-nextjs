import { AnimatedDiv } from "../Animation";

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  className = "",
  trigger = "onView",
}: {
  title: React.ReactNode;
  paragraph: React.ReactNode;
  width?: string;
  center?: boolean;
  mb?: string;
  className?: string;
  trigger?: "onView" | "onLoad";
}) => {
  return (
    <>
      <AnimatedDiv
        trigger={trigger}
        staggerChildren={0.2}
        className={`w-full ${center ? "mx-auto text-center" : ""} ${className}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h1 className="mb-4 text-3xl leading-tight! font-bold text-black sm:text-4xl md:text-[45px] dark:text-white">
          {title}
        </h1>
        <div className="text-body-color dark:text-body-color-dark text-base leading-relaxed! md:text-lg">
          {paragraph}
        </div>
      </AnimatedDiv>
    </>
  );
};

export default SectionTitle;
