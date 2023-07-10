import {FormikErrors, FormikHelpers, FormikProps, useFormik} from "formik"

const Form = () => {
    const formik = useFormik({
        children: undefined,
        component: undefined,
        initialErrors: undefined,
        initialTouched: undefined,
        innerRef: undefined,
        isInitialValid: undefined,
        onReset<Values>(values: Values, formikHelpers: FormikHelpers<Values>): void {
        },
        onSubmit<Values>(values: Values, formikHelpers: FormikHelpers<Values>): void | Promise<any> {
            return undefined;
        },
        render<Values>(props: FormikProps<Values>): React.ReactNode {
            return undefined;
        },
        validate<Values>(values: Values): void | object | Promise<FormikErrors<Values>> {
            return undefined;
        },
        initialValues: {
            line: "",
        }
    })
}