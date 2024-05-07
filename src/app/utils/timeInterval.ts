/* eslint-disable no-plusplus */
/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
export function processTimeInterval(interval: string): string {
    const [startStr, endStr] = interval.split(' - ');

    const startDate = new Date(Date.parse(startStr));
    const endDate = endStr === 'Present' ? new Date() : new Date(Date.parse(endStr));

    const diffInMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
    const years = Math.floor(diffInMonths / 12);
    const months = diffInMonths % 12;

    let result = '';

    if (years > 0) {
        result += years === 1 ? '1 year' : `${years} years`;
        if (months > 0) {
            result += months === 1 ? ' and 1 month' : ` and ${months} months`;
        }
    } else {
        result = months === 1 ? '1 month' : `${months} months`;
    }

    return result;
}
