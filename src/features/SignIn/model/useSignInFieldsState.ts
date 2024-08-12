import { useState } from "react";

export const useFormFieldsState = (fields: { [key: string]: boolean }) => {
    const [focusedFields, setFocusedFields] = useState(fields);
    const handleBlurAndFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        const isFieldFocused = document.activeElement === e.target;
        const isFieldEmpty = e.target.value === "";
        if (isFieldFocused) {
            setFocusedFields({
                ...focusedFields,
                [e.target.name]: true
            });
        } else if (isFieldEmpty) {
            setFocusedFields({
                ...focusedFields,
                [e.target.name]: false
            });
        }
    };

    return { focusedFields, handleBlurAndFocus };
};
