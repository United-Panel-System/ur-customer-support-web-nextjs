import { AnimatedDiv } from "../Animation";

export const HowCanWeHelp = () => {
  return (
    <section className="pt-2">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <AnimatedDiv
              staggerChildren={0.2}
              className="bg-gray-light dark:bg-gray-dark flex flex-col flex-wrap items-center justify-center rounded-xs px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
            >
              <h2 className="mb-4 text-2xl leading-tight! font-bold text-black sm:text-3xl md:text-[30px] dark:text-white">
                HOW CAN WE HELP?
              </h2>
              <p className="text-body-color mx-auto max-w-3xl text-base font-bold">
                We' re here to help and answer any question you might have.
              </p>
            </AnimatedDiv>
          </div>
        </div>
      </div>
    </section>
  );
};
