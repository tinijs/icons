export default function () {
  const transformName = function (name: string) {
    return name.replace(/bxl-/g, '');
  };

  return {
    transformName,
  };
}
