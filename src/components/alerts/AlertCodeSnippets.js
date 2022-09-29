export const alertDefault = `
<div class="flex items-center gap-2 text-sm bg-primary-surface border border-primary-border text-primary-main py-2 pl-3 pr-4 rounded-lg w-full sm:w-96">
    <InformationCircleIcon class="w-5 h-5 stroke-2" />
    <span class="flex-grow">This is Information Alert!</span>
    <XMarkIcon class="w-5 h-5 stroke-2" />
</div>
<div class="flex items-center gap-2 text-sm bg-secondary-surface border border-secondary-border text-secondary-pressed py-2 pl-3 pr-4 rounded-lg w-full sm:w-96">
    <ExclamationCircleIcon class="w-5 h-5 stroke-2" />
    <span class="flex-grow">This is Warning Alert!</span>
    <XMarkIcon class="w-5 h-5 stroke-2" />
</div>
<div class="flex items-center gap-2 text-sm bg-success-surface border border-success-border text-success-main py-2 pl-3 pr-4 rounded-lg w-full sm:w-96">
    <CheckCircleIcon class="w-5 h-5 stroke-2" />
    <span class="flex-grow">This is Success Alert!</span>
    <XMarkIcon class="w-5 h-5 stroke-2" />
</div>
<div class="flex items-center gap-2 text-sm bg-error-surface border border-error-border text-error-main py-2 pl-3 pr-4 rounded-lg w-full sm:w-96">
    <XCircleIcon class="w-5 h-5 stroke-2" />
    <span class="flex-grow">This is Error Alert!</span>
    <XMarkIcon class="w-5 h-5 stroke-2" />
</div>`;

export const alertWithDescription = `
<div class="flex items-center gap-4 text-sm bg-primary-surface border border-primary-border text-primary-main py-2 pl-3 pr-4 rounded-lg w-full sm:w-96 before:bg-primary-main before:w-2 before:h-2 before:rounded-full before:flex-none">
    <div class="flex flex-col gap-1 flex-grow">
        <span class="font-medium">This is Information Alert!</span>
        <span>
            Lorem, ipsum dolor sit amet consectetur adipisi elit. Odio, omnis?
        </span>
    </div>
    <XMarkIcon class="w-5 h-5 stroke-2 flex-none" />
</div>
<div class="flex items-center gap-4 text-sm bg-secondary-surface border border-secondary-border text-secondary-pressed py-2 pl-3 pr-4 rounded-lg w-full sm:w-96 before:bg-secondary-pressed before:w-2 before:h-2 before:rounded-full before:flex-none">
    <div class="flex flex-col gap-1 flex-grow">
        <span class="font-medium">This is Warning Alert!</span>
        <span>
            Lorem, ipsum dolor sit amet consectetur adipisi elit. Odio, omnis?
        </span>
    </div>
    <XMarkIcon class="w-5 h-5 stroke-2 flex-none" />
</div>
<div class="flex items-center gap-4 text-sm bg-success-surface border border-success-border text-success-main py-2 pl-3 pr-4 rounded-lg w-full sm:w-96 before:bg-success-main before:w-2 before:h-2 before:rounded-full before:flex-none">
    <div class="flex flex-col gap-1 flex-grow">
        <span class="font-medium">This is Success Alert!</span>
        <span>
            Lorem, ipsum dolor sit amet consectetur adipisi elit. Odio, omnis?
        </span>
    </div>
    <XMarkIcon class="w-5 h-5 stroke-2 flex-none" />
</div>
<div class="flex items-center gap-4 text-sm bg-error-surface border border-error-border text-error-main py-2 pl-3 pr-4 rounded-lg w-full sm:w-96 before:bg-error-main before:w-2 before:h-2 before:rounded-full before:flex-none">
    <div class="flex flex-col gap-1 flex-grow">
        <span class="font-medium">This is Information Alert!</span>
        <span>
            Lorem, ipsum dolor sit amet consectetur adipisi elit. Odio, omnis?
        </span>
    </div>
    <XMarkIcon class="w-5 h-5 stroke-2 flex-none" />
</div>`;
