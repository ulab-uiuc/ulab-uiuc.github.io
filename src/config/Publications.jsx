const publications = [
  {
    key: "zhu2025multiagentbenchevaluatingcollaborationcompetition",
    title: "MultiAgentBench: Evaluating the Collaboration and Competition of LLM agents",
    authors:
      "Kunlun Zhu, Hongyi Du, Zhaochen Hong, Xiaocheng Yang, Shuyi Guo, Zhe Wang, Zhenhailong Wang, Cheng Qian, Xiangru Tang, Heng Ji, Jiaxuan You",
    year: "2025",
    venue: "Preprint",
    links: {
      paper: "https://arxiv.org/abs/2503.01935",
      code: "https://github.com/MultiagentBench/MARBLE",
      thread: "https://x.com/Kunlun_Zhu/status/1897123371047088459",
      contact: "mailto:kunlunz2@illinois.edu",
    },
    files: {
    },
    tags: ["LLM", "Agent"],
  },
  {
    key: "yao2024deft",
    title: "DeFT: Decoding with Flash Tree-attention for Efficient Tree-structured LLM Inference",
    authors: "Jinwei Yao, Kaiqi Chen, Kexun Zhang, Jiaxuan You, Binhang Yuan, Zeke Wang, Tao Lin",
    year: "2025",
    links: {
      paper: "https://arxiv.org/abs/2404.00242",
      code: "https://github.com/LINs-lab/DeFT",
      contact:"jinwei.yao1114@gmail.com"
    },
    files: {
      markdown: require("../assets/publications/yao2024deft/deft.md"),
    },
    venue: "ICLR 2025",
    tags: ["LLM", "Inference","Efficiency"],
  },
  {
    key: "feng2024graphrouter",
    title: "GraphRouter: A graph-based router for llm selections",
    authors: "Tao Feng, Yanzhen Shen, Jiaxuan You",
    year: "2025",
    links: {
      paper: "https://openreview.net/forum?id=eU39PDsZtT",
    },
    files: {
      markdown: require("../assets/publications/feng2024graphrouter/graphrouter.md"),
    },
    venue: "ICLR 2025",
    tags: ["LLM", "Graph"],
  },
  {
    key: "feng2024grapheval",
    title: "GraphEval: A Lightweight Graph-Based LLM Framework for Idea Evaluation",
    authors: "Tao Feng*, Yihang Sun*, and Jiaxuan You",
    year: "2025",
    links: {
      paper: "https://openreview.net/forum?id=5RUM1aIdok&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3DICLR.cc%2F2025%2FConference%2FAuthors%23your-submissions)",
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
      contact: "mailto:jiaxuan@illinois.edu",
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
