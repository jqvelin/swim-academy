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
    phone: z.number({errorMap: (issue, {defaultError}) => ({message: issue.code === "invalid_type" ? "Некорректный формат" : defaultError})}).min(1, "Поле обязательно").refine(data => { 
        const isStartingWithEight = data.toString().startsWith("8");
        const isLengthCorrect = data.toString().length === 11

        return isLengthCorrect && isStartingWithEight
    }, {message: "Некорректный формат"}),
    preferred_date: z.date({errorMap: (issue, {defaultError}) => ({message: issue.code === "invalid_date" ? "Некорректный формат" : defaultError})}).min(new Date(), "Поле обязаельно"),
    preferred_time: z.string().min(1, "Поле обязательно")
});

export type ApplicationFormValues = z.infer<typeof ApplicationFormSchema>;
