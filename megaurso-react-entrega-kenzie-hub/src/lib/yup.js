import * as yup from "yup";

const lowerCaseRegex = /(?=.*[a-z])/;
const upperCaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;
const caracterSpecialRegex = /\W|_/;

export const formSchemaRegister = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email Obrigatório").email("Email invalido"),
    password: yup
        .string()
        .matches(lowerCaseRegex, "Uma letra minúscula exigida")
        .matches(caracterSpecialRegex, "Um caracter especial exigido")
        .matches(upperCaseRegex, "Uma letra maiúscula exigida")
        .matches(numericRegex, "Um numero exigido")
        .min(8, "Minimo de 8 caracteres na sua senha")
        .required("Senha Obrigatória"),

    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Senha tem que ser a mesma")
        .required("Confirmar senha"),

    bio: yup.string().required("Bio obrigatória"),

    contact: yup.string().required("Forma para contato obrigatória"),

    course_module: yup.string(),

});

export const formSchemaLogin = yup.object().shape({
    email: yup.string().required("Email Obrigatório").email(),
    password: yup.string().required("Senha Obrigatória"),
});


export const formSchemaModal = yup.object().shape({
    title: yup.string().required("Você precisa dar um titulo"),
    status: yup.string().required("Selecione seu status")
})