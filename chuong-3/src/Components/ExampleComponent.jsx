import React, { use, useEffect, useState } from "react";

const ExampleComponent = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   console.log("Component mouted or updated");
  //   document.title = `Count: ${count}`;
  // }); chay moi khi component dc cap nhat
  // useEffect(() => {
  //   console.log("Component mouted or updated");
  //   document.title = `Count: ${count}`;
  // },[]); CHi chay lan dau tien dc mount
  // useEffect(() => {
  //   console.log("Component mouted or updated");
  //   document.title = `Count: ${count}`;
  // }, [count]); // chi chay khi count thay doi
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log("Data fetched: ", json);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        console.error("Error fetching data:", error);
      });
  }, []);
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error : {error}</div>;
  }
  return (
    <div>
      {JSON.stringify(data, null, 2)}
      Gia tri cua count: {count}
      Gia tri cua count2: {count2}
      <button onClick={() => setCount(count + 1)}>add</button>
      <button onClick={() => setCount2(count2 + 1)}>add</button>
    </div>
  );
};

export default ExampleComponent;
