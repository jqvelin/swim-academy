import { z } from "zod";

export const ApplicationDtoSchema = z.object({
    id: z.coerce.number(),
    name: z.string(),
    surname: z.string(),
    phone: z.coerce.number(),
    preferred_date: z.string(),
    preferred_time: z.string(),
    isResolved: z.boolean()
});
