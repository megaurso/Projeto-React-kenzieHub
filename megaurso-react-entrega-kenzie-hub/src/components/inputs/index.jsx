export function Inputs({placeholder,type,id,register}){
    return (
        <input id={id} type={type} placeholder={placeholder} {...register}/>
    )
}