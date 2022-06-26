export function Bubble({ props }) {
  return (
    <div
      className={`shadow-3xl absolute bg-gradient-to-br from-indigo-50  to-indigo-400 dark:from-indigo-700 dark:to-indigo-900 rounded-full brightness-[108%] dark:brightness-[85%] -z-10  ${props}`}
    />
  );
}

export function BgBubbles() {
  return (
    <>
      <Bubble props="p-[30px] sm:p-[50px] top-[10%] md:top-[18%] left-[15%] md:left-[20%]" />
      <Bubble props="p-[50px] sm:p-[70px] top-[65%] md:top-[75%] left-[10%]" />
      <Bubble props="p-[100px] sm:p-[120px] lg:p-[150px] top-[15%] md:top-[35%] left-[47%]" />
      <Bubble props="p-[15px] sm:p-[30px] top-[75%] left-[85%]" />
      <Bubble props="p-[20px] top-[160%] sm:top-[140%] left-[5%]" />
      <Bubble props="p-[40px] top-[175%] left-[75%]" />
      <Bubble props="p-[20px] top-[210%] sm:top-[220%] left-[70%] sm:left-[90%]" />
      <Bubble props="p-[100px] top-[220%] left-[10%]" />
      <Bubble props="p-[50px] top-[290%] left-[70%] sm:left-[80%]" />
      <Bubble props="p-[30px] top-[350%] left-[5%]" />
      <Bubble props="p-[70px] top-[390%] left-[60%] sm:left-[70%] md:left-[80%]" />
      <Bubble props="p-[40px] top-[440%] left-[10%]" />
      <Bubble props="p-[90px] top-[480%] left-[40%] sm:left-[60%] md:left-[75%]" />
      <Bubble props="p-[20px] top-[520%] left-[15%]" />
      <Bubble props="p-[40px] top-[560%] left-[65%]" />
      <Bubble props="p-[130px] top-[625%] left-[20%]" />
      <Bubble props="p-[30px] top-[665%] left-[80%]" />
      <Bubble props="p-[30px] top-[665%] left-[80%]" />
    </>
  );
}
