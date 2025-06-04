import { AnimatedDiv } from "../Animation";
import SectionTitle from "../Common/SectionTitle";
import { NumberTicker } from "../ui/number-ticker";
import { cn } from "@/lib/utils";

interface StatisticProps extends React.HTMLAttributes<HTMLDivElement> {
  stats?: {
    value: number;
    label: string;
    suffix?: string;
  }[];
}

export const Statistic = ({
  className,
  stats = [
    { value: 1000, label: "Successful Projects", suffix: "+" },
    { value: 50, label: "Years of Experience", suffix: "+" },
    { value: 40, label: "States Covered", suffix: "+" },
  ],
}: StatisticProps) => {
  return (
    <section id="statistic" className="py-8 md:py-12 lg:py-20">
      <div className="container">
        <SectionTitle
          title={
            <>
              Your <span className="text-primary">One-Stop</span> Refrigeration
              Solution
            </>
          }
          paragraph=""
          mb="44px"
          center
        />
        <AnimatedDiv
          staggerChildren={0.2}
          className={cn(
            "dark:bg-dark rounded-md px-5 py-10 text-center",
            className,
          )}
        >
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="hover:border-primary/30 dark:hover:border-primary/40 relative overflow-hidden rounded-md border-2 border-transparent bg-white p-6 shadow-lg transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-white hover:shadow-xl dark:border-gray-700/50 dark:bg-gray-800/80 dark:hover:bg-gray-800"
              >
                <div className="relative z-10">
                  <div className="text-primary text-5xl font-bold">
                    <NumberTicker value={stat.value} />
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};
