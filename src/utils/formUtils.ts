type Errors = { [key: string]: string[] };
type TransformedErrors = { [key: string]: string };

export function transformErrors(errors: Errors) {
    return Object.entries(errors).reduce((acc: TransformedErrors, [key, value]) => {
        acc[key] = `${key} ${value[0]}`;
        return acc;
    }, {});
}