export function Inputs({ placeholder, type, id, register, value, readOnly }) {
  return (
    <input
      readOnly={readOnly}
      value={value}
      id={id}
      type={type}
      placeholder={placeholder}
      {...register}
    />
  );
}
