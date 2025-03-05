# U Lab @UIUC

Welcome to the repositry for our lab website! Our design philosophy is to empower every lab member to contribute and update the website effortlessly, regardless of their technical backgrounds in JavaScript, HTML, or CSS skills.

## Quick Start

### Prerequisites

- **No additional environment setup is required.**

### Update Steps

1. Locate Configuration Files
   - Navigate to the `/src/config/` directory to find relevant configuration `.jsx` files.
   - Identify the specific files that need to be modified.
2. Modify Configuration and Assets
   - Update the necessary data in `/src/config/`.
   - If required, make corresponding changes in `/src/assets/`.
3. Deploy Changes
   - Commit your changes and push to the main branch.
   - The deployment will be triggered automatically.
4. Verify Deployment
   - Check GitHub Actions to confirm the deployment's success.
   - Review any logs or notifications for potential issues.

## Examples

### Update Personal Information

1. Find your list in `/src/config/People.jsx`.

2. Update your personal information in the list.

   ```js
   const phd_students = [
     ...,
     {
       name: "Yanru Qu", // Mandatory
       img: require("../assets/people/YanruQu.jpg"),  // Optional
       link: "https://yanruqu.com", // Optional
       description: "coadvised w/ [Prof. Ge Liu](https://www.mit.edu/~geliu/)", // Optional
     },
     ...
   ];
   ```

   If you want to update your profile image, remember to upload it to `../assets/people/`.

   Our website supports markdown rendering in the description part. Follow markdown grammars if you want to use different formats like hyperlinks.

3. Push your changes to the main branch. You updates will be visible at [https://ulab-uiuc.github.io/#/people](https://ulab-uiuc.github.io/#/people) if the deployment is successful.

### Update Publication Information

1. Find your list in `/src/config/Publication.jsx`.

2. Update your publication information in the list.

   ```jsx
   const publications = [
     ...
     {
       key: "yu2024researchtown", // Mandatory
       title: "ResearchTown: Simulator of Human Research Community", // Mandatory
       authors:
         "Haofei Yu, Zhaochen Hong, Zirui Cheng, Kunlun Zhu, Keyang Xuan, Jinwei Yao, Tao Feng, Jiaxuan You", // Mandatory
       year: "2024", // Mandatory
       venue: "Preprint", // Mandatory
       links: {
         paper: "https://arxiv.org/abs/2412.17767", // Optional
         code: "https://github.com/ulab-uiuc/research-town", // Optional
         thread: "https://x.com/youjiaxuan/status/1840767158868918639", // Optional
         contact: "mailto:jiaxuan@illinois.edu", // Optional
         video: "https://www.youtube.com/embed/Yz-r7KGXbyM", // Optional
       },
       files: {
         markdown: require("../assets/publications/yu2024researchtown/researchtown.md"), // Optional
         bib: require("../assets/publications/yu2024researchtown/researchtown.bib"), // Optional
         pdf: require("../assets/publications/yu2024researchtown/researchtown.pdf"), // Optional
       },
       tags: ["LLM", "Agent"], // Mandatory
     },
     ...
   ]
   ```

   Feel free to write a introduction to your publicaiton in a markdown file. Our website can render all the texts, figures, and tables, and code blocks in your markdown file. Examples are provided in [https://ulab-uiuc.github.io/#/publications/researchtown](https://ulab-uiuc.github.io/#/publications/yu2024researchtown).

3. Push your changes to the main branch. You updates will be visible at [https://ulab-uiuc.github.io/#/publications](https://ulab-uiuc.github.io/#/publications) if the deployment is successful. In the meanwhile, you will have a separate publication page visible at [https://ulab-uiuc.github.io/#/publications/key](https://ulab-uiuc.github.io/#/publications/key).

## Guidelines

### Configuration Principles

- Follow existing examples in configuration files as a reference.
- When updating data in `/src/config/`, modify only the specific items within the provided data structures.

### Text Formatting

- Most body texts can be updated using markdown syntax.
- Markdown allows rendering of various formats like bold text, hyperlinks, etc.

### Data Management

- Not all keys in a dictionary require a value. Missing values are acceptable in certain contexts.
- Example: In `/src/config/People.jsx`, you can omit the `link` key if no personal website is available.

### File Management

- Use `require(path)` when dealing with files in `/src/config/`.
- Paths are relative: files are stored in `/src/assets/`, so use `../assets/` in configuration files.
- Maintain an organized folder structure when updating files in `/src/assets/`.

### Link Conventions

- When using internal links, include `/#` in the prefix because we are using Hash routers. Example: For the ResearchTown project page, use `/#/publications/yu2024researchtown`.

## References

+ [HAN Lab @MIT](https://hanlab.mit.edu)
+ [Makeability Lab @UW](https://makeabilitylab.cs.washington.edu)

## Contact

+ Zirui Cheng: ziruic4@illinois.edu
