import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from 'rehype-raw'

export const CustomMarkdown = ({ text }: { text: string }) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: (props) => <h1 className="font-bold text-3xl mt-4 mb-4">{props.children}</h1>,
        h2: (props) => <h2 className="font-bold text-xl mt-3 mb-2">{props.children}</h2>,
        h3: (props) => <h3 className="font-bold text-lg mt-2 mb-2">{props.children}</h3>,
        p: (props) => <p className="leading-8">{props.children}</p>,
        table: (props) => <table className="table-auto border-collapse border border-zinc-400">{props.children}</table>,
        th: (props) => <th className="px-2 py-1.5 border border-zinc-400 bg-zinc-100">{props.children}</th>,
        td: (props) => <td className="px-2 py-1.5 border border-zinc-400">{props.children}</td>,
        ul: (props) => <ul className="list-disc pl-5 leading-7">{props.children}</ul>,
        ol: (props) => <ol className="list-decimal pl-5 leading-7">{props.children}</ol>,
        a: (props) => <a href={props.href} target="_blank" className="leading-8 text-violet-500 hover:text-violet-800 transition">{props.children}</a>,
        img: (props) => <div className="flex justify-center py-4"><img src={props.src} alt={props.alt} /></div>,
      }}
    >
      {text}
    </Markdown>
  );
};
