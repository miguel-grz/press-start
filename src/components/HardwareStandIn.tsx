/**
 * Phase 1 stand-in for a console render: a block in the console's colorway on a display plinth.
 * Reads --cw-body / --cw-trim / --cw-accent from the nearest colorway scope.
 */
export function HardwareStandIn() {
  return (
    <div aria-hidden="true" className="relative flex w-[62%] flex-col items-center">
      <div className="relative aspect-[3/1] w-full rounded-[3px] bg-(--cw-body) shadow-[0_18px_24px_-12px_rgb(0_0_0/0.7)]">
        <div className="absolute inset-x-[6%] top-[22%] h-[14%] rounded-[1px] bg-(--cw-trim)" />
        <div className="absolute right-[9%] bottom-[22%] size-[9%] rounded-full bg-(--cw-accent) shadow-[0_0_10px_var(--cw-accent)]" />
      </div>
      <div className="mt-[6%] h-2 w-[82%] rounded-[50%] bg-black/45 blur-[3px]" />
    </div>
  )
}
