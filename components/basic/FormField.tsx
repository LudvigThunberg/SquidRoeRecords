import { useFormContext } from "react-hook-form";
import { Paragraph } from "../styledComponents/Paragraph";
import { StyledInput } from "../styledComponents/StyledInput";
interface FormFieldProps {
  labelText?: string;
  inputType: string;
  id: string;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  required: boolean;
  message: string;
}

export const FormField = ({
  labelText,
  inputType,
  id,
  minLength,
  maxLength,
  pattern,
  required,
  message,
}: FormFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <StyledInput
        type={inputType}
        placeholder={labelText}
        {...register(id, {
          minLength: minLength,
          maxLength: maxLength,
          pattern: pattern,
          required: required,
        })}
      />
      {errors[id] && (
        <Paragraph
          css={{ color: "red", background: "transparent", fontSize: "0.8rem" }}
        >
          {message}
        </Paragraph>
      )}
    </>
  );
};
