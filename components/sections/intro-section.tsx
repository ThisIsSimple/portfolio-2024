import Link from "next/link";
import { HireMe } from "../main/hire-me";
import { ShiningText } from "../intro/shining-text";
import Image from "next/image";

export const IntroSection = () => {
  return (
    <>
      <section className="h-screen p-5 md:p-10 flex justify-center items-center">
        <div className="max-w-[650px] w-full mx-auto rounded-3xl overflow-hidden shadow-lg">
          <div className="px-5 py-3 flex gap-3 bg-zinc-800">
            <div className="bg-red-500 w-4 h-4 rounded-full" />
            <div className="bg-gray-500 w-4 h-4 rounded-full" />
            <div className="bg-green-500 w-4 h-4 rounded-full" />
          </div>
          <div className="font-coding p-5 md:p-10 bg-zinc-900 text-xl leading-8">
            <p className="text-comment">// Who am I?</p>
            <article className="">
              <span className="text-let">const</span>{" "}
              <span className="text-var-name">name</span> ={" "}
              <span className="text-json">"전윤민"</span>; <br className="block md:hidden" /><HireMe />
            </article>
            <br />
            <article>
              <span className="text-let">const</span>{" "}
              <span className="text-var-name">info</span>
              <span> = </span>
              <span>{"{"}</span>
              <p className="pl-5 text-json">
                "💌": "cordelia273@kakao.com",
                <br />
                "🏠":{" "}
                <Link
                  href="https://blog.cordelia273.space"
                  className="text-blue-500 hover:text-blue-800 transition"
                >
                  "blog.cordelia273.space",
                </Link>
                <br />
                "📞": "010-2966-9682",
                <br />
              </p>
              <span>{"}"}</span>
            </article>
            <p>
              <br />
              <span className="text-comment">// I won't</span>
              <br />
              <span className="text-let">let </span>
              <span className="text-var-name">you</span>
              <span> = </span>
              <span className="text-string">"DOWN"</span>
              <span>;</span>
            </p>
          </div>
        </div>
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
            사업성을 끌어내어 어떻게 하면{" "}
            <ShiningText text="아이템을 매력적으로 바꿀 수 있을지 고민" />
            하는 것을 좋아합니다.
          </p>
        </div>
      </section>
    </>
  );
};
