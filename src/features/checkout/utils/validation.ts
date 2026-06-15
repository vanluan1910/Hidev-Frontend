import type { PaymentForm, ShippingForm } from '../types/checkout'

export type ShippingErrors = Partial<Record<keyof ShippingForm, string>>
export type PaymentErrors = Partial<Record<keyof PaymentForm, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateShipping(form: ShippingForm): ShippingErrors {
  const errors: ShippingErrors = {}
  if (!form.firstName.trim()) errors.firstName = 'Vui lòng nhập họ.'
  if (!form.lastName.trim()) errors.lastName = 'Vui lòng nhập tên.'
  if (!form.email.trim()) {
    errors.email = 'Vui lòng nhập email.'
  } else if (!EMAIL_RE.test(form.email.trim())) {
    errors.email = 'Email không hợp lệ.'
  }
  if (!form.address.trim()) errors.address = 'Vui lòng nhập địa chỉ.'
  if (!form.city.trim()) errors.city = 'Vui lòng nhập thành phố.'
  if (!form.province.trim()) errors.province = 'Vui lòng nhập tỉnh.'
  if (!form.zip.trim()) errors.zip = 'Vui lòng nhập mã bưu điện.'
  return errors
}

export function validatePayment(form: PaymentForm): PaymentErrors {
  const errors: PaymentErrors = {}
  const digits = form.cardNumber.replace(/\s+/g, '')
  if (!digits) {
    errors.cardNumber = 'Vui lòng nhập số thẻ.'
  } else if (!/^\d{13,19}$/.test(digits)) {
    errors.cardNumber = 'Số thẻ phải gồm 13-19 chữ số.'
  }
  if (!form.expiry.trim()) {
    errors.expiry = 'Vui lòng nhập ngày hết hạn.'
  } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(form.expiry.trim())) {
    errors.expiry = 'Định dạng MM/YY.'
  }
  if (!form.cvv.trim()) {
    errors.cvv = 'Vui lòng nhập CVV.'
  } else if (!/^\d{3,4}$/.test(form.cvv.trim())) {
    errors.cvv = 'CVV gồm 3-4 chữ số.'
  }
  return errors
}
