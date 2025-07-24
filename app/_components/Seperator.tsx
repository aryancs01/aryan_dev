export default function Separator() {
  return (
    <div className="h-6 border-y border-gray-300 relative my-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, #fff 0 1px, transparent 1px 10px)',
          opacity: 0.8,
        }}
      ></div>
    </div>
  );
}
