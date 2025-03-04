const about =
  "Welcome to UIUC U Lab! U Lab is directed by [Prof. Jiaxuan You](https://cs.stanford.edu/~jiaxuan).";

const highlights = [
  {
    title: "LLM Quantization",
    description:
      "**Enabling on-device LLM inference** with advanced quantization techniques like [AWQ](/publications/yu2024researchtown), TinyChat, SmoothQuant, and COAT for improved efficiency and performance.",
    projects: ["ResearchTown", "GraphRouter"],
  },
  {
    title: "Long Context LLM",
    description:
      "Developing methods to generate infinite-length texts with fixed memory budgets, including StreamingLLM, Quest, DuoAttention, and LServe.",
    projects: [],
  },
  {
    title: "Efficient Visual Generation",
    description:
      "Advanced visual generation models like HART, SANA, SVDQuant for high-quality image synthesis under computational constraints.",
    projects: [],
  },
];

const news = [
  {
    time: "Jan 2025",
    event:
      "🔥 GrouphRouter is accepted at ICLR 2025. [[Paper](https://arxiv.org/abs/2410.03834)] [[Website](/publications/feng2024graphrouter)]",
  },
  {
    time: "Jan 2025",
    event: "🔥 GraphEval is accepted at ICLR 2025.",
  },
];

const impacts =
  " We actively collaborate with industry partners including Amazon and Meta.";

export { about, highlights, news, impacts };
