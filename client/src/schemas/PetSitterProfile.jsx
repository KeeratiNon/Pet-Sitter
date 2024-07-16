import * as Yup from "yup";

const phoneRegex = new RegExp("^[0-9]+$");

const postCodeRegex = new RegExp("^[0-9]+$");

export const PetSitterProfileSchema = Yup.object({
    first_name: Yup.string().required("Please enter your firstname"),
    last_name: Yup.string().required("Please enter your lastname"),
    experience: Yup.string().required("Please enter your experience"),
    phone_number: Yup.string().matches(phoneRegex, "Please enter valid phone number").required("Please enter your phone number"),
    email: Yup.string().email("Please enter valid email").required("Please enter your email"),
    petsitter_name: Yup.string().required("Please enter your pet sitter name"),
    address_detail: Yup.string().required("Please enter address detail"),
    district: Yup.string().required("Please enter district"),
    sub_district: Yup.string().required("Please enter subdistrict"),
    province: Yup.string().required("Please enter province"),
    post_code: Yup.string().matches(postCodeRegex, "Please enter valid post code").required("Please enter postal code")
});