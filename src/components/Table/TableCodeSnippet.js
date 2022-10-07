export const basicTable = `
<table class="w-max sm:w-full table-auto text-sm">
    <thead class="h-12 bg-primary-surface text-primary-main text-left">
        <tr>
        <th class="px-4 rounded-tl">Label</th>
        <th class="px-4">Label</th>
        <th class="px-4 rounded-tr text-center">Label</th>
        </tr>
    </thead>
    <tbody>
        <tr class="h-10 bg-white border-b border-neutral-200">
            <td class="px-4 text-neutral-900">Data</td>
            <td class="px-4 text-neutral-900" align="center">
                Data
            </td>
        </tr>        
        <tr class="h-10 bg-white">
            <td class="px-4 text-neutral-900 rounded-bl">Data</td>
            <td class="px-4 rounded-br" align="center">
                Data
            </td>
        </tr>
    </tbody>
</table>
`;

export const scrollingTable = `
<div class="w-[calc(100vw_-_90vw)] min-w-full overflow-x-auto rounded">
    <table class="w-max sm:w-full table-auto text-sm">
        <thead class="h-12 bg-primary-surface text-primary-main text-left">
            <tr>
            <th class="px-4 rounded-tl">Label</th>
            <th class="px-4">Label</th>
            <th class="px-4 rounded-tr text-center">Label</th>
            </tr>
        </thead>
        <tbody>
            <tr class="h-10 bg-white border-b border-neutral-200">
                <td class="px-4 text-neutral-900">Data</td>
                <td class="px-4 text-neutral-900" align="center">
                    Data
                </td>
            </tr>        
            <tr class="h-10 bg-white">
                <td class="px-4 text-neutral-900 rounded-bl">Data</td>
                <td class="px-4 rounded-br" align="center">
                    Data
                </td>
            </tr>
        </tbody>
    </table>
</div>
`;