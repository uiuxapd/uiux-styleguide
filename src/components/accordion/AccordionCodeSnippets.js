export const defaultAccordion = `
<div class="border-box overflow-hidden rounded-lg border border-primary-border bg-white shadow">
    <div class="divide-y divide-primary-border">
      <button class="flex w-full bg-white px-4 py-3 text-primary-main hover:bg-primary-surface focus:outline-none">
        <span class="flex flex-grow text-left">Why can’t I sign in?</span>
        <ChevronDownIcon class="h-5 w-5 stroke-2" />
      </button>
      <div class="relative before:absolute before:top-0 before:bottom-0 before:left-0 before:w-1 before:bg-primary-main">
        <button class="flex w-full bg-primary-surface px-4 py-3 text-primary-main hover:bg-primary-surface focus:outline-none">
          <span class="flex flex-grow text-left">Where can I find out about funding?</span>
          <ChevronDownIcon class="h-5 w-5 rotate-180 transform stroke-2" />
        </button>
        <div class="flex flex-wrap bg-primary-surface px-4 pb-4 text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nihil reiciendis eius consequuntur! Tenetur, iusto. Iure adipisci et ad exercitationem, vitae dicta, expedita temporibus id rem iste, esse eaque blanditiis?</div>
      </div>
      <button class="flex w-full bg-white px-4 py-3 text-primary-main hover:bg-primary-surface focus:outline-none">
        <span class="flex flex-grow text-left">How can I make a change to my application?</span>
        <ChevronDownIcon class="h-5 w-5 stroke-2" />
      </button>
    </div>
  </div>`;

export const borderedAccordion = `
<div class="flex flex-col gap-2 overflow-hidden">
    <button class="box-border flex w-full rounded-lg border border-primary-border bg-white px-4 py-3 text-neutral-600 hover:bg-primary-surface focus:outline-none">
      <span class="flex flex-grow text-left">Why can’t I sign in?</span>
      <ChevronDownIcon class="h-5 w-5 stroke-2" />
    </button>
    <div class="box-border overflow-hidden rounded-lg border border-primary-border shadow">
      <button class="flex w-full border-b border-primary-border px-4 py-3 text-primary-main hover:bg-primary-surface focus:outline-none">
        <span class="flex flex-grow text-left">Where can I find out about funding?</span>
        <ChevronDownIcon class="h-5 w-5 rotate-180 transform stroke-2" />
      </button>
      <div class="flex flex-wrap px-4 py-3 text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nihil reiciendis eius consequuntur! Tenetur, iusto. Iure adipisci et ad exercitationem, vitae dicta, expedita temporibus id rem iste, esse eaque blanditiis?</div>
    </div>
    <button class="box-border flex w-full overflow-hidden rounded-lg border border-primary-border bg-white px-4 py-3 hover:bg-primary-surface focus:outline-none">
      <span class="flex flex-grow text-left">How can I make a change to my application?</span>
      <ChevronDownIcon class="h-5 w-5 stroke-2" />
    </button>
  </div>`;
