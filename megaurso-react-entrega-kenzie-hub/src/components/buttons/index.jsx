export function Buttons({children,onClick,type}){
    return (
        <button type={type} onClick={onClick}>{children}</button>
    )
}