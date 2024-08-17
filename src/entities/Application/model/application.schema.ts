import axios from "axios";
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
    name: z.string().min(1, "Поле обязательно!").trim(),
    surname: z.string().min(1, "Поле обязательно!").trim(),
    phone: z
        .number({
            errorMap: (issue, { defaultError }) => ({
                message:
                    issue.code === "invalid_type"
                        ? "Некорректный формат"
                        : defaultError
            })
        })
        .min(1, "Поле обязательно")
        .refine(
            async (data) => {
                const isStartingWithEight = data.toString().startsWith("8");
                const isLengthCorrect = data.toString().length === 11;

                return isLengthCorrect && isStartingWithEight;
            },
            { message: "Некорректный формат" }
        )
        .refine(
            async (data) => {
                const isOccupied = await axios
                    .get(`http://localhost:8000/applications?phone=${data}`)
                    .then((res) => res.data.length > 0);

                return !isOccupied;
            },
            { message: "Номер телефона занят" }
        ),
    preferred_date: z
        .date({
            errorMap: (issue, { defaultError }) => ({
                message:
                    issue.code === "invalid_date"
                        ? "Некорректный формат"
                        : defaultError
            })
        }),
    preferred_time: z.string().min(1, "Поле обязательно")
});

export type ApplicationFormValues = z.infer<typeof ApplicationFormSchema>;
