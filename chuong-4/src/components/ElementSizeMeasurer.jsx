import React, { useRef, useState } from "react";

const ElementSizeMeasurer = () => {
  const [measure, setMeasure] = useState({ width: 0, height: 0 });
  const measureRef = useRef();
  const getWidthHeight = () => {
    setMeasure((prev) => {
      const newMeasure = { ...prev };
      newMeasure.width = measureRef.current.offsetWidth;
      newMeasure.height = measureRef.current.offsetHeight;
      return newMeasure;
    });
  };
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia mollitia
      dolor itaque consequuntur deserunt doloribus recusandae molestiae optio.
      Alias aspernatur consequuntur nulla explicabo dolorum modi consectetur
      consequatur ipsam cumque iste?
      <button onClick={getWidthHeight}>do kich thuoc</button>
    </div>
  );
};

export default ElementSizeMeasurer;
// import React, { useRef, useState } from "react";

// const ElementSizeMeasurer = () => {
//   const textContainerRef = useRef(null);
//   const [elementSize, setElementSize] = useState({ width: 0, height: 0 });
//   const handleMeasurer = () => {
//     const width = textContainerRef.current.offsetWidth;
//     const height = textContainerRef.current.offsetHeight;
//     console.log(width, height);
//     setElementSize({ width: width, height: height });
//   };
//   return (
//     <>
//       <div ref={textContainerRef}>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eum ad
//         culpa veniam? Reprehenderit minus itaque magni natus assumenda delectus
//         consequuntur commodi, officiis fugiat molestiae perspiciatis
//         liberoddđsdgksdgjsdfhskdfh Reprehenderit minus itaque magni natus
//         assumenda delectus consequuntur commodi, officiis fugiat molestiae
//         perspiciatis liberoddđsdgksdgjsdfhskdfh Reprehenderit minus itaque magni
//         natus assumenda delectus consequuntur commodi, officiis fugiat molestiae
//         perspiciatis liberoddđsdgksdgjsdfhskdfh
//       </div>
//       <button onClick={handleMeasurer}>Đo kích thước</button>
//       <div>Chiều rộng là {elementSize.width}</div>
//       <div>Chiều cao là {elementSize.height}</div>
//     </>
//   );
// };

// export default ElementSizeMeasurer;
