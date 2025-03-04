## Text

Large Language Models (LLMs) have demonstrated remarkable potential in scientific domains, yet a fundamental question remains unanswered: Can we simulate human research communities with LLMs? Addressing this question can deepen our understanding of the processes behind idea brainstorming and inspire the automatic discovery of novel scientific insights. In this work, we propose ResearchTown, a multi-agent framework for research community simulation. Within this framework, the human research community is simplified and modeled as an agent-data graph, where researchers and papers are represented as agent-type and data-type nodes, respectively, and connected based on their collaboration relationships. We also introduce TextGNN, a text-based inference framework that models various research activities (e.g., paper reading, paper writing, and review writing) as special forms of a unified message-passing process on the agent-data graph.

## Link

Demo can be found at [link](https://github.com/ulab-uiuc/research-town).

## Image

<img src="./researchtown.png" style="zoom:50%;" />


## Table

| Method       | Result | Comment |
| ------------ | ------ | ------- |
| ResearchTown | 99.0%  | ✔️       |

## Code

```python
import researchtown
```

