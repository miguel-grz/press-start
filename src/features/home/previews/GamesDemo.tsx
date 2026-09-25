/** An original, abstract platformer beat: a block hops a gap and knocks a coin loose. */
export function GamesDemo() {
  return (
    <div aria-hidden="true" className="relative mx-auto h-40 w-[15rem]">
      <span className="demo-coin absolute top-[38%] left-[46%] size-4 rounded-full bg-btn-yellow shadow-[inset_0_-2px_0_rgb(0_0_0/0.15)]" />
      <span className="demo-hop absolute bottom-10 left-6 size-9 rounded-lg bg-btn-red shadow-[inset_0_-4px_0_rgb(0_0_0/0.18)]" />
      <span className="absolute bottom-6 left-0 h-4 w-[40%] rounded-md bg-btn-green" />
      <span className="absolute right-0 bottom-6 h-4 w-[40%] rounded-md bg-btn-green" />
      <span className="absolute bottom-0 left-0 h-6 w-[40%] rounded-md bg-btn-green/60" />
      <span className="absolute right-0 bottom-0 h-6 w-[40%] rounded-md bg-btn-green/60" />
    </div>
  )
}
