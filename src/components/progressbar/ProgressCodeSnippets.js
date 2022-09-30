export const defaultProgressBar = `
<div class="h-3 w-full overflow-hidden rounded-full bg-primary-border shadow-inner">
  <div class="h-full w-1/5 rounded-full bg-primary-main"></div>
</div>`;

export const progressWithText = `
<div class="flex flex-col gap-2">
  <div class="flex justify-between font-medium text-primary-main">
    <span>Uploading...</span>
    <span>20%</span>
  </div>
  <div class="h-3 w-full overflow-hidden rounded-full bg-primary-border shadow-inner">
    <div class="h-full w-1/5 rounded-full bg-primary-main"></div>
  </div>
</div>
`;
