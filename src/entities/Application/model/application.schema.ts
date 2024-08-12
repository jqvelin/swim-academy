import { z } from "zod";

export const ApplicationDtoSchema = z.object({
    id: z.string(),
    name: z.string(),
    surname: z.string(),
    phone: z.coerce.number(),
    preferred_date: z.string(),
    preferred_time: z.string(),
    isResolved: z.boolean()
});

export const ApplicationFormSchema = z.object({
    name: z.string().min(1, "Поле обязательно!"),
    surname: z.string().min(1, "Поле обязательно!"),
    phone: z
        .number()
        .min(11, "Номер должен содержать 11 символов!")
        .max(11, "Номер должен содержать 11 символов!"),
    preferred_date: z.date().min(new Date(), "Поле обязаельно"),
    preferred_time: z.string().min(1, "Поле обязательно")
});

export type ApplicationFormValues = z.infer<typeof ApplicationFormSchema>;
