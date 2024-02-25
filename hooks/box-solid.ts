export default function () {
  const transformName = function (name: string) {
    return name.replace(/bxs-/g, '');
  };

  return {
    transformName,
  };
}
