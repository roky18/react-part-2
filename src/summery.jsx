fetch("url")
  .then((res) => res.json())
  .then((data) => console.log(data));

const loadData = async () => {
  const res = await fetch("url");
  const data = res.json();
  return data;
};
