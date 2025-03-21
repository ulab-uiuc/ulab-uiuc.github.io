const ctx = require.context(
  "../assets/publications",
  true,
  /\.(png|jpe?g|gif|svg)$/
);

const imageMap = {};

ctx.keys().forEach((key) => {
  const cleaned = key.replace(/^.\//, "");
  imageMap[cleaned] = ctx(key);
});

export const getImage = (pub, src) => {
  const normalizedSrc = src.replace(/^\.?\//, "");
  const key = `${pub}/${normalizedSrc}`;
  return imageMap[key] || null;
};
