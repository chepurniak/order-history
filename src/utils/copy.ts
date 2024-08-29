/**
 * copy a string for user
 */
export const copy = async (itemToCopy: string): Promise<void> => await navigator.clipboard.writeText(itemToCopy);
