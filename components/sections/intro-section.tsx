import { ShiningText } from "../intro/shining-text";
import Image from "next/image";
import { CodeCard } from "../intro/code-card";

export const IntroSection = () => {
  return (
    <>
      <section className="h-screen p-5 md:p-10 flex justify-center items-center">
        <CodeCard />
      </section>
      <section className="px-5 md:px-10 pb-5 md:pb-10 grid grid-cols-1 md:grid-cols-[250px__1fr] gap-5 md:p-10">
        <Image
          src="/images/profile-image.webp"
          alt="전윤민"
          width={250}
          height={350}
          className="rounded-2xl overflow-hidden"
        />
        <div className="leading-8 py-3">
          <h1 className="text-xl font-coding font-bold mb-6">
            🎁 안녕하세요, 현실에 꿈을 선물하는 개발자 전윤민입니다.
          </h1>
          <p className="font-coding mb-4 border-l-4 pl-6 py-4 bg-zinc-900">
            내가 만들고 싶은 것을 만들고 싶어서 개발을 시작했지만,
            <br />
            이제는 사람들에게 영감을 주는 것을 만들고 싶어졌습니다.
          </p>
          <p className="font-coding mb-4">
            창업대회, 해커톤에서 새로운 사람들을 만나고,
            <br />
            <ShiningText text="톡톡 튀는 아이디어" />로 사람들을 놀래키는 것을
            좋아합니다.
          </p>
          <p className="font-coding mb-4">
            짧은 기간 안에 아이디어를 구상하고 개발할 수 있으며,
            <br />
            <ShiningText text="아이템을 매력적으로 보여주기 위해 고민" />
            하는 것을 좋아합니다.
          </p>
        </div>
      </section>
    </>
  );
};
