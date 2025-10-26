export const TRANSFER_RECIPE = {
  display: {
    title: 'Transfer Money',
    buttonText: 'Send',
  },
  fields: [
    { label: 'To', model: 'to', type: 'text', placeholder: 'Recipient username' },
    { label: 'Amount', model: 'amount', type: 'number', placeholder: 'Amount in ₱' },
  ],
};
