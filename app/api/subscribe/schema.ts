import { z } from 'zod';

export const subscribeSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  source: z.string().optional().default('agipo-landing'),
  context: z.string().optional(),
});

export type SubscribeFormData = z.infer<typeof subscribeSchema>;
