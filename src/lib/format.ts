export function formatPrice(value: number, currency: string = 'SAR') {
  try {
    return new Intl.NumberFormat('ar-SA', { style: 'currency', currency }).format(value).replace(' ', ' ');
  } catch {
    return `${value} ريال`;
  }
}
