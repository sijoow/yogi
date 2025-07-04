// app/we/sections/Section3.jsx
export default function Section3({ id }) {
  return (
    <section
      id={id}                     // ← 이게 반드시 있어야 해요
      className="min-h-screen flex items-center justify-center bg-blue-800 text-white"
    >
      <h2 className="text-3xl">Section 3</h2>
    </section>
  )
}
