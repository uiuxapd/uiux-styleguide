export const defaultBadges = `
<span class="box-border rounded-lg border border-primary-border bg-primary-surface px-2 py-0.5 text-xs font-medium text-primary-main">Default</span>
<span class="box-border rounded-lg border border-secondary-border bg-secondary-surface px-2 py-0.5 text-xs font-medium text-secondary-pressed">Warning</span>
<span class="box-border rounded-lg border border-error-border bg-error-surface px-2 py-0.5 text-xs font-medium text-error-main">Error</span>
<span class="box-border rounded-lg border border-success-border bg-success-surface px-2 py-0.5 text-xs font-medium text-success-hover">Success</span>
<span class="box-border rounded-lg border border-neutral-300 bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600">Dark</span>
<span class="box-border rounded-lg border border-transparent bg-primary-main px-2 py-0.5 text-xs font-medium text-white">Default</span>
<span class="box-border rounded-lg border border-transparent bg-secondary-pressed px-2 py-0.5 text-xs font-medium text-white">Warning</span>
<span class="box-border rounded-lg border border-transparent bg-error-main px-2 py-0.5 text-xs font-medium text-white">Error</span>
<span class="box-border rounded-lg border border-transparent bg-success-main px-2 py-0.5 text-xs font-medium text-white">Success</span>
<span class="box-border rounded-lg border border-transparent bg-neutral-700 px-2 py-0.5 text-xs font-medium text-white">Dark</span>`;

export const badgesWithIcon = `
<span class="flex gap-1 items-center box-border rounded-lg border border-primary-border bg-primary-surface px-2 py-0.5 text-xs font-medium text-primary-main">
    <ClockIcon class="w-4 h-4 stroke-2" />
    3 weeks ago
</span>
<span class="flex gap-1 items-center box-border rounded-lg border border-transparent bg-primary-main px-2 py-0.5 text-xs font-medium text-white">
    <ClockIcon class="w-4 h-4 stroke-2" />
    3 weeks ago
</span>
`;

export const dismissableBadges = `
<span class="box-border rounded-lg border border-primary-border bg-primary-surface px-2 py-0.5 text-xs font-medium text-primary-main">
    Default
    <button class="hover:bg-primary-border">
        <XMarkIcon class="w-4 h-4 stroke-2" />
    </button>
</span>
<span class="box-border rounded-lg border border-secondary-border bg-secondary-surface px-2 py-0.5 text-xs font-medium text-secondary-pressed">
    Warning
    <button class="hover:bg-secondary-border">
        <XMarkIcon class="w-4 h-4 stroke-2" />
    </button>
</span>
<span class="box-border rounded-lg border border-error-border bg-error-surface px-2 py-0.5 text-xs font-medium text-error-main">
    Error
    <button class="hover:bg-error-border">
        <XMarkIcon class="w-4 h-4 stroke-2" />
    </button>
</span>
<span class="box-border rounded-lg border border-success-border bg-success-surface px-2 py-0.5 text-xs font-medium text-success-hover">
    Success
    <button class="hover:bg-success-border">
        <XMarkIcon class="w-4 h-4 stroke-2" />
    </button>
</span>
<span class="box-border rounded-lg border border-neutral-300 bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600">
    Dark
    <button class="hover:bg-neutral-300">
        <XMarkIcon class="w-4 h-4 stroke-2" />
    </button>
</span>
<span class="box-border rounded-lg border border-transparent bg-primary-main px-2 py-0.5 text-xs font-medium text-white">
    Default
    <button class="hover:bg-primary-hover">
        <XMarkIcon class="w-4 h-4 stroke-2" />
    </button>
</span>
<span class="box-border rounded-lg border border-transparent bg-secondary-pressed px-2 py-0.5 text-xs font-medium text-white">
    Warning
    <button class="hover:bg-secondary-hover">
        <XMarkIcon class="w-4 h-4 stroke-2" />
    </button>
</span>
<span class="box-border rounded-lg border border-transparent bg-error-main px-2 py-0.5 text-xs font-medium text-white">
    Error
    <button class="hover:bg-error-hover">
        <XMarkIcon class="w-4 h-4 stroke-2" />
    </button>
</span>
<span class="box-border rounded-lg border border-transparent bg-success-main px-2 py-0.5 text-xs font-medium text-white">
    Success
    <button class="hover:bg-success-hover">
        <XMarkIcon class="w-4 h-4 stroke-2" />
    </button>
</span>
<span class="box-border rounded-lg border border-transparent bg-neutral-700 px-2 py-0.5 text-xs font-medium text-white">
    Dark
    <button class="hover:bg-neutral-800">
        <XMarkIcon class="w-4 h-4 stroke-2" />
    </button>
</span>
`;

export const notificationBadges = `
<button class="bg-primary-main text-white text-base rounded-lg shadow transition-all border-none hover:bg-primary-hover focus:ring-4 focus:ring-primary-focused focus:shadow-none focus:outline-none p-2.5 inline-flex relative">
    <EnvelopeIcon class="w-6 h-6 stroke-2" />
    <div class="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-white text-xs bg-error-main rounded-full border-2 border-white dark:border-neutral-900">50</div>
</button>
<button class="bg-primary-main text-white text-base rounded-full shadow transition-all border-none hover:bg-primary-hover focus:ring-4 focus:ring-primary-focused focus:shadow-none focus:outline-none p-2.5 inline-flex relative">
    <EnvelopeIcon class="w-6 h-6 stroke-2" />
    <div class="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-white text-xs bg-error-main rounded-full border-2 border-white dark:border-neutral-900">50</div>
</button>
`;
