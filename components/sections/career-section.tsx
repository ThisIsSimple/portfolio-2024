import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { RoadmapCounter } from "../career/roadmap-counter";
import { RoadmapItem } from "../career/roadmap-item";

export const CareerSection = async () => {
  const careers =
    (
      await createClient(cookies())
        .from("careers")
        .select("*")
        .order("start_date")
    ).data ?? [];

  return (
    <section
      className="relative px-5 flex flex-col items-center justify-center border-t-4 border-white"
      style={{
        height: 500 + careers?.length * 32,
      }}
    >
      <div className="absolute right-[calc(75%_+_2.5rem)]">
        <h2 className="font-bold text-3xl">Career</h2>
      </div>
      <div className="absolute left-1/4 -translate-x-1/2 w-1 h-full bg-white" />
      <div className="absolute left-1/4 -translate-x-1/2 bottom-0 w-4 h-4 rounded-full bg-white" />
      <div className="absolute left-[calc(25%_-_16px)] flex flex-col gap-8">
        {careers?.map(({ title, start_date, end_date }) => (
          <RoadmapItem
            key={title}
            title={title}
            startDate={new Date(start_date)}
            endDate={end_date ? new Date(end_date) : null}
          />
        ))}
        <RoadmapCounter />
      </div>
    </section>
  );
};
