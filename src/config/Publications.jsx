const publications = [
  {
    key: "feng2024graphrouter",
    title: "Graphrouter: A graph-based router for llm selections",
    authors: "Tao Feng, Yanzhen Shen, Jiaxuan You",
    year: "2025",
    links: {
      paper: "https://arxiv.org/abs/2410.03834",
    },
    files: {
      markdown: require("../assets/publications/feng2024graphrouter/graphrouter.md"),
    },
    venue: "ICLR 2025",
    tags: ["LLM", "Graph"],
  },
  {
    key: "yu2024researchtown",
    title: "ResearchTown: Simulator of Human Research Community",
    authors:
      "Haofei Yu, Zhaochen Hong, Zirui Cheng, Kunlun Zhu, Keyang Xuan, Jinwei Yao, Tao Feng, Jiaxuan You",
    year: "2024",
    venue: "Preprint",
    links: {
      paper: "https://arxiv.org/abs/2412.17767",
      code: "https://github.com/ulab-uiuc/research-town",
      thread: "https://x.com/youjiaxuan/status/1840767158868918639",
      contact: "mailto:jiaxuan4@illinois.edu",
      video: "https://www.youtube.com/embed/Yz-r7KGXbyM",
    },
    files: {
      markdown: require("../assets/publications/yu2024researchtown/researchtown.md"),
      bib: require("../assets/publications/yu2024researchtown/researchtown.bib"),
      pdf: require("../assets/publications/yu2024researchtown/researchtown.pdf"),
    },
    tags: ["LLM", "Agent"],
  },
];

export { publications };
