import React from "react";

export const DefaultBadges = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        <span class="box-border rounded-lg border border-primary-border bg-primary-surface px-2 py-0.5 text-xs font-medium text-primary-main">
          Default
        </span>
        <span class="box-border rounded-lg border border-secondary-border bg-secondary-surface px-2 py-0.5 text-xs font-medium text-secondary-pressed">
          Warning
        </span>
        <span class="box-border rounded-lg border border-error-border bg-error-surface px-2 py-0.5 text-xs font-medium text-error-main">
          Error
        </span>
        <span class="box-border rounded-lg border border-success-border bg-success-surface px-2 py-0.5 text-xs font-medium text-success-hover">
          Success
        </span>
        <span class="box-border rounded-lg border border-neutral-300 bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600">
          Dark
        </span>
      </div>
    </>
  );
};
