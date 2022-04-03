export type Transaction = {
  id: number;
  title: string;
  value: number;
  type: 'deposit' | 'withdraw',
  category: string;
  createdAt: Date;
}