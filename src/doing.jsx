// Props: 상위 컴포넌트에서 하위 컴포넌트로 피라미터를 전달하는 것.
// Home -> Prop name, age

function Home() {
  return (
    <div className="home">
      <h2>모든 어린이가 행복한 나라</h2>
      {/* <Prop n="name1" age="11" nation="대한민국" /> */}
      {/* /board/110, /board?page=10, /board?q=a */}
    </div>
  );
}

export default Home;
